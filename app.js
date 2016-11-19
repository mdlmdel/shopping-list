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

// RENDER FUNCTIONS
var renderList = function(state, element) {
    // Below is the new variable, "itemsHTML"
    var itemsHTML = state.items.map(function(item, index) {
        return '<li data-index="'+ index +'">' + '<span class="shopping-item">' + item + '</span>' + 
        '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + 
        '</button>' + '&nbsp;' + '<button class="shopping-item-delete">' + 
        '<span class="button-label">delete</span>' + '</button>' + '</li>';
    })
    element.html(itemsHTML);
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

// Delete item function
var deleteItem = function (state, item) {
    state.items.splice(item, 1);
    console.log(state);
}

// Check item function
var checkItem = function (state, item) {
    $( ".shopping-item-toggle" ).addClass( "shopping-item-checked" );
    console.log(state);
}

// Get the index number of the item to be deleted
var itemsHTML = state.items.map(function(item, index) {
        return '<li data-index=' + index +'"">' + '<span class="shopping-item">' + item + '</span>' + 
            '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + 
            '</button>' + '&nbsp;' + '<button class="shopping-item-delete">' + 
            '<span class="button-label">delete</span>' + '</button>' + '</li>';
    });

// EVENT LISTENERS
// Add item listener
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val()); // Pass this to the addItem... 
    // ...with the state
    // Clear form after each entry
    $('#shopping-list-entry').val('');
    renderList(state, $('.shopping-list')); 
});

// Delete listener
$(document).on('click', ".shopping-item-delete", function () {
// Get the item, define the item
// The attr of the parent is 'data-index'
    var item = parseInt($(this).parent().attr('data-index'));
// Delete the item you've identified
    deleteItem(state, item);
// Re-render the list now that you've deleted an item
    renderList(state, $('.shopping-list')); 
});

// Shopping item toggle
// Add a class of shopping-item-checked and then render the list
$(document).on('click',".shopping-item-toggle", function () {
// Get the item, define the item
// The attr of the parent is 'data-index'
    var item = parseInt($(this).parent().attr('data-index'));
// Strike through the item you've identified
    checkItem(state, item);
//      $(item, state).addClass("shopping-item-checked");
//      $("#shopping-list-entry").wrap("<strike>");
// Re-render the list now that you've checked an item
    renderList(state, $('.shopping-list')); 
});