import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbcComponent } from './abbc.component';

describe('AbbcComponent', () => {
  let component: AbbcComponent;
  let fixture: ComponentFixture<AbbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
