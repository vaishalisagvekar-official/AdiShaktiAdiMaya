import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePreLoginComponent } from './home-pre-login.component';

describe('HomePreLoginComponent', () => {
  let component: HomePreLoginComponent;
  let fixture: ComponentFixture<HomePreLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePreLoginComponent]
    });
    fixture = TestBed.createComponent(HomePreLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
