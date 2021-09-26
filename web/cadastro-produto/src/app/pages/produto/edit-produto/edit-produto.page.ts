import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.page.html',
  styleUrls: ['./edit-produto.page.css'],
})
export class EditProdutoPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      codigo : [],
      descricao: ['', Validators.required],
      quantidade: [0, Validators.min(0)],
      valor: [0, Validators.min(0)],
      inativo: [false],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id');

      this.produtoService.get(id).subscribe((produto) => {
        this.form.patchValue(produto);
      });
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        title: 'Atenção',
        icon: 'error',
        text: 'Verifique os dados do formulário.',
      });
    } else {
      this.produtoService.put(this.form.value).subscribe((result) => {

        Swal.fire({
          title: 'Produto alterado com sucesso!',
          icon: 'success',
        });

        this.router.navigate(['']);
      },(fail : HttpErrorResponse)=>{

        Swal.fire({
          title: 'Atenção',
          icon: 'error',
          text: fail?.error,
        });

      });
    }
  }
}
