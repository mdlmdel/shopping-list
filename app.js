// Single state object
var state = {
  items: []
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
    console.log(state);
};
// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    console.log(itemsHTML);
    console.log(state);
    element.html(itemsHTML);
};

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});