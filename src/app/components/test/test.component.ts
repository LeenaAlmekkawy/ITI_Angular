import { Component } from '@angular/core';
import { MobileService } from '../../services/mobile-service';
import { MaxLengthPipe } from '../../pipes/max-length-pipe';
@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  age: number = 10;
  name: string = "Leena Almekkawy";
  constructor(private _mobileService: MobileService) {

  }

  employees: string[] = ['leena', 'safa'];
  changeAge(newAge: number) {
    this.age = newAge;
  }
  isValidMobile(mobile: string): boolean {
    return (this._mobileService.isValid(mobile));
  }
  getName(): string {
    return this.name;
  }
}
