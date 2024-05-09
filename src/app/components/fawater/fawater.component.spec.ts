import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawaterComponent } from './fawater.component';

describe('FawaterComponent', () => {
  let component: FawaterComponent;
  let fixture: ComponentFixture<FawaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FawaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
