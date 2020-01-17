import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoucherListPage } from './voucher-list.page';

describe('VoucherListPage', () => {
  let component: VoucherListPage;
  let fixture: ComponentFixture<VoucherListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
