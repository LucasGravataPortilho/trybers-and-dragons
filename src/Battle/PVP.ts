import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _p1: Fighter | SimpleFighter;
  private _p2: Fighter | SimpleFighter;

  constructor(p1: Fighter | SimpleFighter, p2: Fighter | SimpleFighter) {
    super(p1);
    this._p1 = p1;
    this._p2 = p2;
  }

  fight(): number {
    while (this._p1.lifePoints > 0 && this._p2.lifePoints > 0) {
      this._p1.attack(this._p2);
      this._p2.attack(this._p1);
    }
    return super.fight();
  }
}

export default PVP;