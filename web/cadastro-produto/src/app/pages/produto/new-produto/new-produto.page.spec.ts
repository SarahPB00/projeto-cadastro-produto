import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdutoPage } from './new-produto.page';

describe('NewProdutoPage', () => {
  let component: NewProdutoPage;
  let fixture: ComponentFixture<NewProdutoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProdutoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
