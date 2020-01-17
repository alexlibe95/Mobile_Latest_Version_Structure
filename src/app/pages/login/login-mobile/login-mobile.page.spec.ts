import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginMobilePage } from './login-mobile.page';

describe('LoginMobilePage', () => {
  let component: LoginMobilePage;
  let fixture: ComponentFixture<LoginMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
