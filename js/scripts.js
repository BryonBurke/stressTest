$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    // $("#work-responses").show();
    var stressTotal = 0;
    var stresses = [];

    $("input:checkbox[name=stressNegative]:checked").each(function(){
      var stressNums = parseInt($(this).val());
      stresses.push(stressNums);
    });
    stresses.forEach(function(stress) {
      stressTotal += stress;
    });
    console.log(stressTotal);
    //
    // console.log(stressTotal);
  });


  // $('#transportation_survey').hide();
});
//   $("#fun-responses").show();
//   $("input:checkbox[name=stressSymptoms]:checked").each(function(){
  //     var stressSym = $(this).val();
  //     $('#fun-responses').append(stressSymptoms + "<br>");
  //   });
  //   $("#fun-responses").show();
  //
  //   $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //     var funTransportationMode = $(this).val();
    //     $('#fun-responses').append(funTransportationMode + "<br>");
    //   });

    // $('#work-responses').append(stressNeg + "<br>")
