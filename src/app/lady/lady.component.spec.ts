import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadyComponent } from './lady.component';

describe('LadyComponent', () => {
  let component: LadyComponent;
  let fixture: ComponentFixture<LadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
