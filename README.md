# ng-surprise v0.2.0

[![Code Climate](https://codeclimate.com/github/rafaelcamargo/ng-surprise/badges/gpa.svg)](https://codeclimate.com/github/rafaelcamargo/ng-surprise)
[![Test Coverage](https://codeclimate.com/github/rafaelcamargo/ng-surprise/badges/coverage.svg)](https://codeclimate.com/github/rafaelcamargo/ng-surprise/coverage)
[![Build Status](https://travis-ci.org/rafaelcamargo/ng-surprise.svg?branch=master)](https://travis-ci.org/rafaelcamargo/ng-surprise)

This is a AngularJS module to put easter eggs in your application. Sometimes you need a easter egg to allow your dev staff to skip some configuration step or close an *uncloseable* modal in your app. So, ng-surprise is a easy way to do that.

## Demo
You can see ng-surprise in action on http://rafaelcamargo.github.io/ng-surprise

## Installation
```
npm install ng-surprise --save
```
Once `ng-surprise` dependency is installed, declare the *ngSurprise* module as your app dependency:
```
var app = angular.module('App', ['ngSurprise']);
```

## Usage
Wherever in your application, you can inform an **action** and a **trigger** to be performed:
```
<div data-surprise="showSomething" data-surprise-trigger="38,38,38,37"></div>
```

### Action
Should be a function in your controller:
```
...
$scope.showSomething = function(){
  alert('Gotcha!');
};
...
```

### Trigger
Should be a sequence of keycodes to be performed by the user. It's not an Array. It should be necessarily a String with keycodes separeted by comma with no spaces between them. The event attribute responsible to inform which code user has performed is `keydown`. You can easily discover the keycodes you want to use as your trigger on the following page: http://www.w3.org/2002/09/tests/keys.html

## Release History
- 2015/08/09 **v0.2.0** : Unit tests added
- 2015/07/29 **v0.1.0** : Initial release *tests still in progress*
