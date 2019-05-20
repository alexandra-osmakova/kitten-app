import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormAnswerComponent } from './user-form-answer.component';

describe('UserFormAnswerComponent', () => {
  let component: UserFormAnswerComponent;
  let fixture: ComponentFixture<UserFormAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
