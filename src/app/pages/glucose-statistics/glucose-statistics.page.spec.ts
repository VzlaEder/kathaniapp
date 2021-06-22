import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlucoseStatisticsPage } from './glucose-statistics.page';

describe('GlucoseStatisticsPage', () => {
  let component: GlucoseStatisticsPage;
  let fixture: ComponentFixture<GlucoseStatisticsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucoseStatisticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlucoseStatisticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
