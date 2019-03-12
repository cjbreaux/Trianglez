import './styles.css';

$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());

    if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
      $(".response-wrapper").show();
      $(".not-triangle").show();
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").hide();
    } else if ((a === b) && (b === c)) {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").show();
      $(".isosceles").hide();
      $(".scalene").hide();
    } else if ((a === b) || (b === c) || (a === c)) {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").hide();
      $(".isosceles").show();
      $(".scalene").hide();
    } else {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").show();
    }
  event.preventDefault();
  });

  $("button#reset").click(function(){
    $("input#sideA").val("");
    $("input#sideB").val("");
    $("input#sideC").val("");
  });
});
