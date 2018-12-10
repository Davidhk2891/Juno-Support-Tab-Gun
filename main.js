document.getElementById("tabsInputForm").addEventListener("submit", saveGun);

var tabsList;
var selectedNumOfTabs;

var childTab = "";
var childTab2 = "";
var tabLabel = "";
var tabLabel2 = "";
var tabInput = "";
var tabInput2 = "";

var tabNumInt1, tabNumInt2, tabNumIntFinal1, tabNumIntFinal2;
var prevTabsNum1, prevTabsNum2;

var selecTabsArr, selecTabsArr2;

var gunsList;
var selectedNumOfGuns;
var gunNumInt;
var prevGunNum;
var childGun;
var gunLabel;
var gunSelect;
var gunOption;
var generatedTabs;

function selectedNumOfGunsFunc(sel){
    dynamicGunsReset();
    var one = 1;
    var two = 2;
    prevTabsNum1 = 0;
    prevTabsNum2 = 0;
    gunsList = document.getElementById("numOfGuns");
    selectedNumOfGuns = gunsList.options[gunsList.selectedIndex].text;
    console.log("current guns num " + selectedNumOfGuns);
    gunNumInt = parseInt(selectedNumOfGuns);
    if (gunNumInt == one){
        dynamicGunOps(one, "selectedNumOfTabsFunc("+one.toString()+");");
    }else{
        dynamicGunOps(one, "selectedNumOfTabsFunc("+one.toString()+");");
        dynamicGunOps(two, "selectedNumOfTabsFunc("+two.toString()+");");
    }
    prevGunNum = gunNumInt;
    console.log("prevTab1 " + prevTabsNum1);
    console.log("prevTab2 " + prevTabsNum2);
}

function dynamicGunsReset(){
    if (!(childGun == null) && !(gunLabel == null) && !(gunSelect == null)){
        console.log("already ran with guns num " + prevGunNum);
        for(var i = 1; i < prevGunNum + 1; i++){
            removeElement("gundiv" + i.toString());
        }
    }
}

function selectedNumOfTabsFunc(tabNum){
    if (tabNum == 1){
        console.log("tabNum is " + tabNum.toString());
        tabsList = document.getElementById("numberOfTabs" + tabNum.toString());
        selectedNumOfTabs = tabsList.options[tabsList.selectedIndex].text;
        console.log("current tabs num " + selectedNumOfTabs);
        tabNumInt1 = parseInt(selectedNumOfTabs);

        console.log("tabNum running in  " + tabNum.toString());
        dynamicTabsReset(childTab, tabLabel, tabInput, prevTabsNum1, "One");
        for (var i = 1; i < tabNumInt1 + 1; i++){
            dynamicTabSpawner(childTab, tabLabel, tabInput, i, tabNum, "One", "One");
        }
        console.log("tabNumInt 1 is " + tabNumInt1);
        tabNumIntFinal1 = tabNumInt1;
        console.log("tabNumInt 1.1 is " + tabNumIntFinal1);
        prevTabsNum1 = tabNumIntFinal1;
    }else{
        console.log("tabNum is " + tabNum.toString());
        tabsList = document.getElementById("numberOfTabs" + tabNum.toString());
        selectedNumOfTabs = tabsList.options[tabsList.selectedIndex].text;
        console.log("current tabs num " + selectedNumOfTabs);
        tabNumInt2 = parseInt(selectedNumOfTabs);

        console.log("tabNum running in  " + tabNum.toString());
        dynamicTabsReset(childTab2, tabLabel2, tabInput2, prevTabsNum2, "Two");
        for (var j = 1; j < tabNumInt2 + 1; j++){
            dynamicTabSpawner(childTab2, tabLabel2, tabInput2, j, tabNum, "Two" , "Two");
        }
        console.log("tabNumInt 2 is " + tabNumInt2);
        tabNumIntFinal2 = tabNumInt2;
        console.log("tabNumInt 2.1 is " + tabNumIntFinal2);
        prevTabsNum2 = tabNumIntFinal2;
    }
    console.log("prevTab1 " + prevTabsNum1);
    console.log("prevTab2 " + prevTabsNum2);
}

