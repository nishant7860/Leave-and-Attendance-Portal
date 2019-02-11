import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHolidayListComponent } from './update-holiday-list.component';

describe('UpdateHolidayListComponent', () => {
  let component: UpdateHolidayListComponent;
  let fixture: ComponentFixture<UpdateHolidayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHolidayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
