const path = require("path");
const { Router } = require("express");

let router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/games/memory-match-game.html"));
});



module.exports = router;