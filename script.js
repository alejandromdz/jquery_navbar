$(document).ready(function(){
    $anchors=$('#main-nav a');
    $sections=$('section');
    $sections.hide();
    $('#section2').hide();
    $anchors.click(function(ev,a){
        ev.preventDefault();
        $anchors.removeClass('active')
        $sections.hide();
        $this=$(this);
        $this.addClass('active');
        $($this.attr('href')).show();
    })
})