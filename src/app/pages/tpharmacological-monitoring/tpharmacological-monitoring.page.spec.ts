import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TPharmacologicalMonitoringPage } from './tpharmacological-monitoring.page';

describe('TPharmacologicalMonitoringPage', () => {
  let component: TPharmacologicalMonitoringPage;
  let fixture: ComponentFixture<TPharmacologicalMonitoringPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TPharmacologicalMonitoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TPharmacologicalMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
