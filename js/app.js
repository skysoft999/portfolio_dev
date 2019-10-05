
$(document).ready(function() {
	$('.sidenav').sidenav().on('click tap', 'li a', () => {
		$('.sidenav').sidenav('close');
	});
	$('.collapsible').collapsible();
	$('.tooltipped').tooltip();
	$('.modal').modal();
	$('.tabs').tabs();
	$('.slider').slider({ 
        // full_width: true,
        // height : 800, // default - height : 400
        interval: 8000 // default - interval: 6000
    });

	// Map Js
	var map = new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		view: new ol.View({
			center: ol.proj.fromLonLat([77.6959153, 12.9538667]),
			zoom: 18
		})
	});
});


function homepage() {
	$('#homepage').addClass('').removeClass('hide');
	$('#mainpage').addClass('').removeClass('hide');
	$("#about-page").addClass('hide');
	$('#resume-page').addClass('hide');
	$('#story-page').addClass('hide');
	$('#project-page').addClass('hide');
}

function resumepage() {
	$('#mainpage').addClass('hide');
	$('#homepage').addClass('hide');
	$('#resume-page').addClass('').removeClass('hide');
	// Hide All Other page
	$("#about-page").addClass('hide');
	$('#story-page').addClass('hide');
	$('#project-page').addClass('hide');
}

function aboutpage() {
	$('#mainpage').addClass('hide');
	$('#homepage').addClass('hide');
	$("#about-page").addClass('').removeClass('hide');
	// Hide All Other page
	$('#resume-page').addClass('hide');
	$('#story-page').addClass('hide');
	$('#project-page').addClass('hide');
}


function projectpage() {
	$('#mainpage').addClass('hide');
	$('#homepage').addClass('hide');
	$("#project-page").addClass('').removeClass('hide');
	$('#resume-page').addClass('hide');
	$('#story-page').addClass('hide');
	$("#about-page").addClass('hide');
}


function storypage() {
	$('#mainpage').addClass('hide');
	$('#homepage').addClass('hide');
	$("#story-page").addClass('').removeClass('hide');
	$('#project-page').addClass('hide');
	$('#resume-page').addClass('hide');
	$("#about-page").addClass('hide');
}