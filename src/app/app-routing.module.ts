import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:HomeComponent,data:{breadcrumb:'Home'}},
  {path:'not-found',component:NotFoundComponent,data:{breadcurmb:'Not Found'}},
  {path:'server-error',component:ServerErrorComponent,data:{breadcurmb:'Server Error'}},
  {path:'test-error',component:TestErrorComponent,data:{breadcurmb:'Test Error'}},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then(mo=>mo.ShopModule),data:{breadcurmb:'Shop'}},
  {path:'**',redirectTo:'not-found',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
