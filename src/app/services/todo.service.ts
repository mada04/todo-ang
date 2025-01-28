import { Injectable } from '@angular/core';
import { Task } from '../task';
import { LocalStorageServiceService } from '../local-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // private storageKey = "tasks";

  // constructor() {
 

  // }
  // saveTasks(tasks: Task[]): void {
  //   localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  // }

  // loadTasks():Task[]{
  //   const taskJson=localStorage.getItem(this.storageKey);
  //   return taskJson?JSON.parse(taskJson):[]
  // }

  private tasks:Task[]=[];
  constructor(private localStorageService:LocalStorageServiceService){
    // if (typeof window !== 'undefined' && window.localStorage) {
    //   // Poți folosi localStorage aici
    //   localStorage.setItem('key', 'value');
    // }
    // console.log("lo",localStorage)
    const savedTasks=this.localStorageService.getItem('tasks');
    if(savedTasks){
      this.tasks=JSON.parse(savedTasks);
    }

  }


  getTasks():Task[]{
    return this.tasks;
  }
  addTask(task:Task):void{
    this.tasks.push(task);
    this.saveToLocalStorage();
  }

  updateTask(updateTask:Task):void{
    const index=this.tasks.findIndex((task)=>task.id===updateTask.id);
    if(index!==-1){
      this.tasks[index]=updateTask;
      this.saveToLocalStorage();
    }
  }

  deleteTask(id:number):void{
    this.tasks=this.tasks.filter((task)=>task.id!==id);
    this.saveToLocalStorage();
  }
  private saveToLocalStorage():void{
    this.localStorageService.setItem('tasks',JSON.stringify(this.tasks))
  }
}
