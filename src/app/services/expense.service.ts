import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../task';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
private expenses=new BehaviorSubject<Expense[]>(this.loadExpenses())
expenses$=this.expenses.asObservable();

addExpense(expense:Expense){
  const updatedExpenses=[...this.expenses.value,expense];
  this.expenses.next(updatedExpenses);
  this.saveExpenses(updatedExpenses)

} 
private saveExpenses(expenses:Expense[]){
  this.localService.setItem('expenses',JSON.stringify(expenses))
}

  constructor(private localService:LocalStorageServiceService) {this.loadExpenses() }

  private loadExpenses():Expense[]{
    return JSON.parse(this.localService.getItem('expenses')||'[]')
  }
  
  

  removeExpense(id:number){
    const updatedExpenses=this.expenses.value.filter(exp=>exp.id!==id);
    this.expenses.next(updatedExpenses);
    this.saveExpenses(updatedExpenses);
  }
}
