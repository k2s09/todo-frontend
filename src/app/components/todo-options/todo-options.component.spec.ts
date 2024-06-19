import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOptionsComponent } from './todo-options.component';

describe('TodoOptionsComponent', () => {
  let component: TodoOptionsComponent;
  let fixture: ComponentFixture<TodoOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
