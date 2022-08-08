import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoAtualComponent } from './tempo-atual.component';

describe('TempoAtualComponent', () => {
  let component: TempoAtualComponent;
  let fixture: ComponentFixture<TempoAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoAtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
