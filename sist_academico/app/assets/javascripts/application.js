// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-modal
//= require calendar
//= require bootstrap-dropdown
//= require jquery-ui.min
//= require jsapi
//= require bootstrap-button
//= require jquery.corner
//= require_tree .

$(document).ready(function() {
  //Ready for calendar
  $("#fecha").datepicker({
  	changeMonth: true,
  	changeYear: true,
  	onSelect: function(dateText, inst) {}
  });
  //ready for search in the table
  $("#kwd_search").keyup(function(){
    if( $(this).val() != "")
    {
      $("#my-table tbody>tr").hide();
      $("#my-table td:contains-ci('" + $(this).val() + "')").parent("tr").show();
    }
    else
    {
      $("#my-table tbody>tr").show();
    }
  });

  $.extend($.expr[":"], 
  {
      "contains-ci": function(elem, i, match, array) 
    {
      return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
  
});
    


function muestra_oculta(id){
  var el =document.getElementById(id);
  el.style.display = (el.style.display=='none') ? 'block' : 'none';
}

function edicion_planificacion(){
  $('#campos_edicion').show();
  $('#campos').hide();
}

function edicion_planificacion2(){
  $('#campos_edicion').hide();
  $('#campos').show();
}

function validar(obj) {
  txt = obj.value;
  if(parseInt(txt) != parseFloat(txt)) {
    alert('Solo debe ser número entero');
  }
}

function change_data_by_select(path){
  $('#select_type').on('change', function(){
    var _type = $("#select_type").val();
    var range = $("#6").val();
    $.ajax({
      url: path,
      data: { "select_type": _type, "select_range": range },
      async: true,
      dataType: 'script'
     });
     return false;
  });
}

function change_data_by_note(path){
  $('.btn').on('click', function(){
    $("#6").val($(this).val());
    $(this).button('toggle');
    var _type = $("#select_type").val();
    var range = $("#6").val();
    $.ajax({
      url: path,
      data: { "select_type": _type, "select_range": range },
      async: true,
      dataType: 'script'
     });
     return false;
  });
}

function change_data_by_filters(){
  $('#consult_between_link').on("click", function() {
    var _from = $("#from").val();
    var _to = $("#to").val();
     var _type = $("#select_type").val();
    var range = $("input[name='radio']:checked").attr('id');
    $.ajax({
    url: $(this).attr('ajax_path'),
    data: { "from": _from, "to": _to, "select_type": _type, "select_range": range },
    async: true,
    dataType: 'script'
    });
    return false;
  });
}

function rangeDate() {
    $("#from").datepicker({
      changeMonth: true,
      changeYear: true,
      onSelect: function(dateText, inst) {}
    });
    $("#to").datepicker({
      changeMonth: true,
      changeYear: true,
      onSelect: function(dateText, inst) {}
    });
  }
