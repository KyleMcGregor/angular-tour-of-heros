import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockConfigViewComponent } from './mock-config-view.component';

describe('MockConfigViewComponent', () => {
  let component: MockConfigViewComponent;
  let fixture: ComponentFixture<MockConfigViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockConfigViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
