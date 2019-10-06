/**
 * @author Juan Martinez
 */
'use strict'
const crtlSignUp = {}
const modelUser = require("../model/user.js") 

crtlSignUp.signUp = (request, response) => {
    if (modelUser.validate(request.body)) {
        response.status(200).send({messge: "register success", status: "Success" , data:modelUser.structUser(request.body)})
    } else {
        response.status(401).send({messge: "Incomplete data", status: "Fail" , data:modelUser.structUser(new Array())})
    }
}

crtlSignUp.notFound = (request, response) => {
    response.status(404).send({messge: "not found", status: "not found"})
}

module.exports = crtlSignUp