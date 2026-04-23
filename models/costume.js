const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
    costume_type: { type: String, minlength: [2, 'Costume type must be at least 2 characters'], maxlength: [20, 'Costume type cannot exceed 20 characters'] },
    size: String,
    cost: { type: Number, min: [1, 'Cost must be at least 1'], max: [500, 'Cost cannot exceed 500'] },
    
});

module.exports = mongoose.model("Costume", costumeSchema);
