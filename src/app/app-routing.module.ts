import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './Modules/admin/admin.module';
import { AdminDashboardComponent } from './Modules/admin/components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'admin',
    canActivate:[AuthGuard],
    loadChildren: () => import('./Modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canActivate:[AuthGuard],
    loadChildren: () => import('./Modules/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
