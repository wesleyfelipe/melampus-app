import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HistoricPage } from '../historic/historic';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoricPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
