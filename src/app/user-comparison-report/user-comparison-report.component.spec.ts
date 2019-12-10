import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComparisonReportComponent } from './user-comparison-report.component';

describe('UserComparisonReportComponent', () => {
  let component: UserComparisonReportComponent;
  let fixture: ComponentFixture<UserComparisonReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComparisonReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComparisonReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
