import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be at leat 2 characetrs'],
        maxLength: [20, "Name can't be more than 20 characters"]
    },
    class: {
        type: String,
        required: [true, 'Class is required'],
        minLength: [3, 'Class must be at least 3 characters'],
        maxLength: [20, 'Class must be less than 20 characters']
    },
    race: {
        type: String,
        required: [true, 'Race is required'],
        minLength: [3, 'Race must be at least 3 characters long'],
        maxLength: [20, 'Race can only be 20 characters maximum']
    },
    gender: {
        type: String,
    },
    faction: {
        type: String,
        required: [true, 'Faction is required'],
        maxLength: [20, 'Faction must be at 20 characters at most']
    },
    weapons: {
        type: String,
        required: [true, 'Faction is required'],
        minLength: [2, 'Weapon must be at least 2 characters long']
    }

}, { timestamps: true });
const Character = model('Character', characterSchema);
export default Character;