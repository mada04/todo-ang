import { Routes } from "@angular/router";
import { TodoComponent } from "./components/todo/todo.component";

import { NoteComponent } from "./components/note/note.component";
import { ProductComponent } from "./components/product/product.component";
import { ExpenseListComponent } from "./components/expense-list/expense-list.component";
import { ExpenseComponent } from "./components/expense/expense.component";
import { ExpenseChartComponent } from "./components/expense-chart/expense-chart.component";

const routeConfig:Routes=[
    {
        path:'',
        component:TodoComponent,
        title:'To do'
    },
    {
        path:'notite',
        component:NoteComponent,
        title:'Task'
    },
    {
        path:'produse',
        component:ProductComponent,
        title:'Produse'
    },
    {
        path:'cheltuieli',
        component:ExpenseListComponent,
        title:'Cheltuieli'
    }
    ,
    {
        path:'grafic',
        component:ExpenseChartComponent,
        title:'Grafic'
    }
]

export default routeConfig;