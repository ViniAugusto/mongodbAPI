const ObjectID = require('mongodb').ObjectId;

// Lista usuarios que estão na minha collection 'usuarios'
exports.listar =  (req, res) => {
    let campos = req.query.campos;
    req.db.collection('usuarios').find({}).toArray((err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
        console.log(req.query);
    });
};

// Cria um novo usuario na collection usuarios
 exports.criar = (req, res) => {
    req.db.collection('usuarios').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.sendStatus(201);
        }
    });
};

// Atualiza um dos registros de usuarios utilizando o id como identificador
exports.atualizar = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').updateOne({"_id": ObjectID(id)}, { "$set": req.body }, (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    })
};

// Deleta um usuario da collection especificando o seu id
exports.deletar = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').remove({"_id": ObjectID(id)}, (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
};