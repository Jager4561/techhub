import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPage } from './photos.page';

describe('PhotosPage', () => {
  let component: PhotosPage;
  let fixture: ComponentFixture<PhotosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
