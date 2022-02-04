const City = require("../models/city");
exports.findAll = (req, res) => {
    City.find()
        .sort({name: -1})
        .then((cities) => {
            res.status(200).send(cities);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occurred",
            });
        });
}

/**
 * Find one City
 */
exports.findOne = (req, res) => {
    City.findById(req.params.id)
        .then((city) => {
            if (!city) {
                return res.status(404).send({
                    message: "City not found with id " + req.params.id,
                });
            }
            res.status(200).send(city);
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error retrieving city with id " + req.params.id,
            });
        });
};

exports.create = (req, res) => {
    /**
     * validation request
     */
    if (!req.body.name) {
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }
    /**
     * Create a city
     */
    const city = new City({
        name: req.body.name
    });
    /**
     * Save city to database
     */
    City.create(city)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the City.",
            });
        });
};

/**
 * Delete a city with the specified id in the request
 */
exports.delete = (req, res) => {
    City.findByIdAndRemove(req.params.id)
        .then((city) => {
            if (!city) {
                return res.status(404).send({
                    message: "City not found ",
                });
            }
            res.send({ message: "City deleted successfully!" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete city ",
            });
        });
};

/**
 * Update a city with the specified id in the request
 */
exports.updateCity = (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    City.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((city) => {
            if (!city) {
                return res.status(404).send({
                    message: "no city found",
                });
            }
            res.status(200).send(city);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};
