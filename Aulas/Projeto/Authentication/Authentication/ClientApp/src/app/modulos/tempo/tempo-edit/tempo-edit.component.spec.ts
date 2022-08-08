import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoEditComponent } from './tempo-edit.component';

describe('TempoEditComponent', () => {
  let component: TempoEditComponent;
  let fixture: ComponentFixture<TempoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
