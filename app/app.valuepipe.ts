import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
        if (value === undefined || value === null){
            return [];
        }
        // create instance vars to store keys and final output
        let keyArr: any[] = Object.keys(value),
            dataArr = [];

        // loop through the object,
        // pushing values to the return array
        keyArr.forEach((key: any) => {
            dataArr.push(value[key]);
        });

        // return the resulting array
        return dataArr;
    }
}