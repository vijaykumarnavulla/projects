import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchOrders'
})
export class SearchOrdersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    args = args.toString().toLocaleLowerCase();
    return value.filter((val) => {
      let rVal = (val.ln.toLocaleLowerCase().includes(args)) 
      || (val.qty.toLocaleLowerCase().includes(args))
      || (val.sku.toLocaleLowerCase().includes(args))
      || (val.vsn.toLocaleLowerCase().includes(args))
      || (val.Description && val.Description.toLocaleLowerCase().includes(args))
      || (val.store.toLocaleLowerCase().includes(args))
      || (val.location.toLocaleLowerCase().includes(args))
      || (val.rental.toLocaleLowerCase().includes(args))
      || (val.extended.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }
}