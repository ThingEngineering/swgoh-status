import { Farm } from '../things/farm'
import { FarmUnit } from '../things/farm-unit'
import { FarmCategory } from '../things/farm-category'

export default new FarmCategory(
    'Events',
    [
        new Farm(
            'General Anakin Skywalker',
            'event',
            'light',
            [
                new FarmUnit('Ahsoka Tano', 7, 12),
                new FarmUnit('C-3PO', 7, 12),
                new FarmUnit('General Kenobi', 7, 12),
                new FarmUnit('Padmé Amidala', 7, 12),
                new FarmUnit('Shaak Ti', 7, 12),
                new FarmUnit('Asajj Ventress', 7, 12),
                new FarmUnit('B1 Battle Droid', 7, 12),
                new FarmUnit('B2 Super Battle Droid', 7, 12),
                new FarmUnit('Droideka', 7, 12),
                new FarmUnit('IG-100 MagnaGuard', 7, 12),
            ],
            [
                new FarmUnit('Anakin\'s Eta-2 Starfighter', 7),
            ],
        ),
        new Farm(
            'Jedi Knight Luke Skywalker',
            'event',
            'light',
            [
                new FarmUnit('C-3PO', 7, 13, 3),
                new FarmUnit('Captain Han Solo', 7, 13, 3),
                new FarmUnit('Chewbacca', 7, 13, 3),
                new FarmUnit('Commander Luke Skywalker', 7, 13, 3),
                new FarmUnit('Darth Vader', 7, 13, 3),
                new FarmUnit('Hermit Yoda', 7, 13, 3),
                new FarmUnit('Lando Calrissian', 7, 13, 3),
                new FarmUnit('Rebel Officer Leia Organa', 7, 13, 3),
                new FarmUnit('Wampa', 7, 13, 3),
            ],
            [
                new FarmUnit('Han\'s Millennium Falcon', 7),
                new FarmUnit('Wedge Antilles\'s X-wing', 7),
            ],
        ),
    ]
)
