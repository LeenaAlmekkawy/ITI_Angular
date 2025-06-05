import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }
  isValid(mobile: string): boolean {
    //but the valid here 
    return true;
  }
}
