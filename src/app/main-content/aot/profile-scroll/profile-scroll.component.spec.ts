import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScrollComponent } from './profile-scroll.component';

describe('ProfileScrollComponent', () => {
  let component: ProfileScrollComponent;
  let fixture: ComponentFixture<ProfileScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
