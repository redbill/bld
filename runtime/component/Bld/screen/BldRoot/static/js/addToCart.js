$(function() {
     $("#addToCartBtn").click(function() {
           console.log('add to cart btn clicked')
           $.ajax({  
        	    url:'addToCart',// 跳转到 action  
        	    data:{  
        	             productId : $("#productId").val()
        	    },  
        	    type:'post',  
        	    cache:false,  
        	    dataType:'json',  
        	    success:function(data) {  
        	        	console.log('add to cart btn success')
        	            window.location.reload();  
        	     },  
        	     error : function() {  
        	    	 console.log('add to cart btn clicked but error')
        	     }  
        	});

      });

})