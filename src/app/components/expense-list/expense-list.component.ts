import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from '../expense/expense.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule,ExpenseComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
expenses$=this.expenseService.expenses$

constructor(private expenseService:ExpenseService){}

deleteExpense(id:number){
  this.expenseService.removeExpense(id);
}
}
