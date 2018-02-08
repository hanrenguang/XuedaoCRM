$(function () {
  // echarts
  var trendCharts = echarts.init($('.charts')[0]);
  var options = {
    color: '#108ee9',
    xAxis: {
      data: [],
      axisLabel: {
        rotate: -60
      }
    },
    yAxis: {},
    series: [{
      type: 'line',
      emphasis: {
        label: {
          show: true,
          formatter: '{b}/{c}',
          color: '#666'
        }
      },
      data: []
    }]
  };
  // 响应式图表
  window.onresize = trendCharts.resize;
  trendCharts.setOption(options);

  // 分页
  $('.pagination').jqPaginator({
    totalPages: 50,
    visiblePages: 10,
    currentPage: 1,
    onPageChange: function onPageChange(num, type) {
      console.log('当前第' + num + '页');
    }
  });
});
//# sourceMappingURL=schoolSaleData.js.map
