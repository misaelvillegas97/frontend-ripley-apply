import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecipientsComponent } from './table-recipients.component';

describe('TableRecipientsComponent', () => {
  let component: TableRecipientsComponent;
  let fixture: ComponentFixture<TableRecipientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRecipientsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
