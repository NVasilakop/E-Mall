import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnivalMainComponent } from './carnival-main.component';

describe('CarnivalMainComponent', () => {
  let component: CarnivalMainComponent;
  let fixture: ComponentFixture<CarnivalMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnivalMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnivalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
