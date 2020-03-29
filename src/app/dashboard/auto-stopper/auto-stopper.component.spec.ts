import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoStopperComponent } from './auto-stopper.component';

describe('AutoStopperComponent', () => {
  let component: AutoStopperComponent;
  let fixture: ComponentFixture<AutoStopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoStopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoStopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
