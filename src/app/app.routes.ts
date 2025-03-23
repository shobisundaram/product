import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './features/legal/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './features/legal/terms-conditions/terms-conditions.component';
import { FqaComponent } from './features/legal/fqa/fqa.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/modules.routes').then(m => m.ModuleRoutes)
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
    },
    {
        path: 'terms_of_use',
        component: TermsConditionsComponent
    },
    {
        path: 'fqa',
        component: FqaComponent
    },
    { path: '**', redirectTo: '' }
];
