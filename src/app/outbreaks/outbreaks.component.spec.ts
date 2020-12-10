import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutbreaksComponent } from './outbreaks.component';

describe('OutbreaksComponent', () => {
  let component: OutbreaksComponent;
  let fixture: ComponentFixture<OutbreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutbreaksComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
