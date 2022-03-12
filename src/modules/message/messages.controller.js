const Message = require("./message.model");

const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const message = new Message();
        message.getById(req.params.id).then(result => {
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
        if(id != undefined) res.status(200).send(`Message with ${id} was updated`);
        else res.status(400).send(`Message with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Message with ${id} was deleted`);
        else res.status(400).send(`Message with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`Message with ${id} was patched`)

    }
}

module.exports = MessagesController;