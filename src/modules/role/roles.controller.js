const Role = require("./role.model");


const RolesController = {
    getAll: (req, res) => {
        const role = new Role();
        role.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const role = new Role();
        role.getById(req.params.id).then(result => {
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
        if(id != undefined) res.status(200).send(`Role with ${id} was updated`);
        else res.status(400).send(`Role with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Role with ${id} was deleted`);
        else res.status(400).send(`Role with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`Role with ${id} was patched`)

    }
}

module.exports = RolesController;