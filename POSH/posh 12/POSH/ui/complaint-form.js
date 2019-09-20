$(document).ready(function () {
    $('#next-btn').click(function () {
        window.location.href = '#form-2';
        $('#form-1').hide();
        $('#form-2').show();
        document.getElementById('page-1').style.fill='#ffffff';
        document.getElementById('page-1').style.stroke='#b8b4b4';
        document.getElementById('page-2').style.fill='#32bdd2';
        document.getElementById('page-1-text').style.fill='#D3D3D3';
        document.getElementById('page-2-text').style.fill='#FFFFFF';
    })

    
})