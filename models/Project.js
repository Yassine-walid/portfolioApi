const mongoose = require("mongoose")


const projectSchema = new mongoose.Schema({ 
    title: { 
        type: String, 
        require: true
    }, 
    thumbnail: { 
        type: String, 
        require: true
    }, 
    demoLink: { 
        type: String, 
        require: true
    }, 
    repoLink: { 
        type: String, 
        require: true
    }, 
    
}) 
  
const Project = new mongoose.model("Project", projectSchema)
module.exports = Project;