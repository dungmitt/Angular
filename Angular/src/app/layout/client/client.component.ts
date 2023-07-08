import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  ischeck = false
  constructor(){
    const getUser = JSON.parse(localStorage.getItem('userInfo')!)
    if(getUser){
      this.ischeck = true
    }
  }
  logout(){
    localStorage.removeItem("userInfo")
    window.location.reload()
  }
}
