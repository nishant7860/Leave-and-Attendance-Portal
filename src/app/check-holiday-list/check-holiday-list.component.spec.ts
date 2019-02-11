import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHolidayListComponent } from './check-holiday-list.component';

describe('CheckHolidayListComponent', () => {
  let component: CheckHolidayListComponent;
  let fixture: ComponentFixture<CheckHolidayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckHolidayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
