function hideCheckbox(checkbox) {
  var checkBox_is_checked = $(checkbox).is(":checked");
  if (checkBox_is_checked) {
    $(checkbox).prop("checked", false); // Unchecks it
    $(checkbox).next().css("color", color);
    $(checkbox).next().css("background", bg_color);
    $(".span_" + $(checkbox).attr("id")).remove();
  }

  $(checkbox).next().hide();
}

function showCheckbox(checkbox) {
  $(checkbox).next().show();

  checkBox_is_checked = $(checkbox).is(":checked");
  if (checkBox_is_checked) {
    $(checkbox).next().css("color", bg_color);
    $(checkbox).next().css("background", color);
  } else {
    $(checkbox).next().css("color", color);
    $(checkbox).next().css("background", bg_color);
  }
}

// MATERIAL FONT CLICKED

$(".material_label").click(function () {
  var checkboxesToShow = [
    "#checkbox_ExtraBlack",
    "#checkbox_Black",
    "#checkbox_ExtraBold",
    "#checkbox_Bold",
    "#checkbox_SemiBold",
    "#checkbox_Medium",
    "#checkbox_Regular",
    "#checkbox_Normal",
    "#checkbox_Light",
    "#checkbox_UltraLight",
    "#checkbox_ExtraLight",
    "#checkbox_Thin",
    "#checkbox_ExtraThin",
  ];

  $.each(checkboxesToShow, function (index, value) {
    showCheckbox(value);
  });

  //$("#checkbox_Regular").prop("checked", true);
});

// PROGRESS FONT CLICKED

$(".progress_label").click(function () {
  var checkboxesToHide = ["#checkbox_ExtraBold", "#checkbox_ExtraBlack"];

  $.each(checkboxesToHide, function (index, value) {
    hideCheckbox(value);
  });

  var checkboxesToShow = [
    "#checkbox_Black",
    "#checkbox_Bold",
    "#checkbox_SemiBold",
    "#checkbox_Medium",
    "#checkbox_Regular",
    "#checkbox_Normal",
    "#checkbox_Light",
    "#checkbox_UltraLight",
    "#checkbox_ExtraLight",
    "#checkbox_Thin",
    "#checkbox_ExtraThin",
  ];

  $.each(checkboxesToShow, function (index, value) {
    showCheckbox(value);
  });

  //$("#checkbox_Regular").prop("checked", true);
});

// BEGATO FONT CLICKED

$(".begato_label").click(function () {
  var checkboxesToHide = [
    $("#checkbox_Normal"),
    $("#checkbox_Black"),
    $("#checkbox_ExtraBlack"),
    $("#checkbox_UltraLight"),
  ];
  $.each(checkboxesToHide, function (index, value) {
    hideCheckbox(value);
  });

  var checkToShow = [
    "#checkbox_ExtraBold",
    "#checkbox_Bold",
    "#checkbox_SemiBold",
    "#checkbox_Medium",
    "#checkbox_Regular",
    "#checkbox_Light",
    "#checkbox_ExtraLight",
    "#checkbox_Thin",
    "#checkbox_ExtraThin",
  ];
  $.each(checkToShow, function (index, value) {
    showCheckbox(value);
  });

  //$("#checkbox_Regular").prop("checked", true);
});



// Radio clicked.
$('.radio_toolbar input[type="radio"]').click(function () {
  var clicked_id = this.id;

  var textarea = $(".textarea");
  switch (clicked_id) {
    case "radio_progress":
      textarea.css("font-family", "Progress");
      break;
    case "radio_material":
      textarea.css("font-family", "Material");
      break;

    case "radio_begato":
      textarea.css("font-family", "Begato");
      break;

    default:
      break;
  }
});

$(document).ready(function () {
  $(".material_label").trigger("click");

  $("#checkbox_Regular").trigger("click");
});
