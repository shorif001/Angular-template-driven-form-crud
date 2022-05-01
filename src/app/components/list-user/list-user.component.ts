import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  allUser:any;



  // https://www.youtube.com/watch?v=n5VzGpFzrEY&t=721s

  userObj = {
    id:'',
    name: '',
    mobile:'',
    email:'',
    password:'',
  }
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getAllUser().subscribe((response)=>{
      console.log(response);
      this.allUser = response;
    })
  }

  

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }

}
