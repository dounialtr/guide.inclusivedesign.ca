"use strict";

// Menu
jQuery("#menu").menu({
    position: {my: "right top", at: "right bottom"},
    icons: {submenu: "ui-icon-blank"},
    // Remove the anchors from the tabindex as they are triggered
    // via the select event. (see below)
    create: function () {
        jQuery("#menu .ui-menu-item a").attr("tabindex", -1);
    },
    // The jQuery menu doesn't seem to like it when the <a> are
    // specified as the "item" and are nested under an <li>. There
    // seems to be styling issues and occassionally an error thrown.
    // The page transition work around below is used to maintian the semantic structure,
    // while allowing the menu to behave as normal.
    select: function (event, ui) {
        var location = ui.item.children("a").attr("href");
        if (location) {
            window.location.href = location;
        }
    }
});
