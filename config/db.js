import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/movies");

const db = mongoose.connection;

db.once("open", (err) => {
	if (err) {
		console.log(err);
		return false;
	}
	console.log("DB is connected..!");
});

export default db;
