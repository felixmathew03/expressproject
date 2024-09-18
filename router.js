import { Router } from "express";
import { Home,getData } from "./requestHandler.js";

const router=Router();
router.route("/").get(Home)
router.route("/get").get(getData)

export default router;