module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};


// CREATE TABLE tutorials (
// 	id serial PRIMARY KEY,
// 	title VARCHAR ( 50 ) NOT NULL,
// 	description VARCHAR ( 50 ) NOT NULL,
// 	published VARCHAR ( 255 ) NOT NULL
// );
// INSERT INTO tutorials (title, description,published)
//   VALUES ('Jerry', 'jerry@example.com','published'), ('George', 'george@example.com','published');

//   api=> SELECT * FROM tutorial;