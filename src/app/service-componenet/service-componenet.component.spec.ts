import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponenetComponent } from './service-componenet.component';

describe('ServiceComponenetComponent', () => {
  let component: ServiceComponenetComponent;
  let fixture: ComponentFixture<ServiceComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceComponenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
