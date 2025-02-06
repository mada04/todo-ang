import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule,MatMenuModule,MatIconModule,MatSidenavModule,MatToolbarModule,RouterModule],
  templateUrl: './menu.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
