var tabsList;
var selectedNumOfTabs;

function selectedNumOfTabsFunc(sel){
    tabsList = document.getElementById("numberOfTabs");
    selectedNumOfTabs = tabsList.options[tabsList.selectedIndex].text;
    console.log(selectedNumOfTabs);
    var tabNumInt = parseInt(selectedNumOfTabs);
    for (var i = 1; i < tabNumInt + 1; i++){
        console.log(i);
        
        /* //--guide--//
        <div class="form-group">
        <label for="issueDescInput">Description</label>
        <input type="text" class="form-control" id="issueDescInput" placeholder="Describe the ticket...">
        </div>
        */ //--guide--//

        //tab input div
        var childTab = document.createElement("div");
        childTab.setAttribute("id", "tabdiv" + i.toString());
        childTab.setAttribute("class", "form-group");
        document.getElementById("generatedTabs").appendChild(childTab);

        //tab label
        var tabLabel = document.createElement("label");
        tabLabel.setAttribute("id", "tablabel" + i.toString());
        tabLabel.setAttribute("for", "tabAddressInput" + i.toString());
        tabLabel.innerHTML = "tab " + i.toString();
        childTab.appendChild(tabLabel);

        //tab input
        var tabInput = document.createElement("input");
        tabInput.setAttribute("type", "text");
        tabInput.setAttribute("class", "form-control");
        tabInput.setAttribute("id", "tabAddressInput" + i.toString());
        tabInput.setAttribute("placeholder", "Enter address " + i.toString());
        childTab.appendChild(tabInput);
        
    }

}