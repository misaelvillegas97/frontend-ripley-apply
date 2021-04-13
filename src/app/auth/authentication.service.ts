import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultUrlSerializer } from '@angular/router';
import { User } from '@app/@core/models/user.interface';
import { routerConstant } from '@app/@shared/constants/constants';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private http: HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<User> {
    // Replace by proper authentication call
    return this.http
      .get<User>(routerConstant.USERS, { params: { rut: context.username } })
      .pipe(
        map((user) => {
          this.credentialsService.setCredentials(user, context.remember);
          return user;
        })
      );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
