import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MarketListComponent } from './components/market-list/market-list.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path:'market',component: MarketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
