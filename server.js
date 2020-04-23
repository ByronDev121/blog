// Install express server
const express = require("express");
const cors = require("cors");
const path = require("path");

// Init express:
const app = express();

// CORS(Cross-Origin-Resource-Sharing) - Allows us to access from device
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/<name-of-app>/index.html"));
// });

// Port:
const PORT = process.env.PORT || 3000;

// Start the app by listening on the default Heroku port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
