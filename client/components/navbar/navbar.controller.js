'use strict';

class NavbarController {
  //start-non-standard
  menu = [
  {
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'About',
    'state': 'about'
  },
  {
    'title': 'Sace',
    'state': 'about'
  }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('botbotApp')
  .controller('NavbarController', NavbarController);
