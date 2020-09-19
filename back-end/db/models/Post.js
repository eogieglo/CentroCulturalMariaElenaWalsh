module.exports = (sequelize, dataTypes)=>{
    
    let alias = "Post";

    let cols = {
        id : {
            type :  dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        
        titlle : {
            type : dataTypes.STRING(200),
            allowNull : false,
        }, 

        description : {
            type : dataTypes.TEXT,
            allowNull : false,
        },    

        image : {
            type : dataTypes.STRING(100), 
            allowNull : false,
        },

       

    };

    let config = {
        tableName : 'posts',
        timeStamps : true,
        underscored : true,
        createdAt : "created_at",
        updated_at : "updated_at"    
    }


    const Post = sequelize.define(alias, cols, config);    
  

    return Post
}