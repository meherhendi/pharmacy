const router = require("express").Router();
let PharmacyCred = require("../models/pharmacyCred.model");
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
	PharmacyCred.findOne({
        username: req.query.username,
        password: req.query.password
    }).then(Cred=>{
		if(Cred == null){
            res.status(401).json("Unauthorized")
            return;
        }
        else{
            res.json(jwt.sign(Cred, "secret"));
        }
	})
});
module.exports = router;
