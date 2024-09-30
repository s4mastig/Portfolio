import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotBottomComponent } from './aot-bottom.component';

describe('AotBottomComponent', () => {
  let component: AotBottomComponent;
  let fixture: ComponentFixture<AotBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AotBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AotBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
