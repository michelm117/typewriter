// Text to display in the textarea.
var text = "";
var number_of_spans = 1;

// Checkbox clicked.
$('.checkbox_font_weight input[type="checkbox"]').click(function () {
  var checkBox_is_checked = $(this).is(":checked");
  var checkbox_id = this.id;
  console.log(checkbox_id);

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
    case "checkbox_black":
      style = "style='font-weight: 900;'";
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

    case "checkbox_Normal":
      style = "style='font-weight: 400;'";
      break;

    case "checkbox_Light":
      style = "style='font-weight: 300;'";
      break;

    case "checkbox_Extra_Light":
      style = "style='font-weight: 200;'";
      break;

    case "checkbox_Thin":
      style = "style='font-weight: 100;'";
      break;

    default:
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

// Radio clicked.
$('.radio_toolbar input[type="radio"]').click(function () {
  var clicked_id = this.id;

  var textarea = $(".textarea");
  switch (clicked_id) {
    case "radio_soer":
      textarea.css("font-family", "Times New Roman");
      break;

    case "radio_progress":
      textarea.css("font-family", "Arial");
      break;
    case "radio_material":
      textarea.css("font-family", "Lucida Console");
      break;

    case "radio_begato":
      textarea.css("font-family", "Courier New");
      break;

    default:
      break;
  }
  console.log(textarea.css("font-family"));
});

// Write text to the textarea.
$(".textfield").on("keyup change", function () {
  text = $(this).val();
  //$(".textarea").html(text.replaceAll("\\n", "<br>"));
  $(".textarea > p span").html(text.replaceAll("\n", "<br>"));
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
  //$(".textarea").siblings().text("OK");
  $(".textarea > p span").html(text.replaceAll("\n", "<br>"));
}

// Slider function to increase/decrease the font
$(".slider").on("input", function () {
  $(".textarea").css("font-size", $(this).val() + "px");
});

$(document).ready(function () {
  // Set random text after page is loaded.
  setNewText();
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
