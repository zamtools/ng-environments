# ng-environments

An AngularJS module that switches sets of environment variables depending on the browser address.

## Usage

Source `angularjs` and `ng-environments` javascript files in your html.

Add `ng-environments` to the list of dependencies in your main module.
```javascript
var app = angular.module('App', ['ng-environments'])
```
Each environment is an object with a unique name and a regular expression pattern that is matched against the browser's address. An environment can also contain extra variables such as analytics IDs, Facebook App IDs, etc.
```javascript
{
    name: 'local',
    pattern: /localhost/,

    // additional variables
    analyticsAppId: 'UA-XXXXXXXX-1',
    facebookAppId: '12345678901234'
}
```
**WARNING: Do NOT include any private keys, secret hashes or any data that shouldn't be accessible to the public.**

To configure `ng-environments`, use `config()` to assign an array to `$environmentProvider.environments` containing one or more environment objects.
```javascript
app.config(['$environmentProvider', function ($environmentProvider) {
    $environmentProvider.environments = [
        {
            name: 'local',
            pattern: /localhost/,
            url: 'http://localhost:9000/',
            analyticsAppId: 'UA-XXXXXXXX-1',
            facebookAppId: '12345678901234'
        },
        {
            name: 'stage',
            pattern: /stage/,
            url: 'http://stage.example.com/',
            analyticsAppId: 'UA-XXXXXXXX-1',
            facebookAppId: '12345678901234'
        }
    ];
}]);
```
**NOTE: an error will be thrown if no environments can be matched against the address.**

## Releases

0.1.0 - Initial
