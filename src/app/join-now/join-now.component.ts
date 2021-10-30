import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css']
})
export class JoinNowComponent  {

  title = 'my-new-project';
  email='string';
  password='string';
  loginUser()
  {
      if(this.email=="admin@gmail.com" && this.password=="Admin")
      {
          alert("Well-come to Embone Technology")
      }
      else
      {
          alert("please check your details")
}
  }
}




