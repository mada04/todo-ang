import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogModule, CommonModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './dialog.component.css',
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class DialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    private productService: ProductService,

  ) {
    this.form = this.fb.group({
      
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }


  closeDialog() {
    if (this.form.valid) {
      this.productService.addProduct(this.form.value)
      this.dialogRef.close('Dialog inchis');
    }

  }

}
