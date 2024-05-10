const charData = {
    races: ["Orc", "Elf", "Human", "Dwarf", "Wolfkin", "Kitsune", "Fairy"],
    gender: ["Male", "Female", "Neither"],
    classes: ["Ranger", "Sorcerer", "Mage", "Bard", "Rogue", "Barbarian", "Paladin", "Gunslinger", "Monk", "Cleric"],
    factions: ["Empire", "Underground", "Forest Folk", "Neutral", "Hoard"],
    weapons: ["Axe", "Rapier", "Dagger", "Longbow", "Lance", "Gauntlets", "Greatsword", "Mace", "Warhammer", "Tomahawk", "Shuriken", "Blowgun", "Crossbow", "Flail", "Nunchuks", "Flintlock Pistols"],
    nameBeginnings: ['Bra', 'Dra', 'Tha', 'Glo', 'Sli', 'Fro', 'Gri'],
    nameMiddles: ['gar', 'mor', 'vash', 'nar', 'thun', 'farn', 'grom'],
    nameEndings: ['dor', 'dar', 'thor', 'mash', 'gar', 'nor', 'tash']
}

const generateName = (getRandomInt) => {
    const beginning =
        charData.nameBeginnings[
        getRandomInt(0, charData.nameBeginnings.length - 1)
        ];
    const middle =
        charData.nameMiddles[
        getRandomInt(0, charData.nameMiddles.length - 1)
        ];
    const end =
        charData.nameEndings[
        getRandomInt(0, charData.nameEndings.length - 1)
        ];
    return beginning + middle + end;
};

export { charData, generateName }