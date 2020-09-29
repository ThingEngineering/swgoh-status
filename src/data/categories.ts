import { flatten, forEach, map } from 'lodash'

import events from './events'
import legends from './galactic-legends'
import { FarmCategory } from '../things/farm-category'

export const categories = [
    legends,
    events,
]

export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]

