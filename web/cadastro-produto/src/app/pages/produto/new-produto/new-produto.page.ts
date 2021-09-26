import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-produto',
  templateUrl: './new-produto.page.html',
  styleUrls: ['./new-produto.page.css']
})
export class NewProdutoPage implements OnInit {

  form : FormGroup;

  constructor(private fb : FormBuilder,
    private produtoService : ProdutoService,
    private router : Router
    ) {

    this.form = this.fb.group({
      descricao : ['', Validators.required],
      quantidade : [0, Validators.min(0)],
      valor : [0, Validators.min(0)],
      inativo : [false]
    });

   }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.form.invalid){
      Swal.fire({
        title : "Atenção",
        icon:'error',
        text : "Verifique os dados do formulário."
      })
    }else{

      this.produtoService.post(this.form.value).subscribe(result=>{
        Swal.fire({
          title : "Produto cadastrado com sucesso!",
          icon: "success"
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
