// Text to display in the textarea.
var text = "";
var number_of_spans = 1;

// Checkbox clicked.
$('.checkbox_font_weight input[type="checkbox"]').click(function () {
  var checkBox_is_checked = $(this).is(":checked");
  var checkbox_id = this.id;

  if (checkBox_is_checked) {
    number_of_spans++;
    appendTextWithFontWeight(checkbox_id);
  } else {
    number_of_spans--;
    $(".span_" + checkbox_id).remove();
  }
});

function appendTextWithFontWeight(id) {
  var textarea_p = $(".textarea > p");

  var style = "";
  switch (id) {
    case "checkbox_ExtraBlack":
      style = "style='font-weight: 950;'";
      break;

    case "checkbox_Black":
      style = "style='font-weight: 900;'";
      break;

    case "checkbox_ExtraBold":
      style = "style='font-weight: 800;'";
      break;

    case "checkbox_Bold":
      style = "style='font-weight: 700;'";
      break;

    case "checkbox_SemiBold":
      style = "style='font-weight: 600;'";
      break;

    case "checkbox_Medium":
      style = "style='font-weight: 500;'";
      break;

    case "checkbox_Regular":
      style = "style='font-weight: 450;'";
      break;

    case "checkbox_Normal":
      style = "style='font-weight: 400;'";
      break;

    case "checkbox_Light":
      style = "style='font-weight: 300;'";
      break;

    case "checkbox_UltraLight":
      style = "style='font-weight: 250;'";
      break;

    case "checkbox_ExtraLight":
      style = "style='font-weight: 200;'";
      break;

    case "checkbox_Thin":
      style = "style='font-weight: 100;'";
      break;

    case "checkbox_ExtraThin":
      style = "style='font-weight: 50;'";
      break;
  }

  var new_text = text;
  if (number_of_spans > 1) {
    new_text = " " + new_text;
  }

  textarea_p.append(
    "<span class='textarea_span span_" +
      id +
      "' " +
      style +
      ">" +
      new_text +
      "</span>"
  );
}

// Write text to the textarea.
$(".textfield").on("keyup change", function () {
  text = $(this).val();
  //$(".textarea").html(text.replaceAll("\\n", "<br>"));
  $(".textarea > p span").html(text.replaceAll("\n", "<br>"));
});

// Delete Text if clicked.
$(".textfield").click(function () {
  $(this).val("");
});

// Set a random predefined text into the textarea.
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
  while (text === old_text) {
    index = Math.floor(Math.random() * textArray.length);
    text = textArray[index];
  }

  if (number_of_spans > 1) {
    text = " " + text;
  }

  $(".textarea > p span").html(text.replaceAll("\n", "<br>"));
}

// Get a random predefined text.
function getNewText() {
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
  while (text === old_text) {
    index = Math.floor(Math.random() * textArray.length);
    text = textArray[index];
  }

  if (number_of_spans > 1) {
    text = " " + text;
  }

  return text.replaceAll("\n", "<br>");
}

// Set given text into the textarea.
function setText() {
  text = getNewText();

  if (number_of_spans > 1) {
    text = " " + text;
  }

  $(".textearea_paragraph");
  $(".textearea_paragraph")
    .children()
    .fadeOut(300, function () {
      $(".textearea_paragraph")
        .children()
        .html(newText.replaceAll("\n", "<br>"));
    });
  /*
    .children()
    .slideOut(300, function () {
      // Animation complete.
      $(".textearea_paragraph")
        .children()
        .html(newText.replaceAll("\n", "<br>"));
    });*/

  var newText = getNewText();
  $(".textearea_paragraph")
    .children()
    .each(function (index) {
      $(this)
        .delay(300 * index)
        .fadeIn(300);
    });
}

// Slider function to increase/decrease the font
$(".slider").on("input", function () {
  $(".textarea").css("font-size", $(this).val() + "px");
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
      background: "white",
    });
  }
  if ($(this).scrollTop() < $el.height() && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
});

$(document).ready(function () {
  // Set random text after page is loaded.
  setNewText();
});