    var itemInput = document.getElementById("item");
	var addButton = document.getElementById("addBtn");
	var sketchList = document.getElementById("sketchList");
	var checkBox = document.getElementById("check");

		var finalList = document.getElementById("shoppingList");


//Add a new Item
	var addItem = function() {
		console.log ("Add a new shoppingList item");

		// var listItem = createSketchListItem(itemInput.value);

		// sketchList.appendChild(listItem);
		// bindItemEvents(listItem, finalList);
		// itemInput.value = "";
	}

	var addToList = function () {
		console.log ("Add to final list");

	    // var checkBox = shopItem.querySelector("input[type=checkbox]");
	    var listItem = document.createElement("li");
	    var label = document.createElement("label");
	    label.innerText = itemInput.value;
	    listItem.appendChild(label);

		finalList.appendChild(listItem);
	}

	checkBox.onchange = addToList;
	addButton.onclick = addItem;