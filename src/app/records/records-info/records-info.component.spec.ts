import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsInfoComponent } from './records-info.component';

describe('RecordsInfoComponent', () => {
  let component: RecordsInfoComponent;
  let fixture: ComponentFixture<RecordsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
