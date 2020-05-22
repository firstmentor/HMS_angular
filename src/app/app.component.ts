import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  base_url="http://127.0.0.1:8000/";
  subscribeForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient) {   //object bana liya
    this.subscribeForm =this.fb.group({
      email: '',
    });

  }

  subscribe_now(subscribeForm){
    //console.log(subscribeForm.value);
    //header passs
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    //api call
    this.http.post(this.base_url+'api/subscribe',subscribeForm.value,options).subscribe((data)=>{
      console.log(data);
      // this.subscribeForm.reset();
      // alert('subscribe Query Successfully Send');
    });
    //console.log(subscribeForm.value);
  }



}







