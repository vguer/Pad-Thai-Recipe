$(document).ready(function() {
$("form#ingredients").submit(function(event) {
  event.preventDefault();

$("input:checkbox[name='groceries']:checked").each(function() {
    let groceries= $(this).text();
  
  $('#shoppinglist').append(groceries + "<br>");
  console.log(groceries);
  $("#shoppinglist").show();
});
});
});