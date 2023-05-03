import {Component, OnInit} from '@angular/core';
import {RecordService} from "../../service/record.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationsService} from "../../service/notification.service";

@Component({
  selector: 'app-records-info',
  templateUrl: './records-info.component.html',
  styleUrls: ['./records-info.component.css']
})
export class RecordsInfoComponent implements OnInit{
  id:any;
  record:any;

  constructor(private service:RecordService, private route:ActivatedRoute,private router:Router,
              private notifications:NotificationsService) {
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id)
      .subscribe(data => {
        this.record = data;
  }, error => console.log(error));
    this.notifications.showInfoMessage("This is info for user"+ this.id);
  }

  deleteRecord(id: string) {
    this.service.delete(id).subscribe(() => {
      this.router.navigate(['/records/list']);

    });
  }
}
