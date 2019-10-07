/**
 * @author Juan Martinez
 */
'use strict'

const mongo =  require("../core/storeRemote.js")
var modelUser = {}

let userSchema = {
    name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,     
        trim: true
    },
    address1: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
}

/**
 * Struct for mongo or mysql
 * @param data value request.body || Array
 */
modelUser.structUser = (data) => {
    let {name, lastName, email, address} = data
    
    let structData = {
        name: name,
        last_name: lastName,
        email: email,
        address1: address
    }
    return structData
}
/**
 * Validate info
 * @param data value request.body || Array()
 */
modelUser.validate = (data) => {
    var status = true
    let {name, lastName, email, address} = data
    if (name == null || name == "") {
        status = false
    } 
    if (lastName == null || lastName == "") {
        status = false
    }
    if (lastName == null || lastName == "") {
        status = false
    }
    if (email == null || email == "") {
        status = false
    }
    if (address == null || address == "") {
        status = false
    }
    return status    
} 

let user = mongo.createdNewSchema('user', userSchema)

module.exports = {modelUser, user}