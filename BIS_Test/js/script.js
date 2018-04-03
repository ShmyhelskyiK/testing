$(document).ready(function() {
    var table = $('#addressbook').DataTable( {
        paging: false,
        fixedHeader: {
            header: true,
            footer: false
        },
        language: {
            info: "Показано _END_ записей",
            infoFiltered: "(отфильтровано из _MAX_ записей)",
            search: "Поиск: "
        }
    } );
} );