import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietheaterComponent } from './movietheater.component';

describe('MovietheaterComponent', () => {
  let component: MovietheaterComponent;
  let fixture: ComponentFixture<MovietheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
