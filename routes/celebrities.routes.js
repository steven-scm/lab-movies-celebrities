// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const celebritiesModel = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
});



router.post("/celebrities/create", async (req, res, next) => {
    try {
        await celebritiesModel.create(req.body);
        res.redirect("/celebrities");
    } catch (err) {
        next(err);
    }
});

module.exports = router;