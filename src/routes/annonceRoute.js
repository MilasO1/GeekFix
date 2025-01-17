const express = require("express");

const router = express.Router();


const {
  createAd,
  getAllAds,
  getAdDetails,
  removeAd,
} = require("../controllers/adController");


router.post("/", createAd); 
router.get("/", getAllAds); 
router.get("/:id", getAdDetails); 
router.delete("/:id", removeAd); 
module.exports = router;

