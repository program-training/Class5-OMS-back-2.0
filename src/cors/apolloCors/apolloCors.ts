import express from "express";
import cors from "cors";

const app = express();

// Add a list of allowed origins
const allowedOrigins = "http://46.19.86.219:5000";

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

// Then pass these options to cors
app.use(cors(options));
app.use(express.json());

app.listen(5000, () => {
  console.log("`🚀 Server ready at port 5000");
});

export default app;
