import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  allUser: any;

  constructor(private userService:UserService, private router:Router ) { }

  ngOnInit(): void {
  }



  addUser(formObj:any){
    // console.log(formObj);
    this.userService.createUser(formObj).subscribe((response)=>{
      // console.log(response);
      this.router.navigateByUrl('list')
    })
  }


}
