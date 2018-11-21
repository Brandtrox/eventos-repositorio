import { NgModule } from '@angular/core';

import { EventosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EventosSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EventosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EventosSharedCommonModule {}
