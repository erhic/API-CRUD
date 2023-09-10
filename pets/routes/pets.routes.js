import express from "express";

/**  
added a router function that accepts router options to pass our routes
*/
const router = express.Router();
/**
 * Action that can be performed entails , adding a pet , editing/updating the pet ,deleting the pet ,displaying a pet ,showing pets
 */
router.get("/");
router.get("/:id");
router.put("/:id");
router.post("/");
router.delete("/:id");
