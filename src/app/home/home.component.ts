import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //contectForm:FormGroup; //object
  all_services:any;
  base_url="http://127.0.0.1:8000/";
  
  contectForm =this.fb.group({
    name:'',
    email: '',
    mobile_no:'',
    message:''

  });

  constructor(private fb:FormBuilder, private http:HttpClient) {   //object bana liya
    

   }

  ngOnInit(): void {
    this.http.get(this.base_url+'api/get_service').subscribe((data)=>{
        //console.log(data);
        let resp1 =Array.from(Object.keys(data),k=>data[k]);
        if(resp1[0]=='true')
        {
          this.all_services=resp1[2];
        }
        console.log(this.all_services);

    });
  }

  save_contact(contectForm)
  {
    //console.log(contectForm.value);
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'api/contect_form',contectForm.value,options).subscribe((data)=>{
      //console.log(data);
      this.contectForm.reset();
      alert('Contact Query Successfully Send');
    });
    //console.log(contectForm.value);
  }

}
