const express = require("express");
const router = express.Router();
const User = require("../Model/userSchema");

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
    }
    }
);
router.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user=await User.find({id:id})
        res.status(200).json(user[0]);
    } catch (err) {
        console.log(err);
        res.send('User not found')
    }
    }
);



module.exports = router;