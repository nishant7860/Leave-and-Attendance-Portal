import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {LeavePolicyComponent} from'./leave-policy/leave-policy.component';
import{LogoutComponent} from './logout/logout.component';
import{SliderComponent} from './slider/slider.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'notifications', component: NotificationsComponent },

  { path: 'logout', component: LogoutComponent },

  { path: 'leave', component: LeavePolicyComponent },
{path: 'slider', component: SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
