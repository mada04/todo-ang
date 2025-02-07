import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from '../expense/expense.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule,ExpenseComponent,MatTableModule,MatButtonModule,MatInputModule,MatIconModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
expenses$=this.expenseService.expenses$
displayedColumns:string[]=['id','title','amount','category','date']
constructor(private expenseService:ExpenseService){}

deleteExpense(id:number){
  this.expenseService.removeExpense(id);
}
}
