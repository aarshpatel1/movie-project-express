import express from "express";
import db from "./config/db.js";
import mongoose from "mongoose";
import Movie from "./models/movieModel.js";
import { uploadImage } from "./models/movieModel.js";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.post("/add-movie", uploadImage, async (req, res) => {
	try {
		console.log(req.file);
		console.log(req.body);

		res.redirect("/");
	} catch (error) {
		console.error("Error saving movie:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.listen(port, () => {
	console.log("Server is running on http://127.0.0.1:" + port);
});
