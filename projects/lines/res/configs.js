window.EXTERNAL_CONFIGS = {
    TAP_TO_START: false,
    MORE_GAME_REDIRECT: "https://leductpm2.github.io/",

    TEXT_COLOR: {
        DEFAULT: "#2b2b2b",
        INPUT_TEXT: "#2b2b2b",
        BUTTON_TEXT: "#2b2b2b",
        POPUP_TITLE: "#2b2b2b"
    },

    Z_INDEX: {
        BACKGROUND: -10000,
        DEFAULT: 0,
        UI: 10000,
        POPUP: 20000,
        NOTIFICATION: 30000
    },

    SCENE_TWEEN_TIME: {
        DEFAULT: { IN: 400, OUT: 300 },
        MAIN: { IN: 400, OUT: 300 },
        GAME: { IN: 400, OUT: 300 }
    },

    POPUP_TWEEN_TIME: {
        DEFAULT: { IN: 400, OUT: 300 }
    },

    GAME_AREA: {
        WIDTH: 646,
        HEIGHT: 646
    },

    GRID_SETTINGS: {
        ROW: 10,
        COL: 10
    },

    TILE_SETTINGS: {
        WIDTH: 64,
        HEIGHT: 64
    },

    MIN_BUBBLE_TO_POP: 5,
    BUBBLE_SPAWN_PER_MOVE: 3,
    BUBBLE_TYPES: [3, 4, 5],
    UNDO_MAX: 5
};

/**
 * @usage
 * dl.resources.getConfig("TEXT_COLOR", "DEFAULT");
 */