import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfaselFatoraComponent } from './tfasel-fatora.component';

describe('TfaselFatoraComponent', () => {
  let component: TfaselFatoraComponent;
  let fixture: ComponentFixture<TfaselFatoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfaselFatoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfaselFatoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
