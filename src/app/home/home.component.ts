import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/auth';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private credentials: CredentialsService) {}

  ngOnInit() {
    this.isLoading = false;
  }

  getSession(): string {
    return this.credentials.credentials.name;
  }
}
