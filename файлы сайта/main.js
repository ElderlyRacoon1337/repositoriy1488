
$(".but1").click(function() {
	$('.more-popup1').css('display', 'block');
});

$(".but2").click(function() {
	$('.more-popup2').css('display', 'block');
});

$(".but3").click(function() {
	$('.more-popup3').css('display', 'block');
});

$(".wal-wrap").click(function() {
	$('.page').css('display', 'block');
});

$(".close").click(function() {
	$('.popup').css('display', 'none');
});

$(".close").click(function() {
	$('.page').css('display', 'none');
});





var value = 72;

var input = "1";

var tim = 0;

var kek;

left = $('.dot').css('left');
bottom = $('.dot').css('bottom');


function chlen() {

	function lol(){
		bottom = bottom.replace('px','');
		bottom = bottom/"1";
		if (kek>0){
			bottom +=(Math.abs(kek))/10;
		}
		else {
			bottom -=(Math.abs(kek))/10;
		}
		bottom += "px";
		
		newElems.css("bottom", bottom);
	}

	for (i=0;i<100;i++){
		var newElems = $("<div class='dot'></div>");

		left = left.replace('px','');
		left = left/"1";
		left += 0.1;
		left += "px";
		
		newElems.css("left", left);

		lol("");

		$('.area').append(newElems);
	}

};




$(".area").click(function(){


	input = prompt("");

	input /= 1;

	tim = value;

	value = input;

	kek = input-tim;

	// console.log(kek);

	chlen();

});



	


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
