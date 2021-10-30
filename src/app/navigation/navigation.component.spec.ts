import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanigationComponent } from './nanigation.component';

describe('NanigationComponent', () => {
  let component: NanigationComponent;
  let fixture: ComponentFixture<NanigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
