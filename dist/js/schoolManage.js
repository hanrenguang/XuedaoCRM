$('.pagination').jqPaginator({
  totalPages: 50,
  visiblePages: 10,
  currentPage: 1,
  onPageChange: function onPageChange(num, type) {
    console.log('当前第' + num + '页');
  }
});
//# sourceMappingURL=schoolManage.js.map
