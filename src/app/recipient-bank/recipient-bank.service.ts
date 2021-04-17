import { Bank } from './../@core/models/bank.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipientBank } from '@app/@core/models/recipient_bank.interface';
import { routerConstant } from '@app/@shared/constants/constants';
import { CredentialsService } from '@app/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipientBankService {
  constructor(private http: HttpClient, private credentials: CredentialsService) {}

  public getList(recipient_id?: string): Observable<RecipientBank[]> {
    if (recipient_id) {
      return this.http
        .get<RecipientBank[]>(routerConstant.RECIPIENT_BANK, {
          params: { id_user: this.credentials.credentials.id, id_recipient: recipient_id },
        })
        .pipe(
          map((recipientBank) => {
            return recipientBank as RecipientBank[];
          })
        );
    }

    return this.http
      .get<RecipientBank[]>(routerConstant.RECIPIENT_BANK, { params: { id_user: this.credentials.credentials.id } })
      .pipe(
        map((recipientBank) => {
          console.log(recipientBank);
          return recipientBank as RecipientBank[];
        })
      );
  }

  public getRecipientBankById(recipient_bank_id: string, recipient_id?: string): Observable<RecipientBank> {
    return this.http
      .get<RecipientBank>(routerConstant.RECIPIENT_BANK, {
        params: {
          id_user: this.credentials.credentials.id,
          id_recipient: recipient_id,
          id_recipient_bank: recipient_bank_id,
        },
      })
      .pipe(
        map((recipientBank: RecipientBank) => {
          return recipientBank as RecipientBank;
        })
      );
  }

  public getBankList(): Observable<Bank[]> {
    return this.http.get<Bank[]>(routerConstant.BANKS).pipe(
      map((banks: Bank[]) => {
        return banks as Bank[];
      })
    );
  }

  public saveRecipientAccount(account: RecipientBank): Observable<RecipientBank> {
    return this.http.post<RecipientBank>(routerConstant.RECIPIENT_BANK, account, {
      params: { id_user: this.credentials.credentials.id },
    });
  }
}
