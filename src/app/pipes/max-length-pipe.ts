import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength',
  standalone: false
})
export class MaxLengthPipe implements PipeTransform {

  transform(name: string, length: number = 10): string {
    if (!name) return '';
    return name.substring(0, length);
  }


}
