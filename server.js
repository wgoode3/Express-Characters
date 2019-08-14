console.log("inside of server.js");

const express = require("express"),
           bp = require("body-parser"),
          app = express(),
         port = 8000,
      DB_NAME = "chars";

app.use(express.static(__dirname + "/client/dist/client"));
app.use(bp.json());

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});