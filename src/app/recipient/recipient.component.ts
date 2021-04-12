import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipientService } from './recipient.service';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss']
})
export class RecipientComponent implements OnInit {
  recipientForm!: FormGroup;

  constructor(
    private recipientService: RecipientService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  save() {

  }

  private createForm() {
    this.recipientForm = this.formBuilder.group({
      name: ['', Validators.required],
      rut: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
  }

}
