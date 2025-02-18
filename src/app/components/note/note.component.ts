import { Component, OnDestroy, OnInit } from '@angular/core';
import { Note } from '../../task';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { Subscription } from 'rxjs';
import { title } from 'process';
@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule,FormsModule,MatTableModule,MatButtonModule,MatInputModule,MatIconModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit, OnDestroy {
displayedColumns:string[]=['id','title','content','date','actions']
dataSource:{id:number,title:string;date:string;content:string}[]=[]

notes:Note[]=[];
newNote:Note={id:0,title:'',content:'',date:''};

dialogSubscription?: Subscription;

formValues = [
  {
    label: 'Titlu',
    name: 'Title',
    type: 'text'
  },
  {
    label: 'Continut',
    name: 'content',
    type: 'text'
  }
]


constructor(private noteService:NoteService, private dialog: MatDialog ){}
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
  console.log('test')
  if(this.newNote.title.trim()&&this.newNote.content.trim()){
    this.newNote.id=Date.now();
    this.newNote.date=new Date().toLocaleString();
    this.noteService.addNote({...this.newNote})
    this.dataSource=this.noteService.getNotes();
  }
}

openDialog(){
  const dialogRef = this.dialog.open(DialogComponent, {
    data: {
      title: 'Adauga Notita',
      formValues: this.formValues
    }
  });
  
  this.dialogSubscription = dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Dialog result:', result);
    }
  });
}

deleteNote(id:number){
  
  this.noteService.deletNote(id);
  this.dataSource=this.noteService.getNotes();
  this.newNote={id:0,title:'',content:'',date:''};
  
}

ngOnDestroy(): void {
  this.dialogSubscription?.unsubscribe()
}

}