function dynamicTabSpawner(childTabNum, tabLabelNum, tabInputNum, k, tabNum, addressInputSufix, tabdivSufix){
    //tab input div
    var iterator = k;
    childTabNum = document.createElement("div");
    childTabNum.setAttribute("id", "tabdiv" + tabdivSufix + iterator.toString());
    childTabNum.setAttribute("class", "control-group");
    console.log("x>>>>>" + childTabNum.id);
    document.getElementById("generatedTabs"+tabNum.toString()).appendChild(childTabNum);
    //tab label
    tabLabelNum = document.createElement("label");
    tabLabelNum.setAttribute("id", "tablabel" + iterator.toString());
    tabLabelNum.setAttribute("for", "tabAddressInput" + addressInputSufix + iterator.toString());
    tabLabelNum.innerHTML = "tab " + iterator.toString();
    childTabNum.appendChild(tabLabelNum);
    //tab input
    tabInputNum = document.createElement("input");
    tabInputNum.setAttribute("type", "text");
    tabInputNum.setAttribute("class", "form-control");
    tabInputNum.setAttribute("id", "tabAddressInput" + addressInputSufix + iterator.toString());
    tabInputNum.setAttribute("placeholder", "Enter URL " + iterator.toString());
    childTabNum.appendChild(tabInputNum);
}

function dynamicTabsReset(childTab, tabLabel, tabInput, prevTabsNum, tabdivSufix){
    if (!(childTab == null) && !(tabLabel == null) && !(tabInput == null)){
        console.log("already ran with tabs num " + prevTabsNum);
        for(var i = 1; i < prevTabsNum + 1; i++){
            removeElement("tabdiv" + tabdivSufix + i.toString());
        }
    }
}

function dynamicGunOps(gunNumber, selectFunction){
    //gun input div
    childGun = document.createElement("span");
    childGun.setAttribute("id", "gundiv" + gunNumber.toString());
    childGun.setAttribute("class", "form-group col-xs-6");
    childGun.setAttribute("style", "border: 2px solid grey; border-radius: 5px; padding: 12px; width: 48%; margin: 0px 8px 3px;");
    document.getElementById("gunsRow").appendChild(childGun);

    //gun label
    gunLabel = document.createElement("label");
    gunLabel.setAttribute("id", "gunlabel" + gunNumber.toString());
    gunLabel.setAttribute("for", "numberOfTabs" + gunNumber.toString());
    gunLabel.innerHTML = "Gun " + gunNumber.toString();
    childGun.appendChild(gunLabel);

    console.log("gunNumber is "+gunNumber.toString());
    //gun select
    gunSelect = document.createElement("select");
    gunSelect.setAttribute("class", "form-control");
    gunSelect.setAttribute("id", "numberOfTabs" + gunNumber.toString());
    gunSelect.setAttribute("onchange", selectFunction);
    childGun.appendChild(gunSelect);

    //gun option
    for(var j = 1; j <= 15; j++){
        gunOption = document.createElement("option");
        gunOption.setAttribute("value", j.toString());
        gunOption.innerHTML = j.toString();
        gunSelect.appendChild(gunOption);
    }
   
    //vertical break
    var vertBreak = document.createElement("br");
    childGun.appendChild(vertBreak);
    

    //generated tabs
    generatedTabs = document.createElement("div");
    generatedTabs.setAttribute("id", "generatedTabs" + gunNumber.toString());
    childGun.appendChild(generatedTabs)
}

