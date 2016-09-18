import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filtervalues' })
export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
        if (value === undefined || value === null || value.length === 0) {
            return [];
        }
        var foundArray = [];
        var searchTerm = args,
            index = -1;
        for (var i = 0, len = value.length; i < len; i++) {
            if (value[i].id === searchTerm) {
                foundArray.push(value[i]);
                break;
            }
        }
        return foundArray;  
    }
}

