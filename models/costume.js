const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
    costume_type: String,
    size: String,
    cost: { type: Number, min: [1, 'Cost must be at least 1'], max: [500, 'Cost cannot exceed 500'] },
    
});

module.exports = mongoose.model("Costume", costumeSchema);
