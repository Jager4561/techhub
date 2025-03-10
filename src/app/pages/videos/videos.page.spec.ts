import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPage } from './videos.page';

describe('VideosPage', () => {
  let component: VideosPage;
  let fixture: ComponentFixture<VideosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
