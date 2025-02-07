import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBComponentComponent } from './service-b-component.component';

describe('ServiceBComponentComponent', () => {
  let component: ServiceBComponentComponent;
  let fixture: ComponentFixture<ServiceBComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
