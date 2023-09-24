const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('UserDetails',{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        designation: {
            type: DataTypes.STRING,
            defaultValue: 'Intern',
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dob:{
            type:DataTypes.DATE,
            allowNull:true,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        softDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    })
    return User;
}