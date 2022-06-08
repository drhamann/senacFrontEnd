import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoluicaoHomeComponent } from './poluicao-home.component';

describe('PoluicaoHomeComponent', () => {
  let component: PoluicaoHomeComponent;
  let fixture: ComponentFixture<PoluicaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoluicaoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoluicaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
