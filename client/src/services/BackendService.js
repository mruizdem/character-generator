import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8000/api",
});

// POST REQUESTS
async function createCharacter(newCharacter) {
    http.post('/characters')
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}
// GET REQUESTS
async function getAllCharacters() {
    return http.get('/characters')
        .then(response => response.data)
        .catch(err => {
            throw err;
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
async function updateCharacter(id, newCharacter) {
    return http.put(`/characters/${id}`, newCharacter)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

// DELETE
async function deleteHandler(id) {
    http.post(`/characters/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) = {})
    throw err;
}

export {
    deleteHandler,
    updateCharacter,
    createCharacter,
    getAllCharacters,
    getOneCharacter
};
