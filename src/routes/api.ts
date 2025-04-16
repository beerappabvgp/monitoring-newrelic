import { Router } from "express";
import { logger } from "../logger/logger";

export const router = Router();

router.get("/", (req, res) => {
    logger.info("GET / hit successfully");
  res.json({ message: "API is working fine 🚀" });
});
