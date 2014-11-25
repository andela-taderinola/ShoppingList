var shoppingList = {
  itemInput: document.getElementById("item"),
  addButton: document.getElementById("addBtn"),
  //list items not yet checked in
  initialList: document.getElementById("sketchList"),
  //list items already checked in
  finalList: document.getElementById("finalList"),

   //to check for valid input
   checkInput: function(){
     var input = shoppingList.itemInput.value; 
     
     if(!input.trim()) {
      console.log("Empty string");
      alert("Please supply a valid input.");
      return;
     } 
     
     shoppingList.addListItem();
   }, 

  //method to create an intial list item
  createListItem: function(itemToBuy){
    //create a list (li) element
    var listItem = document.createElement("li");
    //checkbox
    var checkBox = document.createElement("input");
    //display label
    var itemLabel = document.createElement("label");
    //textbox for editting
    var editBox = document.createElement("input");
    //buttons
    var editButton = document.createElement("input");
    var deleteButton = document.createElement("input");

    //edit the types and values of the list items
    checkBox.type = "checkbox";
    editBox.type = "text";
    deleteButton.type = "button";
    editButton.type = "button";
    //values and classNames
    editButton.value = "Change";
    editButton.className = "edit";
    deleteButton.value = "Remove";
    deleteButton.className = "delete";
    itemLabel.innerText = itemToBuy;

    //append each list item to listItem
    listItem.appendChild(checkBox);
    listItem.appendChild(itemLabel);
    listItem.appendChild(editBox);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // listItem.className = "editMode";
    return listItem;
  },

  //to add a new listItem
  addListItem: function() {
    console.log ("Add a new shoppingList item");

    var listItem = shoppingList.createListItem(shoppingList.itemInput.value);

    //append to initialList
    shoppingList.initialList.appendChild(listItem);
    shoppingList.bindItemEvents(listItem, shoppingList.addToList);

    shoppingList.itemInput.value = "";
  },

  //to edit listItem
  editItem: function() {
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
  },

  //to remove a listItem
  deleteItem: function() {
    console.log("delete item...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
  },

  //to add to finalList
  addToList: function() {
    console.log("Add to List");

    var listItem = this.parentNode;
    shoppingList.finalList.appendChild(listItem);
    shoppingList.bindItemEvents(listItem, shoppingList.removeFromList);
  },

  //to remove from finalList
  removeFromList: function() {
    console.log("Remove from list");

    var listItem = this.parentNode;
    shoppingList.initialList.appendChild(listItem);
    shoppingList.bindItemEvents(listItem, shoppingList.addToList);
  },

  //bind listItem items to events
  bindItemEvents: function(shopItem, checkBoxState) {
    console.log("Bind Shopping List events");

    var checkBox = shopItem.querySelector("input[type=checkbox]");
    var editButton = shopItem.querySelector("input.edit");
    var deleteButton = shopItem.querySelector("input.delete");

    editButton.onclick = shoppingList.editItem;
    deleteButton.onclick = shoppingList.deleteItem;
    checkBox.onchange = checkBoxState;
  }
}

for(var i = 0; i < shoppingList.initialList.children.length; i++) {
  //bind events to list item's children (addToList)
  shoppingList.bindItemEvents(shoppingList.initialList.children[i], shoppingList.addToList);
}

for(var i = 0; i < shoppingList.finalList.children.length; i++) {
  //bind events to list item's children (removeFromList)
  shoppingList.bindItemEvents(shoppingList.finalList.children[i], shoppingList.removeFromList);
}

shoppingList.addButton.onclick = shoppingList.checkInput;