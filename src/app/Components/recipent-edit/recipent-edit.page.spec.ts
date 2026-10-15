import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipentEditPage } from './recipent-edit.page';

describe('RecipentEditPage', () => {
  let component: RecipentEditPage;
  let fixture: ComponentFixture<RecipentEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipentEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
