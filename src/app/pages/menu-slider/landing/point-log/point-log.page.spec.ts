import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PointLogPage } from './point-log.page';

describe('PointLogPage', () => {
  let component: PointLogPage;
  let fixture: ComponentFixture<PointLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PointLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
