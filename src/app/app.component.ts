import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
//import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = TabsPage;

    pages: Array<{title: string, component: any, subs: any, iconClass: string}>;


    
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            //      { title: 'Home', component: HomePage },
            {title: 'Upgrade', component: HomePage, iconClass: 'md-arrow-round-up', subs: []},
            {title: 'Invite Friends', component: HomePage, iconClass: 'md-contacts', subs: []},
            {title: 'Account settings', component: HomePage, iconClass: 'md-settings', subs: []},
            {
                title: 'About', component: HomePage, iconClass: 'md-information-circle', subs: [
                    {
                        title: 'How To Play', component: HomePage
                    },
                    {
                        title: 'Rules', component: HomePage
                    },
                    {
                        title: 'Responsible Play', component: HomePage
                    }
                ]
            },
            {title: 'Sign Out', component: HomePage, iconClass: 'md-log-out', subs: []}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }


    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    toggleGroup(group) {
        if(group.title=="Sign Out"){
            localStorage.removeItem("loggedUser");
        }
        group.show = !group.show;
    };
    isGroupShown(group) {
        return group.show;
    };
}
