import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAComponentComponent } from './service-a-component.component';

describe('ServiceAComponentComponent', () => {
  let component: ServiceAComponentComponent;
  let fixture: ComponentFixture<ServiceAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
