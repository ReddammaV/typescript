import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { EmployeesComponent } from './employees/employees.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LoopsComponent } from './loops/loops.component';
import { Es6Component } from './es6/es6.component';
import { PromisesComponent } from './promises/promises.component';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { GethttpComponent } from './gethttp/gethttp.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'class', component: ClassComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'loops', component: LoopsComponent },
  { path: 'es6', component: Es6Component },
  { path: 'promises', component: PromisesComponent },
  { path: 'http', component: HttpserviceComponent },
  { path: 'gethttp', component: GethttpComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'interceptors', component: InterceptorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
