function updateSize() {
    var newFontSize = document.querySelector('#size').value + 'px';
    document.querySelector('.sample ').style.fontSize = newFontSize;
    document.querySelector('.sample2 ').style.fontSize = newFontSize;
    document.querySelector('.sample3 ').style.fontSize = newFontSize;
    document.querySelector('.sample4 ').style.fontSize = newFontSize;
}

updateSize();

function setColor(background, color) {
    var x = document.querySelectorAll(" .typetesterwrapper, .allbtn, .btn  ");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = background;
        x[i].style.color = color;
    }
}

function updateLineHeight(newVal) {
    var newFontSize = newVal + 'px';

    document.querySelector('.sample').style.lineHeight = newFontSize;
};

function myFunction() {
    idArray = new Array()
    idArray[1] = "First paragraph text"
    idArray[2] = "Second paragraph text"
    idArray[3] = "Third paragraph text"
    idArray[4] = "Fourth paragraph text"
    idArray[5] = "Fifth paragraph text"
    idArray[6] = "Apollo Amerika Kriwett"
    idArray[7] = "Pantone Two Color Selector"
    idArray[8] = "Josef Müller-Brockmann  Grid Systems"
    idArray[9] = "rollo"
    idArray[10] = "Fluid Concepts and Creative Analogies"
    idArray[12] = "Die Welt in deinen Händne"
    idArray[13] = "PlaybourPark"
    idArray[14] = "Work Hard Play hard"
    idArray[15] = "Speciment"
    idArray[16] = "Rosemarin"
    idArray[17] = "A Stack of Books"
    document.getElementById("select").onclick = myFunction;

    randomParagraph = Math.floor(Math.random() * 17);

    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];
};

function myFunction2() {
    idArray = new Array()
    idArray[1] = "First paragraph text"
    idArray[2] = "Second paragraph text"
    idArray[3] = "Third paragraph text"
    idArray[4] = "Fourth paragraph text"
    idArray[5] = "Fifth paragraph text"
    idArray[6] = "Apollo Amerika Kriwett"
    idArray[7] = "Pantone Two Color Selector"
    idArray[8] = "Josef Müller-Brockmann  Grid Systems"
    idArray[9] = "rollo"
    idArray[10] = "Fluid Concepts and Creative Analogies"
    idArray[12] = "Die Welt in deinen Händne"
    idArray[13] = "PlaybourPark"
    idArray[14] = "Work Hard Play hard"
    idArray[15] = "Speciment"
    idArray[16] = "Rosemarin"
    idArray[17] = "A Stack of Books"
    document.getElementById("select2").onclick = myFunction2;

    randomParagraph = Math.floor(Math.random() * 17);

    document.getElementById("result2").innerHTML = idArray[randomParagraph + 1];
};

function myFunction3() {
    idArray = new Array()
    idArray[1] = "First paragraph text"
    idArray[2] = "Second paragraph text"
    idArray[3] = "Third paragraph text"
    idArray[4] = "Fourth paragraph text"
    idArray[5] = "Fifth paragraph text"
    idArray[6] = "Apollo Amerika Kriwett"
    idArray[7] = "Pantone Two Color Selector"
    idArray[8] = "Josef Müller-Brockmann  Grid Systems"
    idArray[9] = "rollo"
    idArray[10] = "Fluid Concepts and Creative Analogies"
    idArray[12] = "Die Welt in deinen Händne"
    idArray[13] = "PlaybourPark"
    idArray[14] = "Work Hard Play hard"
    idArray[15] = "Speciment"
    idArray[16] = "Rosemarin"
    idArray[17] = "A Stack of Books"
    document.getElementById("select3").onclick = myFunction3;

    randomParagraph = Math.floor(Math.random() * 17);

    document.getElementById("result3").innerHTML = idArray[randomParagraph + 1];
};

function myFunction4() {
    idArray = new Array()
    idArray[1] = "First paragraph text"
    idArray[2] = "Second paragraph text"
    idArray[3] = "Third paragraph text"
    idArray[4] = "Fourth paragraph text"
    idArray[5] = "Fifth paragraph text"
    idArray[6] = "Apollo Amerika Kriwett"
    idArray[7] = "Pantone Two Color Selector"
    idArray[8] = "Josef Müller-Brockmann  Grid Systems"
    idArray[9] = "rollo"
    idArray[10] = "Fluid Concepts and Creative Analogies"
    idArray[12] = "Die Welt in deinen Händne"
    idArray[13] = "PlaybourPark"
    idArray[14] = "Work Hard Play hard"
    idArray[15] = "Speciment"
    idArray[16] = "Rosemarin"
    idArray[17] = "A Stack of Books"
    document.getElementById("select4").onclick = myFunction4;

    randomParagraph = Math.floor(Math.random() * 17);

    document.getElementById("result4").innerHTML = idArray[randomParagraph + 1];
};

function changeAll() {
    jQuery('input[type="text"]').on('keydown, keyup', function () {
        //get a reference to the text input value
        var texInputValue = $('#myInput').val();

        //show the text input value in the UI
        jQuery('#result').html(texInputValue);
        jQuery('#result2').html(texInputValue);
        jQuery('#result3').html(texInputValue);
        jQuery('#result4').html(texInputValue);
    });
};

jQuery(document).ready(function header2() {
    var stickyTop = $('.header2').offset().top;
    jQuery(window).scroll(function () {
        var windowTop = $(window).scrollTop();

        if (stickyTop < windowTop) {
            jQuery('.header2').css('position', 'fixed');
        } else {
            jQuery('.header2').css('position', 'relative');
        }
    });
});

jQuery(function btn() {
    jQuery('.btn').click(function () {
        var active = $(this).hasClass('active2');
        //make all inactive-doesn't work
        jQuery('.btn').each(function () {
            if (jQuery(this).hasClass('active2')) {
                jQuery(this).removeClass('active2')
            }
        });

        if (active) {
            jQuery(this).removeClass('active2')
        } else {
            jQuery(this).addClass('active2')
        }
    });
});

jQuery(function btnall() {
    jQuery("div.flipClass").on('click mouseover', function () {

        jQuery(this).next(".panelClass").animate({
            width: 'toggle'
        });
    });
});

jQuery(function style() {
    jQuery('#options').on('click', 'button', function () {
        var $iclass = jQuery(this).data('style');
        var target = jQuery('#target').find('span');
        $iclass = target.hasClass($iclass) ? "" : $iclass;
        target.removeClass().addClass("" + $iclass)

    });
});