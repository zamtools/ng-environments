# ng-environments

An AngularJS module that switches sets of environment variables depending on the browser address.

## Configuration

Source `angularjs` in your html file.

Install `ng-environments`, this is most easily done with Bower.

```
bower install ng-environments --save
```

Source `dist/ng-environments.js` or `dist/ng-environments.min.js` in your html.

Add `ng-environments` to the list of module dependencies in your main module.

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

## Usage

To access the current environment add `$environment` as a dependency then treat it like a normal object to access its attribute. You can even add it to the `$scope`.

```javascript
app.controller('Ctrl', function($environment, $scope) {
    $scope.environment = $environment;
    
    if ($environment.name === 'local') {
        console.log('Local development mode!');
    }
});
```

If you have added the environment to the scope, you can access it from within templates and use it in expressions.

```html
<p ng-show="env.name == 'local'">Local development mode!</p>
```

## Releases

0.1.0 - Initial
