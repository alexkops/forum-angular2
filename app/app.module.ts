import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {XHRBackend} from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService}               from './in-memory-data-service';

import {AppComponent}  from './app.component';
import {ForumComponent} from './forum/forum.component';
import {UsersComponent} from './users/users.component';

import {routing}        from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ForumComponent,
        UsersComponent
    ],
    providers: [
        {provide: XHRBackend, useClass: InMemoryBackendService}, // in-mem server
        {provide: SEED_DATA, useClass: InMemoryDataService}     // in-mem server data
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}