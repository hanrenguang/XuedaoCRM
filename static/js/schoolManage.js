$('.pagination').jqPaginator({
  totalPages: 50,
  visiblePages: 10,
  currentPage: 1,
  onPageChange: function (num, type) {
    console.log('当前第' + num + '页');
  }
});