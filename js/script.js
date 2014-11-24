//Add interactivity
	//Attach Form Items to variables

	var itemInput = document.getElementById("item");
	var addButton = document.getElementById("addBtn");
	var sketchList = document.getElementById("sketchList");

	//Attac div items to variables

	var finalList = document.getElementById("finalList");

	//To create a new sketchList item

	var createSketchListItem = function(itemToBuy) {

		//create a list item to hold the itemToBuy
		var listItem = document.createElement("li");

		//create checkbox
		var checkBox = document.createElement("input");
		//create a display label
		var itemLabel = document.createElement("label");
		//create a textbox for edit
		var editItem = document.createElement("input");
		//create an edit button and a delete buttons
		var editButton = document.createElement("input");
		
		var deleteButton = document.createElement("input");
		


		checkBox.type = "checkbox";
		editItem.type = "text";

		editButton.value = "Edit";
		editButton.className = "edit";
		deleteButton.value = "Remove";
		deleteButton.type = "button";
		deleteButton.className = "delete";
		itemLabel.type = "label";
		
		editButton.type = "button";
		
		
		 

		editItem.value = itemToBuy;

		//append each list Item to listItem
		listItem.appendChild(checkBox);
		listItem.appendChild(itemLabel);
		listItem.appendChild(editItem);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);

		listItem.className = "editMode";
		return listItem;
	}

	//Add a new Item
	var addItem = function() {
		console.log ("Add a new shoppingList item");

		var listItem = createSketchListItem(itemInput.value);

		sketchList.appendChild(listItem);
		bindItemEvents(listItem, addToList);

		itemInput.value = "";
	}

	var editItem = function() {
		console.log ("Edit Item");

		var listItem = this.parentNode;

		var editInput = listItem.querySelector("input[type=text]");
		var label = listItem.querySelector("label");

		var editClass = listItem.classList.contains("editMode");

		//if in editMode
		if(editClass) {
			//make the text box become a label with the textbox value
			label.innerText = editInput.value;
		} else {
			editInput.value = label.innerText;
		}

		listItem.classList.toggle("editMode");
	}

	var deleteItem = function() {
		console.log("delete item...");
		var listItem = this.parentNode;
		var ul = listItem.parentNode;

		ul.removeChild(listItem);
	}

	var addToList = function() {
		console.log("Add to List");

		var listItem = this.parentNode;
		finalList.appendChild(listItem);
		bindItemEvents(listItem, removeFromList);
	}

	var removeFromList = function() {
		console.log("Remove from list");

		var listItem = this.parentNode;
		sketchList.appendChild(listItem);
		bindItemEvents(listItem, addToList);
	}

	var bindItemEvents = function(shopItem, checkBoxState) {
		console.log("Bind Shopping List events");

		var checkBox = shopItem.querySelector("input[type=checkbox]");
		var editButton = shopItem.querySelector("input.edit");
		var deleteButton = shopItem.querySelector("input.delete");


		editButton.onclick = editItem;
		deleteButton.onclick = deleteItem;
		checkBox.onchange = checkBoxState;
	}

	addButton.addEventListener("click", addItem);


for(var i = 0; i < sketchList.children.length; i++) {
  //bind events to list item's children (addToList)
  bindItemEvents(sketchList.children[i], addToList);
}

for(var i = 0; i < finalList.children.length; i++) {
  //bind events to list item's children (removeFromList)
  bindItemEvents(finalList.children[i], removeFromList);
}
