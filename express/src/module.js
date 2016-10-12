        angular.module('todoApp', ['ngResource','datatables'])
        .run(initDT)
        .controller('TodoListController',TodoListController)
        .factory('dataDb', dataDb);
        function initDT(DTDefaultOptions) {
                DTDefaultOptions.setLoadingTemplate('<img src="images/loading.gif">');
            }

        dataDb.$inject = ['$http','$scope','DTOptionsBuilder','DTColumnBuilder','DTColumnDefBuilder','dataDb'];
         function TodoListController($http,$scope,DTOptionsBuilder, DTColumnBuilder,DTColumnDefBuilder,dataDb) {
          var vm=this;
            $scope.d1={};
            vm.postData=dataDb.bpost.save({lname:'Zildjian'});
            vm.fakerData=dataDb.data.get();
            // vm.dtOptions = DTOptionsBuilder.fromSource(dataDb.query())
            // .withDataProp('ajax')
            // .withPaginationType('full_numbers');

                vm.dtOptions = DTOptionsBuilder.fromSource(dataDb.getAll.query)
                    .withPaginationType('full_numbers');
                 //vm.dtOptions = $resource('/angular-datatables/dtOptions.json').get().$promise;
                 

                    
                vm.dtColumns = [
                    DTColumnBuilder.newColumn('name').withTitle('NAME1').withClass(),
                    DTColumnBuilder.newColumn('ref.fname').withTitle('fname').withClass(),
                    DTColumnBuilder.newColumn('ref.lame').withTitle('hbyname').withClass()
                ];
     
            }
                dataDb.$inject = ['$resource'];
                function dataDb($resource) {
                    var dataDb={
                        getAll: $resource('api/getAll',{},
                                {
                                query:{method:'GET',isArray:true,headers:{csrf:Date.now()}},
                                get1:{method:'GET',isArray:true,headers:{csrf:Date.now()}},
                                get2:{method:'GET',isArray:true,headers:{csrf:Date.now()}},
                                save:{method:'POST',headers:{csrf:Date.now()}}
                                }),
                        bpost: $resource('api/post',{},
                                {
                                save:{method:'POST',isArray:true,headers:{csrf:Date.now()}}
                                }),
                        data:$resource('api/fak',{},
                                {
                                get:{method:'GET',headers:{csrf:Date.now()}}
                                })

                    };
                    return dataDb;
                 
                }