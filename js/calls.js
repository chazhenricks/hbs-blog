"use strict";

let firebase = require("./firebaseConfig");


function getBlogs() {
    return new Promise(function (resolve, reject){
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/blogs.json`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
}

function postBlog (newBlog){
    return new Promise(function(resolve, reject){
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/blogs.json`,
            method: "POST",
            data: JSON.stringify(newBlog),
            dataType: "json"
        }).done(function(response){
            resolve(response);
        }).fail(function(response){
            reject(response);
        });

    });
}


module.exports = {
    getBlogs,
    postBlog
};
