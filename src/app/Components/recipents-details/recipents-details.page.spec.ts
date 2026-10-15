import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipentsDetailsPage } from './recipents-details.page';

describe('RecipentsDetailsPage', () => {
  let component: RecipentsDetailsPage;
  let fixture: ComponentFixture<RecipentsDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipentsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
