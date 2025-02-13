import { Component, OnInit } from '@angular/core';
import { Product } from '../../task';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,MatDialogActions,MatDialogClose,MatDialogContent,ReactiveFormsModule,MatInputModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  
})
export class ProductComponent  {
products:any[]=[];
newProduct:Product={id:0,name:'',price:0,category:'',stock:0}

searchQuery:string='';
constructor(private productService:ProductService,private dialog:MatDialog) {
  this.productService.products$.subscribe(products=>{
    this.products=products
  })
}
// ngOnInit(): void {
//   this.products=this.productService.getProducts();
// }
openDialog(){
  this.dialog.open(DialogComponent),{
    width:'400px',
    panelClass:'custom-dialog'
  };
}


// saveProduct(product:any){
//   if(product.name.trim()&&product.price>0){
//     product.id=Date.now();
//     this.productService.addProduct({...product});
//     product={id:0,name:'',price:0,category:'',stock:0};
//     this.products=this.productService.getProducts();
//   }
// }

// addProduct(){
//   if(this.newProduct.name.trim()&&this.newProduct.price>0){
//     this.newProduct.id=Date.now();
//     this.productService.addProduct({...this.newProduct});
//     this.newProduct={id:0,name:'',price:0,category:'',stock:0};
//     this.products=this.productService.getProducts();
//   }
// }

// deleteProduct(id:number){
//   this.productService.deleteProduct(id);
//   this.products=this.productService.getProducts();
// }
filterProducts():Product[]{
  return this.products.filter(p=>
    p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}

}
