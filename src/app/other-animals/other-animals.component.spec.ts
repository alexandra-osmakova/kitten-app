import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAnimalsComponent } from './other-animals.component';

describe('OtherAnimalsComponent', () => {
  let component: OtherAnimalsComponent;
  let fixture: ComponentFixture<OtherAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
