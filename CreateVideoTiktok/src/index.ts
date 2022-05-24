import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/notFound.middleware";
import { authToken } from "./middlewares/auth.middleware";
import bodyParser from "body-parser";
/**
 * Configuration
 */
dotenv.config();
var corsOptions = {
  origin: "http://localhost:8092",
};

if (!process.env.PORT) {
  process.exit(1);
}
const port: any = process.env.PORT || 3000;
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler);
app.use(notFoundHandler);
app.use(authToken);
app.listen(port, function () {
  console.log("Services success");
});
