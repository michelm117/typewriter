var RED = "#ff0000ff";
var GREY = "#666d88ff";
var BLACK = "black";
var WHITE = "white";
var GREEN = "#10e616ff";

var color = BLACK;
var bg_color = WHITE;
var next_src = "img/next_black.png";
var img_button_src = "img/color_circle.png";

var all_hover_img_src = [
  "img/color_circle_red.png",
  "img/color_circle_green.png",
  "img/color_circle_black.png",
  "img/color_circle_white.png",
];

var Color = {
  WHITE: 0,
  RED: 1,
  GREEN: 2,
  BLACK: 3,
};

var bg_color_index = 0;

$('.checkbox_toolbar input[type="checkbox"]').click(function () {
  var selected = [];
  $(".checkbox_toolbar input:checked").each(function () {
    selected.push($(this).attr("name"));
  });
  console.log(selected);
  $(this).css("background", color);
  $(this).css("color", bg_color);
});

$(".radio_toolbar label").click(function () {
  console.log("CLICKED");
  $(this).css("background", color);
  $(this).css("color", bg_color);
});

// TESTING

// WORKING BELOW: DONT TOUCH

/*
  Change background-color and color if img_circle is clicked
*/
$(".img_btn").click(function () {
  // Set the next hover image
  var next_hover_img_index = (bg_color_index + 1) % all_hover_img_src.length;
  var next_hover_img = all_hover_img_src[next_hover_img_index];
  $(".img_btn:hover").attr("src", next_hover_img);

  bg_color_index = (bg_color_index + 1) % all_hover_img_src.length;

  color = BLACK;
  bg_color = WHITE;
  next_src = "img/next_black.png";

  switch (bg_color_index) {
    case Color.RED:
      color = WHITE;
      bg_color = RED;
      next_src = "img/next_white.png";
      break;
    case Color.GREEN:
      color = GREEN;
      bg_color = GREY;
      next_src = "img/next_green.png";

      break;
    case Color.BLACK:
      color = BLACK;
      bg_color = GREY;
      next_src = "img/next_black.png";
      break;
  }

  $('.checkbox_toolbar input[type="checkbox"]:checked + label').css(
    "background-color",
    color
  );
  $('.checkbox_toolbar input[type="checkbox"]:checked + label').css(
    "color",
    bg_color
  );

  $('.radio_toolbar input[type="radio"]:checked + label').css(
    "background-color",
    color
  );
  $('.radio_toolbar input[type="radio"]:checked + label').css(
    "color",
    bg_color
  );

  $(".typewriter_wrapper").css("background-color", bg_color);
  $("hr").css("border-top", "1px solid " + color);

  $(".btn").css("color", color);
  $(".btn").css("background-color", bg_color);

  $(".slider").css("background", color);
  $(
    "<style type='text/css'>.slider::-webkit-slider-thumb{background:" +
      color +
      "}</style>"
  ).appendTo($("head"));

  $(".textfield").css("color", color);
  $(
    "<style type='text/css'>.textfield::placeholder{color:" +
      color +
      "}</style>"
  ).appendTo($("head"));
  $(".textarea").css("color", color);
  $(".textarea").css("background", bg_color);
  $(".img_btn_next").attr("src", next_src);
  console.log($(".img_btn_next").attr("src"));
});

$('input[name="textfield"]').keyup(function () {
  var text = $('input[name="textfield"]').val();
  console.log(text);
  $(".textarea").html(text.replaceAll("\\n", "<br>"));
});

$(".img_btn").on("mouseover", function () {
  // Show new color on hover
  new_img_src = all_hover_img_src[bg_color_index];
  $(".img_btn").attr("src", new_img_src);
});

$(".img_btn").on("mouseout", function () {
  $(".img_btn").attr("src", img_button_src);
});

function setNewText() {
  var textArray = [
    "First paragraph text",
    "Second paragraph text",
    "Third paragraph with \nline \nbreaks",
    "Fourth paragraph text",
    "Fifth paragraph text",
    "Apollo Amerika Kriwett",
    "Pantone Two Color Selector",
    "Josef Müller-Brockmann  Grid Systems",
    "rollo",
    "Fluid Concepts and Creative Analogies",
    "Die Welt in deinen Händen",
    "PlaybourPark",
    "Work Hard Play hard",
    "Speciment",
    "Rosemarin",
    "A Stack of Books",
  ];

  index = Math.floor(Math.random() * textArray.length);
  text = textArray[index];

  // This checks if the new text is not the same as before.
  // In other words this avoids setting the same text twice.
  old_text = $(".textarea").html().replaceAll("<br>", "\n");
  console.log(old_text);
  while (text === old_text) {
    index = Math.floor(Math.random() * textArray.length);
    text = textArray[index];
  }
  $(".textarea").html(text.replaceAll("\n", "<br>"));
}

// Slider function to increase/decrease the font
$(".slider").on("input", function () {
  $(".textarea").css("font-size", $(this).val() + "px");
});

$(document).ready(function () {
  // Set random text after page is loaded.
  setNewText();

  // Set source image to the img_btn
  $(".img_btn").attr("src", img_button_src);
});

/*
if (!window.x) {
    x = {};
}

x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

$(document).ready(function() {
    $(document).bind("mouseup", function() {
        var mytext = x.Selector.getSelected();
        alert(mytext);
    });
});*/
