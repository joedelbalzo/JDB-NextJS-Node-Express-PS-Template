const express = require("express");
const next = require("next");
const app = express();
const path = require("path");
const { User } = require("./db");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const cors = require("cors");

nextApp.prepare().then(() => {
  app.use(express.json());
  app.use(cors());
  app.use("/dist", express.static(path.join(__dirname, "../dist")));

  app.get("/api/users", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });
});

module.exports = app;
