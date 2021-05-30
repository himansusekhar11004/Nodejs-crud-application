Logger =  (req, res, next) => {
    console.log("URL:" + req.url + " payload:" + JSON.stringify(req.body))
    next()
}
module.exports = Logger;