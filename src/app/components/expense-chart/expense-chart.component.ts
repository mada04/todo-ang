import { AfterViewInit, Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';

@Component({
  selector: 'app-expense-chart',
  standalone: true,
  imports: [],
  template: '<canvas id="expenseChart"></canvas>',
  styleUrl: './expense-chart.component.css'
})
export class ExpenseChartComponent implements AfterViewInit{
constructor(private expenseService:ExpenseService){}
ngAfterViewInit(): void {
  Chart.register(...registerables);

  const ctx = document.getElementById('myDoughnutChart') as HTMLCanvasElement;
  this.expenseService.expenses$.subscribe(expenses => {
    const categories = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {} as Record<string, number>);
    new Chart('expenseChart', {
      type: 'doughnut',
      data: {
        labels: Object.keys(categories),
        datasets: [{ data: Object.values(categories), backgroundColor: ['red', 'blue', 'green'] }],
      },})})
}
}
