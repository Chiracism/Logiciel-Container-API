const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Routes
// const materielRoulantRoutes = require("./routes/materielroulant");
   const userRoutes = require("./routes/user");
// const containerRoutes = require("./routes/container");
// const marchandiseNonDangereuseRoutes = require("./routes/marchandisenondangereuse");
// const marchandiseDangereuseRoutes = require("./routes/marchandisedangereuse");
   const roleRoutes = require("./routes/role");
   const categorieRoutes = require("./routes/categorie");
// const typeContainerRoutes = require("./routes/typecontainer");
// const fullContainerRoutes = require("./routes/fullcontainer");
// const vesselRoutes = require("./routes/vessel");
// const portChargementRoutes = require("./routes/portchargement");
// const portDechargementRoutes = require("./routes/portdechargement");
// const clientRoutes = require("./routes/client");
// const statRoutes = require("./routes/stats");
// const historicRoutes = require("./routes/historic");
// const importationHistoricRoutes = require("./routes/importationhistoric");
// const agenceRoutes = require("./routes/agence");


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // This will help in encoding
app.use(bodyParser.json());

// app.use("/api/materielroulant", materielRoulantRoutes);
   app.use("/api/user", userRoutes);
// app.use("/api/container", containerRoutes);
// app.use("/api/marchandisenondangereuse", marchandiseNonDangereuseRoutes);
// app.use("/api/marchandisedangereuse", marchandiseDangereuseRoutes);
   app.use("/api/role", roleRoutes);
// app.use("/api/typecontainer", typeContainerRoutes);
// app.use("/api/fullcontainer", fullContainerRoutes);
// app.use("/api/vessel", vesselRoutes);
// app.use("/api/pol", portChargementRoutes);
// app.use("/api/pod", portDechargementRoutes);
// app.use("/api/client", clientRoutes);
// app.use("/api/stat", statRoutes);
// app.use("/api/historic", historicRoutes);
// app.use("/api/historic2", importationHistoricRoutes);
// app.use("/api/agence", agenceRoutes);
   app.use("/api/categorie", categorieRoutes);

module.exports = app;
