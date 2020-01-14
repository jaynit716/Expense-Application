import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from './expenses/expense.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchTextPipe implements PipeTransform {

  transform(expenses:Expense[], searchText:string): Expense[] {
    if(searchText==null || searchText===""){
      return expenses;
    }
    return expenses.filter(e=>e.name.includes(searchText));
  }

}
