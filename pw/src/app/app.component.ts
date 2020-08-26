import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  password: string = '';
  letterChange: boolean = false;
  numberChange: boolean = false;
  symbolChange: boolean = false;

  // Print on the console
  // onButtonClick() {
  //   console.log('Button was been clicked');
  // }

  onChangeLetters() {
    this.letterChange = !this.letterChange;
  }
  onChangeNumbers() {
    this.numberChange = !this.numberChange;
  }
  onChangeSymbol() {
    this.symbolChange = !this.symbolChange;
  }
  changeLength(value: string) {
    const parsedValue = parseInt(value);
    console.log(parsedValue);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(length);
    }
  }

  onButtonClick() {
    // this.password = "PASSWORD UPDATE !!!";
    // console.log(`About to generate password with the following : 
    // Include the letters: ${this.letterChange},
    // Include the numbers: ${this.numberChange},
    // Include the symbol: ${this.symbolChange}`);


    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.letterChange) {
      validChars += letters;
    }
    if (this.numberChange) {
      validChars += numbers;
    }
    if (this.symbolChange) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

  }

  getPassword() {
    return this.password;
  }

}
