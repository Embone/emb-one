import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOTDashboardComponent } from './iot-dashboard.component';

describe('IOTDashboardComponent', () => {
  let component: IOTDashboardComponent;
  let fixture: ComponentFixture<IOTDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOTDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IOTDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
