import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-preventive-form',
  templateUrl: './preventive-form.component.html',
  styleUrls: ['./preventive-form.component.css']
})
export class PreventiveFormComponent implements OnInit {

  constructor(private dialgoref:MatDialogRef<PreventiveFormComponent>) {

   }

  ngOnInit(): void {
    console.log("form")
  }

  form : FormGroup =new FormGroup(
{$key:new FormControl(null),
  name:new FormControl('',Validators.required),
  description : new FormControl(''),
  code:new FormControl('',Validators.required),
  date : new FormControl('',Validators.required)}
  )
  onClear(){}

  getData(){console.log(this.form.value);alert('intervention ajouté'); this.onClose()}
  onClose(){this.dialgoref.close()}
}
