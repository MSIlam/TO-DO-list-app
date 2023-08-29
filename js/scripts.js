// jquery
// adding a new item to the list of items:
function newItem() {
  let li = $("<li></li>");
  let inputValue = $("input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  // crossing out an item from the list of items:

  li.on("dblclick", function () {
    li.toggleClass("strike");
  });

  // adding the delete button "X":

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  // Adding class delete:

  function deleteListItem() {
    li.addClass("delete");
  }
  crossOutButton.on("click", deleteListItem);

  // Reordering the items:
  $("#list").sortable();
}
