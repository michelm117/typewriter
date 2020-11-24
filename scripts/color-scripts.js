/**
 * Handles Color change.
 */
var color_transition_time = ".5s";
var font_transition_time = ".3s";
var change_text_time = 1000;

var RED = "#ff0000ff";
var GREY = "#666d88ff";
var BLACK = "black";
var WHITE = "white";
var GREEN = "#10e616ff";

var color = BLACK;
var bg_color = WHITE;
var next_src = "img/next_black.png";
var stop_src = "img/stop_white.png";
var img_button_src = "img/color_circle.svg";
var is_changing_text_automatically = false;

var all_hover_img_src = [
  "img/color_circle_red.svg",
  "img/color_circle_green.svg",
  "img/color_circle_black.svg",
  "img/color_circle_white.svg",
];

var Color = {
  WHITE: 0,
  RED: 1,
  GREEN: 2,
  BLACK: 3,
};

var bg_color_index = 3;

$(".btn").hover(function () {
  switch (bg_color_index) {
    case Color.WHITE:
      $(this).toggleClass("btn_active_white");
      break;

    case Color.RED:
      $(this).toggleClass("btn_active_red");
      break;

    case Color.GREEN:
      $(this).toggleClass("btn_active_green");
      break;

    case Color.BLACK:
      $(this).toggleClass("btn_active_black");
      break;
  }
});
/**********************************
 *                                *
 *     Code below is working      *
 *                                *
 *********************************/

/*
  Change background-color and color if img_circle is clicked
*/
$(".img_btn").click(function () {
  // Set the next hover image
  var next_hover_img_index = (bg_color_index + 1) % all_hover_img_src.length;
  var next_hover_img = all_hover_img_src[next_hover_img_index];
  $(".img_btn:hover").attr("src", next_hover_img);

  bg_color_index = (bg_color_index + 1) % all_hover_img_src.length;

  switch (bg_color_index) {
    case Color.RED:
      color = WHITE;
      bg_color = RED;
      next_src = "img/next_white.png";
      stop_src = "img/stop_red.png";
      break;

    case Color.GREEN:
      color = GREEN;
      bg_color = GREY;
      next_src = "img/next_green.png";
      stop_src = "img/stop_green.png";
      break;

    case Color.BLACK:
      color = BLACK;
      bg_color = GREY;
      next_src = "img/next_black.png";
      stop_src = "img/stop_black.png";
      break;

    case Color.WHITE:
      color = BLACK;
      bg_color = WHITE;
      next_src = "img/next_black.png";
      stop_src = "img/stop_white.png";
      break;
  }

  // Set button color.
  $(".btn").css("transition", color_transition_time);
  $(".btn").css("color", color);
  $(".btn").css("background-color", bg_color);

  // Set background color and line color.
  //$(".typewriter_wrapper").css("background-color", bg_color);
  $("hr").css("transition", color_transition_time);
  $("hr").css("border-top", "1px solid " + color);

  // For all checkboxes set label colors.
  $('.checkbox_toolbar input[type="checkbox"]').each(function () {
    var label = $("label[for=" + this.id + "]");
    label.css("transition", color_transition_time);
    if ($(this).is(":checked")) {
      label.css("color", bg_color);
      label.css("background-color", color);
    } else {
      label.css("color", color);
      label.css("background-color", bg_color);
    }
  });

  $(".checkbox_toolbar label").css("border", "1px solid rgba(0, 0, 0, 0)");
  $(".radio_toolbar label").css("border", "1px solid rgba(0, 0, 0, 0)");

  // For all radioButtons set label colors.
  $('.radio_toolbar input[type="radio"]').each(function () {
    var label = $("label[for=" + this.id + "]");
    label.css("transition", color_transition_time);
    if ($(this).is(":checked")) {
      label.css("color", bg_color);
      label.css("background-color", color);
    } else {
      label.css("color", color);
      label.css("background-color", bg_color);
    }
  });

  // Set slider color.
  $(".slider").css("transition", color_transition_time);
  $(".slider").css("background", color);
  $(".slider").css("border-top", "1px solid " + color);
  $(
    "<style type='text/css'>.slider::-webkit-slider-thumb{transition:" +
      color_transition_time +
      ";background:" +
      color +
      "}</style>"
  ).appendTo($("head"));

  // Set textfield color.
  $(".textfield").css("transition", color_transition_time);
  $(".textfield").css("color", color);
  $(
    "<style type='text/css'>.textfield::placeholder{transition:" +
      color_transition_time +
      ";color:" +
      color +
      "}</style>"
  ).appendTo($("head"));

  // Set textarea color.
  $(".textarea").css("transition", color_transition_time);
  $(".textarea").css("color", color);
  $("body").css("transition", color_transition_time);
  $("body").css("background", bg_color);
  $(".settings_bar").css("transition", color_transition_time);
  $(".settings_bar").css("background", bg_color);

  // Set the next image.
  if (is_changing_text_automatically) {
    $(".img_btn_next").attr("src", stop_src);
  } else {
    $(".img_btn_next").attr("src", next_src);
  }
});

