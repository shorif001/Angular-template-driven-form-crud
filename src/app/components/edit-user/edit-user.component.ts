import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  
  userObj = {
    id:'',
    fullName: '',
    mobile:'',
    email:'',
    password:'',
  }

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.userService.getStudentById(this.activatedRoute.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res);

      this.userObj = {
        id: res['id'],
        fullName: res['fullName'],
        mobile: res['mobile'],
        email: res['email'],
        password: res['password'],
      }
    })
  }

 

  updateUser(){
    this.userService.updateUser(this.activatedRoute.snapshot.params['id'], this.userObj).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('list')
    })
  }

}
