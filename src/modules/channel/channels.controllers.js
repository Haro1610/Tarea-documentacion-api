//const Database = require('../../core/Database/database');
const Channel = require("./channel.model");



const ChannelsController = {

    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const channel = new Channel();
        channel.getById(req.params.id).then(result => {
            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        res.status(200).send({});
    },
    update: (req, res) => {
        let id = req.params.id;
        if (id != undefined) res.status(200).send(`Channel Group with ${id} was updated`);
        else res.status(400).send(`Channel Group with ${id} was not found`);

    },
    delete: (req, res) => {
        let id = req.params.id;
        if (id != undefined) res.status(200).send(`Channel Group with ${id} was deleted`);
        else res.status(400).send(`Channel Group with ${id} was not found`);

    },
    patch: (req, res) => {
        let id = req.params.id;
        res.send(`Channel Group with ${id} was patched`)

    }
}

module.exports = ChannelsController;

