import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPage } from './produto.page';

describe('ProdutoPage', () => {
  let component: ProdutoPage;
  let fixture: ComponentFixture<ProdutoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
