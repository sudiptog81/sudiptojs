import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgFooterComponent } from './sg-footer.component';

describe('SgFooterComponent', () => {
  let component: SgFooterComponent;
  let fixture: ComponentFixture<SgFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
