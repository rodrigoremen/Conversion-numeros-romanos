import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanService {
  public history: { roman: string; decimal: number }[] = [];

  constructor() {}

  addConversion(roman: string, decimal: number) {
    this.history.push({ roman, decimal });
  }

  getHistory() {
    return this.history;
  }
}
