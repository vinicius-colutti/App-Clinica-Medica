angular.module('app.controllers', [])
  
.controller('sejaBemVindoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dicaDoDiaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paraVocCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('meuDrCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('clinicaGuilhermeCorradiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cadastreSeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Title',
         subTitle: 'Subtitle',
         scope: $scope,
			
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
               onTap: function(e) {
						
                  if (!$scope.data.model) {
                     //don't allow the user to close unless he enters model...
                     e.preventDefault();
                  } else {
                     return $scope.data.model;
                  }
               }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };

}])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

    // An alert dialog
    $scope.showAlert = function() {

      var alertPopup = $ionicPopup.alert({
        title: 'Guilherme Corradi',
        template: '<strong class="strong_popup">CRM-SP 133564&nbsp;| RQE: 62929</strong><p class="p_popup">► Pós-Graduação em Dermatologia Clínica e Cirúrgica</p><p class="p_popup">► Especialista em Médicina do Exercício e do Esporte com foco em melhora de performance, melhor condicionamento físico, melhora do contorno e composição corporal, nutrição e suplementacao esportiva individualizada (UNIFESP).</p><p class="p_popup">► Criador do protocolo Simetria Perfeita que une conhecimentos de áreas diferentes para atender aos desejos de saúde, beleza e bem estar dos pacientes.</p><p class="p_popup">► Médico pela Universidade de Uberaba.</p>',

        
      });


    };



  });