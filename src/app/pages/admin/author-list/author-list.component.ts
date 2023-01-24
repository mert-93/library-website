import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { DialogWindowComponent } from 'src/app/components';
import { Author } from 'src/app/models';
import { AuthorService } from 'src/app/utils';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  constructor(
    private _authorService: AuthorService,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _dialog: MatDialog
  ) {}

  authors: Array<Author>;
  searchText: string;
  paginationConfig = {
    id: 'authorList',
    itemsPerPage: 10,
    currentPage: 1,
  };
  async ngOnInit() {
    try {
      this.authors = <Array<Author>>await this._authorService.listAsync();
    } catch (error) {
      this._authorService.errorNotification(error);
    }
  }

  async authorDelete(Id) {
    const diologRef = this._dialog.open(DialogWindowComponent, {
      data: {
        message: 'Are you sure you want to delete the author ?',
        icon: 'fa fa-exclamation',
      },
    });

    diologRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        try {
          await this._authorService.deleteAsync({ Id });
          this.authors.splice(
            this.authors.findIndex((author) => author.Id == Id),
            1
          );
          let notificationMessage: string;
          this._translateService
            .get('Author information was successfully deleted')
            .subscribe((value) => (notificationMessage = value));

          this._snackBar.open(notificationMessage, 'X', {
            duration: 3000,
            panelClass: 'notification__success',
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
          });
        } catch (error) {
          this._authorService.errorNotification(error);
        }
      }
    });
  }
}
