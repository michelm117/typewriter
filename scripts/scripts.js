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
     "Gesture-miburi- as Wolrd process Shutaro Mukai",
    "Apollo Amerika Kriwett",
    "Grid systems in graphic design\nRaster systeme für die visuelle Gestaltung \nJosef Müller-Brockmann",
    "Das Buch der Zeichen und Symbole",
    "Fifth paragraph text",
    "Apollo Amerika Kriwett",
    "Pantone Two Color Selector",
    "Zeichen, Marker, Zinken\nSigns, Brands, Marks Kirstin Bühler Oppenheimer",
    "Fluid Concepts and Creative Analogies",
    "ikebana almanach",
    "Schaufenster International 2\nWindow Display",
    "Film + Design Peter von Arx",
    "Kyrill Constantinides Tank: Janus Neinus Vielleichtus",
    "Flatland A Romance of Many Edwin A. Abbott",
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
  "Gesture-miburi- as Wolrd process Shutaro Mukai",
    "Apollo Amerika Kriwett",
    "Grid systems in graphic design\nRaster systeme für die visuelle Gestaltung \nJosef Müller-Brockmann",
    "Das Buch der Zeichen und Symbole",
    "summa cosmographica Kohei Sugiura",
    "Apollo Amerika Kriwett",
    "Pantone Two Color Selector",
    "Zeichen, Marker, Zinken\nSigns, Brands, Marks Kirstin Bühler Oppenheimer",
    "Fluid Concepts and Creative Analogies",
    "ikebana almanach",
    "Schaufenster International 2\nWindow Display",
    "Film + Design Peter von Arx",
    "Kyrill Constantinides Tank: Janus Neinus Vielleichtus",
    "Flatland A Romance of Many Edwin A. Abbott",
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
  var time_for_fadeIn = time_for_span_animation;
  console.log(time_for_fadeIn);
  $(".textearea_paragraph")
    .children()
    .each(function (index) {
      $(this)
        .delay(time_for_fadeIn * index)
        .fadeIn(time_for_fadeIn);
    });
}

// Slider function to increase/decrease the font
$(".slider").on("input", function () {
  $(".textarea").css("font-size", $(this).val() + "px");
});



$(document).ready(function () {
  // Set random text after page is loaded.
  setNewText();
});
