var api = 'https://16909118.qcloud.la/bysj/'


function get(url, parmas) {
    $.ajax({
        url: api + url,
        type: 'GET',
        data: parmas,
        dataType: 'jsonp',
        success: function() {

        }
    })
}