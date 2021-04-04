import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadiersComponent } from './brigadiers.component';

describe('BrigadiersComponent', () => {
  let component: BrigadiersComponent;
  let fixture: ComponentFixture<BrigadiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrigadiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
