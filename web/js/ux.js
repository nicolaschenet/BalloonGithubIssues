if ($('body').hasClass('index')) {
    $('#milestones').hide();
    $('#issues_tabs').show();
    $('.see_issues').parent().addClass('active');

    $('.see_milestones').click(function(){
        $('.see_issues').parent().removeClass('active');
        $('.see_milestones').parent().addClass('active');
        $('#issues').hide('fast');
        $('#milestones').show('fast');
    });

    $('.see_issues').click(function(){
        $('.see_milestones').parent().removeClass('active');
        $('.see_issues').parent().addClass('active');
        $('#milestones').hide('fast');
        $('#issues').show('fast');
    });
}

if ($('body').hasClass('add')) {
    $('#form_issue').focus();
}

/** Nico **/
$(function(){
	$('#add-new-issue').button().click( function(event) {
		var button = $(this);
		button.button('loading');
		$('#add-new-issue-target div').load( button.attr('href'), function(){
			$('#add-new-issue-target').show('fast');
			$('#form_issue').focus();
			button.button('reset');
		});
		event.preventDefault();																																																																																																									
	});
});
