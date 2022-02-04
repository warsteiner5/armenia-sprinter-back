const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
        name: {
            desc: "Название города.",
            trim: true,
            type: String,
            required: true,
        }
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("city", schema, "city");