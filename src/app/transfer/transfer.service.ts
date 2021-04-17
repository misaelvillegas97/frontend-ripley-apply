import { map } from 'rxjs/operators';
import { routerConstant } from '@app/@shared/constants/constants';
import { Observable } from 'rxjs';
import { Transfer } from './../@core/models/transfer.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private http: HttpClient, private credentials: CredentialsService) {}

  public getList(): Observable<Transfer[]> {
    return this.http
      .get<Transfer[]>(routerConstant.TRANSFER, { params: { id_user: this.credentials.credentials.id } })
      .pipe(
        map((transfer) => {
          return transfer as Transfer[];
        })
      );
  }

  public saveTransfer(transfer: Transfer): Observable<Transfer> {
    transfer.id_user = this.credentials.credentials.id;
    return this.http.post<Transfer>(routerConstant.TRANSFER, transfer, {
      params: { id_user: this.credentials.credentials.id },
    });
  }
}
