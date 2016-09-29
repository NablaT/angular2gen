import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/+home/home.component';
import { AboutComponent } from './components/+about/about.component';

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;
let el:      DebugElement;

describe('AppComponent', () => {

    let config: Route[] = [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(config)],
            declarations: [ AppComponent, HomeComponent, AboutComponent ],
        })
        .compileComponents() // compile template and css
        .then( 
            () => {
                // create component and test fixture
                fixture = TestBed.createComponent(AppComponent);

                // get test component from the fixture
                comp = fixture.componentInstance;
            }
        );
    }));

    it('can instantiate it', () => {
        expect(comp).not.toBeNull();
    });

});
