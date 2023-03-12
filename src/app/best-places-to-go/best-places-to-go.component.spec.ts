import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlacesToGoComponent } from './best-places-to-go.component';

describe('BestPlacesToGoComponent', () => {
  let component: BestPlacesToGoComponent;
  let fixture: ComponentFixture<BestPlacesToGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPlacesToGoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestPlacesToGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
