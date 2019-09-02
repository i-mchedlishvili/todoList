var editingTask = null;
var input =  $("#todo-input");
var addBtn = $(".add-btn");

addBtn.on('click', function () {
  var value = input[0].value;
  if ($(this).hasClass("btn-edit")) {
    editingTask.siblings('.todo-item-text').text(value);
    $(this).removeClass("btn-edit");
    $(this).text("Add");
  } else {
    if (value.length > 0) {
      var item = '<li class="todo-item">\
      <div class="todo-item-text">' + value + '</div>\
      <i class="far fa-trash-alt todo-item-icon delete"> </i>\
      <i class="far fa-edit todo-item-icon edit"></i>\
    </li>';
      $(".todo-list").append(item);
    }
  }
  input.val("");
});

$(document).on('click', ".delete", function () {
  $(this).closest('.todo-item').remove();
});

$(document).on('click', ".edit", function () {
  editingTask = $(this);
  var oldValue = $(this).siblings('.todo-item-text')[0].innerText;
  input.val(oldValue);
  addBtn.text("Edit")
  addBtn.addClass("btn-edit");
})
