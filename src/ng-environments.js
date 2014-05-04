var app = angular.module('ng-environments', []);

app.provider('$environment', function() {
    this.environments = [];
    this.$get = function() {
        if (this.environments.length === 0) {
            throw 'No environments have been configured';
        }

        for (var i = 0; i < this.environments.length; i++) {
            var env = this.environments[i];
            if (location.href.match(env.pattern)) {
                return env;
            }
        }

        // if no environment matches
        throw 'URL does not match any environments';
    };
});