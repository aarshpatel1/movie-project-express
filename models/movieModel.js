import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
		min: 0,
		max: 10,
	},
	genres: {
		type: Array,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	poster: {
		type: String,
		required: true,
	},
	created_at: {
		type: String,
		require: true,
	},
	updated_at: {
		type: String,
		require: true,
	},
});

const Movie = mongoose.model("Movie", movieSchema);

export const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + Date.now() + ext);
	},
});

export const uploadImage = multer({ storage: storage }).single("poster");

export default Movie;
