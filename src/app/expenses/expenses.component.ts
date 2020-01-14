import { Component, OnInit } from '@angular/core';
import { Expense } from './expense.model';
import { ApiService } from '../api.service';
import { Store } from './Store.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  
  isCollapsed:boolean=true;
  stores:Store[]=[];
  searchText:string;
  expenses: Expense[]=[];
  selectedStore: Store;
  newstore:Store={
    sId:0,
    name:"Enter name",
    city:"Enter city"
  };
  newExpense:Expense={
    id:0,
    name:"",
    cost:0,
    store:this.newstore
  };
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getAllStores();
    this.getAllExpenses();
  }

  toggleCollapsed(){
    this.isCollapsed=!this.isCollapsed;
  }


  public getAllExpenses(){
    this.selectedStore=null;
    this.api.getAllExpenses().subscribe(
      res=>{
        this.expenses=res;
      },
      err=>{
        alert("Error in getting Expenses!!");
      }
    )
  }


  createNewStore(){
    this.api.postStore(this.newstore).subscribe(
      res=>{
        this.getAllStores();
      },
      err=>{
        alert("Error in Creating Store");
      }
    )

  }

  createNewExpense(storeID:Number){
    this.api.postExpense(this.newExpense,storeID).subscribe(
      res=>{
        this.getSelectedStore(this.selectedStore);
      },
      err=>{
        alert("Error in Creating Expense");
      }
    )

  }

  getSelectedStore(store:Store){
    this.selectedStore=store;
    this.api.getExpensesByStore(store.sId).subscribe(
      res=>{
        this.expenses=res;
      },
      err=>{alert("Error in getting expenses by store id");}
    )
  }

  updateExpense(expenseId:Number,updatedExpense:Expense,storeID:Number){
    
      this.api.updateExpense(expenseId,updatedExpense,storeID).subscribe(
        res=>{},
        err=>{
          alert("Error in Updating "+expenseId);
        }
      )
  }

  updateStore(storeID:Number,updatedStore:Store){
    this.api.updateStore(storeID,updatedStore).subscribe(
      res=>{},
      err=>{
        alert("Error in Updating "+storeID);
      }
    )
  }


  deleteStore(storeID:Number){

    this.api.deleteStore(storeID).subscribe(
      res=>{
          this.getAllStores();
      },
      err=>{
        alert("Error in deleting "+storeID);
      }
    )

  }

  deleteExpense(expenseId:Number,storeID:Number){

    this.api.deleteExpense(expenseId,storeID).subscribe(
      res=>{
          this.getAllExpenses();
      },
      err=>{
        alert("Error in deleting "+expenseId+" With "+storeID);
      }
    )

  }

  
  public getAllStores(){
    this.api.getAllStores().subscribe(
      res=>{
        this.stores=res;
      },
      err=>{
        alert("Error in getting Stores!!");
      } 
    )   
  }

}
