/**
 * @author Juan Martinez
 */
'use strict'

const express = require("express")
const constants = require("../utils/Constants.js")
const routerSignUp = require("../router/routerSignUp.js")
const PORT =  process.env.PORT || 3000;

var app = express();
app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({extended: true, limit:'10mb'}))
app.use(routerSignUp)

app.listen(PORT,(() => {console.log(`App Listening on port ${PORT}`)}))

module.exports = {app}