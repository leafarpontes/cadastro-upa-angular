import { Routes } from '@angular/router';
import { EditarCadastroComponent } from './editar';
import { CadastrarComponent } from './cadastrar';
import { ListarCadastroComponent } from './listar';

export const CadastroRoutes:Routes = [
    {
        path: 'cadastros',
        redirectTo: 'cadastros/listar'
    },
    {
        path: 'cadastros/listar',
        component: ListarCadastroComponent
    },
    {
        path: 'cadastros/cadastrar',
        component: CadastrarComponent
    },
    {
        path: 'cadastros/editar/:id',
        component: EditarCadastroComponent
    }
];