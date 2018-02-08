$(function () {
  // 分页
  $('.pagination').jqPaginator({
    totalPages: 50,
    visiblePages: 6,
    currentPage: 1,
    onPageChange: function onPageChange(num, type) {
      console.log('当前第' + num + '页');
    }
  });
});
//# sourceMappingURL=collegeManage.js.map
