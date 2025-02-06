import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogContent,MatDialogModule],
  templateUrl: './dialog.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  taskForm: FormGroup;

constructor(public dialogRef:MatDialogRef<DialogComponent>,
  private fb: FormBuilder,
  @Inject(MAT_DIALOG_DATA) public data:any
){    this.taskForm = this.fb.group({
  title: ['', Validators.required],
});}

closeDialog():void{
  this.dialogRef.close('Dialog inchis');

}

}
