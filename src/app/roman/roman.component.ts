import { Component } from '@angular/core';
import { RomanService } from '../roman.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-roman',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.css'],
})
export class RomanComponent {
  protected readonly toast = toast;
  romanInput: string = '';

  constructor(private romanService: RomanService) { }

  romanToDecimal(roman: string): number | null {
    const romanMap: { [key: string]: number } = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
    };

    let decimal = 0;
    for (let i = 0; i < roman.length; i++) {
      const currentVal = romanMap[roman[i]];
      const nextVal = romanMap[roman[i + 1]];

      if (!currentVal) {
        return null; 
      }

      if (nextVal && currentVal < nextVal) {
        decimal -= currentVal;
      } else {
        decimal += currentVal;
      }
    }
    return decimal;
  }

  convertRoman() {
    const roman = this.romanInput.trim().toUpperCase(); 

    if (!roman) {
      this.toast.error('Por favor, ingresa un número romano.'); 
      return; 
    }

    const result = this.romanToDecimal(roman);

    if (result === null) {
      this.toast.error('Número romano inválido.'); 
    } else {
      this.romanService.addConversion(roman, result);
      this.toast.success(`El número romano ${roman} se convirtió a ${result}.`);
      this.romanInput = ''; 
    }
  }

  get history() {
    return this.romanService.getHistory();
  }
}