// Checkbox clicked.
$('.checkbox_toolbar input[type="checkbox"]').click(function () {
  checkBox_is_checked = $(this).is(":checked");
  if (checkBox_is_checked) {
    $("label[for=" + this.id + "]").css("color", bg_color);
    $("label[for=" + this.id + "]").css("background", color);
  } else {
    $("label[for=" + this.id + "]").css("color", color);
    $("label[for=" + this.id + "]").css("background", bg_color);
  }
});

// Show the upcoming color on mouse hover over color circle.
$(".checkbox_toolbar label").on("mouseover", function () {
  $(this).css("border", "1px solid " + color);
  //$(this).css("border-style", "solid");
});

// Set the normal circle image when hovered out.
$(".checkbox_toolbar label").on("mouseout", function () {
  $(this).css("border", "1px solid " + bg_color);
});

// Radio clicked.
$('.radio_toolbar input[type="radio"]').click(function () {
  var clicked_id = this.id;

  // For all radioButtons set label colors.
  $('.radio_toolbar input[type="radio"]').each(function () {
    radio_is_checked = $(this).is(":checked");
    var label = $("label[for=" + this.id + "]");

    if (this.id === clicked_id) {
      label.css("color", bg_color);
      label.css("background-color", color);
    }
    if (!radio_is_checked) {
      label.css("color", color);
      label.css("background-color", bg_color);
    }
  });
});

// Show the upcoming color on mouse hover over color circle.
$(".radio_toolbar label").on("mouseover", function () {
  $(this).css("border", "1px solid " + color);
  //$(this).css("border-style", "solid");
});

// Set the normal circle image when hovered out.
$(".radio_toolbar label").on("mouseout", function () {
  $(this).css("border", "1px solid " + bg_color);
});

// Show the upcoming color on mouse hover over color circle.
$(".img_btn").on("mouseover", function () {
  // Show new color on hover
  new_img_src = all_hover_img_src[bg_color_index];
  $(".img_btn").attr("src", new_img_src);
});

// Set the normal circle image when hovered out.
$(".img_btn").on("mouseout", function () {
  $(".img_btn").attr("src", img_button_src);
});

// Set stop image when next btn is clicked
$(".img_btn_next").click(function () {
  changeTextEveryInterval();
});

var inst;
function changeTextEveryInterval() {
  var img_src = stop_src;

  if (!is_changing_text_automatically) {
    if ($(".textearea_paragraph").children().length === 1) {
      change_text_time = 2000;
    } else if ($(".textearea_paragraph").children().length === 2) {
      change_text_time = 2000;
    } else if ($(".textearea_paragraph").children().length === 2) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 3) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 4) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 5) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 6) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 7) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 8) {
      change_text_time = 1000;
    } else if ($(".textearea_paragraph").children().length === 9) {
      change_text_time = 1000;
    } else {
      change_text_time = 1000;
    }
    var time = $(".textearea_paragraph").children().length * change_text_time;
    inst = setInterval(setText, time);
    // sets the curser at the end of the line.
    $(".textarea").val($("textarea").val() + " ");
  } else {
    img_src = next_src;
    clearInterval(inst);
  }
  $(".img_btn_next").attr("src", img_src);
  is_changing_text_automatically = !is_changing_text_automatically;
}

function fadeSpansIn() {
  $(".textearea_paragraph").children().fadeOut(1);

  setNewText();

  $(".textearea_paragraph")
    .children()
    .each(function (index) {
      console.log($(".textearea_paragraph").children());
      $(this)
        .delay(1 * index)
        .fadeIn(1);
    });
}

$(".checkbox_font_weight").click(function () {
  if (is_changing_text_automatically) {
    changeTextEveryInterval();
    changeTextEveryInterval();
  }
});

$(".textfield").focus(function () {
  if (is_changing_text_automatically) {
    changeTextEveryInterval();
  }
});

$(".changeTextButton").focus(function () {
  if (is_changing_text_automatically) {
    changeTextEveryInterval();
  }
});

$(".textarea").focus(function () {
  if (is_changing_text_automatically) {
    changeTextEveryInterval();
  }
});

$(".radio_toolbar").click(function () {
  if (is_changing_text_automatically) {
    changeTextEveryInterval();
  }
});

$(document).ready(function () {
  $(".img_btn").trigger("click");
});

// Make Settings_Bar sticky.
$(window).scroll(function (e) {
  var $el = $(".settings_bar");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > $el.height() && !isPositionFixed) {
    $el.css({
      position: "fixed",
      top: "0px",
      "z-index": "100",
      background: bg_color,
    });
  }
  if ($(this).scrollTop() < $el.height() && isPositionFixed) {
    $el.css({ position: "static", top: "0px", background: bg_color });
  }
});
