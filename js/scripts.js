$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $('#stress_survey').hide();
    var stressTotal = 0;
    var stresses = [];

    $("input:checkbox[name=stressNegative]:checked").each(function(){
      var stressNums = parseInt($(this).val());
      stresses.push(stressNums);
    });

    stresses.forEach(function(stress) {
      stressTotal += stress;
    });
    if(stressTotal < 3) {
      $('#rec1').show();
    } else if (stressTotal < 8) {
      $('#rec2').show();
    } else if (stressTotal >= 8) {
      $('#rec3').show();
    } else {
      $('#error').show();
    }
    console.log(stressTotal);


  });
});
