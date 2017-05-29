"use strict";

let firebase = require("./firebaseConfig");


function getBlogs() {
    console.log("URL IS ", `${firebase.getFBsettings().databaseURL}/.json`);
    return new Promise(function (resolve, reject){
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/.json`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
}


module.exports = {
    getBlogs
};
