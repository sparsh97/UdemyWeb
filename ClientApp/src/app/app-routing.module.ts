import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { WebDevListComponent } from './category/web-dev-list/web-dev-list.component';
import { WebComponent } from './videos/web/web.component';
import { GamingListComponent } from './category/gaming-list/gaming-list.component';
import { HtmlComponent } from './videos/html.component';
import { CssComponent } from './videos/css.component';
import { SqlComponent } from './videos/sql.component';
import { UnrealComponent } from './videos/unreal.component';
import {AuthRoutingModule} from '../app/auth/auth-routing.module';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component:LogInComponent},
  {path:'home', component: HomeComponent},
  {path: 'register', component: HomeComponent},
  {path: 'web-dev-list', component: WebDevListComponent},
  {path: 'gaming-list', component: GamingListComponent},
  {path: 'web', component: WebComponent},
  {path: 'html', component:HtmlComponent},
  {path: 'css', component:CssComponent},
  {path: 'sql', component:SqlComponent},
  {path: 'unreal', component: UnrealComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AuthRoutingModule]
})
export class AppRoutingModule { }
