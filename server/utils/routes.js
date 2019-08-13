console.log("inside of routes.js");

const Chars = require("../controllers/chars");

module.exports = function(app) {
    app.get("/", Chars.index);
    app.get("/home", Chars.index);
    app.post("/char", Chars.create);
    app.get("/remove/:_id", Chars.remove);
    app.get("/edit/:_id", Chars.edit);
    app.post("/update/:_id", Chars.update);
}