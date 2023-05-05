import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._created += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._created;
  }
}

export default Dwarf;