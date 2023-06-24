const express = require("express");
const router = express.Router();
const User = require("../Model/userSchema");

router.put("/users/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        const updatedUser=await User.findOneAndUpdate({id:id}, req.body, {new:true});
        res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err);
    } 
}  
);
module.exports = router;