import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMetadataComponent } from './quote-metadata.component';

describe('QuoteMetadataComponent', () => {
  let component: QuoteMetadataComponent;
  let fixture: ComponentFixture<QuoteMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
