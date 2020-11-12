var RED = "#ff0000ff";
var GREY = "#666d88ff";
var BLACK = "black";
var WHITE = "white";
var GREEN = "#10e616ff";


var color = BLACK;
var bg_color = WHITE;

var btn_pressed_bg_color = BLACK;
var btn_pressed_color = WHITE;

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

var img_button_src = "img/color_circle.png";

$(".img_btn").click(function () {
  bg_color_index = (bg_color_index + 1) % all_hover_img_src.length;

  color = BLACK;
  bg_color = WHITE;

  btn_pressed_bg_color = BLACK;
  btn_pressed_color = WHITE;

  switch (bg_color_index) {
    case Color.RED:
      color = WHITE;
      bg_color = RED;

      btn_pressed_bg_color = WHITE;
      btn_pressed_color = RED;
      break;
    case Color.GREEN:
        color = GREEN;
        bg_color = GREY;
      
        btn_pressed_bg_color = GREEN;
        btn_pressed_color = GREY;
      break;
    case Color.BLACK:
        color = BLACK;
        bg_color = GREY;
      
        btn_pressed_bg_color = BLACK;
        btn_pressed_color = GREY;
      break;
  }

  $(".typewriter_wrapper").css("background-color", bg_color);


  $("hr").css("color", color);

  $(".btn").css("color", color);
  $(".btn").css("background-color", bg_color);
  $(".btn:active").css("color", btn_pressed_color);
  $(".btn:active").css("background-color", btn_pressed_bg_color);
  $(".btn:focus").css("color", btn_pressed_color);
  $(".btn:focus").css("background-color", btn_pressed_bg_color);

  $(".btn:focus").css("background-color", btn_pressed_bg_color);

  $(".slider-range .ui-slider-range").css("background", color);
  $(".slider").css("background", color);

  $(".textarea").css("color", color);
});

    $(".btn").click(function(){
      $(this).css("background-color", "btn_pressed_bg_color");
    });

      $(".btn").hover(function(){
        $(this).css("background-color", "btn_pressed_bg_color");

      });



$(".img_btn").on("mouseover", function () {
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
  
    // Declare function fo button 'changeTextButton'.
    $(".changeTextButton").click(function () {
      setNewText();
      console.log("OK");
    });
  });