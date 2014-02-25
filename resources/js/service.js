/**
 * Services
 */

contactModule.factory('mailService', function(Mail) {
	var mailService = {};

	mailService.sendEmail = function(contactMessage, successCallBack,
			failCallBack) {
		// mettre l'appel à la resource
		mailToSend = {};
		mailToSend.key = "_jRJkZ0yRNZ5mPYkD3gJDw";
		mailToSend.message = {
			from_email : "contact@proGarden.com",
			to : [ {
				email : "clement.vassant@gmail.com",
				type : "to"
			} ],
			html : "<p> <u>Message de :</u> " + contactMessage.email
					+ "<br><u>Nom du contact : </u>" + contactMessage.name
					+ "<br><u>Message :</u>" + contactMessage.message + "</p>"
		};
		Mail.sendEmailContact(mailToSend, function(value, requestHeaders) {
			successCallBack();
		}, function(value, requestHeaders) {
			failCallBack();
		});
	};
	return mailService;
});

contactModule.factory('Mail', function($resource) {
	// to complet avec mandrill
	return $resource('https://mandrillapp.com/api/1.0/messages/send.json', {},
			{
				sendEmailContact : {
					method : 'POST',
					isArray : true
				}
			});
});


//gallery service

galleryModule.factory('galleryService', function(Gallery){
	var galleryService ={};

	galleryService.getGallery = function(successCallback, failedCallBack){
		Gallery.getGallery( function(value, requestHeaders){
			successCallback(value);
			});
	};
	return galleryService;
});

galleryModule.factory('Gallery', function($resource){
	return $resource('resources/php/getGallery.php',{},
		{
			getGallery : {
				method : 'GET',
				isArray : true
			}
		});
});
