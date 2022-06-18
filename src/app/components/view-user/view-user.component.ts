import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  studentData:any = [];
  // userId:any = [];
  ngOnInit(): void {

    this.userService.viewStudent(this.activatedRoute.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.studentData = result;
    })
  }

}
