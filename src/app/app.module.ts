import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateHolidayListComponent } from './update-holiday-list/update-holiday-list.component';
import { UpdateLeavePoliicyComponent } from './update-leave-poliicy/update-leave-poliicy.component';
import { NewJoineeRegistrationComponent } from './new-joinee-registration/new-joinee-registration.component';
import { UploadProjectDetailsComponent } from './upload-project-details/upload-project-details.component';
import { ViewLeaveStatusComponent } from './view-leave-status/view-leave-status.component';
import { CheckHolidayListComponent } from './check-holiday-list/check-holiday-list.component';
import { UserEmployeeComponent } from './user-employee/user-employee.component';
import { UserProjectManagerComponent } from './user-project-manager/user-project-manager.component';
import { UserHrComponent } from './user-hr/user-hr.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LeavePolicyComponent } from './leave-policy/leave-policy.component';
import { LogoutComponent } from './logout/logout.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NotificationsComponent,
    AboutComponent,
    ContactComponent,
    UpdateHolidayListComponent,
    UpdateLeavePoliicyComponent,
    NewJoineeRegistrationComponent,
    UploadProjectDetailsComponent,
    ViewLeaveStatusComponent,
    CheckHolidayListComponent,
    UserEmployeeComponent,
    UserProjectManagerComponent,
    UserHrComponent,
    NavComponent,
    FooterComponent,
    LeavePolicyComponent,
    LogoutComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
