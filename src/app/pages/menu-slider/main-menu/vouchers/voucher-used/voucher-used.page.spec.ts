import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoucherUsedPage } from './voucher-used.page';

describe('VoucherUsedPage', () => {
  let component: VoucherUsedPage;
  let fixture: ComponentFixture<VoucherUsedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherUsedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoucherUsedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
