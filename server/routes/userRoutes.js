import express from "express";
import { login } from "../controllers/authController.js";

const routeUser = express.Router();


routeUser.post('/login',login)

export default routeUser;