export interface Task {
    id:number;
    title:string;
    completed:boolean;
    category:string;
}
export interface Note{
    id:number;
    title:string;
    content:string;
    date:string;
}


export interface Product {
    id:number;
    name:string;
    price:number;
    category:string;
    stock:number;
}
export interface Expense{
    id:number;
    title:string;
    amount:number;
    category:string;
    date:string;
}