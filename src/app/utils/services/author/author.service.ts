import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(
    private _apiFetchService: ApiFetchService,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService
  ) {}

  async listAsync() {
    return await this._apiFetchService.requestAsync(
      'GET',
      'author',
      null,
      true
    );
  }

  async deleteAsync(values) {
    return await this._apiFetchService.requestAsync(
      'DELETE',
      'author',
      values,
      true
    );
  }

  async findAsync(authorID) {
    return await this._apiFetchService.requestAsync(
      'GET',
      `author/${authorID}`,
      null,
      true
    );
  }

  async insertAsync(values) {
    return await this._apiFetchService.requestAsync(
      'POST',
      'author',
      values,
      true
    );
  }

  async updateAsync(values) {
    return await this._apiFetchService.requestAsync(
      'PUT',
      'author',
      values,
      true
    );
  }

  errorNotification(error) {
    let errorMessage: string;
    switch (error.status) {
      case 417:
        this._translateService
          .get('Please enter correct author information !')
          .subscribe((value) => (errorMessage = value));
        break;
      case 404:
        this._translateService
          .get('No author record found in the system !')
          .subscribe((value) => (errorMessage = value));
        break;
      default:
        this._translateService
          .get(
            'Server error occurred, please try again later If the error persists, we ask you to report this to the authorities'
          )
          .subscribe((value) => (errorMessage = value));
        break;
    }
    this._snackBar.open(errorMessage, 'X', {
      duration: 4000,
      panelClass: 'notification__error',
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }
}
