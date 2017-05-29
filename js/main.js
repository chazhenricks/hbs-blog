"use strict";
console.log("Main.js");

let Handlebars = require("hbsfy/runtime"),
    calls = require("./calls.js"),
    blogTemplate = require("../templates/blogs.hbs"),
    portfolioTemplate = require("../templates/portfolio.hbs"),
    navBarTemplate = require("../templates/nav-bar-template.hbs"),
    aboutTemplate = require("../templates/about.hbs");




//Nav Bar button events
$(document).on("click", "#blogs-btn", function(){
    loadBlogs();
});

$(document).on("click", "#about-btn", function(){
    loadAbout();
});

$(document).on("click", "#portfolio-btn", function(){
    loadPortfolio();
});


//Handlebars load functions


    //Handlebars register functions
Handlebars.registerHelper('today', function() {
  var date = new Date();
  var mm = date.getMonth();
  var yyyy = date.getFullYear();
  var dd = date.getDate();
  var day = date.getDay();

  switch(day){
  case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
  }

  switch (mm){
      case 0:
        mm = "January";
        break;
    case 1:
        mm = "Febuary";
        break;
    case 2:
        mm = "March";
        break;
    case 3:
        mm = "April";
        break;
    case 4:
        mm = "May";
        break;
    case 5:
        mm = "June";
        break;
    case 6:
        mm = "July";
        break;
    case 7:
        mm = "August";
        break;
    case 8:
        mm = "September";
        break;
    case 9:
        mm = "October";
        break;
    case 10:
        mm = "November";
        break;
    case 11:
        mm = "December";
        break;
      }

date = day + " " +  mm + " " + dd + ", " + yyyy;
  return date;
});

Handlebars.registerPartial("navBarPartial", navBarTemplate);




var loadPortfolio = function(){
  $("#main-content").html(portfolioTemplate());
};

var loadAbout = function(){
  $("#main-content").html(aboutTemplate());
};

var loadBlogs = function(){
  calls.getBlogs()
    .then(function(blogs){
      console.log("blogs", blogs);
      $("#main-content").html(blogTemplate(blogs));
    });
};




//Initiate load blogs
loadBlogs();











