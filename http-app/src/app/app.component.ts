import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http in Angular';
  name: string = '';
  //profiles: any;
  found: boolean;
  reknown: string;



constructor( private httpClient:HttpClient ){}
 
  onKeyUp(event:any){
    console.log('test', event);
    this.name = event.target.value;
    this.found = false;
  }


  getData(){
    this.httpClient.get('https://my-json-server.typicode.com/vknikhitha/ng4-http-get-post/profiles/?name='+this.name)
      .subscribe(
        (data:any[])=> {
          if(data.length){
            this.reknown = data[0].reknown;
            this.found = true;
          }
          //this.profiles = data;
        }
    
      )
  }

}
