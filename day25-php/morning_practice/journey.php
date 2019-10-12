<?php

$party = [
    'bilbo' => 'Bilbo Baggins',
    'frodo' => 'Frodo Baggins',
    'ring' => 'The One Ring'
];

$party["gandalf"] = 'Gandalf the Grey';

unset($party["bilbo"]);

$party["sam"] = 'Samwise Gamgee';

unset($party["gandalf"]);

$party = leave_hobbiton($party);

$party = go_to_bree($party);

$party = go_to_weathertop($party);

$party = meet_arwen($party);

go_to_rivendell($party);

go_to_moria($party);

go_to_falls_of_rauros($party);

$parties = break_fellowship($party);