import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TNonPharmacologicalMonitoringPage } from './tnon-pharmacological-monitoring.page';

describe('TNonPharmacologicalMonitoringPage', () => {
  let component: TNonPharmacologicalMonitoringPage;
  let fixture: ComponentFixture<TNonPharmacologicalMonitoringPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TNonPharmacologicalMonitoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TNonPharmacologicalMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
