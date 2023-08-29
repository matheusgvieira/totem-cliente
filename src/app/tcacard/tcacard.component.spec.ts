import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcacardComponent } from './tcacard.component';

describe('TcacardComponent', () => {
  let component: TcacardComponent;
  let fixture: ComponentFixture<TcacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
