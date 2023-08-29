import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriasComponent } from './loterias.component';

describe('LoteriasComponent', () => {
  let component: LoteriasComponent;
  let fixture: ComponentFixture<LoteriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
