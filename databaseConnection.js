const mongoose = require("mongoose");

function DbConnection() {
    const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open",function(){
    console.log("Db Connected.....");
});
}

module.exports = DbConnection;