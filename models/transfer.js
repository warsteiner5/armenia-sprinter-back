const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
        from: {
            desc: "Город отправления",
            trim: true,
            type: String,
            required: true,
        },
        to: {
            desc: "Город назначения",
            trim: true,
            type: String,
            required: true,
        },
        route: {
            desc: "Маршрут",
            trim: true,
            type: [String],
            required: false,
        },
        distance: {
            desc: "Расстояние",
            trim: true,
            type: Number,
            required: false,
        },
        duration: {
            desc: "Продолжительность",
            trim: true,
            type: Number,
            required: false,
        },
        luggage: {
            desc: "Количество багажа",
            trim: true,
            type: Number,
            required: false,
        },
        group: {
            desc: "Группы",
            trim: true,
            type: [{
                peopleCount: Number,
                price: Number
            }],
            required: false,
        },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("transfer", schema, "transfer");
