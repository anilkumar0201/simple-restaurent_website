import { create } from "domain";
import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});
//update
router.put("/:id", async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});
//delete
router.delete("/:id", async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("successfully deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});
//get
router.get("/:id", async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get all
router.get("/", async (req, res,next) => {
    // const failed = true
    // const err=new Error()
    // err.status=404;
    // err.message="Something went wrong!";
    // if(failed) return next(createError(401,"you are not authenticated"));
    try {
        const hotel = await Hotel.findById("rhfuhsib")
        res.status(200).json(hotel);
    } catch (err) {
        next(err)
    }
});
export default router;