/**
 * @author Juan Martinez
 */
'use strict'

const express = require("express")
const constants = require("../utils/Constants.js")
const routerSignUp = require("../router/routerSignUp.js")

var app = express();
app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({extended: true, limit:'10mb'}))
app.use(routerSignUp)

app.listen(constants.PORT,(() => {console.log(`App Listening on port ${constants.PORT}`)}))

module.exports = {app}