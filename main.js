$(document).on('ready', function() {
	
	var viewMetrics = $('<button class="view-metrics">View Metrics</button>').css({
						background: '-webkit-linear-gradient(lightgray, gray)',
						color: 'white',
						paddingTop: 13,
						paddingBottom: 13,
						paddingLeft: 25,
						paddingRight: 25,
						position: 'fixed',
						bottom: 0,
						right: 0,
						border: 'white 1px solid',
						borderTopLeftRadius: 15,
						fontSize: 20,
						width: 180
					});
	var hideMetrics = $('<button class="hide-metrics">Hide Metrics</button>').css({
						background: '-webkit-linear-gradient(lightgray, gray)',
						color: 'white',
						paddingTop: 13,
						paddingBottom: 13,
						paddingLeft: 25,
						paddingRight: 25,
						position: 'fixed',
						bottom: 0,
						right: 0,
						border: 'white 1px solid',
						borderTopLeftRadius: 15,
						fontSize: 20,
						width: 180
					});
	var metricsBack = $('<div class="metrics-back"></div>').css({
						width: 2000,
						height: 20000,
						position: 'fixed',
						top: 0,
						left: 0,
						background: '-webkit-linear-gradient(black, gray, black)',
						opacity: 0.8
						})
	var metricsBox = $('<div class="metrics-box"></div>').css({
							width: 500,
							border: '2px solid rgb(207, 165, 55)',
							background: '-webkit-linear-gradient(lightgray, gray)',
							borderRadius: 10,
							position: 'fixed',
							padding: 30,
							top: 100,
							left: 150
						});
	var scrollPercent = function(x){
		var y = 100 * x / ($(document).height() - $(window).height());
		y = Math.round(y);
		return y;
	};
	var prevPercentage = 0;
	var viewPercent = function(x) {
		var y = (x + $(window).height())/ $(document).height() * 100;
		y = Math.round(y);
		return y;
	}
	var prevViewPercent = 0;
	var start = new Date($.now());
	var startTime = [start.getSeconds(), start.getMinutes()];
	var startNext = new Date($.now());
	var timeOnPage = function(hours, mins, secs){
		$(metricsBox).append('<h2>Time on Page</h2>' + time);
	}
	var timeConverter = function(x){
			if (x >= 60){
			x = x % 60;
			}
			if (x < 10){
				x = "0" + x.toString();
			}
			return x;
		}
		var timeConverterSection = function(x){
			if (x >= 60){
			x = x % 60;
			}
			return x;
		}
	var timeOnPageNow = function() {
			var startNext = new Date($.now());
			var nextTime = [startNext.getSeconds(), startNext.getMinutes()];
			var	minutes = nextTime[1] - startTime[1];
			var secs = (minutes * 60) + nextTime[0] - startTime[0];
			var mins = Math.floor(secs / 60);
			var hours = Math.floor(mins / 60);
			secs = timeConverter(secs);
			mins = timeConverter(mins);
			hours = timeConverter(hours);
			var time = hours + ':' + mins + ':' + secs
			console.log('time' + time);
			return time;
	}
	var time = 0;
	var signupTime = 'Not yet signed up.';

	var sect1 = $(document).height() * .2;
	var sect2 = $(document).height() * .4;
	var sect3 = $(document).height() * .6;
	var sect4 = $(document).height() * .8;
	var sect5 = $(document).height();

	var section1 = [];
	var section2 = [];
	var section3 = [];
	var section4 = [];
	var section5 = [];

	var timeInSection = function() {
			// if ($(window).scrollTop() < sect1) {


			// push to array?
			var enterTime = new Date($.now());
			var startSection = [enterTime.getSeconds(), enterTime.getMinutes()];
			var	minutes = startSection[1] - startTime[1];
			var secs = (minutes * 60) + startSection[0] - startTime[0]];
			var mins = Math.floor(secs / 60);
			var hours = Math.floor(mins / 60);
			secs = timeConverterSection(secs);
			mins = timeConverterSection(mins);
			hours = timeConverterSection(hours);
			var time = hours + ':' + mins + ':' + secs
			console.log('time' + time);
			return time;
	}

///////////////////////////////////////////////////////		// 
	$('h3').css({
		fontWeight: 'normal',
		padding: 0
	});
	$('.signup').on('click', function(){
		signupTime = timeOnPageNow(new Date($.now()));
	})
	$('body').append(viewMetrics);
	$(viewMetrics).on('click', function(){
		$('body').append(metricsBack).append(metricsBox).append(hideMetrics);
		$(metricsBox).append('<h1>Metrics Info</h1>');
			if (viewPercent($(window).scrollTop()) > prevViewPercent) {	
				$(metricsBox).append('<h2>Percent of Page Viewed: </h2>' + viewPercent($(window).scrollTop()) + '%');
				prevViewPercent = viewPercent($(window).scrollTop());
			} else {
				$(metricsBox).append('<h2>Percent of Page viewed: </h2>' + prevViewPercent + '%');
			}
			if (scrollPercent($(window).scrollTop()) > prevPercentage) {	
				$(metricsBox).append('<h2>Percent of Page Scrolled: </h2>' + scrollPercent($(window).scrollTop()) + '%');
					prevPercentage = scrollPercent($(window).scrollTop());
				} else {
					$(metricsBox).append('<h2>Percent of Page Scrolled: </h2>' + prevPercentage + '%');
						}
			time = timeOnPageNow(new Date($.now()));
			timeOnPage(time);
			$(metricsBox).append('<h2>Time Before Signing up: </h2>' + signupTime);
		$(hideMetrics).on('click', function(){
			$(metricsBack).remove();
			$(metricsBox).remove();
			$(hideMetrics).remove();
			$(metricsBox ).empty();
		});
	});
	


});

















