const express = require('express');
const app = express();
// Enable CORS
var cors = require('cors')

app.use(cors({
    origin: '*'
}))
// parse application/json
app.use(require('body-parser').json());

// register endpoints
app.use("/api/v1/city", require("./routes/city_routes"));
app.use("/api/v1/transfer", require("./routes/transfer_routes"));

app.listen(4001, () => {
    console.log('server started!');
});
