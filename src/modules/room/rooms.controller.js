const RoomsController = {
    getAll: (req, res) => {
        res.send('will get rooms');
    },
    getById: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Room whith id ${id} was found`);
        else res.status(404).send(`Room with ${id} was not found`);

    },
    create: (req, res) => {
        res.status(200).send({});
    },
    update: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Room with ${id} was updated`);
        else res.status(400).send(`Room with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Room with ${id} was deleted`);
        else res.status(400).send(`Room with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`Room with ${id} was patched`)

    }
}

module.exports = RoomsController;