const SessionController = {
    getAll: (req, res) => {
        res.send('will get sessions');
    },
    getById: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Session whith id ${id} was found`);
        else res.status(404).send(`Session with ${id} was not found`);

    },
    create: (req, res) => {
        res.status(200).send({});
    },
    update: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Session with ${id} was updated`);
        else res.status(400).send(`Session ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Session with ${id} was deleted`);
        else res.status(400).send(`Session with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`Session with ${id} was patched`)

    }
}

module.exports = SessionController;