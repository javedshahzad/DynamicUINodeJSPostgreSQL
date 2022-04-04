module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      created:{
        type: Sequelize.TEXT
      }
    });
  
    return User;
  };