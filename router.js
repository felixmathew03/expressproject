import { Router } from "express";
import { getDonors, Home,getDonor } from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)
router.route("/getdonors").get(getDonors)
router.route("/getdonor/:id").get(getDonor)

export default router;