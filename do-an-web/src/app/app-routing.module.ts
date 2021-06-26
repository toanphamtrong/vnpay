import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./component/client/client.module').then(m => m.ClientModule)},
  {path: 'admin', loadChildren: () => import('./component/admin/Admincomponents.module').then(m => m.AdminsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