function saveGun(e){
    console.log("Gun saved");
    var gunId = chance.guid();//gun Id
    var savedGunDesc = document.getElementById("gunDesc").value;
    var gunOwner = document.getElementById("gunOwner").value;
    var numOfGuns = gunNumInt;

    //selected tabs
    selecTabsArr = [];
    selecTabsArr2 = [];
    for(var i = 1; i < tabNumIntFinal1 + 1; i++){
        selecTabsArr.push(document.getElementById("tabAddressInputOne" + i.toString()).value);
    }
    console.log("tabs for gun 1 are " + selecTabsArr);
    if(numOfGuns == 2){
        for(var i = 1; i < tabNumIntFinal2 + 1; i++){
            selecTabsArr2.push(document.getElementById("tabAddressInputTwo" + i.toString()).value);
        }
    }
    console.log("tabs for gun 2 are " + selecTabsArr2);

    var gunObj = {
        gunIds: gunId,
        gunOwners: gunOwner,
        gunDescriptions: savedGunDesc,
        gunTabs: selecTabsArr,
        gunTabs2: selecTabsArr2
    }

    //saving to local storage//
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
    dynamicTabsReset(childTab, tabLabel, tabInput, prevTabsNum1, "One");
    dynamicTabsReset(childTab2, tabLabel2, tabInput2, prevTabsNum2, "Two");

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

    selectedNumOfGunsFunc(this);

    gunList.innerHTML = "";

    for(var i = 0; i < guns.length; i++){
        var id = guns[i].gunIds;
        var owner = guns[i].gunOwners;
        var desc = guns[i].gunDescriptions;
        var tabs = guns[i].gunTabs;
        var secondTabs = guns[i].gunTabs2;

        if (guns[i].gunTabs2.length > 0){
            gunList.innerHTML += '<div class="well">'+
                                    '<span id="spanWrapper" style="display: flex;">'+
                                        '<h6> Gun Id: ' + id + '</h6>'+
                                        '<button type="button" id="del1" style="margin: 0px 0px 0px 20px;" onClick="deleteGun(\''+id+'\')" class="btn btn-light">Delete</button>'+
                                    '</span>'+
                                    '<h3>' + desc + '</h6>'+
                                    '<p><span class="glyphicon glyphicon-user"></span> ' + owner + '</p>'+
                                    '<hr>'+
                                    '<p><b>Gun 1</b></p>'+ 
                                    '<p><span class="badge badge-secondary">' + tabs.join(" | ") + '</span></p>'+
                                    '<button type="button" id="fire1" onClick="fireGun(\''+id+'\')" class="btn btn-danger">Fire</button>'+ " " +
                                    '<hr>'+
                                    '<p><b>Gun 2</b></p>'+
                                    '<p><span class="badge badge-secondary">' + secondTabs.join(" | ") + '</span></p>'+
                                    '<span id="spanWrapper2" style="display: flex;">'+
                                        '<button type="button" id="fire2" onClick="fireGun2(\''+id+'\')" class="btn btn-danger">Fire</button>'+ " " +
                                        '<p id="notDefined" style="margin: 0px 0px 0px 0px;"></p>'+
                                    '</span'
                                '</div>';   
        }else{
            gunList.innerHTML += '<div class="well">'+
                                    '<span id="spanWrapper" style="display: flex;">'+
                                        '<h6> Gun Id: ' + id + '</h6>'+
                                        '<button type="button" id="del1" style="margin: 0px 0px 0px 20px;" onClick="deleteGun(\''+id+'\')" class="btn btn-light">Delete</button>'+
                                    '</span>'+
                                    '<h3>' + desc + '</h6>'+
                                    '<p><span class="glyphicon glyphicon-user"></span> ' + owner + '</p>'+
                                    '<hr>'+
                                    '<p><b>Gun 1</b></p>'+ 
                                    '<p><span class="badge badge-secondary">' + tabs.join(" | ") + '</span></p>'+
                                    '<button type="button" id="fire1" onClick="fireGun(\''+id+'\')" class="btn btn-danger">Fire</button>'+ " " +
                                '</div>';   
        }
    }
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
            });      
        }
    }
}

function fireGun2(id){
    //opening tabs trigger
    var guns = JSON.parse(localStorage.getItem("guns"));
    for(var i = 0; i < guns.length; i++){
        console.log("fired 22 " + guns[i].gunIds + " has " + id);
        if(guns[i].gunIds == id){
            console.log("fired 33");
            guns[i].gunTabs2.forEach(function(element){
                console.log("this guns URLs " + element);
                window.open("http://" + element, "_blank");
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