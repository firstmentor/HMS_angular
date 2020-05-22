import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContectComponent } from './contect/contect.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {'path':'','component':HomeComponent},
  {'path':'about','component':AboutComponent},
  {'path':'contact','component':ContectComponent},
  {'path':'auth','component':AuthenticationComponent},
  {'path':'room-booking-request','component':RoomBookingRequestComponent},
  {'path':'feedback','component':FeedbackComponent},
  {'path':'product','component':ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
