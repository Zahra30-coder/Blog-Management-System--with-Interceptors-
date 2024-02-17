import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBlogsComponent } from './features/add-blogs/add-blogs.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { UpdateComponent } from './features/update/update.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ApiService } from './services/api-servicez.service';
import { NavbarComponent } from './partials/navbar/navbar.component';

import { AuthInterceptor } from './auth-interceptor.service';
import { LoggingInterceptor } from './logging-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    
    AddBlogsComponent,
    BlogsComponent,
    UpdateComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
      
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
      
    },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
