import express from "express";
import db from "./config/db.js";
import mongoose from "mongoose";
import movie from "./models/movieModel.js";
import { uploadImage } from "./models/movieModel.js";
import moment from "moment";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.post("/add-movie", uploadImage, async (req, res) => {
	try {
		const movieData = {
			...req.body,
			poster: `/uploads/${req.file.filename}`,
			created_at: moment().format("L LTS"),
			updated_at: moment().format("L LTS"),
		};
		console.log("Movie Data:", movieData);
		await movie.create(movieData);

		res.redirect("/");
	} catch (error) {
		console.error("Error saving movie:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.get("/movies", async (req, res) => {
	try {
		const movies = await movie.find();
		res.render("movies.ejs", { movies });
	} catch (error) {
		console.error("Error fetching movies:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.listen(port, () => {
	console.log("Server is running on http://127.0.0.1:" + port);
});
