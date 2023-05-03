import {Component, OnInit} from '@angular/core';
import {RecordService} from "../../service/record.service";
import {Router, RouterOutlet} from "@angular/router";
import {NotificationsService} from "../../service/notification.service";

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit{
  displayedColumns: string[] = [ 'id','firstName', 'lastName', 'email','type'
    ,'password','subjects','sex','phone','do'];

  records: any[]=[];

  constructor(private service: RecordService, private router: Router,
              private notifications:NotificationsService) {}

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.service.getAll().subscribe((data) => {
      this.records = data;
    });

    this.service.getAll().subscribe(
      (data) => {
        this.records = data;
      },
      (error) => {
        console.error('Error getting records:', error);
        this.notifications.showErrorMessage('Error getting records');
      }
    );
  }
  deleteRecord(id: string) {
    this.service.delete(id).subscribe(() => {
      this.loadRecords();
    },(error) =>
    this.notifications.showErrorMessage("error"));
  }

  updateRecord(id:string){
    this.router.navigate(['records/update',id]);
  }

  recordDetails(id: string){
    this.router.navigate(['records/details', id]);
  }
}
