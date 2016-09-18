import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reducecharacters'})
export class ReduceCharactersPipe implements PipeTransform {
  transform(value: string, charsToAccept: number): string {
    if (value.length > charsToAccept){
        var greater = value.length - charsToAccept;
        value = value.substring(0, value.length - greater);
    }
    return value;
  }
}
