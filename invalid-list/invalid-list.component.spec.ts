import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidListComponent } from './invalid-list.component';

describe('InvalidListComponent', () => {
  let component: InvalidListComponent;
  let fixture: ComponentFixture<InvalidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
