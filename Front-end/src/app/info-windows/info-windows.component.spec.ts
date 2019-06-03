import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowsComponent } from './info-windows.component';

describe('InfoWindowsComponent', () => {
  let component: InfoWindowsComponent;
  let fixture: ComponentFixture<InfoWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
