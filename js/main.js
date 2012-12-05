
$(document).ready(function() {
	
	$('section:first').show();
	
	
	$('section div.page.first').show();

	$(document).keydown(function(event){
		
		if(event.which > 36 && event.which < 41){
			event.preventDefault();
			move_boxes(event.which)
		}
		
	})
	
	$(document).on('submit', 'form', function(event){		
		event.preventDefault();
		
		alert('Form Sent');
	});
	
	
});
var current_sec_id = 1;
var new_sec_id = 1;
var current_page_id = 1;
var new_page_id = 1;

var move_boxes = function(key_pressed){
	
	/*
	37: left
	38: up
	39: right
	40: down
	*/
	
	//console.log(current_page_id);
	
	if(key_pressed == 37 || key_pressed == 39){
		// move pages
		
		if(key_pressed == 39){
			$('#sec'+current_sec_id+'_page'+current_page_id).animate({left: '-1500px'});
			new_page_id = current_page_id + 1;
			
			$('#sec'+current_sec_id+'_page'+new_page_id).css({right: '-1500px'}).show().animate({right: '0px'});
			
			current_page_id = new_page_id;
			
		} else {
			if(current_page_id == 1) return false;
			console.log(current_page_id);
			$('#sec'+current_sec_id+'_page'+current_page_id).animate({right: '-1500px'});
			new_page_id = current_page_id - 1;
			
			$('#sec'+current_sec_id+'_page'+new_page_id).css({left: '-1500px'}).show().animate({left: '0px'});
			
			current_page_id = new_page_id;
		}
		
	} else {
		// move sections
		
		if(key_pressed == 40){
			$('#sec'+current_sec_id).animate({top: '-500px'});
			new_sec_id = current_sec_id + 1;
			
			$('#sec'+new_sec_id).css({bottom: '-1500px'}).show().animate({bottom: '0px'});
			
			current_sec_id = new_sec_id;
			
		} else {
			if(current_sec_id == 1) return false;
			$('#sec'+current_sec_id).animate({bottom: '-1500px'});
			new_sec_id = current_sec_id - 1;
			
			$('#sec'+new_sec_id).css({top: '-1500px'}).show().animate({top: '0px'});
			
			current_sec_id = new_sec_id;
			
		}
		
		
	}
	
	
	
	//console.log(current_sec_id);
	
		
	
	
}

/*

var current_section = function(){
	var select_index = 0;
	$('section').each(function(index){
		if($($('section:visible')[0]).is($(this))){
			select_index = index;
		}
	});
	return select_index;
}

var current_page = function(){
	var select_index = 0;
	$('section div.page', $($('section:visible')[0])).each(function(index){
		if($($('section div.page:visible')[0]).is($(this))){
			select_index = index;
		}
	});
	return select_index;
}
*/