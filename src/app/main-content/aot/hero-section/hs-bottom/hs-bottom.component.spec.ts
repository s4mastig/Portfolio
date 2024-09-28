import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsBottomComponent } from './hs-bottom.component';

describe('HsBottomComponent', () => {
  let component: HsBottomComponent;
  let fixture: ComponentFixture<HsBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HsBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
