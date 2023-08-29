import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbreveComponent } from './embreve.component';

describe('EmbreveComponent', () => {
  let component: EmbreveComponent;
  let fixture: ComponentFixture<EmbreveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbreveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbreveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
