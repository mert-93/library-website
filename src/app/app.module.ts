import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgSearchFilterModule } from 'ng-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatModule } from './utils';
import {
  DialogWindowComponent,
  AdminFooterComponent,
  AdminHeaderComponent,
  AdminSidebarComponent,
  ChangePasswordComponent,
  PasswordControlWindowComponent,
  LoginWindowComponent,
  PaginationComponent,
} from './components';
import { FormsModule } from '@angular/forms';
import {
  UserListComponent,
  DashboardComponent,
  LoginComponent,
  AddUserComponent,
  AuthorListComponent,
} from './pages';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DialogWindowComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    UserListComponent,
    DashboardComponent,
    LoginComponent,
    ChangePasswordComponent,
    AddUserComponent,
    PasswordControlWindowComponent,
    LoginWindowComponent,
    PaginationComponent,
    AuthorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    FormsModule,
    HttpClientModule,
    NgSearchFilterModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    DragDropModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
