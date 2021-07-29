import { PreventiveFormComponent } from '../../forms/preventive-form/preventive-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-preventives',
  templateUrl: './preventives.component.html',
  styleUrls: ['./preventives.component.css']
})
export class PreventivesComponent implements OnInit {

  constructor(public dialog :MatDialog) { }

  ngOnInit(): void {
  }


  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }]
  };

  handleDateClick(arg) {
  //  alert('date click! ' + arg.dateStr)
    this.openDialog();
    console.log('date click! ' + arg.dateStr)
  }



  openDialog(){
    const dialogConfig =new MatDialogConfig() ;
    dialogConfig.width="60%";
    dialogConfig.height="50%";


    this.dialog.open(PreventiveFormComponent,dialogConfig);


  }



}
