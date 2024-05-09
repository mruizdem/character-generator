import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Character needs a name.'],
        minLength: [2, 'Name must be at leat 2 characetrs'],
        maxLength: [20, "Name can't be more than 20 characters"]
    },
    gender: {
        type: String,
        required: [true, 'Character needs a gender.']
    },
    race: {
        type: String,
        required: [true, 'Character needs a race.'],
        minLength: [3, 'Race must be at least 3 characters long'],
        maxLength: [20, 'Race can only be 20 characters maximum']
    },
    class: {
        type: String,
        required: [true, 'Character needs a class.'],
        minLength: [3, 'Class must be at least 3 characters'],
        maxLength: [20, 'Class must be less than 20 characters']
    },
    faction: {
        type: String,
        required: [true, 'Character needs a faction.'],
        maxLength: [20, 'Faction must be at 20 characters at most']
    },
    weapon: {
        type: String,
        required: [true, 'A starting weapon is required.'],
        minLength: [2, 'Weapon must be at least 2 characters long']
    },
    description: {
        type: String,
        required: [true, 'Character needs a description.'],
        minLength: [2, 'Weapon must be at least 2 characters long']
    },
    backstory: {
        type: String,
        required: [true, 'Character needs a backstory.'],
        minLength: [2, 'Weapon must be at least 2 characters long']
    }

}, { timestamps: true });
const Character = model('Character', characterSchema);
export default Character;