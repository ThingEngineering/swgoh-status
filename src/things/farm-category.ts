import type { Farm } from "./farm";

export class FarmCategory {
    name: string
    farms: Farm[]

    public constructor(name: string, farms: Farm[]) {
        this.name = name
        this.farms = farms
    }
}
