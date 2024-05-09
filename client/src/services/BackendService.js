import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8000/api",
});

// POST REQUESTS
async function createCharacter(newCharacter) {
    return http
        .post('/characters', newCharacter)
        .then(res => res.data)
        .catch(err => {
            throw err.response.data.errors;
        })
}
// GET REQUESTS
async function getAllCharacters() {
    return http.get('/characters')
        .then(response => response.data)
        .catch(err => {
            throw err.message;
        });
}

async function getOneCharacter(id) {
    return http.get(`/characters/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

// PUT
async function updateCharacter(id, character) {
    return http
        .put(`/characters/${id}`, character)
        .then(res => res.data)
        .catch(err => {
            throw err.response.data.errors;
        })
}

// DELETE
async function deleteHandler(id) {
    http.delete(`/characters/${id}`)
        .then((res) => res)
        .catch((err) => {
            throw err;
        })
}

export {
    deleteHandler,
    updateCharacter,
    createCharacter,
    getAllCharacters,
    getOneCharacter
};
