import { Store } from './Store.model';

export interface Expense{
    id:Number;
    name:string;
    cost:Number;
    store:Store;
}