import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThemeSwitcherComponent } from './todo-theme-switcher.component';

describe('TodoThemeSwitcherComponent', () => {
  let component: TodoThemeSwitcherComponent;
  let fixture: ComponentFixture<TodoThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoThemeSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
