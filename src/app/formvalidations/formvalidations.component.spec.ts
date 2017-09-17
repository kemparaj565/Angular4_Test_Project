import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidationsComponent } from './formvalidations.component';

describe('FormvalidationsComponent', () => {
  let component: FormvalidationsComponent;
  let fixture: ComponentFixture<FormvalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
