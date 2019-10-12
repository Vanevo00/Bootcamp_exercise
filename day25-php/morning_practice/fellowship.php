<?php

define('FELLOWSHIP_IMAGE_URL_BASE', 'https://classes.codingbootcamp.cz/assets/classes/497/');

function present_party($fellowship)
{
    ?>
    <style>
        .fellowship {
            font-family: 'Courier New', Courier, monospace;
            display: flex;
            justify-content: flex-start;
            font-size: 12px;
        }

        .fellowship ul {
            padding: 0;
        }
        .fellowship li {
            list-style-type: none;
            display: flex;
            align-items: center;
            padding: 0.125em 0;
        }

        .fellowship .key {
            font-size: 1.5em;
            font-weight: bold;
            margin-right: 1em;
        }
        .fellowship .arrow {
            margin: 0 1em 0 auto;
        }
        .fellowship .value {
            font-size: 1.25em;
            margin: 0 1em;
        }

        .fellowship .image.withsub {
            display: flex;
            align-items: stretch;
        }
        .fellowship .image .sub {
            border: 1px solid black;
            border-width: 1px 0 1px 1px;
            width: 1em;
        }
        .fellowship .image img {
            width: 5em;
            border-radius: 50%;
        }
    </style>
    <div class="fellowship">
        <ul>
            <?php foreach ($fellowship as $key => $name) : ?>
                <li>
                    <div class="key">'<?php echo $key; ?>'</div>
                    <div class="arrow">=&gt;</div>
                    <div class="value"><?= $name ?></div>
                    <div class="image<?php echo is_array($name) ? ' withsub' : ''; ?>">
                        <?php if (is_array($name)) : ?>
                            <div class="sub"></div>
                            <?php echo present_party($name); ?>
                        <?php else : ?>
                            <img src="<?php echo get_fellowship_image_url($name); ?>" alt="">
                        <?php endif; ?>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <?php
}

function get_fellowship_image_url($name)
{
    $common = [
        'bilbo',
        'frodo',
        'sam',
        'merry',
        'pippin',
        'gandalf',
        'strider',
        'arwen',
        'gimli',
        'legolas',
        'boromir',
        'aragorn',
        'orc'
    ];
    $images = [
        'ring' => 'the-one-ring.jpg',
        'king' => 'king-of-angmar.jpg',
        'angmar' => 'king-of-angmar.jpg',
        'meriadoc' => 'merry.jpg',
        'peregrin' => 'pippin.jpg'
    ];
    foreach ($common as $label) {
        $images[$label] = $label . '.jpg';
    }

    $name = strtolower($name);

    $chosen_image = null;
    foreach ($images as $label => $image) {
        if (false !== strpos($name, $label)) {
            $chosen_image = $image;
            break;
        }
    }

    if (!$chosen_image && 0 === strpos($name, 'nazg')) {
        $chosen_image = 'nazgul'.rand(1, 4).'.jpg';
    }

    if (!$chosen_image) {
        $chosen_image = 'unknown.jpg';
    }

    return FELLOWSHIP_IMAGE_URL_BASE . $chosen_image;
}