import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
title:string='';
category:string='';
@Output() addTask=new EventEmitter<{title:string;category:string}>();

onSubmit():void{
  if(!this.title.trim()) return;
  this.addTask.emit({
    title:this.title.trim(),
    category:this.category||'General'
  });
  this.title='';
  this.category='';
}

}
