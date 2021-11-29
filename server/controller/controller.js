var Marksdb = require('../model/model');


exports.create = (req,res)=>{
   
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    
    const user = new Marksdb({
        roll_no : req.body.roll_no,
        name : req.body.name,
        sem : req.body.sem,
        DBMS : req.body.DBMS,
        CNCC : req.body.CNCC,
        DAA : req.body.DAA,
        CG : req.body.CG,
        JAVA : req.body.JAVA,
        DBMS_LAB : req.body.DBMS_LAB,
        CG_JV_LAB :req.body.CG_JV_LAB,
        TOTAL_M_M : 700,
        TOTAL_O_M : parseInt(req.body.DBMS) + parseInt(req.body.CNCC) + parseInt(req.body.DAA) + parseInt(req.body.CG) + parseInt(req.body.JAVA) 
         + parseInt(req.body.DBMS_LAB) + parseInt(req.body.CG_JV_LAB)

    })

   
    user
        .save(user)
        .then(data => {
          
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}


exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Marksdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error in  retrieving user with id " + id})
            })

    }else{
        Marksdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}


exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Marksdb.findByIdAndUpdate(id, req.body, { useFindAndModify: true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


exports.delete = (req, res)=>{
    const id = req.params.id;

    Marksdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}