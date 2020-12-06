import { TestBed } from '@angular/core/testing';
import { SrbComponent } from './srb.component';

describe('SrbComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SrbComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SrbComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
