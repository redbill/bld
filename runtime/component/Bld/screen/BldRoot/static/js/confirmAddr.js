$(function() {
     $("#confirmShipAddr").click(function() {
           console.log('add to cart btn clicked')
           var postalContactMechId = $('input[name="contactInfoRadios"]:checked ').val();
           if (typeof(postalContactMechId) == "undefined"){ 
        	   	$('#resultInfo').html('<div class="alert alert-danger"  role="alert" >请选择一个地址!</div>');
        	   }else{
		           $.ajax({  
		        	    url:'/yfyg/Customer/ConfirmShip/confirmShipAddr',// 跳转到 action  
		        	    data:{  
		        	    	orderId : $("#orderId").val(),
		        	    	orderItemSeqId : $("#orderItemSeqId").val(),
		        	              productId : $("#productId").val(),
		        	              productNoSeqId : $("#productNoSeqId").val(),
		        	              postalContactMechId : postalContactMechId,
		        	              moquiSessionToken : $("#moquiSessionToken").val()
		        	    },  
		        	    type:'post',  
		        	    cache:false,  
		        	    dataType:'json',  
		        	    success:function(data) {  
		        	        	console.log('add to cart btn success')
		        	        	$('#resultInfo').html('<div class="alert alert-success" role="alert">确认地址成功</div>');
		        	            window.location.href='/yfyg';  
		        	     },  
		        	     error : function() {  
		        	    	 console.log('add to cart btn clicked but error')
		        	     }  
		        	});
           
        	   }

      });
     
     
     

})