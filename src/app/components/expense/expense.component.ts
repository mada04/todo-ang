import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../task';
import { CommonModule } from '@angular/common';
import { MatFormField} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormField,MatInputModule,MatSelectModule,MatButtonModule,MatDatepickerModule],
  templateUrl:'./expense.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  expenseForm: FormGroup;

  constructor(private fb: FormBuilder, private expenseService: ExpenseService) {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],

      amount: ['', [Validators.required, Validators.min(0.1)]],
      category: ['', Validators.required],
      date: ['', Validators.required],
    })

  }

  addExpense(){
    if(this.expenseForm.valid){
      const newExpense:Expense={
        id:Date.now(),
        ...this.expenseForm.value,
      };
      this.expenseService.addExpense(newExpense),
      this.expenseForm.reset();
    }
  }
}
