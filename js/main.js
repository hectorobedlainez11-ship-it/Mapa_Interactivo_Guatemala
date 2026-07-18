$(document).ready(function () {
    var colores = ["FF6B6B", "4ECDC4", "45B7D1", "96CEB4", "FFEAA7", "DDA0DD", "98FB98", "FFD700", "FF6347", "40E0D0", "FF69B4", "BA55D3", "00CED1", "FF4500", "2E8B57", "DA70D6", "87CEEB", "DEB887", "ADFF2F", "FF1493", "00BFFF", "FFDAB9"];

    $('area').each(function (i) {
        $(this).data('maphilight', {
            fillColor: colores[i % colores.length],
            fillOpacity: 0.4,
            strokeColor: colores[i % colores.length],
            strokeWidth: 2
        });
    });

    $('area').off('click');
    $('img[usemap]').maphilight();
});