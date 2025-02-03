import { Injectable } from '@angular/core';
import { Note } from '../task';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
private notes:Note[]=[];
  constructor(private localStorageService:LocalStorageServiceService) { this.loadNotes();}

private saveNotes(){
  this.localStorageService.setItem('notes',JSON.stringify(this.notes))
}

private loadNotes(){
  const savedNotes=this.localStorageService.getItem('notes');
  if(savedNotes){
    this.notes=JSON.parse(savedNotes);
  }
}

getNotes():Note[]{
  return this.notes;
}

addNote(note:Note){
  this.notes.push(note);
  this.saveNotes();
}

deletNote(id:number):void{
  this.notes=this.notes.filter(n=>n.id!==id);

  this.saveNotes();
}



}
