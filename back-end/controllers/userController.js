let db = require('../db/models');

let userFunctions = {

    create : async (req, res, next) => {
       await db.User.create({
          ...req.body,
          phone : Number(req.body.phone)
        })
        try{
            res.send('creado con exito')
        }
        catch(err){
            console.log(err)
            res.send('error al guardar usuario')
        }        
     console.log(req.body)     

    }
}

module.exports = userFunctions;