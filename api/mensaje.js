// LIBS
require('module-alias/register')
let { StatusCodes: SC } = require("http-status-codes")
//let axios = require("axios")
//FILES
//let mock = require("@mock/mock")
let prueba = require("@ax/axios_remoto")
//let Sentry = require("@sen/sentry")


module.exports = async function handler(req, res) {
    // let{email, name} = req.query;
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method == "GET") {
        try {
            let url = "/users"
            let { data } = await prueba(url)
            Sentry.captureMessage("mensaje de prueba")
            res.status(SC.OK).json({
                data
            });
        } catch (err) {
            Sentry.captureMessage(err)
            res.status(SC.NOT_FOUND).json({
                data: SC.NOT_FOUND
            });
        }

    } else {
        Sentry.captureMessage("mensaje de prueba de que no funciono")
        res.status(SC.METHOD_NOT_ALLOWED).json({
            data: req.method
        });
    }

}
