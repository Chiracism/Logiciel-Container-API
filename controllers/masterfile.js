const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create masterfile
exports.createMasterfile = async (req, res, next) => {
  const masterfileObject = JSON.parse(JSON.stringify(req.body));

  delete masterfileObject.id;

  db.MasterFile.create({
    ...masterfileObject,
  })
    .then((masterfile) => {
      res.status(200).json(masterfile.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get all Masterfiles
exports.getAllMasterfiles = async (req, res, next) => {
  db.MasterFile.findAll({
    order: [["createdAt", "DESC"]],
  })
    .then((masterfiles) => {
      res.status(200).json(masterfiles);
    })
    .catch((error) => res.status(400).json({ error }));
};
