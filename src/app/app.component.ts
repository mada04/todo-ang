import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './components/note/note.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,FormsModule,TodoComponent,CommonModule,RouterLink,NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-project';
}
