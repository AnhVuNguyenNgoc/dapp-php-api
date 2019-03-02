$(document).ready(function(){

    //điều kiện là gì nè 
    //khi user chọn link a thì gọi hàm khác thui tại nó reload lại js luôn mà
    
    var Routing = $('#Routing').val();

    switch(Routing){
        case 'certificate':
            fetch_certificate_data();
            break;
        case 'major':
            fetch_major_data();
            break;
        default: fetch_certificate_data();
    }
    
    function fetch_certificate_data(){
        
        $.ajax({
            url:"views/certificate/fetch.php",
            success: function(data){
                $('tbody').html(data);

            },
        });
    }

    function fetch_major_data(){
        
        $.ajax({
            url:"views/major/fetch.php",
            success: function(data){
                $('tbody').html(data);

            },
        });
    }
    

    $('#api_create_certificate').on('submit',function(event){
        event.preventDefault();

        //Bắt error

        var form_data=$(this).serialize();

        $.ajax({
            url:"views/certificate/action.php",
            method:"POST",
            data:form_data,     
            success: function(data){

               
                fetch_certificate_data();

                $('#exampleModal').modal('hide');


            },
        });
    });
 
});