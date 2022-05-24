import express from "express";
import authRoutes from "./auth.routes";
import song from "./song.routes";
import notification from "./notification.routes";
export const router = express.Router();

song(router);
authRoutes(router);
notification(router);

export default router;
