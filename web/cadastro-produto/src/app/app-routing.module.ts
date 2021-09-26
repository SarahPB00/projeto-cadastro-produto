import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditProdutoPage } from './pages/produto/edit-produto/edit-produto.page';
import { NewProdutoPage } from './pages/produto/new-produto/new-produto.page';
import { ProdutoPage } from './pages/produto/produto.page';

const routes: Routes = [
  {
    path: 'produto',
    component: AppComponent,
    children: [
      {component : ProdutoPage, path:''},
      { component: NewProdutoPage, path: 'new' },
      { component: EditProdutoPage, path: 'edit/:id' },
    ],
  },
  {
    path: '',
    redirectTo: '/produto',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
