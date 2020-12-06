import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GethttpComponent } from './gethttp.component';

describe('GethttpComponent', () => {
  let component: GethttpComponent;
  let fixture: ComponentFixture<GethttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GethttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
