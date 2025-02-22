import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanComponent } from './roman.component';

describe('RomanComponent', () => {
  let component: RomanComponent;
  let fixture: ComponentFixture<RomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
