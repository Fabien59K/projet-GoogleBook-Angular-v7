import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBookComponent } from './browse-book.component';

describe('BrowseBookComponent', () => {
  let component: BrowseBookComponent;
  let fixture: ComponentFixture<BrowseBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
