import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListslotComponent } from './listslot.component';

describe('ListslotComponent', () => {
  let component: ListslotComponent;
  let fixture: ComponentFixture<ListslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
