import {Farm} from '../things/farm'
import {FarmCategory} from '../things/farm-category'
import {FarmUnit} from '../things/farm-unit'

export default new FarmCategory(
    'Galactic Legends',
    [
        new Farm(
            'Stupid Sexy Kenobi',
            'legend',
            'light',
            [
                new FarmUnit('Aayla Secura', 7, 13, 3),
                new FarmUnit('Bo-Katan Kryze', 7, 13, 5),
                new FarmUnit('General Kenobi', 7, 13, 8),
                new FarmUnit('Mace Windu', 7, 13, 3),
            ],
            [
                new FarmUnit('Negotiator', 6),
            ],
        ),
        new Farm(
            'Sith Eternal Emperor',
            'legend',
            'dark',
            [
                new FarmUnit('Admiral Piett', 7, 13, 5),
                new FarmUnit('Colonel Starck', 7, 13, 3),
                new FarmUnit('Count Dooku', 7, 13, 6),
                new FarmUnit('Darth Maul', 7, 13, 4),
                new FarmUnit('Darth Sidious', 7, 13, 7),
                new FarmUnit('Darth Vader', 7, 13, 7),
                new FarmUnit('Director Krennic', 7, 13, 4),
                new FarmUnit('Emperor Palpatine', 7, 13, 7),
                new FarmUnit('General Veers', 7, 13, 3),
                new FarmUnit('Grand Admiral Thrawn', 7, 13, 6),
                new FarmUnit('Grand Moff Tarkin', 7, 13, 3),
                new FarmUnit('Jedi Knight Anakin', 7, 13, 7),
                new FarmUnit('Royal Guard', 7, 13, 3),
                new FarmUnit('Sith Marauder', 7, 13, 7),
            ],
            [
                new FarmUnit('Imperial TIE Bomber', 6),
            ],
        ),
        new Farm(
            'Jedi Master Luke Skywalker',
            'legend',
            'light',
            [
                new FarmUnit('Biggs Darklighter', 7, 13, 3),
                new FarmUnit('C-3PO', 7, 13, 5),
                new FarmUnit('Chewbacca', 7, 13, 6),
                new FarmUnit('Han Solo', 7, 13, 6),
                new FarmUnit('Hermit Yoda', 7, 13, 5),
                new FarmUnit('Jedi Knight Luke Skywalker', 7, 13, 7),
                new FarmUnit('Lando Calrissian', 7, 13, 5),
                new FarmUnit('Mon Mothma', 7, 13, 5),
                new FarmUnit('Obi-Wan Kenobi (Old Ben)', 7, 13, 5),
                new FarmUnit('Princess Leia', 7, 13, 3),
                new FarmUnit('R2-D2', 7, 13, 7),
                new FarmUnit('Rey (Jedi Training)', 7, 13, 7),
                new FarmUnit('Threepio & Chewie', 7, 13, 5),
                new FarmUnit('Wedge Antilles', 7, 13, 3),
            ],
            [
                new FarmUnit('Rebel Y-wing', 6),
            ],
        ),
        new Farm(
            'Supreme Leader Kylo Ren',
            'legend',
            'dark',
            [
                new FarmUnit('Captain Phasma', 7, 13, 5),
                new FarmUnit('Emperor Palpatine', 7, 13, 7),
                new FarmUnit('First Order Executioner', 7, 13, 5),
                new FarmUnit('First Order Officer', 7, 13, 5),
                new FarmUnit('First Order SF TIE Pilot', 7, 13, 3),
                new FarmUnit('First Order Stormtrooper', 7, 13, 5),
                new FarmUnit('First Order TIE Pilot', 7, 13, 3),
                new FarmUnit('General Hux', 7, 13, 5),
                new FarmUnit('Kylo Ren', 7, 13, 7),
                new FarmUnit('Kylo Ren (Unmasked)', 7, 13, 7),
                new FarmUnit('Sith Trooper', 7, 13, 5),
                new FarmUnit('Veteran Smuggler Han Solo', 7, 13, 3),
            ],
            [
                new FarmUnit('Finalizer', 5),
            ],
        ),
        new Farm(
            'Rey',
            'legend',
            'light',
            [
                new FarmUnit('Amilyn Holdo', 7, 13, 5),
                new FarmUnit('BB-8', 7, 13, 7),
                new FarmUnit('Finn', 7, 13, 5),
                new FarmUnit('Poe Dameron', 7, 13, 5),
                new FarmUnit('Resistance Hero Finn', 7, 13, 5),
                new FarmUnit('Resistance Hero Poe', 7, 13, 5),
                new FarmUnit('Resistance Pilot', 7, 13, 3),
                new FarmUnit('Resistance Trooper', 7, 13, 5),
                new FarmUnit('Rey (Jedi Training)', 7, 13, 7),
                new FarmUnit('Rey (Scavenger)', 7, 13, 7),
                new FarmUnit('Rose Tico', 7, 13, 5),
                new FarmUnit('Veteran Smuggler Chewbacca', 7, 13, 3),
            ],
            [
                new FarmUnit('Raddus', 5),
            ],
        ),
    ]
)
