import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { EmployeesComponent } from './employees/employees.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConditionsComponent } from './conditions/conditions.component';
import { LoopsComponent } from './loops/loops.component';
import { Es6Component } from './es6/es6.component';
import { PromisesComponent } from './promises/promises.component';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { GethttpComponent } from './gethttp/gethttp.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Child1Component } from './rxjs/child1/child1.component';
import { Child2Component } from './rxjs/child2/child2.component';
import { Child3Component } from './rxjs/child3/child3.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { httpInterceptProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassComponent,
    EmployeesComponent,
    HotelsComponent,
    ConditionsComponent,
    LoopsComponent,
    Es6Component,
    PromisesComponent,
    HttpserviceComponent,
    GethttpComponent,
    RxjsComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    InterceptorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
