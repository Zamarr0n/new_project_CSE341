const router = require('express').Router();

router.get("/", (req,res) => {
    res.send("Hello World");
})

router.use("/family", require("./family"));


module.exports = router;

