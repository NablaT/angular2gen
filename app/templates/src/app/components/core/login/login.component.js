/**
 * Created by guillaume on 14/02/2016.
 */

class LoginController {

    constructor (AuthentificationService, $log, $location, $scope) {
        'ngInject';
        this.authService = AuthentificationService;
        this.$log = $log;
        this.$location = $location;
        this.tabToDisplay = 'signup';
        $scope.user = {
            gender : 'Male'
        };
        this.dayDate = this.dayDate();
    }

    login (credentials) {
        this.authService.login(credentials).then(
            firstname => {
            this.$log.log('f' + firstname);
        this.$location.path('/');
    },
        error => {
            this.$log.error('error' + error);
            angular.element('#modalError').modal('show');
        }
    )
    }

    register(credentials){

    }

    display(tabElement) {

        let noActif = angular.element('.tab-group li:not(.active)');
        let actif = angular.element('.tab-group li.active');

        noActif.addClass('active');
        actif.removeClass('active');

        this.tabToDisplay = tabElement;
    }

    /**
     * This function returns the current day.
     * @returns {Date} The current day.
     */
    dayDate () {
        var tmp = new Date ();
        return '' + (tmp.getMonth()+1) + '/' + tmp.getDate() + '/' + tmp.getFullYear();
    }



}

export var LoginComponent = {
    templateUrl: 'app/components/login/login.html',
    controller : LoginController
};