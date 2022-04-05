const db = require("../models");
const DynamicUI = db.dynamicUI;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body)
   // Validate ;
  if (!req.body.body) {
    res.status(400).send({
      title:"title required",
      heading: "heading required",
      body: "body required",
      class_name:"class_name required",
      id_name:"id_name required",
      icon:"icon required",
      imgage_url:"imgage_url required"
    });
    return;
  }
  // create UI data
  const dynamicdata = {
    title: req.body.title,
    heading: req.body.heading,
    body: req.body.body,
    class_name:req.body.class_name,
    id_name:req.body.id_name,
    icon:req.body.icon,
    image_url:req.body.image_url ? req.body.image_url : "https://media.istockphoto.com/photos/relaxed-woman-breathing-fresh-air-in-a-green-forest-picture-id1314559532?k=20&m=1314559532&s=612x612&w=0&h=5NBmEnNnvIw3IjOwOILyvQcnDHhBhn9nuiGN1_rccYQ=",
    created:Date.now(),
  };

  // Save UI in the database
  DynamicUI.create(dynamicdata)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const body = req.query.body;
  var condition = body ? { body: { [Op.iLike]: `%${body}%` } } : null;

  DynamicUI.findAll({ 
     order: [['id', 'DESC']],
     where:condition
    })
    .then(data => {
        // console.log(data)
     if(data){
        res.send({
          data:data
        });
     }else{
         res.send({
            message:"Data not found"  
         })
     }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  DynamicUI.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
        console.log(id)
  DynamicUI.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          updated:true,
          message: "Record was updated successfully with id="+id
        });
      } else {
        res.send({
          updated:false,
          message: `Cannot update Record with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Record with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DynamicUI.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          deleted:true,
          message: "Record was deleted successfully!"
        });
      } else {
        res.send({
          deleted:false,
          message: `Cannot delete Record with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        deleted:false,
        message: "Could not delete Record with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    DynamicUI.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Record were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Record."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
    DynamicUI.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Record."
      });
    });
};
