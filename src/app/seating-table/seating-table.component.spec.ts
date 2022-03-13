import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingTableComponent } from './seating-table.component';

describe('SeatingTableComponent', () => {
  let component: SeatingTableComponent;
  let fixture: ComponentFixture<SeatingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
