import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'after'
})

export class AfterPipe implements PipeTransform{

    transform(value:any, count:number):any{
        if (undefined === count) return value;

        if (typeof value === 'object'){
            value = Array.prototype.slice.call(value);
        }

        return (Array.isArray(value))
            ? value.slice(count)
            : value;
    }
}


