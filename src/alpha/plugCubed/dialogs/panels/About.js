define(['plugCubed/Class', 'plugCubed/Utils', 'plugCubed/dialogs/ControlPanel', 'plugCubed/Version'], function(Class, p3Utils, ControlPanel, Version) {
    var Handler, $contentDiv, $table, panel;

    Handler = Class.extend({
        register: function() {
            panel = ControlPanel.addPanel('About');

            $contentDiv = $('<div>').append($('<h1>').text('Information about plug³').css({
                'text-align': 'center'
            })).css({
                width: '500px',
                margin: '25px auto auto auto',
                'font-size': '17px'
            });
            $table = $('<table>').css({
                width: '100%',
                color: '#CC00CC',
                'font-size': '1.02em'
            });

            $table.append($('<tr>').append($('<td>').attr('colspan', 2).append($('<strong>').text('Version: ')).append($('<span>').css('color', '#FFFFFF').text(Version.getSemver()))));

            $table.append($('<tr>').append($('<td>').attr('colspan', 2).append($('<strong>').text('Website: ')).append($('<span>').css('color', '#FFFFFF').html('<a href="https://plugcubed.net" target="_blank" style="color:#FFFFFF;">plug³ Website</a>'))));

            $table.append($('<tr>').append($('<td>').attr('colspan', 2).append($('<strong>').text('Translations: ')).append($('<span>').css('color', '#FFFFFF').html('<a href="https://crowdin.com/project/plug3" target="_blank" style="color:#FFFFFF;">plug³ Translations</a>'))));

            $table.append($('<tr>').append($('<td>').attr('colspan', 2).append($('<strong>').text('Translations: ')).append($('<span>').css('color', '#FFFFFF').html('<a href="https://crowdin.com/project/plugcubed-website" target="_blank" style="color:#FFFFFF;">plug³ Website Translations</a>'))));

            $table.append($('<tr>').append($('<td>').attr('colspan', 2).append($('<strong>').text('Discord: ')).append($('<span>').css('color', '#FFFFFF').html('<a href="https://plugcubed.net/discord" target="_blank" style="color:#FFFFFF;">plug³ Discord</a>'))));

            $table.append($('<tr>').append($('<td>').attr('colspan', 2).append($('<strong>').text('Twitter: ')).append($('<span>').css('color', '#FFFFFF').html('<a href="https://twitter.com/plugCubed" target="_blank" style="color:#FFFFFF;">plug³ Twitter</a>'))));

            $contentDiv.append($('<br>')).append($table);

            panel.addContent($contentDiv);

        },
        close: function() {
            ControlPanel.removePanel(panel);

            $contentDiv = $table = null;
        }
    });

    return new Handler();

});
