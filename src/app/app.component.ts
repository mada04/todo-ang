import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './components/note/note.component';
import { ProductComponent } from './components/product/product.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,FormsModule,TodoComponent,CommonModule,RouterLink,NoteComponent,ProductComponent,ExpenseListComponent,MenuComponent,ExpenseChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-project';
}
