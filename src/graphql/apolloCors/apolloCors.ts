import express from "express";
import cors from "cors";

const app = express();
const WHITELIST = process.env.WHITELIST;
const allowedOrigins = ["http://46.19.86.219:5000", WHITELIST];

const options: cors.CorsOptions = {
  origin: allowedOrigins[0],
  credentials: true,
};
const corsHandler = cors(options);

export default corsHandler;
