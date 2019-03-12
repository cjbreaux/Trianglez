import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Triangle} from './triangle.js';



$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());
    var newTriangle = new Triangle(a,b,c);

    if (newTriangle.checkType() === "not a triangle") {
      $(".response-wrapper").show();
      $(".not-triangle").show();
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").hide();
    } else if (newTriangle.checkEquilateral() === "is a equilateral triangle") {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").show();
      $(".isosceles").hide();
      $(".scalene").hide();
    } else if (newTriangle.checkIsosceles() === "is an isosceles triangle") {
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
    $(".not-triangle").hide();
    $(".equilateral").hide();
    $(".isosceles").hide();
      $(".scalene").hide();
  });
});
