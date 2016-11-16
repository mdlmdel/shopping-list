// SINGLE STATE OBJECT
var state = {
  items: []
};

// STATE MODIFICATION FUNCTIONS
// Add item function
var addItem = function(state, item) {
    state.items.push(item);
    console.log(state);
};
// Get items
var getItem = function (state, itemIndex) {
    state.itemIndex.return(item);
}
// Remove item function
var deleteItem = function(state, item) {
    state.items.splice(item);
    console.log(state);
}
// Update item function
var updateItem = function (state, item) {
    state.items.update(item);
    console.log(state);
}

// RENDER FUNCTIONS
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + '<span class="shopping-item">' + item + '</span>' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' + '&nbsp;' + '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' + '</li>';
    });
    console.log(itemsHTML);
    console.log(state);
    element.html(itemsHTML);
};

// EVENT LISTENERS
// Add item listener
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list')); 
});
// If item is checked listener
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    if ('.shopping-item__checked'.checkedOff) {
    element.find('.js-shopping-item').addClass('shopping-item__checked');
  }
  // Delete item listener
 /*   else {
    event.preventDefault();
    deleteItem(state, $('shopping-item-toggle').val());
}
    renderList(state, $('.shopping-list')); 
*/    
// Delete item listener
/*$('#js-shopping-list-form').splice(function (event) {
    event.preventDefault();
    deleteItem(state, $('#shopping-list-entry').val());

    })
    renderList(state, $('.shopping-list')); */
});