import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAboutMeComponent } from './name-about-me.component';

describe('NameAboutMeComponent', () => {
  let component: NameAboutMeComponent;
  let fixture: ComponentFixture<NameAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
