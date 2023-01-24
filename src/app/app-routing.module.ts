import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guards';
import { AdminLayoutComponent } from './components/layouts';
import {
  DashboardComponent,
  LoginComponent,
  UserListComponent,
  AddUserComponent,
  AuthorListComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'users',
        component: UserListComponent,
        data: { title: 'User List', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'user/add',
        component: AddUserComponent,
        data: { title: 'User Add', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'user/profile',
        component: AddUserComponent,
        data: { title: 'User Profile', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'user/edit/:Id',
        component: AddUserComponent,
        data: { title: 'User Edit', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'authors',
        component: AuthorListComponent,
        data: { title: 'Author List', icon: 'fa fa-2x fa-home' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AdminLayoutComponent,
  DashboardComponent,
  LoginComponent,
];
