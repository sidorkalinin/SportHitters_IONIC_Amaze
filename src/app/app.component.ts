import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, Events,MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { ResponsiblePlayPage } from '../pages/responsible-play/responsible-play';
import { HowToPlayPage } from '../pages/how-to-play/how-to-play';
import { RulesPage } from '../pages/rules/rules';
//import {TabsPage} from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    pages: Array<{title: string, component: any, subs: any, iconClass: string}>;

    loggedUser:any = {};
    
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events,public menuCtrl: MenuController) {
        this.initializeApp();
        // set logged user
        var user = localStorage.getItem("loggedUser");
        this.loggedUser = JSON.parse(user);
        
        // update logged user
        events.subscribe('user:loggedIn', () => {
            var user = localStorage.getItem("loggedUser");
            this.loggedUser = JSON.parse(user)
            console.log(this.loggedUser)
        });

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Upgrade', component: HomePage, iconClass: 'md-arrow-round-up', subs: []},
            {title: 'Invite Friends', component: HomePage, iconClass: 'md-contacts', subs: []},
            {title: 'Account settings', component: HomePage, iconClass: 'md-settings', subs: []},
            {
                title: 'About', component: HomePage, iconClass: 'md-information-circle', subs: [
                    {
                        title: 'How To Play', component: HowToPlayPage
                    },
                    {
                        title: 'Rules', component: RulesPage
                    },
                    {
                        title: 'Responsible Play', component: ResponsiblePlayPage
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
        this.nav.push(page.component);
        
    }


    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    toggleGroup(group) {
        if (group.title == "Sign Out") {
            localStorage.removeItem("loggedUser");
            this.loggedUser={
             username:""
            };
            this.nav.setRoot(LoginPage);
        }
        else if (group.title == "About") {
           group.show = !group.show;
        }
        else{
             this.nav.push(group.component);
             this.menuCtrl.close();
        }
        
    };
    
    isSubmenuShown(group) {
        return group.show;
    };
    
   
}
