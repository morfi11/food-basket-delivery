import { Component, Injector, ViewChild } from '@angular/core';
import { Router, Route, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth/auth-service';

import { MatSidenav } from '@angular/material/sidenav';
import { DialogService } from './select-popup/dialog';
import { ApplicationSettings } from './manage/ApplicationSettings';
import { FamiliesComponent } from './families/families.component';
import { Context, RouteHelperService, JwtSessionManager } from 'radweb';
import { Roles } from './auth/roles';
import { translate, translationConfig } from './translate';
import { DeliveryStats } from './delivery-follow-up/delivery-stats';
import { SelfPickupComponent } from './self-pickup/self-pickup.component';
import { DeliveryStatus } from './families/DeliveryStatus';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {


  constructor(
    public sessionManager: AuthService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public dialog: DialogService,
    private helper: RouteHelperService,
    public context: Context) {
    ApplicationSettings.getAsync(context).then(x => {
      translationConfig.activateTranslation = x.forSoldiers.value;
      DeliveryStatus.usingSelfPickupModule = x.usingSelfPickupModule.value;
    })

    if (!window.location.hostname.toLocaleLowerCase().startsWith('hmey')) {
      this.toolbarColor = 'accent';

    }


  }

  showSeperator(route: Route) {
    if (route.data && route.data.seperator)
      return true;
    return false;
  }
  routeName(route: Route) {
    let name = route.path;
    if (route.data && route.data.name)
      name = route.data.name;
    return translate(name);
  }
  prevLogoUrl = '';
  getLogo() {
    let result = ApplicationSettings.get(this.context).logoUrl.value;
    if (result) {
      this.prevLogoUrl = result;
    }
    return this.prevLogoUrl;
  }
  currentTitle() {
    if (this.activeRoute && this.activeRoute.snapshot && this.activeRoute.firstChild && this.activeRoute.firstChild.data && this.activeRoute.snapshot.firstChild.data.name)
      return translate(this.activeRoute.snapshot.firstChild.data.name);
    return ApplicationSettings.get(this.context).organisationName.value;
  }
  toolbarColor = 'primary';

  signOut() {

    this.routeClicked();
    this.sessionManager.signout();
  }
  shouldDisplayRoute(route: Route) {
    if (!(route.path && route.path.indexOf(':') < 0 && route.path.indexOf('**') < 0))
      return false;
    if (!DeliveryStatus.usingSelfPickupModule && route.component == SelfPickupComponent)
      return false;
    return this.helper.canNavigateToRoute(route);
  }
  @ViewChild('sidenav') sidenav: MatSidenav;
  routeClicked() {
    if (this.dialog.isScreenSmall())
      this.sidenav.close();

  }
  test() {

  }

}
