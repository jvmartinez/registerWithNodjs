/**
 * @author Juan Martinez
 */
'use strict'

const mUser = require("../model/user.js") 
const crtlSignUp = {}

crtlSignUp.signUp = async (request, response) => {
    if (mUser.modelUser.validate(request.body)) {
        let createSignUp = await new mUser.user(mUser.modelUser.structUser(request.body))
        if (createSignUp.save() == null) {
            response.status(501).send({messge: "Error with db", status: "Fail" , data:mUser.modelUser.structUser(new Array())})        
        }
        response.status(200).send({messge: "register success", status: "Success" , data:mUser.modelUser.structUser(request.body)})        
    } else {
        response.status(400).send({messge: "Incomplete data", status: "Fail" , data:mUser.modelUser.structUser(new Array())})
    }
}

crtlSignUp.notFound = (request, response) => {
    response.status(405).send({messge: "not allowed", status: "Fail"})
}

module.exports = crtlSignUp