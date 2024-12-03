import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpokemonComponent } from './headerpokemon.component';

describe('HeaderpokemonComponent', () => {
  let component: HeaderpokemonComponent;
  let fixture: ComponentFixture<HeaderpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderpokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
