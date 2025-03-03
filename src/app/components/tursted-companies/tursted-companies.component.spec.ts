import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurstedCompaniesComponent } from './tursted-companies.component';

describe('TurstedCompaniesComponent', () => {
  let component: TurstedCompaniesComponent;
  let fixture: ComponentFixture<TurstedCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurstedCompaniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurstedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
