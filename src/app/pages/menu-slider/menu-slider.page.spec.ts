import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuSliderPage } from './menu-slider.page';

describe('MenuSliderPage', () => {
  let component: MenuSliderPage;
  let fixture: ComponentFixture<MenuSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
