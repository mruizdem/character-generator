import Character from "../models/character.model.js";

async function createCharacter(req, res) {
    try {
        const character = await Character.create(req.body);
        //201 for successful post requests
        return res.status(201).json(character);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
async function getAllCharacters(req, res) {
    try {
        const allCharacters = await Character.find();
        // 200 for successful get requests
        return res.status(200).json(allCharacters);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
async function getOneCharacterById(req, res) {
    try {
        const id = req.params.id;
        const character = await Character.findById(id)
        return res.status(200).json(character);

    }
    catch (err) {
        return res.status(500).json(err);
    }
}
async function deleteById(req, res) {
    try {
        const id = req.params.id;
        await Character.deleteOne({ _id: id });
        return res.status(204).json({ message: 'Successfully Deleted!' });
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
async function updateCharacterById(req, res) {
    try {
        const id = req.params.id
        const updatedCharacter = await Character.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        return res.status(200).json(updatedCharacter);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
export { createCharacter, getAllCharacters, getOneCharacterById, deleteById, updateCharacterById};