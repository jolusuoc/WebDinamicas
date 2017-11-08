import get from 'lodash/get';
// import _ = require('lodash');

export class Player {
  public id: number;
  public name: string;
  public favouriteNumber: number;
  public country: string;
  public age: number;

  constructor(jsonObj: any = null) {
    this.id = get(jsonObj, 'id', 'SIN IDENTIFICADOR');
    this.name = get(jsonObj, 'name', 'Jhon Doe');
    this.favouriteNumber = get(jsonObj, 'favouriteNumber', 1111);
    this.country = get(jsonObj, 'country', 'Uruguay 1111');
    this.age = get(jsonObj, 'age', 1111);
  }
};
