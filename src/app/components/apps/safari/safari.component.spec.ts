import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariComponent } from './safari.component';

describe('SafariComponent', () => {
  let component: SafariComponent;
  let fixture: ComponentFixture<SafariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
