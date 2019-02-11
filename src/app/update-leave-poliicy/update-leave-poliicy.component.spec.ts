import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeavePoliicyComponent } from './update-leave-poliicy.component';

describe('UpdateLeavePoliicyComponent', () => {
  let component: UpdateLeavePoliicyComponent;
  let fixture: ComponentFixture<UpdateLeavePoliicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLeavePoliicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeavePoliicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
