import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectDetailsComponent } from './upload-project-details.component';

describe('UploadProjectDetailsComponent', () => {
  let component: UploadProjectDetailsComponent;
  let fixture: ComponentFixture<UploadProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
