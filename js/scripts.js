$(document).ready(function(){

  $("form").submit(function(evemt){
      $("form").hide();

      var groceries = [];
      for(i=1; i<6; i++){
        groceries.push($("#grocery" + i).val().toUpperCase());
      };
      groceries.sort();
      groceries.forEach(function(grocery){
        $("#groceries ul").append("<li>"+ grocery + "</li>");
      });

      $("#groceries").show();
      event.preventDefault();
  });
});
