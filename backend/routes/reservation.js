const router = require("express").Router();
let Reservation = require("../models/reservation.model");


router.route("/").get((req, res) => {
	Reservation.find({pharmacyId: req.query.pharmacyId}).then(reser=>{
		res.json(reser)
	})
});

router.route("/").post((req, res) => {
	const reserv = new Reservation({
		patientName: req.body.patientName,
		patientPhone: req.body.patientName,
		patientEmail: req.body.patientName,
		pharmacyId: req.body.patientName,
		chosenVaccin: req.body.patientName,
	})
	reserv.save().then(()=>res.json("pharmacy saved"))
});

module.exports = router;
