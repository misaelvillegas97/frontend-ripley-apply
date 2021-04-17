import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipient } from '@app/@core/models/recipient.interface';
import { routerConstant } from '@app/@shared/constants/constants';
import { CredentialsService } from '@app/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  constructor(private http: HttpClient, private credentials: CredentialsService) {}

  public getList(): Observable<Recipient[]> {
    return this.http
      .get<Recipient[]>(routerConstant.RECIPIENT, { params: { id_user: this.credentials.credentials.id } })
      .pipe(
        map((recipient) => {
          return recipient as Recipient[];
        })
      );
  }

  public getById(recipient_id: string): Observable<Recipient> {
    return this.http
      .get<Recipient>(routerConstant.RECIPIENT + '/search', { params: { id_user: this.credentials.credentials.id, id_recipient: recipient_id } })
      .pipe(
        map((recipient) => {
          return recipient as Recipient;
        })
      );
  }

  public saveRecipient(recipient: Recipient): Observable<Recipient> {
    recipient.id_user = this.credentials.credentials.id;
    return this.http.post<Recipient>(routerConstant.RECIPIENT, recipient, {
      params: { id_user: this.credentials.credentials.id },
    });
  }
}
