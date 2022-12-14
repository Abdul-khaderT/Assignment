import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [CommonModule, MenubarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule {}
