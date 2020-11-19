(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);

//function display(){
// 	var  name = document.getElementById('name').value
	//var email = document.getElementById('email').value
	//var phone = document.getElementById('phone').value
//	var city = document.getElementById('city').value
//	var country = document.getElementById('country').value
//	var arrive = document.getElementById('arrive').value
//	var depart = document.getElementById('depart').value
//	var people = document.getElementById('people').value
//	var room = document.getElementById('room').value
//	var roomn = document.getElementById('').value
//}