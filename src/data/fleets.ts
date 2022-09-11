import { Farm } from '../things/farm'
import { FarmUnit, spacer } from '../things/farm-unit'
import { FarmCategory } from '../things/farm-category'

export default new FarmCategory(
    'Fleets',
    [
        new Farm(
            'Executor',
            'fleet',
            'dark',
            [
                new FarmUnit('Darth Vader', 7, 13, 7),
                new FarmUnit('Admiral Piett', 7, 13, 8),
                new FarmUnit('Boba Fett', 7, 13, 8),
                new FarmUnit('TIE Fighter Pilot', 7, 13, 5),
                new FarmUnit('Bossk', 7, 13, 5),
                new FarmUnit('IG-88', 7, 13, 5),
                new FarmUnit('Dengar', 7, 13, 5),
                spacer,
                new FarmUnit('Razor Crest', 7),
                new FarmUnit('Slave I', 7),
                new FarmUnit('IG-2000', 7),
                new FarmUnit('Hound\'s Tooth', 7),
                new FarmUnit('TIE Advanced x1', 7),
                new FarmUnit('Imperial TIE Bomber', 7),
                new FarmUnit('Imperial TIE Fighter', 7),
            ],
            [],
        ),
        new Farm(
            'Profundity',
            'fleet',
            'light',
            [
                new FarmUnit('Admiral Raddus', 7, 13, 9),
                new FarmUnit('Cassian Andor', 7, 13, 8),
                new FarmUnit('Dash Rendar', 7, 13, 7),
                new FarmUnit('Mon Mothma', 7, 13, 5),
                new FarmUnit('Bistan', 7, 13, 5),
                new FarmUnit('Jyn Erso', 7, 13, 5),
                new FarmUnit('Hera Syndulla', 7, 13, 5),
                spacer,
                new FarmUnit('Outrider', 7),
                new FarmUnit('Cassian\'s U-wing', 7),
                new FarmUnit('Bistan\'s U-wing', 7),
                new FarmUnit('Wedge Antilles\'s X-wing', 7),
                new FarmUnit('Biggs Darklighter\'s X-wing', 7),
                new FarmUnit('Rebel Y-wing', 7),
                new FarmUnit('Ghost', 7),
            ],
            [],
        ),
    ]
    )