import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _created = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._created += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._created;
  }
}

export default Warrior;