$(".add-btn").click(function () {
  var value = $("#todo-input")[0].value;
  if (value.length > 0) {
    var item = '<li class="todo-item">\
    <div class="todo-item-text">' + value + '</div>\
    <i class="far fa-trash-alt todo-item-icon delete"> </i>\
    <i class="far fa-edit todo-item-icon edit"></i>\
  </li>';
    $(".todo-list").append(item);
  }
}); 

$(".delete").click(function () {
  $(this).closest('.todo-item').remove();
});
