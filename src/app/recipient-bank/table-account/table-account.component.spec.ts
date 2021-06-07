import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAccountComponent } from './table-account.component';

describe('TableAccountComponent', () => {
  let component: TableAccountComponent;
  let fixture: ComponentFixture<TableAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAccountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
