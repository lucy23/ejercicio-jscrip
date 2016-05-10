$(document).ready(function(){



// abre y cierra el menu

	$('#mobile-button').click(function(){
		var menu = $('#menu-container');


		if (menu.is(':visible') ) {
		menu.hide();

        } else {
		menu.show();
		$('#mobile-button').hide();
		$('#mobile-close').show();

	}
});

	$('#mobile-close').click(function(){
        var menu = $('#menu-container'); 

	menu.hide();
	$('#mobile-button').show();
	$('#mobile-close').hide();
});


//resize. al cambiar tamaños ocultamos botones del menu hamburguesa.
  // no funciona.

$(window).resize(function(){
	if($(window).windth()>990)
	{
		$('mobile-close').hide();
		$('mobile-button').hide();
	}else{
		$('mobile-button').show();

	}

});



// hover que muestra los submenus 

 $(".clearfix li").hover(function () {
     $(this).find('.sub-menu').fadeToggle('100');
    });

// esto hace que las cosas se queden marcadas

//

	// $('.clearfix li').click(function(){
	    
	//     if($(this).hasClass('current-menu-item')){
	//     
	//     }else{
	//         $('.clearfix li').removeClass('current-menu-item');
	//         
	// });
})
