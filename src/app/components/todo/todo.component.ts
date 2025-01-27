import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
tasks:Task[]=[];
newTaskTitle:string='';

constructor(private todoService:TodoService){}
ngOnInit(): void {
  this.tasks=this.todoService.loadTasks();
}



addTask():void{
  if(this.newTaskTitle.trim()==='') return;
  const newTask:Task={
    id:Date.now(),
    title:this.newTaskTitle,
    completed:false
  }
  this.tasks.push(newTask);
  this.newTaskTitle='';
  this.todoService.saveTasks(this.tasks);
}
toggleTaskCompletion(task:Task):void{
  task.completed=!task.completed;
  this.todoService.saveTasks(this.tasks);
}
deleteTask(taskId:number):void{
  this.tasks=this.tasks.filter(task=>task.id!==taskId)
  this.todoService.saveTasks(this.tasks);
}
}
