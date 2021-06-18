import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  public makestring(length: number) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public getColor(input: string) {
    if (input.indexOf('0') != -1) {
      return 'blue'
    }
    if (this.isNumber(input)) {
      return 'green';
    }
    if (this.isPalindrome(input)) {
      return 'red'
    }
    return 'black'
  }

  private isPalindrome(str: string) {
    return str.split('').reverse().join('') === str;
  }

  private isNumber(str: string) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(str);
  }
}
