import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOTGatewayComponent } from './iot-gateway.component';

describe('IOTGatewayComponent', () => {
  let component: IOTGatewayComponent;
  let fixture: ComponentFixture<IOTGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOTGatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IOTGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
