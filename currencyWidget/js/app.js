getDataCurrencyWidget();

$(document).ready(function() {
  var refresher = setInterval(getDataCurrencyWidget, 2000);
  $('select[name="currencyPair"]').change(getDataCurrencyWidget);
  $('input[name="currencyTimeFrame"]').change(getDataCurrencyWidget);
});

function getDataCurrencyWidget() {
  var currencyPair = $('select[name="currencyPair"]').val();
  var currencyTimeFrame = $('input[name="currencyTimeFrame"]:checked').val();
  $.ajax({
    url: 'Api/GetData2/' + currencyPair + '/' + currencyTimeFrame,
    method:"GET",
    dataType: "json",
    cache:false,
    success: renderCurrencyWidget,
    error:function() {
      var emptyData ={"price":{"last":"","change":"","class":"neutralFont"},"sum":{"action":"","class":"","action_ma":"","ma_class":"","tech_class":"","action_tech":"","buys_ma":-"","sells_ma":"-","buys_tech":"-","sells_tech":"-"},"mas":[{"name":"-","val_ema":"-","val_sma":"-","act_ema":"-","act_sma":"-"},{"name":"-","val_ema":"-","val_sma":"-","act_ema":"-","act_sma":"-"},{"name":"-","val_ema":"-","val_sma":"-","act_ema":"-","act_sma":"-"},{"name":"-","val_ema":"-","val_sma":"-","act_ema":"-","act_sma":"-"},{"name":"-","val_ema":"-","val_sma":"-","act_ema":"-","act_sma":"-"},{"name":"-","val_ema":"-","val_sma":"-","act_ema":"-","act_sma":"-"}],"techs":[{"title":"-","val":"-","action":"-"},{"title":"-","val":"-","action":"-"},{"title":"-","val":"-","action":"-"},{"title":"-","val":"-","action":"-"},{"title":"-","val":"-","action":"-"},{"title":"-","val":"-","action":"-"}],"time":"Server unavailable",error:true };
      renderCurrencyWidget(emptyData);
    }
  });
}

function renderCurrencyWidget(responseData){
  if (!responseData.error) {responseData.time = 'For: ' + responseData.time;}
  $('.currencyStatus').attr('class', 'currencyStatus ' + responseData.price.class);
  $('.currencyStatus__last').html(responseData.price.last);
  $('.currencyStatus__change').html(responseData.price.change);
  $('.currencyTime').html(responseData.time);
  $('.currencyinfo__sumValue').html(responseData.sum.action).attr('class', 'currencyinfo__sumValue ' + responseData.sum.class);
  $('.currencyinfo__maValue').html(responseData.sum.action_ma).attr('class', 'currencyinfo__maValue ' + responseData.sum.ma_class);
  $('.currencyinfo__techValue').html(responseData.sum.action_tech).attr('class', 'currencyinfo__techValue ' + responseData.sum.tech_class);
  responseData.mas.forEach(function(item, i) {
    var currentRow = $('.currencyDetails__tabContent').first().find('.currencyDetails__row:nth-of-type(' + (i + 1) + ')');
    currentRow.find('.currencyDetails__label').html(item.name);
    currentRow.find('.currencyDetails__value:nth-of-type(1)').html(item.val_ema);
    currentRow.find('.currencyDetails__act:nth-of-type(2)').html(item.act_ema).attr('class', 'currencyDetails__act ' + item.act_ema.toLowerCase());
    currentRow.find('.currencyDetails__value:nth-of-type(3)').html(item.val_sma);
    currentRow.find('.currencyDetails__act:nth-of-type(4)').html(item.act_sma).attr('class', 'currencyDetails__act ' + item.act_sma.toLowerCase());
  });
  $('.currencyDetails__buyValue').first().html(responseData.sum.buys_ma);
  $('.currencyDetails__sellValue').first().html(responseData.sum.sells_ma);
  responseData.techs.forEach(function(item, i) {
    var currentRow = $('.currencyDetails__tabContent').last().find('.currencyDetails__row:nth-of-type(' + (i + 1) + ')');
    currentRow.find('.currencyDetails__label').html(item.title);
    currentRow.find('.currencyDetails__value').html(item.val);
    currentRow.find('.currencyDetails__act').html(item.action).attr('class', 'currencyDetails__act ' + item.action.toLowerCase());
  });
  $('.currencyDetails__buyValue').last().html(responseData.sum.buys_tech);
  $('.currencyDetails__sellValue').last().html(responseData.sum.sells_tech);
}
