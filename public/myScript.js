$(document).ready(function(){
  // $("#weight1").hide();
  $("#weight2").hide();
  $("#type").change(function(){
    if ($(this).val() == "Stamped Letter" || $(this).val() == "Metered Letter"){
      $("#weight1").attr("name", "weight");
      $("#weight1").fadeIn("fast");
      
      $("#weight2").removeAttr("name");
      $("#weight2").hide();
    }

    if ($(this).val() == "Large Envelope" || $(this).val() == "Parcel"){
      $("#weight2").attr("name", "weight");
      $("#weight2").fadeIn("fast");
      
      $("#weight1").removeAttr("name");
      $("#weight1").hide();
    }
  });
});