import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    RippleModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    CarouselModule,
    CardModule,
    InputTextareaModule
  ]
})
export class PrimeNgModule { }
