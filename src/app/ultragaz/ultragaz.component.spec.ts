import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltragazComponent } from './ultragaz.component';

describe('UltragazComponent', () => {
  let component: UltragazComponent;
  let fixture: ComponentFixture<UltragazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltragazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltragazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
