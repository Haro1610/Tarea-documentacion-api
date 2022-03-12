const userGroup = require("./userGroup.model");

const UsersGroupsController = {
    getAll: (req, res) => {
        const group = new userGroup();
        group.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const group = new userGroup();
        group.getById(req.params.id).then(result => {
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
        if(id != undefined) res.status(200).send(`User Group with ${id} was updated`);
        else res.status(400).send(`User Group with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`User Group with ${id} was deleted`);
        else res.status(400).send(`User Group with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`User Group with ${id} was patched`)

    }
}

module.exports = UsersGroupsController;