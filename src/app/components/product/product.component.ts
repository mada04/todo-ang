import { Component, OnInit } from '@angular/core';
import { Product } from '../../task';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,MatDialogActions,MatDialogClose,MatDialogContent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
products:Product[]=[];
newProduct:Product={id:0,name:'',price:0,category:'',stock:0}

searchQuery:string='';
constructor(private productService:ProductService,private dialog:MatDialog) {
  
}
ngOnInit(): void {
  this.products=this.productService.getProducts();
}
openDialog(){
  const dialogRef=this.dialog.open(DialogComponent,{
    width:"300px",
    data:{message:'Acesta este un mesaj trimis prin props!'}
  })

  dialogRef.afterClosed().subscribe(result=>{
    console.log('Dialogul a fost inchis cu mesajul',result)
  })
}

addProduct(){
  if(this.newProduct.name.trim()&&this.newProduct.price>0){
    this.newProduct.id=Date.now();
    this.productService.addProduct({...this.newProduct});
    this.newProduct={id:0,name:'',price:0,category:'',stock:0};
    this.products=this.productService.getProducts();
  }
}

deleteProduct(id:number){
  this.productService.deleteProduct(id);
  this.products=this.productService.getProducts();
}
filterProducts():Product[]{
  return this.products.filter(p=>
    p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}

}
