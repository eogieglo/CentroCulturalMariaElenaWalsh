module.exports = (sequelize, dataTypes)=>{
    
    let alias = "User";

    let cols = {
        id : {
            type :  dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        
        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },      
        
        email : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
       
        phone : {
            type : dataTypes.INTEGER.UNSIGNED            
        }
       

    };

    let config = {
        tableName : 'users',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at"    
    }


    const User = sequelize.define(alias, cols, config);    
  

    return User
}