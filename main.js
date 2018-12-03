document.getElementById("tabsInputForm").addEventListener("submit", saveGun);

var tabsList;
var selectedNumOfTabs;

var childTab;
var tabLabel;
var tabInput;

var tabNumInt
var prevTabsNum;

var selecTabsArr;

var numOfGuns;

function selectedNumOfGunsFunc(sel){

    numOfGuns = document.getElementById("numOfGuns");
    

}

function selectedNumOfTabsFunc(sel){

    console.log(childTab);
    console.log(tabLabel);
    console.log(tabInput);

    dynamicTabsReset();

    tabsList = document.getElementById("numberOfTabs");
    selectedNumOfTabs = tabsList.options[tabsList.selectedIndex].text;
    console.log("current tabs num " + selectedNumOfTabs);
    tabNumInt = parseInt(selectedNumOfTabs);
    for (var i = 1; i < tabNumInt + 1; i++){
        
        console.log(i);
        
        /* //--guide--//
        <div class="form-group">
        <label for="issueDescInput">Description</label>
        <input type="text" class="form-control" id="issueDescInput" placeholder="Describe the ticket...">
        </div>
        */ //--guide--//

        //tab input div
        childTab = document.createElement("div");
        childTab.setAttribute("id", "tabdiv" + i.toString());
        childTab.setAttribute("class", "form-group");
        document.getElementById("generatedTabs").appendChild(childTab);

        //tab label
        tabLabel = document.createElement("label");
        tabLabel.setAttribute("id", "tablabel" + i.toString());
        tabLabel.setAttribute("for", "tabAddressInput" + i.toString());
        tabLabel.innerHTML = "tab " + i.toString();
        childTab.appendChild(tabLabel);

        //tab input
        tabInput = document.createElement("input");
        tabInput.setAttribute("type", "text");
        tabInput.setAttribute("class", "form-control");
        tabInput.setAttribute("id", "tabAddressInput" + i.toString());
        tabInput.setAttribute("placeholder", "Enter URL " + i.toString());
        childTab.appendChild(tabInput);
    }
    prevTabsNum = tabNumInt;
}

function dynamicTabsReset(){
    if (!(childTab == null) && !(tabLabel == null) && !(tabInput == null)){
        console.log("already ran with tabs num " + prevTabsNum);
        for(var i = 1; i < prevTabsNum + 1; i++){
            removeElement("tabdiv" + i.toString());
        }
    }
}

function saveGun(e){
    console.log("Gun saved");
    var gunId = chance.guid();//gun Id
    var savedGunDesc = document.getElementById("gunDesc").value;
    var gunOwner = document.getElementById("gunOwner").value;

    selecTabsArr = [];//selected tabs
    for(var i = 1; i < tabNumInt + 1; i++){
        selecTabsArr.push(document.getElementById("tabAddressInput" + i.toString()).value);
    }
    console.log(selecTabsArr);

    var gunObj = {
        gunIds: gunId,
        gunOwners: gunOwner,
        gunDescriptions: savedGunDesc,
        gunTabs: selecTabsArr
    }

    //local storage//
    if(localStorage.getItem("guns") == null){
        var gunsArr = [];
        gunsArr.push(gunObj);
        localStorage.setItem("guns",JSON.stringify(gunsArr));
    }else{
        var gunsArr = JSON.parse(localStorage.getItem("guns"));
        gunsArr.push(gunObj);
        localStorage.setItem("guns",JSON.stringify(gunsArr));
    }

    document.getElementById("tabsInputForm").reset();
    dynamicTabsReset();

    fetchGuns();

    e.preventDefault();
}

function removeElement(elementId){
    if (elementId != null){
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }
}

function fetchGuns(){
    //Local Storage//
    //localStorage.clear(); <--For safety
    var guns = JSON.parse(localStorage.getItem("guns"));
    var gunList = document.getElementById("gunList");

    gunList.innerHTML = "";

    for(var i = 0; i < guns.length; i++){
        var id = guns[i].gunIds;
        var owner = guns[i].gunOwners;
        var desc = guns[i].gunDescriptions;
        var tabs = guns[i].gunTabs;

        gunList.innerHTML += '<div class="well">'+
                                '<h6> Gun Id: ' + id + '</h6>'+
                                '<h3>' + desc + '</h6>'+
                                '<p><span class="glyphicon glyphicon-user"></span> ' + owner + '</p>'+
                                '<p><span class="badge badge-secondary">' + tabs.join(" | ") + '</span></p>'+
                                '<button type="button" onClick="fireGun(\''+id+'\')" class="btn btn-danger">Fire</button>'+ " " +
                                '<button type="button" onClick="deleteGun(\''+id+'\')" class="btn btn-light">Delete</button>'+
                            '</div>';   


    }
}

function openWindowSecondMonitor(url, winName, xOffset, yOffset) {
    var x = (window.screenX || window.screenLeft || 0) + (xOffset || 0);
    var y = (window.screenY || window.screenTop || 0) + (yOffset || 0);
    return window.open(url, winName, "toolbar=yes,personalbar=yes,scrollbars=yes,resizable=yes,top="+y+",left="+x+",width=1200,height=1000");
}

function fireGun(id){
    //opening tabs trigger
    var guns = JSON.parse(localStorage.getItem("guns"));
    for(var i = 0; i < guns.length; i++){
        console.log("fired 2 " + guns[i].gunIds + " has " + id);
        if(guns[i].gunIds == id){
            console.log("fired 3");
            guns[i].gunTabs.forEach(function(element){
                console.log("this guns URLs " + element);
                window.open("http://" + element, "_blank");
                openWindowSecondMonitor("http://www.google.com", "Second Gun", 4000, 600);
                //seems to work but need to check new window parameters for google chrome as the current ones
                //do not seem to work
            });
        }
    }
}

function deleteGun(id){
    //opening tabs trigger
    var guns = JSON.parse(localStorage.getItem("guns"));
    for(var i = 0; i < guns.length; i++){
        console.log("fired 2 " + guns[i].gunIds + " has " + id);
        if(guns[i].gunIds == id){
            guns.splice(i, 1);
        }
    }
    localStorage.setItem("guns", JSON.stringify(guns));
    fetchGuns();
}

//Below its just example//
// function fetchTrackers(){
//     //We would use the browser local storage.
//     var trackers = JSON.parse(localStorage.getItem("trackers"));
//     var trackersList = document.getElementById("trackersList");

//     trackersList.innerHTML = "";

//     for (var i = 0; i < trackers.length;i++){
//         var id = trackers[i].id;
//         var desc = trackers[i].description;
//         var severity = trackers[i].severity;
//         var assignedTo = trackers[i].assignedTo;
//         var status = trackers[i].status;

//         trackersList.innerHTML += '<div class="well">'+
//                                     '<h6> Tracker ID: ' + id + '</h6>'+
//                                     '<p><span class="badge badge-secondary">' + status + '</span></p>'+
//                                     '<h3>' + desc + '</h3>'+
//                                     '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
//                                     '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
//                                     '<a href="#" onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+ " " +
//                                     '<a href="#" onClick="deleteTracker(\''+id+'\')" class="btn btn-danger">Delete</a>'+
//                                  '</div>';   
//     }