import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectManagerComponent } from './user-project-manager.component';

describe('UserProjectManagerComponent', () => {
  let component: UserProjectManagerComponent;
  let fixture: ComponentFixture<UserProjectManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProjectManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
