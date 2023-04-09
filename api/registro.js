// LIBS
require('module-alias/register')
let joi = require("joi")
let { StatusCodes: SC } = require("http-status-codes")
//let axios = require("axios")
//FILES
let Sentry = require("@sen/sentry")


module.exports = async function handler(req, res) {
    const schema = joi.object({
        email: joi.string().email().required(),
        name: joi.string().required()

    })

    try {
        let validate = await schema.validate(req.query)
        if (!validate.hasOwnProperty('error')) {
            res.json({
                data: validate
            })
        }else{
            res.json({
                data: validate.error
            })
        }
    } catch (err) {
        res.json({
            data: err
        })
    }
}