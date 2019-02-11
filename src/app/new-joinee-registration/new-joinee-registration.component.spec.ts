import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoineeRegistrationComponent } from './new-joinee-registration.component';

describe('NewJoineeRegistrationComponent', () => {
  let component: NewJoineeRegistrationComponent;
  let fixture: ComponentFixture<NewJoineeRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJoineeRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJoineeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
