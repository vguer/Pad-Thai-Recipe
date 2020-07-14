$(document).ready(function() {
$("form#ingredients").submit(function(event) {
  event.preventDefault();

const groceries = $("input:checkbox[name='groceries']:checked").val();
    
  
  $('#shoppinglist').append(groceries + "<br>");
  console.log(groceries);
    $("#shoppinglist").show(groceries);

});
});