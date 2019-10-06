/**
 * @author Juan Martinez
 */
'use strict'
const router_signUp = require('express-promise-router')()
const controllerSignUp = require("../controller/controllerSignUp.js")

router_signUp.post("/signUp", controllerSignUp.signUp)
router_signUp.get("/signUp", controllerSignUp.notFound)

module.exports = router_signUp