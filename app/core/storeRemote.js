/**
 * @author Juan Martinez
 */
'use strict'
const mongoose = require("mongoose")
const constants = require('../utils/Constants.js')
const schema = mongoose.Schema

mongoose.set('useFindAndModify', false);

mongoose.connect(constants.mongo, 
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
/**
 * Created schema
 * @param {*} modelSchema 
 */
function createSchema (modelSchema) {
    return new schema(modelSchema)
}
/**
 * Create model in mongoDB
 * @param {String} nameModel 
 * @param {*} modelSchema 
 */
function createdNewSchema(nameModel, modelSchema) {
    return mongoose.model(nameModel, createSchema(modelSchema))    
 }
 
 module.exports = {
    createdNewSchema
}