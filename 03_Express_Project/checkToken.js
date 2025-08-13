let myToken = '12345';

let checkToken = (req, res, next) => {
    console.log("Acessing the middleware");
    if(req.query.token == '' || req.query.token == undefined) {
          res.send({
            status : 0,
            msg : "Please Fill the Token"
        })
    }
    if(req.query.token != myToken){
        return res.send({
            status : 0,
            msg : "Invalid Token"
        })
    }
    next();
}
module.exports = {checkToken};