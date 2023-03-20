import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
  updateMas
  
} from "../controllers/user.js";
const router = express.Router();

router.get("/users", getAll);
router.get("/user/:id", getDetail);
router.post("/user", create);
router.put("/user/:id", update);
router.delete("/user/:id", remove);
router.patch("/user/:id", updateMas);

export default router;

