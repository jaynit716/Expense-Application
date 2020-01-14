import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from './expenses/expense.model';
import { FeedbackModel } from './feedback/feedback.model';
import { Store } from './expenses/Store.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private BASE_URL="http://localhost:8080";
  private ALL_EXPENSES_URL=`${this.BASE_URL}\\expense`;
  private POST_FEEDBACK_URL=`${this.BASE_URL}\\feedback`;
  private GET_STORES_URL=`${this.BASE_URL}\\store`;
  


  ngOnInit(){
    
  }

  constructor(private http:HttpClient) { }

  getAllExpenses():Observable<Expense[]>{
    return this.http.get<Expense[]>(this.ALL_EXPENSES_URL);
  }

  getExpensesByStore(storeID:Number):Observable<Expense[]>{
    return this.http.get<Expense[]>(this.GET_STORES_URL+"/"+storeID+"/expense");
  }

  postfeedback(feedback:FeedbackModel): Observable<any>{
    return this.http.post(this.POST_FEEDBACK_URL,feedback);  
  }

  getAllStores():Observable<Store[]>{
    return this.http.get<Store[]>(this.GET_STORES_URL);
  }

  postStore(store:Store):Observable<any>{
    return this.http.post(this.GET_STORES_URL,store);
  }
  postExpense(expense:Expense,storeID:Number):Observable<any>{
    return this.http.post(this.GET_STORES_URL+"/"+storeID+"/expense",expense);
  }

  updateExpense(expenseId:Number,expense:Expense,storeID:Number):Observable<Expense>{
    return this.http.put<Expense>(this.GET_STORES_URL+"/"+storeID+"/expense/"+expenseId,expense);
  }

  updateStore(storeID:Number,store:Store):Observable<Store>{
    return this.http.put<Store>(this.GET_STORES_URL+"/"+storeID,store);
  }

  deleteStore(storeID:Number):Observable<any>{
    return this.http.delete(this.GET_STORES_URL+"/"+storeID);
  }
  deleteExpense(expenseId:Number,storeID:Number):Observable<any>{
    return this.http.delete(this.GET_STORES_URL + "/" + storeID+"/expense/"+expenseId); 
  }


}
