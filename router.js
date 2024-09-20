import { Router } from "express";
import { getDonors, Home } from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)
router.route("/getDonors").get(getDonors)

export default router;