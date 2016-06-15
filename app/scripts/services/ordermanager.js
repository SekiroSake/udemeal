'use strict';

/**
 * @ngdoc service
 * @name udemealApp.orderManager
 * @description
 * # orderManager
 * Service in the udemealApp.
 */
angular.module('udemealApp')
  .service('orderManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var OrderSelection = {
      Monday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Tuesday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Wednesday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Thursday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Triday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
    };
  });
