import { Component, OnInit } from '@angular/core';
import { Note } from '../../task';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule,FormsModule,MatTableModule,MatButtonModule,MatInputModule,MatIconModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {
displayedColumns:string[]=['id','title','content','date','actions']
dataSource:{id:number,title:string;date:string;content:string}[]=[]

notes:Note[]=[];
newNote:Note={id:0,title:'',content:'',date:''};


constructor(private noteService:NoteService){}
ngOnInit(){
this.loadData();
}
loadData(){
  const storedData=this.noteService.getNotes();
  this.dataSource=storedData;
  // this.notes=storedData;
  // this.dataSource=this.noteService.getNotes();
}

// saveData(){

// }

addNote(){
  if(this.newNote.title.trim()&&this.newNote.content.trim()){
    this.newNote.id=Date.now();
    this.newNote.date=new Date().toLocaleString();
    this.noteService.addNote({...this.newNote})
    this.newNote={id:0,title:'',content:'',date:''};
    this.dataSource=this.noteService.getNotes();
  }
}


deleteNote(id:number){

  this.noteService.deletNote(id);
  this.dataSource=this.noteService.getNotes();

}

}
