import type { FarmUnit } from './farm-unit'

export class Farm {
    name: string
    type: string
    side: string
    units: FarmUnit[]
    ships: FarmUnit[]

    constructor(name: string, type: string, side: string, units: FarmUnit[], ships: FarmUnit[]) {
        this.name = name
        this.side = side
        this.units = units
        this.ships = ships
    }
}
