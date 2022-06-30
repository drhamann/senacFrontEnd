import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoHomeComponent } from './tempo-home.component';

describe('TempoHomeComponent', () => {
  let component: TempoHomeComponent;
  let fixture: ComponentFixture<TempoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
