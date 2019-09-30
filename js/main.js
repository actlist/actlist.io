$(function() {

    // $('.collapse').collapse('hide');
    $('.list-group-item.active').parent().parent('.collapse').collapse('show');


    var pages = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
        // datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,

        prefetch: baseurl + '/search.json'
    });
    $('#search-box').typeahead({
        minLength: 0,
        highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
    });

    var tags = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('tags'),
        // datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,

        prefetch: baseurl + '/search.json'
    });
    $('#search-box').typeahead({
        minLength: 0
    }, {
        name: 'tags',
        display: 'title',
        source: tags
    });

    $('#search-box').bind('typeahead:select', function(ev, suggestion) {
        window.location.href = suggestion.url;
    });


    // Markdown plain out to bootstrap style
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');


    if ($('#div-shields').length > 0) {
        $.get('/api/shields', function( data ) {
            $('#div-shields').html( data );
        });
    }

    $('#checksumModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var name = button.data('name');
        var sha256 = button.data('sha256');

        var modal = $(this);
        modal.find('.modal-title').text(name);
        modal.find('.modal-body input').val(sha256);

        $('#copy').on('click', function (e) {
            modal.find('.modal-body input').select();
            document.execCommand('copy');

            $('#checksumModal').modal('hide');
        });
    })

});