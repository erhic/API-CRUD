import express from "express";
import {
  addPet,
  getPet,
  listPets,
  editPet,
  deletePet,
} from "../controllers/pets.controller.js";

/**  
added a router function that accepts router options to pass our routes
*/
const router = express.Router();
/**
 * Action that can be performed entails , adding a pet , editing/updating the pet ,deleting the pet ,displaying a pet ,showing pets
 */
router.post("/", addPet);
router.get("/", listPets);
router.get("/:id", getPet);
router.put("/:id", editPet);
router.delete("/:id", deletePet);

export default router;
