
    angular
        .module('todoApp')
        .factory('dataDb', dataDb);

    dataDb.$inject = ['$resource'];
    function dataDb($resource) {
        var dataDb={
        getAll:$resource('api/getAll',{},
                    {
                    query:{method:'GET',isArray:true,headers:{csrf:Date.now()}},
                    get1:{method:'GET',isArray:true,headers:{csrf:Date.now()}},
                    get2:{method:'GET',isArray:true,headers:{csrf:Date.now()}},
                    save:{method:'POST',headers:{csrf:Date.now()}}
                    })

        };
        
        return dataDb;
    }
