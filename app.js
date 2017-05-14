// SINGLE STATE OBJECT
var state = {
  items: []
};

// STATE MODIFICATION FUNCTIONS
// Add item function
var addItem = function(state, item) {
    var newItem = {};
    newItem.name = item;
    newItem.checked = false;
    state.items.push(newItem);
};

// Remove item function
var deleteItem = function(state, item) {
    state.items.splice(item, 1);
}

// Check item function
var checkItem = function(state, item) {
    state.items[item].checked = !state.items[item].checked;
}

// RENDER FUNCTION
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item, index) {
        var html = "";
        html += '<li data-index="' + index +'">'
        if (item.checked) {
            html += '<span class="shopping-item shopping-item-checked">'; 
        } else {
            html += '<span class="shopping-item">'; 
        }
        html += item.name + '</span><button class="shopping-item-toggle ui blue button">' + '<span class="button-label">check</span>' + 
            '</button>' + '&nbsp;' + '<button class="shopping-item-delete ui grey button">' + 
            '<span class="button-label">delete</span>' + '</button>' + '</li>';
        return html;    
    });
    element.html(itemsHTML);
};

// EVENT LISTENERS
// Add item listener
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    $('#shopping-list-entry').val('');
    renderList(state, $('.shopping-list')); 
});

// Delete item listener
$(document).on('click', '.shopping-item-delete', function() { 
    var item = parseInt($(this).parent().attr('data-index'));
    deleteItem(state, item);
    renderList(state, $('.shopping-list')); 
});

// Check item listener
$(document).on('click', '.shopping-item-toggle', function() { 
    var item = parseInt($(this).parent().attr('data-index'));
    checkItem(state, item);
    renderList(state, $('.shopping-list')); 
});