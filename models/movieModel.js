import mongoose from "mongoose";
import multer from "multer";

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	video: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	releaseDate: {
		type: Date,
		required: true,
	},
});

const Movie = mongoose.model("Movie", movieSchema);

export const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

export const uploadImage = multer({ storage: storage }).single("image");

export default Movie;
