# ng-surprise v0.1.0
This is a AngularJS module to put easter eggs in your application. Sometimes you need a easter egg to allow your dev staff to skip some configuration step or close an *uncloseable* modal in your app. So, ng-surprise is a easy way to do that.

## Demo
You can see ng-surprise in action on http://rafaelcamargo.github.io/ng-surprise

## Installation
```
npm install angular-surprise --save
```
Once `angular-surprise` dependency is installed, declare the *ngSurprise* module as your app dependency:
```
var app = angular.module('App', ['ngSurprise']);
```

## Usage
In any place inside you application, you just need inform an **action** and a **trigger** to be performed:
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
Should be a sequence of keycodes to be performed by the user. It's not an Array. It should be necessarily a String with keycodes separeted by comma with no spaces between keycodes and commmas. The event attribute responsible to inform which code user has performed is `keydown`. You can easily discover the keycodes you want to use in your trigger on the follow page: http://www.w3.org/2002/09/tests/keys.html

## Release History
- 2015/07/26 **v0.1.0** : Initial release *tests still in progress*
