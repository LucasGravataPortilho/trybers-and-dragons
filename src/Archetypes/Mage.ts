import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _created = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._created += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage._created;
  }
}

export default Mage;