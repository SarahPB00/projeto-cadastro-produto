import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdutoPage } from './edit-produto.page';

describe('EditProdutoPage', () => {
  let component: EditProdutoPage;
  let fixture: ComponentFixture<EditProdutoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdutoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
