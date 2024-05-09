import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfaselComponent } from './tfasel.component';

describe('TfaselComponent', () => {
  let component: TfaselComponent;
  let fixture: ComponentFixture<TfaselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfaselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfaselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
