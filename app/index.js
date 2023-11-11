const express = require("express");
const app = express();
const os = require("os")
const hostname = os.hostname();


app.get("/", (req, res) => res.send("Hello from a lightweight container") ) ;
app.listen(9999, () => console.log("listening on port 9999 on " + hostname));

