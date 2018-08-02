angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.sejaBemVindo', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/sejaBemVindo.html',
        controller: 'sejaBemVindoCtrl'
      }
    }
  })

  .state('tabsController.dicaDoDia', {
    url: '/dica-do-dia',
    views: {
      'tab2': {
        templateUrl: 'templates/dicaDoDia.html',
        controller: 'dicaDoDiaCtrl'
      }
    }
  })

  .state('tabsController.paraVoc', {
    url: '/para-voce',
    views: {
      'tab3': {
        templateUrl: 'templates/paraVoc.html',
        controller: 'paraVocCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.meuDr', {
    url: '/meu-dr',
    views: {
      'tab4': {
        templateUrl: 'templates/meuDr.html',
        controller: 'meuDrCtrl'
      }
    }
  })

  .state('clinicaGuilhermeCorradi', {
    url: '/login',
    templateUrl: 'templates/clinicaGuilhermeCorradi.html',
    controller: 'clinicaGuilhermeCorradiCtrl'
  })

  .state('login', {
    url: '/login-email',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastreSe', {
    url: '/cadastro',
    templateUrl: 'templates/cadastreSe.html',
    controller: 'cadastreSeCtrl'
  })
    
  .state('sobre', {
    url: '/sobre',
    templateUrl: 'templates/sobre.html'
    
  })
  .state('inicio', {
    url: '/inicio',
    templateUrl: 'templates/clinicaGuilhermeCorradi.html'
    
  })
  .state('contato', {
    url: '/contato',
    templateUrl: 'templates/contato.html'
    
  })     

$urlRouterProvider.otherwise('/login')


});