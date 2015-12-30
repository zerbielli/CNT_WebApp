(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.estoque.EstoqueCadCtrl:EstoqueCadCtrl
     * @description
     * # EstoqueCadCtrl
     * Controller of the app.estoque
     */

    angular
        .module('app.estoque')
        .controller('app.estoque.EstoqueCadCtrl');

    EstoqueCadCtrl.$inject = [
        '$injector'
    ];

    function EstoqueCadCtrl($injector) {

        var EstoqueService = $injector.get('app.estoque.EstoqueService');

        var viewModel = this;

        var PublicProperties = {

        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {

        }
    }
})();
