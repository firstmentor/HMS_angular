import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.css']
})
export class RoomBookingRequestComponent implements OnInit {

  base_url="http://127.0.0.1:8000/";
  booking_request:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient) {
    this.booking_request =this.fb.group({
      name: '',
      email: '',
      mobile_no: '',
      address: '',
      from_date: '',
      to_date: '',
      no_of_member: '',
      no_of_rooms: '',
      room_type: '',
     

    });

   }

  ngOnInit(): void {
  }

  send_request(booking_request)
  {
     //console.log(booking_request.value);
     //header passs
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
  let options={
    headers:headers,
  };
  //api call
  this.http.post(this.base_url+'api/room_booking_request',booking_request.value,options).subscribe((data)=>{
    console.log(data);
     this.booking_request.reset();
    alert('subscribe Query Successfully Send');
  });
  }

}
