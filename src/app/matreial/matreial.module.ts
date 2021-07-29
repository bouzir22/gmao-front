import { NgModule } from '@angular/core';
import{MatDialogModule } from "@angular/material/dialog";
import{MatGridListModule} from "@angular/material/grid-list"
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  imports:[MatDialogModule,MatGridListModule,MatFormFieldModule,MatCardModule,MatIconModule,
    MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule],
  exports:[MatDialogModule,MatGridListModule,MatFormFieldModule,MatCardModule,MatIconModule,
    MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule]

})
export class MaterialModule { }

