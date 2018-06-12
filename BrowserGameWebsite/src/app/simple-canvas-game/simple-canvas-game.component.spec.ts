import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCanvasGameComponent } from './simple-canvas-game.component';

describe('SimpleCanvasGameComponent', () => {
  let component: SimpleCanvasGameComponent;
  let fixture: ComponentFixture<SimpleCanvasGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCanvasGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCanvasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
