const Transfer = require("../models/transfer");
exports.findAll = (req, res) => {
    Transfer.find()
        .sort({name: -1})
        .then((transfers) => {
            res.status(200).send(transfers);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occurred",
            });
        });
}

/**
 * Find one Transfer
 */
exports.findOne = (req, res) => {
    Transfer.findById(req.params.id)
        .then((transfer) => {
            if (!transfer) {
                return res.status(404).send({
                    message: "Transfer not found with id " + req.params.id,
                });
            }
            res.status(200).send(transfer);
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error retrieving transfer with id " + req.params.id,
            });
        });
};

exports.create = (req, res) => {
    /**
     * validation request
     */
    if (!req.body.from || !req.body.to) {
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }
    /**
     * Create a transfer
     */
    const transfer = new Transfer({
        from: req.body.from,
        to: req.body.to,
        route: req.body.route,
        distance: req.body.distance,
        duration: req.body.duration,
        luggage: req.body.luggage,
        group: req.body.group,
    });
    /**
     * Save transfer to database
     */
    Transfer.create(transfer)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Transfer.",
            });
        });
};

/**
 * Delete a transfer with the specified id in the request
 */
exports.delete = (req, res) => {
    Transfer.findByIdAndRemove(req.params.id)
        .then((transfer) => {
            if (!transfer) {
                return res.status(404).send({
                    message: "Transfer not found ",
                });
            }
            res.send({ message: "Transfer deleted successfully!" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete transfer ",
            });
        });
};

/**
 * Update a transfer with the specified id in the request
 */
exports.update = (req, res) => {
    if (!req.body.from || !req.body.to) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Transfer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((transfer) => {
            if (!transfer) {
                return res.status(404).send({
                    message: "no transfer found",
                });
            }
            res.status(200).send(transfer);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};
