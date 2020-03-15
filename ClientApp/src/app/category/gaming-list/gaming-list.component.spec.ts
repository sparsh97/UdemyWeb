import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingListComponent } from './gaming-list.component';

describe('GamingListComponent', () => {
  let component: GamingListComponent;
  let fixture: ComponentFixture<GamingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
