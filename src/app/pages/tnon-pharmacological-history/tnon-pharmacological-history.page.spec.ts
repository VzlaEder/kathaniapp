import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TNonPharmacologicalHistoryPage } from './tnon-pharmacological-history.page';

describe('TNonPharmacologicalHistoryPage', () => {
  let component: TNonPharmacologicalHistoryPage;
  let fixture: ComponentFixture<TNonPharmacologicalHistoryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TNonPharmacologicalHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TNonPharmacologicalHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
