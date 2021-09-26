import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.css']
})
export class ProdutoPage implements OnInit {

  list : Array<Produto> = [];

  constructor(private produtoService : ProdutoService) {
  }

  ngOnInit(): void {

    this.produtoService.list().subscribe(list=>{
      this.list = list;
    })

  }

}
