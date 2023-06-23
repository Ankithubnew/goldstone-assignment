const express = require("express");
const router = express.Router();
const User = require("../Model/userSchema");

router.get("/getusercsv", async (req, res) => {
    //download csv file for all users
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
    }
    }
);
module.exports = router;