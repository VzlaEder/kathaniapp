import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TPharmacologicalHistoryPage } from './tpharmacological-history.page';

describe('TPharmacologicalHistoryPage', () => {
  let component: TPharmacologicalHistoryPage;
  let fixture: ComponentFixture<TPharmacologicalHistoryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TPharmacologicalHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TPharmacologicalHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
