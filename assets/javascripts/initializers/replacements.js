import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "replace-icons",
  initialize() {
    withPluginApi("0.8.14", api => {
      console.log(Discourse.SiteSettings.fa_icon_style);
      let style = Discourse.SiteSettings.fa_icon_style;
      if (style == "regular") {
        return;
      }
      let prefixMap = { solid: "fas", light: "fal", duotone: "fad" };
      let prefix = prefixMap[style];
      console.log(prefix);
      [
        "adjust",
        "address-book",
        "ambulance",
        "anchor",
        "angle-double-down",
        "angle-double-up",
        "angle-double-right",
        "angle-double-left",
        "angle-down",
        "angle-right",
        "angle-up",
        "archive",
        "arrow-down",
        "arrow-left",
        "arrow-up",
        "arrows-alt-h",
        "arrows-alt-v",
        "at",
        "asterisk",
        "backward",
        "ban",
        "bars",
        "bed",
        "bell",
        "bell-slash",
        "bold",
        "book",
        "book-reader",
        "bookmark",
        "discourse-bookmark-clock",
        "briefcase",
        "calendar-alt",
        "caret-down",
        "caret-left",
        "caret-right",
        "caret-up",
        "certificate",
        "chart-bar",
        "chart-pie",
        "check",
        "check-circle",
        "check-square",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "chevron-up",
        "circle",
        "code",
        "cog",
        "columns",
        "comment",
        "compress",
        "copy",
        "crosshairs",
        "cube",
        "desktop",
        "download",
        "ellipsis-h",
        "ellipsis-v",
        "envelope",
        "envelope-square",
        "exchange-alt",
        "exclamation-circle",
        "exclamation-triangle",
        "external-link-alt",
        "fast-backward",
        "fast-forward",
        "file",
        "file-alt",
        "filter",
        "flag",
        "folder",
        "folder-open",
        "forward",
        "gavel",
        "globe",
        "globe-americas",
        "hand-point-right",
        "hands-helping",
        "heading",
        "heart",
        "home",
        "id-card",
        "info-circle",
        "italic",
        "key",
        "link",
        "list",
        "list-ol",
        "list-ul",
        "lock",
        "magic",
        "map-marker-alt",
        "microphone-slash",
        "minus",
        "minus-circle",
        "mobile-alt",
        "paint-brush",
        "paper-plane",
        "pencil-alt",
        "play",
        "plug",
        "plus",
        "plus-circle",
        "plus-square",
        "power-off",
        "puzzle-piece",
        "question",
        "question-circle",
        "quote-left",
        "quote-right",
        "random",
        "redo",
        "reply",
        "rocket",
        "search",
        "share",
        "shield-alt",
        "shower",
        "sign-in-alt",
        "sign-out-alt",
        "signal",
        "step-backward",
        "step-forward",
        "stream",
        "sync-alt",
        "sync",
        "table",
        "tag",
        "tasks",
        "thermometer-three-quarters",
        "thumbs-down",
        "thumbs-up",
        "thumbtack",
        "times",
        "times-circle",
        "trash-alt",
        "tv",
        "undo",
        "unlink",
        "unlock",
        "unlock-alt",
        "upload",
        "user",
        "user-edit",
        "user-plus",
        "user-secret",
        "user-shield",
        "user-times",
        "users",
        "wrench",
        "spinner"
      ].forEach(icon => {
        api.replaceIcon(`${icon}`, `${prefix}-${icon}`);
      });
    });
  }
};
