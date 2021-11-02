const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create client
exports.createMasterFile = async (req, res, next) => {
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

// Endpoint to get single masterfile
exports.getOneMasterFile = async (req, res, next) => {
  let masterfile = await db.masterfile.findOne({
    where: { id: req.params.id },
  });

  if (masterfile) {
    res.status(200).json(masterfile);
  } else {
    res.status(400).json({ message: "Error on getting masterfile" });
  }
};

// Endpoint to update masterfile
exports.modifyMasterFile = async (req, res, next) => {
  const MasterFileObject = JSON.parse(JSON.stringify(req.query));

  db.masterfile.update(
    { ...masterfileObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.MasterFile.findOne({ where: { id: req.params.id } })
        .then((masterfile) => {
          res.status(200).json(masterfile);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all masterfile
exports.getAllMasterFiles = async (req, res, next) => {
  db.MasterFile.findAll()
    .then((masterfiles) => {
      res.status(200).json(masterfiles);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete masterfile
exports.deleteMasterFile = async (req, res, next) => {
  db.MasterFile.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "MasterFile deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
