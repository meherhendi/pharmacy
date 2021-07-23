const router = require("express").Router();
let Pharmacy = require("../models/pharmacy.model");


router.route("/").get((req, res) => {
	let search = {}
	if(req.query.governorat){
		search.adress = req.query.governorat
	}
	Pharmacy.find(search).then(ph=>{
		res.json(ph)
	})
});

router.route("/:id").get((req, res) => {
	Pharmacy.findById(req.params.id).then(ph=>{
		res.json(ph)
	})
});

router.route("/").post((req, res) => {
	const ph = new Pharmacy({
		name: req.body.name,
    	adress: req.body.adress,
    	phone: req.body.phone,
    	Email: req.body.email,
    	Vaccin: req.body.Vaccin
	})
	ph.save().then(()=>res.json("pharmacy saved"))
});

router.route("/").put((req, res)=>{

})
module.exports = router;
