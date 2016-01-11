$(function () {
    $('.checkall').click(function () {
        $find(':checkbox').attr('checked', this.checked);
    });
});