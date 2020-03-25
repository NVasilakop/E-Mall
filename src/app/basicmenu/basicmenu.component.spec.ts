import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicmenuComponent } from './basicmenu.component';

describe('BasicmenuComponent', () => {
  let component: BasicmenuComponent;
  let fixture: ComponentFixture<BasicmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
