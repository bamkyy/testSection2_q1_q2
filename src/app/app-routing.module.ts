import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Q1Component } from './section2-1/q1/q1.component';
import { Q2Component } from './section2-2/q2/q2.component';
import { Q3Component } from './section2-3/q3/q3.component';
import { HomeMenuPageComponent } from './home-menu-page/home-menu-page.component';
const routes:Routes=[
  {path:'Q1Page',component:Q1Component},
  {path:'Q2Page',component:Q2Component},
  {path:'',component:HomeMenuPageComponent},
  {path:'Q3Page',component:Q3Component}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
