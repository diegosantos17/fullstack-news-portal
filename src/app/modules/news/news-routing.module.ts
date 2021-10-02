import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    {
        path: '',
        component: NewsComponent // Listagem
    },
    {

        path: ':id',
        component: NewsDetailComponent // Detalhe da notícia
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NewsRoutingModule { }
