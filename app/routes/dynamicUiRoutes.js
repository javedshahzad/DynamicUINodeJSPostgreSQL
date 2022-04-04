module.exports = app => {
    const dynamic = require("../controllers/dynamicUIController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", dynamic.create);
  
    // Retrieve all Tutorials
    router.get("/", dynamic.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", dynamic.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", dynamic.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", dynamic.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use("/api/dynamicUI", router);
    
  };
  