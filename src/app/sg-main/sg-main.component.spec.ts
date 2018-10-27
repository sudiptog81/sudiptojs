import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgMainComponent } from './sg-main.component';

describe('SgMainComponent', () => {
  let component: SgMainComponent;
  let fixture: ComponentFixture<SgMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
