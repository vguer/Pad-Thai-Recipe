$(document).ready(function() {
$("#ingredients").submit(function(event) {
  event.preventDefault();

  let item=[".peanuts", ".sprouts"];
  let groceries=[];
  groceries.push($("input#peanuts").val());
  groceries.push($("input#sprouts").val());

});
});