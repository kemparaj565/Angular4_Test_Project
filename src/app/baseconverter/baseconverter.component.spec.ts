import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseconverterComponent } from './baseconverter.component';

describe('BaseconverterComponent', () => {
  let component: BaseconverterComponent;
  let fixture: ComponentFixture<BaseconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
