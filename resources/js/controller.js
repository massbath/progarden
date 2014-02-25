/**
 * Controllers
 */

galleryModule
		.controller(
				'galleryCtrl',
				function($scope, galleryService) {

					// Set of Photos
					$scope.photos = [];

					// initial image index
					//$scope._Index = 0;
					$scope.index = 0;

					
					
					$scope.collectionSelected = {};
					

					// initialize the collection's array
					$scope.collectionsArray = [];

					$scope.initCollectionsArray = function() {
						for (var i = 0; i < $scope.photos.length; i++) {
							if ($scope.collectionsArray
									.indexOf($scope.photos[i].collection) == -1) {
								$scope.collectionsArray
										.push($scope.photos[i].collection);
							}
						}
					};

					$scope.collectionsToShowArray = [];

					$scope.changeCollectionToShow = function() {
						
						$scope.collectionsToShowArray = [];
						for (var i = 0; i < $scope.photos.length; i++) {
							if ($scope.photos[i].collection == $scope.collectionSelected.collection) {
								 $scope.collectionsToShowArray
										.push($scope.photos[i]);
										
							}
						}
						$scope.index = 0;
						
				
					};

					// if a current image is the same as requested image
					$scope.isActive = function(index) {
						return $scope.index === index;
					};

					// show prev image
					$scope.showPrev = function() {
						$scope.index = ($scope.index > 0) ? --$scope.index
								: $scope.collectionsToShowArray.length - 1;
					};

					// show next image
					$scope.showNext = function() {	
						$scope.index = ($scope.index < $scope.collectionsToShowArray.length - 1) ? ++$scope.index
								: 0;
					};

					// show a certain image
					$scope.showPhoto = function(index) {	
						$scope.index = index;
					};

					//$scope.changeCollectionToShow();

					$scope.galleryService = galleryService;
					
					$scope.getGallery = function(){
						$scope.galleryService.getGallery(function(resultat){
							$scope.photos = resultat;
							$scope.collectionSelected.collection = $scope.photos[0].collection;
							$scope.initCollectionsArray();
							$scope.changeCollectionToShow();
						});
					}();
					
					
					
				});

contactModule.controller('contactCtrl', function($scope, mailService) {

	$scope.contactMessage = {
		email : "",
		name : "",
		message : ""
	};

	$scope.messageCallback = {
		message : "",
		resultat : ""
	};
	$scope.mailService = mailService;

	$scope.isValidEmail = function() {
		return (!!this.contactMessage.email);
	};

	$scope.isValidName = function() {
		return (!!this.contactMessage.name);
	};

	$scope.isValidMessage = function() {
		return (!!this.contactMessage.message);
	};

	$scope.formIsCompleted = function() {
		return (this.isValidEmail() && this.isValidMessage() && this
				.isValidName());
	};

	$scope.sendMessage = function() {
		if ($scope.formIsCompleted()) {
			$scope.mailService.sendEmail($scope.contactMessage, function() {
				$scope.messageCallback.message = "Votre demande est prise en compte, merci";
				$scope.messageCallback.resultat = 'Success';
				$scope.contactMessage = {
						email : "",
						name : "",
						message : ""
					};
			}, function() {
				$scope.messageCallback.message = "Erreur lors de l'envoi de votre demande";
				$scope.messageCallback.resultat = 'Failed';

			});
		}

	};

});