angular.module('supermartngApp',[]);
angular.module('supermartngApp')
  .controller('AirportCrl', function ($scope){
  		
  		function init(){
  			$scope.airports = [{"name":"Muritala Muhammed","location":"Nigeria","correct":false}, 
  							{"name":"Accra","location":"Ghana","correct":false},
  							{"name":"Cairo","location":"Eygpt","correct":false},
  							 {"name":"Kampalar","location":"Uganda","correct":false}
  						]; 
  		}

  		$scope.validateCountry = function(airport){
  			var answer =prompt("Where is the airport located");
  			if(angular.lowercase(airport.location)==angular.lowercase(answer)){
  				airport.correct= true;
  				var indexOf = $scope.airports.indexOf(airport);
  				$scope.airports.splice(indexOf, 1);
  			}
  		}

  		$scope.$watch("airports.length", function(newValue, OldValue){
  			if(newValue==0){
  				alert("You got all the answers");
  			}
  		})

  		$scope.reset = function(){
  			init();
  		}

  		init();
	}
)