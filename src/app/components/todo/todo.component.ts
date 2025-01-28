import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-todo',
  standalone: true,

  imports: [CommonModule,FormsModule,TaskFormComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
tasks:Task[]=[];
filters = ['Toate', 'Complete', 'Incomplete'];
currentFilter = 'Toate';
filteredTasks :Task[]=[];
constructor(private todoService:TodoService){}
ngOnInit(): void {
  this.tasks=this.todoService.getTasks();
  this.filteredTasks=this.tasks
}



addTask(task:{title:string;category:string}):void{
 
  const newTask:Task={
    id:Date.now(),
    title:task.title,
    completed:false,
    category:task.category
  }

 
  this.todoService.addTask(newTask);
  this.tasks=this.todoService.getTasks();
}
toggleTaskCompletion(task:Task):void{
  task.completed=!task.completed;
  this.todoService.updateTask(task);
}
deleteTask(taskId:number):void{
 this.todoService.deleteTask(taskId);
 this.tasks=this.todoService.getTasks();
  // this.todoService.saveTasks(this.tasks);
}

// get filteredTasks():Task[]{
//   if(this.filters==='Toate') return this.tasks;
//   if(this.filters==='completed') return this.tasks.filter((t)=>t.completed)
//   return this.tasks.filter((t)=>!t.completed)
// }

setFilter(filter:string){
  this.currentFilter = filter;

  if (filter === 'Toate') {
    this.filteredTasks = this.tasks;
  } else if (filter === 'Complete') {
    this.filteredTasks = this.tasks.filter((task) => task.completed);
  } else if (filter === 'Incomplete') {
    this.filteredTasks = this.tasks.filter((task) => !task.completed);
  }
  else {this.filteredTasks = this.tasks;} 
}


}
