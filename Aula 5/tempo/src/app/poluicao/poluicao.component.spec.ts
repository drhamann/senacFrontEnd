import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoluicaoComponent } from './poluicao.component';

describe('PoluicaoComponent', () => {
  let component: PoluicaoComponent;
  let fixture: ComponentFixture<PoluicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoluicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoluicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
