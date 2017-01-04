function collapseOnReportsAllowedChange(reportsAllowed){
    if(reportsAllowed.is(':checked')){
            // show
            $(".report-schedule-btn-container").removeClass('collapse');
            return;
    }
    else{
        // hide
        $(".report-schedule-btn-container").addClass('collapse');
    }
}
$(function() {

    $(".member-remove").click(function() {
        var $this = $(this);

        $("#rtm-email").text($this.data("email"));
        $("#remove-team-member-email").val($this.data("email"));
        $('#remove-team-member-modal').modal("show");

        return false;
    });

    var reportsAllowed = $("input[name*='reports_allowed']");
    reportsAllowed.change(function(){
        collapseOnReportsAllowedChange(reportsAllowed);
    });
});

$( document ).ready(function() {
    var reportsAllowed = $("input[name*='reports_allowed']");
    collapseOnReportsAllowedChange(reportsAllowed);
});
