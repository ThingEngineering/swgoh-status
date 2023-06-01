import { Farm } from '../things/farm'
import { FarmUnit, spacer } from '../things/farm-unit'
import { FarmCategory } from '../things/farm-category'

export default new FarmCategory(
    'Hero Journey',
    [
        new Farm(
            'Jedi Knight Cal Kestis',
            'event',
            'light',
            [
                new FarmUnit('Cal Kestis', 7, 12, 0),
                new FarmUnit('Cere Junda', 7, 12, 0),
                new FarmUnit('Merrin', 7, 12, 0),
                new FarmUnit('Tarfful', 7, 12, 0),
                new FarmUnit('Saw Gerrera', 7, 12, 0)
            ],
            [],
        ),
        new Farm(
            'Doctor Aphra',
            'event',
            'dark',
            [
                new FarmUnit('0-0-0', 7, 13, 5),
                new FarmUnit('BT-1', 7, 13, 5),
                new FarmUnit('Hondo Ohnaka', 7, 13, 5),
                new FarmUnit('Sana Starros', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Grand Inquisitor',
            'event',
            'dark',
            [
                new FarmUnit('Eighth Brother', 7, 13, 5),
                new FarmUnit('Fifth Brother', 7, 13, 5),
                new FarmUnit('Ninth Sister', 7, 13, 5),
                new FarmUnit('Second Sister', 7, 13, 5),
                new FarmUnit('Seventh Sister', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Starkiller',
            'event',
            'dark',
            [
                new FarmUnit('Darth Talon', 7, 13, 5),
                new FarmUnit('Dash Rendar', 7, 13, 5),
                new FarmUnit('Kyle Katarn', 7, 13, 5),
                new FarmUnit('Mara Jade, The Emperor\'s Hand', 7, 13, 5),
            ],
            [],
        ),
    ]
)
