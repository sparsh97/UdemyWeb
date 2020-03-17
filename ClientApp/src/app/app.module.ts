import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { WebDevListComponent } from './category/web-dev-list/web-dev-list.component';
import {ServicesService} from '../app/services.service';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { VideosComponent } from './videos/videos.component';
import { WebComponent } from './videos/web/web.component';
import { GamingListComponent } from './category/gaming-list/gaming-list.component';
import {SafePipe} from '../app/videos/web/custome.pipe';
import {HtmlComponent} from './videos/html.component';
import {CssComponent} from '../app/videos/css.component';
import {SqlComponent} from './videos/sql.component';
import {UnrealComponent} from './videos/unreal.component';
import {SigninComponent} from '../app/auth/signin/signin.component';
import {SignupComponent} from '../app/auth/signup/signup.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    CategoryComponent,
    FooterComponent,
    LogInComponent,
    HomeComponent,
    RegisterComponent,
    CardComponent,
    WebDevListComponent,
    VideosComponent,
    WebComponent,
    GamingListComponent,
    SafePipe,
    HtmlComponent,
    CssComponent,
    SqlComponent,
    UnrealComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule
  ],
  providers: [ServicesService,AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
