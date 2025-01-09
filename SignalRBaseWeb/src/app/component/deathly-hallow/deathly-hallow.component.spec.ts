import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathlyHallowComponent } from './deathly-hallow.component';

describe('DeathlyHallowComponent', () => {
  let component: DeathlyHallowComponent;
  let fixture: ComponentFixture<DeathlyHallowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeathlyHallowComponent]
    });
    fixture = TestBed.createComponent(DeathlyHallowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
