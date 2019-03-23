var aLangKeys = new Array();
aLangKeys['en'] = new Array();
aLangKeys['pl'] = new Array();
aLangKeys['en']['rock_paper_scissors'] = 'Rock Paper Scissors';
aLangKeys['en']['computer'] = 'Computer';
aLangKeys['en']['make_your_move'] = 'Make your move.';
// aLangKeys['en']['you_win'] = userChoice + ' (' + imie + ') beats ' + computerChoice + ' (computer). You win!';
// aLangKeys['en']['you_lost'] = userChoice + ' (' + imie + ') loses to ' + computerChoice + ' (computer). You lost.';
// aLangKeys['en']['its_draw'] = userChoice + ' (' + imie + ') equals ' + computerChoice + " (computer). It's' draw!";
// aLangKeys['en']['wins'] = imie +' wins! Congratulations!';
aLangKeys['en']['newgame'] = 'New game';
aLangKeys['en']['computer_wins'] = 'Computer wins.'

aLangKeys['pl']['rock_paper_scissors'] = 'Papier Kamień Nożyce';
aLangKeys['pl']['computer'] = 'Komputer';
aLangKeys['pl']['make_your_move'] = 'Wykonaj swój ruch.';
// aLangKeys['pl']['you_win'] = userChoice + ' (' + imie + ') bije ' + computerChoice + ' (computer). Wygrywasz!';
// aLangKeys['pl']['you_lost'] = userChoice + ' (' + imie + ') przegrywa z ' + computerChoice + ' (computer). Przegrywasz.';
// aLangKeys['pl']['its_draw'] = userChoice + ' (' + imie + ') równa się ' + computerChoice + ' (computer). Remis';
// aLangKeys['pl']['wins'] = imie + 'wygrywa! Gratulacje';
aLangKeys['pl']['newgame'] = 'Nowa gra ';
aLangKeys['pl']['computer_wins'] = 'Komputer wygrywa!';

$(document).ready(function () {

    // onclick behavior

    $('.lang').click(function () {

        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements

        $('.translate').each(function () {

            $(this).text(aLangKeys[lang][$(this).attr('key')]);

        });

    });

});