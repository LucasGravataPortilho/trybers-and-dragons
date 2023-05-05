import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._created += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._created;
  }
}

export default Elf;