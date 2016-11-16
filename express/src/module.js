

        angular.module('todoApp', ['ngResource','datatables','react'])
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
            vm.react=React.createClass({
                propTypes: {
                    fname : React.PropTypes.string.isRequired,
                    lname : React.PropTypes.string.isRequired
                },
                render: function() {
                    return <span>Hello {this.props.fname} {this.props.lname}</span>;
                }
                });
            vm.modal = document.getElementById('myModal');
             $scope.person = { fname: 'Clark', lname: 'Kent' };
            vm.postData=dataDb.bpost.save({lname:'Zildjian'});
            vm.fakerData=dataDb.data.get();
            vm.showmod=showmod;
            vm.close=close;
            
            vm.specification=dataDb.specification.post({directoryId:'57189cc224d8bc65f4123bc1',specificationType:{$in:["INDUSTRY PREFERENCE","GEOGRAPHICAL PREFERENCES"]}});

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
                function showmod()
                {
                    
                    vm.modal.style.display = "block";
                    vm.modal.className="modal1";
 
                    
                }
                function close()
                {
                      vm.modal.style.display = "none";
                }
     
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
                                save:{
                                    method:'POST',
                                    isArray:true,
                                    headers:{csrf:Date.now()},
                                    transformRequest:function(data,headerGetter){
                                        console.log('data',data);
                                        return JSON.stringify(data);
                                    }
                                }
                                }),
                        data:$resource('api/fak',{},
                                {
                                get:{method:'GET',headers:{csrf:Date.now()}}
                                }),
                        specification:$resource('http://192.168.0.74:5001/subscriber/search/chapter-specification',{},
                                {
                                post:{method:'POST'}
                                })

                    };
                    return dataDb;
                 
                }