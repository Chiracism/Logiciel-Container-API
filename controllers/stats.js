const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to get all clients
exports.getAllStats = async (req, res, next) => {
  try {
    // const clientStat = await db.Client.count();
    const vesselStat = await db.Navire.count();
    const pcStat = await db.Port.count();
    // const agenceStat = await db.Agence.count();

    res.status(200).json({
    //   clientStat,
      vesselStat,
      pcStat,
    //   agenceStat,
    });
  } catch (e) {
    console.log("Error with datas stats : ", e.message);
  }
};
