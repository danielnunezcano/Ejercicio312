import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProwebAccodionCeldaComponent } from './proweb-accodion-celda.component';

describe('ProwebAccodionCeldaComponent', () => {
  let component: ProwebAccodionCeldaComponent;
  let fixture: ComponentFixture<ProwebAccodionCeldaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProwebAccodionCeldaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProwebAccodionCeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
