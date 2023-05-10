import {Farm} from '../things/farm'
import {FarmCategory} from '../things/farm-category'
import {FarmUnit} from '../things/farm-unit'

export default new FarmCategory(
    'Krayt Dragon',
    [
        new Farm(
            'Hutt Cartel',
            'raid',
            'dark',
            [
                new FarmUnit('Jabba the Hutt', 7, 13, 8),
                new FarmUnit('Boba Fett', 7, 13, 8),
                new FarmUnit('Boushh (Leia Organa)', 7, 13, 8),
                new FarmUnit('Krrsantan', 7, 13, 8),
                new FarmUnit('Skiff Guard (Lando Calrissian)', 7, 13, 8),

            ],
            [],
        ),
        new Farm(
            'Mandalorian',
            'raid',
            'dark',
            [
                new FarmUnit('Maul', 7, 13, 7),
                new FarmUnit('The Armorer', 7, 13, 5),
                new FarmUnit('Bo-Katan Kryze', 7, 13, 5),
                new FarmUnit('Canderous Ordo', 7, 13, 5),
                new FarmUnit('Jango Fett', 7, 13, 7),
            ],
            [],
        ),
        new Farm(
            'Beskar Mando Cheese',
            'raid',
            'light',
            [
                new FarmUnit('The Mandalorian (Beskar Armor)', 7, 13, 7),
                new FarmUnit('Greedo', 7, 13, 6),
                new FarmUnit('Embo', 7, 13, 5),
                new FarmUnit('Cad Bane', 7, 13, 5),
                new FarmUnit('The Mandalorian', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Tuskens',
            'raid',
            'dark',
            [
                new FarmUnit('Tusken Chieftain', 7, 13, 7),
                new FarmUnit('Tusken Raider', 7, 13, 7),
                new FarmUnit('Tusken Shaman', 7, 13, 7),
                new FarmUnit('Tusken Warrior', 7, 13, 7),
                new FarmUnit('URoRRuR\'R\'R', 7, 13, 7),
            ],
            [],
        ),
        new Farm(
            'Jawas',
            'raid',
            'light',
            [
                new FarmUnit('Chief Nebit', 7, 12, 0),
                new FarmUnit('Dathcha', 7, 12, 0),
                new FarmUnit('Jawa', 7, 12, 0),
                new FarmUnit('Jawa Engineer', 7, 12, 0),
                new FarmUnit('Jawa Scavenger', 7, 12, 0),
            ],
            [],
        ),
    ]
)
