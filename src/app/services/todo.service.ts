import { Injectable } from '@angular/core';
import { Task } from '../task';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageKey = "tasks";

  constructor() {


  }
  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  loadTasks():Task[]{
    const taskJson=localStorage.getItem(this.storageKey);
    return taskJson?JSON.parse(taskJson):[]
  }
}
