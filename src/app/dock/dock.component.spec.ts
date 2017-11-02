import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockComponent } from './dock.component';

describe('DockComponent', () => {
  let component: DockComponent;
  let fixture: ComponentFixture<DockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
