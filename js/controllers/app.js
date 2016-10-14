angular.module('supermartngApp',[]);
angular.module('supermartngApp')
  .controller('AirportCrl', function ($scope){
  		
  		function init(){
  			$scope.airports = [{"name":"Murtala Muhammed International Airport","location":"Nigeria","correct":false}, 
  							{"name":"Takoradi Airport","location":"Ghana","correct":false},
  							{"name":"Luxor International Airport","location":"Eygpt","correct":false},
  							 {"name":"Jinja Airport","location":"Uganda","correct":false}
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
  				alert("You got all the questions correct");
  			}
  		})

  		$scope.reset = function(){
  			init();
  		}

  		init();
	}
)