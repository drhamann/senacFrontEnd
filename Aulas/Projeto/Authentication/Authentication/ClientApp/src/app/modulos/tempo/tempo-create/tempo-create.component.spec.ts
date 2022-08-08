import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoCreateComponent } from './tempo-create.component';

describe('TempoCreateComponent', () => {
  let component: TempoCreateComponent;
  let fixture: ComponentFixture<TempoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
