const express = require("express");
const router = express.Router();
const User = require("../Model/userSchema");

router.patch("/users:id", async (req, res) => {
    console.log(req.body);
    console.log("called");
    try {
        const id = req.params.id;
        console.log(id);
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err);
    } 
}  
);
module.exports = router;