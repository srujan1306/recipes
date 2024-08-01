import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipesComponent } from './edit-recipes.component';

describe('EditRecipesComponent', () => {
  let component: EditRecipesComponent;
  let fixture: ComponentFixture<EditRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
