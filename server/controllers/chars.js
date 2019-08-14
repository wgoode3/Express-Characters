console.log("inside of chars.js");

const mongoose = require("mongoose");
const Char = mongoose.model("Char");

class Chars {
    getAll(req, res) {
        Char.find()
            .then(chars => res.json(chars))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Char.findOne({_id: req.params._id})
            .then(char => res.json(char))
            .catch(err => res.json(err));
    }
    create(req, res){
        let c = new Char(req.body);
        c.save()
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    update(req, res){
        Char.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
        Char.findByIdAndRemove({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new Chars();