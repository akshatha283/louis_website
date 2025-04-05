import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HampersComponent } from './hampers.component';

describe('HampersComponent', () => {
  let component: HampersComponent;
  let fixture: ComponentFixture<HampersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HampersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
