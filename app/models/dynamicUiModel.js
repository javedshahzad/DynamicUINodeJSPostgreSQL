module.exports = (sequelize, Sequelize) => {
    const DynamicUI = sequelize.define("dynamic_ui", {
      title: {
        type: Sequelize.TEXT
      },
      heading: {
        type: Sequelize.TEXT
      },
      body:{
        type: Sequelize.TEXT
      },
      class_name: {
        type: Sequelize.STRING
      },
      id_name: {
        type: Sequelize.TEXT
      },
      icon: {
        type: Sequelize.TEXT
      },
      imgage_url: {
        type: Sequelize.TEXT
      },
      created:{
        type: Sequelize.TEXT
      }
    });
  
    return DynamicUI;
  };