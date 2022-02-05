const express = require('express');
const app = express();

// parse application/json
app.use(require('body-parser').json());

// register endpoints
app.use("/city", require("./routes/city_routes"));

app.listen(4001, () => {
    console.log('server started!');
});
