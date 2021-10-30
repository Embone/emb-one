import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterList2Component } from './footer-list2.component';

describe('FooterList2Component', () => {
  let component: FooterList2Component;
  let fixture: ComponentFixture<FooterList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
