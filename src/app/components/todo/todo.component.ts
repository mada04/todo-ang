import { Component } from '@angular/core';
import { Task } from '../../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
tasks:Task[]=[];
newTaskTitle:string='';
addTask(){
  if(this.newTaskTitle.trim()==='') return;
  const newTask:Task={
    id:Date.now(),
    title:this.newTaskTitle,
    completed:false
  }
  this.tasks.push(newTask);
  this.newTaskTitle='';
}
toggleTaskCompletion(task:Task){
  task.completed=!task.completed;
}
deleteTask(taskId:number){
  this.tasks=this.tasks.filter(task=>task.id!==taskId)
}
}
