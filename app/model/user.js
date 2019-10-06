/**
 * @author Juan Martinez
 */
'use strict'

var modelUser = {}
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

module.exports = modelUser