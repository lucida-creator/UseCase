import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewairlineComponent } from './viewairline.component';

describe('ViewairlineComponent', () => {
  let component: ViewairlineComponent;
  let fixture: ComponentFixture<ViewairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
