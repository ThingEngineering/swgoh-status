import { flatten, forEach, map } from 'lodash'

import events from './events'
import legends from './galactic-legends'
import fleets from './fleets'
import raids from './raids'
import epicConfrontations from './epic-confrontations'
import { FarmCategory } from '../things/farm-category'

export const categories = [
    legends,
    fleets,
    events,
    epicConfrontations,
    raids,
]

export const flat_categories = [
    new FarmCategory(
        'Flat',
        flatten(map(categories, 'farms'))
    )
]

