jQuery(document).ready(function(){
    $('#csv-upload-form').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        jQuery.ajax({
            url: turitop-object.ajax_url,
            data: formData,
            dataType: "json",
            method: "POST",
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response);
            }
        });
    });
});