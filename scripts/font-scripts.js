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
  var checkboxesToHide = [
    "#checkbox_ss10",
    "#checkbox_ss12",
    "#checkbox_tnum",
    "#checkbox_zero",
  ];

  $.each(checkboxesToHide, function (index, value) {
    hideCheckbox(value);
  });

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

    "#checkbox_sso1",
    "#checkbox_sso2",
    "#checkbox_sso3",
    "#checkbox_sso4",
    "#checkbox_sso5",
    "#checkbox_sso6",
    "#checkbox_sso7",
    "#checkbox_sso8",
    "#checkbox_sso9",
    "#checkbox_ss11",
    "#checkbox_ss13",
    "#checkbox_liga",
  ];

  $.each(checkboxesToShow, function (index, value) {
    showCheckbox(value);
  });

  //$("#checkbox_Regular").prop("checked", true);
});

// PROGRESS FONT CLICKED

$(".progress_label").click(function () {
  var checkboxesToHide = [
    "#checkbox_ExtraBold",
    "#checkbox_ExtraBlack",
    "#checkbox_sso3",
    "#checkbox_sso7",
    "#checkbox_sso8",
    "#checkbox_ss13",
    "#checkbox_liga",
  ];

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

    "#checkbox_sso1",
    "#checkbox_sso2",
    "#checkbox_sso4",
    "#checkbox_sso5",
    "#checkbox_sso6",
    "#checkbox_sso9",
    "#checkbox_ss10",
    "#checkbox_ss11",
    "#checkbox_ss12",
    "#checkbox_tnum",
    "#checkbox_zero",
  ];

  $.each(checkboxesToShow, function (index, value) {
    showCheckbox(value);
  });

  //$("#checkbox_Regular").prop("checked", true);
});

// BEGATO FONT CLICKED

$(".begato_label").click(function () {
  var checkboxesToHide = [
    "#checkbox_Normal",
    "#checkbox_Black",
    "#checkbox_ExtraBlack",
    "#checkbox_UltraLight",

    "#checkbox_sso6",
    "#checkbox_sso7",
    "#checkbox_sso8",
    "#checkbox_sso9",
    "#checkbox_ss10",
    "#checkbox_ss11",
    "#checkbox_ss12",
    "#checkbox_ss13",
    "#checkbox_tnum",
    "#checkbox_liga",
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

    "#checkbox_sso1",
    "#checkbox_sso2",
    "#checkbox_sso3",
    "#checkbox_sso4",
    "#checkbox_sso5",
    "#checkbox_zero",
  ];
  $.each(checkToShow, function (index, value) {
    showCheckbox(value);
  });

  //$("#checkbox_Regular").prop("checked", true);
});

// Font selected.
$('.radio_toolbar input[type="radio"]').click(function () {
  var clicked_id = this.id;

  var textarea = $(".textarea > p");
  switch (clicked_id) {
    case "radio_progress":
      //textarea.css("font-family", "Progress");
      textarea.fadeOut(300, function () {
        $(this).css("font-family", "Progress");
        $(this).fadeIn(300);
      });
      break;
      c;
    case "radio_material":
      textarea.fadeOut(300, function () {
        $(this).css("font-family", "Material");
        $(this).fadeIn(300);
      });
      //textarea.css("font-family", "Material");
      break;

    case "radio_begato":
      textarea.fadeOut(300, function () {
        $(this).css("font-family", "Begato");
        $(this).fadeIn(300);
      });
      //textarea.css("font-family", "Begato");
      break;

    default:
      break;
  }
});

var fontFeaturesActivated = {
  checkbox_sso1: false,
  checkbox_sso2: false,
  checkbox_sso3: false,
  checkbox_sso4: false,
  checkbox_sso5: false,
  checkbox_sso6: false,
  checkbox_sso7: false,
  checkbox_sso8: false,
  checkbox_sso9: false,
  checkbox_ss10: false,
  checkbox_ss11: false,
  checkbox_ss12: false,
  checkbox_ss13: false,
  checkbox_liga: false,
  checkbox_tnum: false,
  checkbox_zero: false,
};

var fontFeatures = {
  checkbox_sso1: "ss01",
  checkbox_sso2: "ss02",
  checkbox_sso3: "ss03",
  checkbox_sso4: "ss04",
  checkbox_sso5: "ss05",
  checkbox_sso6: "ss06",
  checkbox_sso7: "ss07",
  checkbox_sso8: "ss08",
  checkbox_sso9: "ss09",
  checkbox_ss10: "ss10",
  checkbox_ss11: "ss11",
  checkbox_ss12: "ss12",
  checkbox_ss13: "ss13",
  checkbox_liga: "liga",
  checkbox_tnum: "tnum",
  checkbox_zero: "zero",
};

$('.font_features_checkboxes input[type="checkbox"]').click(function () {
  var clicked_id = this.id;
  checkBox_is_checked = $("#" + clicked_id).is(":checked");
  fontFeaturesActivated[clicked_id] = checkBox_is_checked;

  // Collect all activated font-features.
  var font_feature_settings = "";
  $.each(fontFeaturesActivated, function (key, value) {
    if (value) {
      font_feature_settings += '"' + fontFeatures[key] + '" 1, ';
    }
  });

  // remove ', ' from string.
  if (font_feature_settings.length > 1) {
    font_feature_settings = font_feature_settings.slice(0, -2);
  }

  // Append existing style with font-features
  $(".textearea_paragraph").css("font-feature-settings", font_feature_settings);
});

// On document ready
$(document).ready(function () {
  $("#checkbox_Regular").trigger("click");
  $(".material_label").trigger("click");

  setTimeout(function () {
    var div = document.getElementsByClassName("textarea")[0];
    div.focus();
  }, 0);
});
