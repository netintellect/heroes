export interface IHero {
  id: number;
  name: string;
  birthDate?: Date;
}


export class Hero implements IHero {
  //#region state
  private _id: number;
  public get id(): number {
    return this._id;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }


  private _birthDate: Date;
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this._birthDate = value;
  }
  //#endregion

  //#region hehavior
  constructor(id: number, name: string) {
    this._id = id;
    this.name = name;
  }
  //#endregion
}
