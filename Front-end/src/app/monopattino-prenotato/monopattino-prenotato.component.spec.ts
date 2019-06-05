import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonopattinoPrenotatoComponent } from './monopattino-prenotato.component';

describe('MonopattinoPrenotatoComponent', () => {
  let component: MonopattinoPrenotatoComponent;
  let fixture: ComponentFixture<MonopattinoPrenotatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonopattinoPrenotatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonopattinoPrenotatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
