import { Router } from "express";
import * as characterController from "../controllers/character.controllers.js";
const router = Router();
router.route('/characters')
    .get(characterController.getAllCharacters)   
    .post(characterController.createCharacter);
    router.route('/characters/:id')
    .get(characterController.getOneCharacterById)
    .delete(characterController.deleteById)
    .put(characterController.updateCharacterById);

    export default router;