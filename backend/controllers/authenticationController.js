const express = require('express')
const app = express()
const {Client} = require('pg')

console.log("Authentication Controller");

function register(request, response, next){

    response.format({
        "text/html": function(){
            response.status(200).render("../frontend/src/components/Register.jsx");
        }
    })
}