/*********************************************************************************************************************************************************\
*                                                                                                                                                         *
*                                                                                                                                                         *
*       ┌╓┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌╓                                      ┌╓╓                         ╓╓╓╓        ╓╓┌      ╓╓╓                      *
*      ╗▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█╕                                   ╒████                        ╫███       ████▌     ███▌                     *
*      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                                    ███└                        ╫███       └█▀█      ███▌                     *
*      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                                                                ╫███                 ███▌                     *
*      ▓▓▓▓▓█╜└└└┴▀█▓▓▓▓▓▓▓▓▓▓└└└║▓▓▓▓▓▓▓▓▓▌             ┌┌┌┌            ┌┌┌    ┌┌┌     ┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌    ╫███       ┌┌┌┌      ███▌  ┌╓╥▄▄╓┌            *
*      ▓▓▓▓▓▓        █▓▓▓▓▓▓▓▓   │▓▓▓▓▓▓▓▓▓▌              ███▄          ███▌    ████    ███████████████▌    ╫███       ▐███      ███████████████┐         *
*      ▓▓▓▓▓▓█        ╚▓▓▓           ▓▓▓▓▓▓▌              ╙███         ████     ████              ▄███▀     ╫███       ▐███      ████▀└     └█████        *
*      ▓▓▓▓▓▓▓█        ╙▓▓╕┌┌┌   ┌┌┌┌▓▓▓▓▓▓▌               ████       ▐███      ████            ┌████       ╫███       ▐███      ███▌          ███▌       *
*      ▓▓▓▓▓▓▓▓█        ╘▓▓▓▓▓   │▓▓▓▓▓▓▓▓▓▌                ████     ┌███       ████           ████▀        ╫███       ▐███      ███▌          ▓███       *
*      ▓▓▓▓▓▓▓▓▓█        ╘▓▓▓▓╔╔╔▓▓▓▓▓▓▓▓▓▓▌                 ███▌    ████       ████         ╓███▌          ╫███       ▐███      ███▌          ╟███       *
*      ▓▓▓▓▓▓▓▓▓▓█        ╘▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                 └███   ███▌        ████       ╓████            ╫███       ▐███      ███▌          ╫███       *
*      ▓▓▓▓▓▓▓▓▓▓▓█        ╘▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                  ▓███ ╒███         ████      ████▀             ╫███       ▐███      ████          ████       *
*      ▓▓▓▓▓▓▓▓▓▓▓▓█╕       └▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                   ███████          ████    ▄████               ╫███       ▐███      ████▌       ╓████        *
*      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╗╔╓╔╔╗█▓▓▓▓▓▓▓▓▓▓▓▓▓▌                    █████▌          ████   ▐████████████████     ██████    ▐███      ███████████████▌         *
*      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                    └╙╙╙╙           ╙╙╙    └╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙      └╙╙╙╙    └╙╙╙      ╙╙╙   ╙█████▀            *
*      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌                                                                                                              *
*      ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓┘                                                                                                              *
*         └└└└└└└└└└└└└└└└└└└└└└└└└└└└└└└                                                                                                                 *
*                                                                                                                                                         *
*                                                                                                                                                         *
*                                                                                   www.vizlib.com                                                        *
*                                                                                                                                                         *
*                                                              Copyright 2017-2020 © Vizlib Ltd. - All rights reserved                                    *
/**********************************************************************************************************************************************************\
/*
    Hello there! ✌(◕‿-)✌

    Thank you for showing interest in our source code :-)
    Perhaps you'd like to join our team?  We're looking for talented developers like you

    To learn more, visit: https://link.vizlib.com/vzb-join-us
    or drop us a line at hello@vizlib.com

*/
/**/
var _0x5878 = ['href', 'div', 'qId', 'lightSpeedIn', 'click', 'data-animation-target', 'glyphicon', 'bar-chart', '.vzcbtext', 'Hide', 'futbol-o', '100%\x20100%', 'renren', 'font-family', 'updateArrows', 'rotateOutDownRight', 'arrowClass', 'expirationMargin', 'cc-stripe', 'topRight', 'Extension\x20Background\x20Color', 'slice', 'mainTooltipHeader2', 'auto', 'pointer', 'folder-open', 'Content\x20Text\x20(supports\x20HTML)', 'feedback', 'user_mode', 'gratipay', 'onChange', 'iterator', 'create', 'getLayout', 'https://community.vizlib.com/support/solutions/articles/35000129701', 'resolve', 'connectdevelop', 'clipboard', 'number', '{0}\x20-\x20{1}\x20of\x20{2}', '.btn-icon', 'animateNumbers', '__proto__', 'badge_color', 'Courier\x20New', 'xlsx', 'Toggle\x20to\x20advanced\x20mode\x20in\x20order\x20to\x20access\x20more\x20tooltip\x20options\x20across\x20the\x20panel.', 'Effects\x20and\x20Animations', 'bounceOutDown', 'check-circle', 'listClass', 'Take\x20Snapshot\x20Icon', 'check-circle-o', '\x22Courier\x20New\x22,\x20\x22Courier\x22,\x20\x22Lucida\x20Sans\x20Typewriter\x22,\x20\x22Lucida\x20Typewriter\x22,\x20\x22monospace\x22', 'vzb-license-close', 'This\x20is\x20my\x20<u>Vizlib</u>\x20<b>Tooltip</b>!', 'variable.value', 'adminEmail', 'spoon', 'long-arrow-up', 'removeAttr', 'updatePicker', 'angle-down', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjUgOC40MTY1N1YxMy4yNzc3TTEzLjUgMTYuOTIzNlYxNy41MzEyTTExLjQ1NDIgMi4xNzAwMUwxLjMyMDY2IDE5LjM1NDFDMS4xMTE3MyAxOS43MjE3IDEuMDAxMTggMjAuMTM4NCAxLjAwMDAxIDIwLjU2MjhDMC45OTg4NCAyMC45ODcyIDEuMTA3MDkgMjEuNDA0NSAxLjMxMzk5IDIxLjc3MzJDMS41MjA4OSAyMi4xNDE5IDEuODE5MjMgMjIuNDQ5MiAyLjE3OTMyIDIyLjY2NDRDMi41Mzk0MiAyMi44Nzk2IDIuOTQ4NzIgMjIuOTk1MyAzLjM2NjUgMjNIMjMuNjMzNUMyNC4wNTEzIDIyLjk5NTMgMjQuNDYwNiAyMi44Nzk2IDI0LjgyMDcgMjIuNjY0NEMyNS4xODA4IDIyLjQ0OTIgMjUuNDc5MSAyMi4xNDE5IDI1LjY4NiAyMS43NzMyQzI1Ljg5MjkgMjEuNDA0NSAyNi4wMDEyIDIwLjk4NzIgMjYgMjAuNTYyOEMyNS45OTg4IDIwLjEzODQgMjUuODg4MyAxOS43MjE3IDI1LjY3OTMgMTkuMzU0MUwxNS41NDU4IDIuMTcwMDFDMTUuMzMyNiAxLjgxMjg0IDE1LjAzMjMgMS41MTc1NSAxNC42NzM5IDEuMzEyNkMxNC4zMTU1IDEuMTA3NjYgMTMuOTExMiAxIDEzLjUgMUMxMy4wODg4IDEgMTIuNjg0NSAxLjEwNzY2IDEyLjMyNjEgMS4zMTI2QzExLjk2NzcgMS41MTc1NSAxMS42Njc0IDEuODEyODQgMTEuNDU0MiAyLjE3MDAxWiIgc3Ryb2tlPSIjQjMyODI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K', 'qData', '#ff9900', 'building', 'border-top', 'Font', '\x09\x09\x09\x09\x09\x20\x20<button', 'forward', 'extend', 'binoculars', '\x20<i\x20class=\x22fa\x20', 'users', 'fadeInUpBig', 'bounceIn', 'formats', 'chevron-left', 'minus-circle', 'linear-gradient(rgba(255,255,255,', 'envelope-o', 'rotate-right', 'info', 'button.', '01/01/2100', 'wrench', 'star-half-o', '\x09\x09\x09\x09\x09</div>', 'isPersonalMode', 'file-photo-o', 'space-shuttle', 'Wrap\x20text', '<a\x20href=\x22https://community.vizlib.com/support/solutions/articles/35000121898\x22\x20target=\x22_blank\x22>', 'sheqel', 'trello', 'Documentation</a></div>', 'Title\x20Color', 'asterisk', 'h-square', 'thumb-tack', 'change', '#ffff66', 'Left', 'prevSheet', 'qInterColumnSortOrder', 'keepaspect', 'transgender-alt', '<div\x20style=\x22display:none\x22\x20id=\x22vzcbmain\x22>', 'file', 'background-repeat', 'app', '#46c646', 'linkUrl', 'fontColorPicker', 'vzb-license-modal-header-content', '#ffff00', 'onclick', 'props.icons.showmaximize', 'rgb', 'childNodes', 'fadeInUp', '#b26b00', 'iconset_fontawesome', '#f06666', 'heartbeat', 'updatePagesCount', 'road', 'external-link', 'ellipsis-h', 'tagName', 'join', 'bundleName', 'border-bottom-right-radius', 'photo', 'isDateCloseToExpire', '/appcontent/', 'searchText', 'field', 'updateLabels', '<button\x20class=\x22btn\x20btn-arrow\x20', 'Bottom\x20Left\x20Radius', '#ffffcc', 'showLink', 'heart-o', 'Advanced', '_custom', 'Unlock\x20All', 'always', 'page', '#7B7A78', 'hand-o-up', 'Bottom\x20Right\x20Radius', 'dot-circle-o', '\x09\x09\x09\x09\x20\x20<div\x20class=\x22pp-component\x20pp-buttongroup-component\x20qv-object-qsstatistic\x22\x20ng-if=\x22visible\x22\x20>', 'square', 'iframeurl', 'chain-broken', 'sortBy', 'delicious', 'Animate\x20numbers', 'overflow-x', 'ref', 'QlikView\x20Sans,\x20sans-serif', 'bug', 'eye', 'hacker-news', 'reddit-square', 'images/fontawesome-webfont-d7c639.svg', 'getModule', 'Size', '<div\x20id=\x22vzcbwrapper\x22>', 'dangerouslyPasteHTML', 'Unlock\x20All\x20Selected', 'yen', 'rss-square', 'prototype', 'bottomrightradius', 'bars', 'fadeOutUp', 'transparent', '#vzcbmain', 'textarea', 'file-sound-o', 'user-plus', 'Tooltip\x20Text', 'linkDownload', '#ffffff', 'legal', 'support', '#003D3B', 'bookmark.desc', 'px\x20', 'flash', 'closeTemporarily', 'stethoscope', 'absolute', 'ruble', 'My\x20title', 'outdent', 'test', 'singleton', 'values', '{0}', 'blotName', 'Possible\x20Values', 'children', '/extensions/VizlibAdvancedTextObject/', 'Lock\x20All', 'cut', 'arrow-circle-right', 'datachanged', 'verticalalignment', 'attr', 'show', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20Your\x20Vizlib\x20subscription\x20is\x20about\x20to\x20expire.\x20In\x20order\x20to\x20maintain\x20services,\x20please,\x20contact\x20your\x20account\x20administrator\x20or\x20<a\x20href=\x22mailto:', 'toggle-left', 'fa\x20fa-arrow-left\x20', 'taxi', 'fast-backward', 'Content\x20Background', 'enabledExpr', '#b6d7ea', 'zoomOutLeft', 'color', 'btn-previous', 'caret-down', 'bs.popover', 'ttp.size', 'thead', 'Double', 'nostretch', 'defineChange', 'yelp', 'justify', 'ttp.contentBackgroundExpr', 'bold', 'sort-numeric-asc', 'fontsizeslider', 'string', 'applyPatches', '<i\x20class=\x22', 'minus-square', 'switchPage', '\x20div.ql-editor', 'val', 'clearAll', 'reset', 'text-width', 'Variable', 'a[tid=nav-menu-zoom-in]', 'youtube', '#b2b200', 'subscription_icon', 'pencil', 'bell-slash', 'flex', 'behance-square', 'times-circle-o', 'Export\x20Filename', 'Reset', 'headShake', 'Back', '\x20px', 'fadeIn', 'search', 'Set\x20Variable', 'lightbulb-o', 'bounceInUp', 'a[tid=nav-menu-snapshot]', 'Export\x20State', 'Field\x20Value', 'Width\x20of\x20the\x20tooltip\x20in\x20px\x20or\x20%\x20of\x20page\x20width\x20(i.e:\x20200\x20or\x2015%).', 'dribbble', 'vzb-license-modal-header-warning-container', 'Arial\x20Black', '\x09\x09\x09\x09\x09\x09class=\x22lui-button\x20qui-button\x22', 'pulse', 'icons', 'ttp.interactiveTooltip', 'has', 'Symbol.asyncIterator\x20is\x20not\x20defined.', 'eur', 'list', 'mercury', 'weibo', '\x09\x09\x09\x09\x09\x09qva-activate=\x22select(\x27underline\x27)\x22', 'Search', 'custom', 'setRefValue', 'btn-default', '100%', 'borderbottom', 'btn-warning', 'contains', 'Based\x20on\x20Content', 'sessionObj', 'bounceInRight', 'LicenseExpirationModalManager', 'undo', '.qv-object-header', 'innerHTML', 'share-square-o', 'openModalIfNeeded', 'querySelector', 'sub_icon_style', 'radius', 'Tahoma', 'header', 'Show\x20question\x20mark\x20on\x20hover.', 'vizlibcollaboration', 'gittip', 'meanpath', '.ql-editor', 'Large', 'tablet', 'street-view', 'tree', 'empty', 'isPlainObject', '&times', 'css', 'root', 'filename', '#cce0f5', 'state', 'twitch', 'double', 'fadeOutRightBig', 'shekel', 'None', 'ttp.animationOut', 'Courier\x20New\x22,\x20Courier,\x20\x22Lucida\x20Sans\x20Typewriter\x22,\x20\x22Lucida\x20Typewriter\x22,\x20monospace', 'language', '/check', 'jquery', 'qrcode', 'showQuestionMark', 'export.state', '.qv-object-content-container', 'placeholder', 'Define\x20your\x20own', 'done', '<div\x20id=\x22vzcbleft\x22\x20></div>', 'play-circle', 'Add\x20text\x20here...', 'Embed\x20URL', 'Vizlib Library', 'Interactive\x20Tooltip', 'hand-o-right', 'bundle', 'shown.bs.popover', 'flickr', 'Replace', '</tr>', 'Error:\x20Corrupt\x20data', 'swing', 'android', 'isActive', 'isExpression', 'skyatlas', 'addHandler', 'arrows-alt', 'exclamation-circle', 'rmb', 'background', 'metadata', 'labelPlacement', 'dialogContent', 'save', 'Activate\x20Sheet', 'bordercolor', 'Tiny', 'appendChild', 'then', 'Config\x20Mode', 'text-shadow', 'lemon-o', 'Vertical\x20scroll', 'sun-o', 'rotateIn', 'defer', 'climberselfservice', 'fadeOutDown', 'prefix', 'nodeValue', 'zoomOutDown', 'name', 'arrow-circle-left', 'mousedown', 'button', 'split', 'Top-right', 'colspan', 'btn-icon-selected', 'destroyOnClick', 'fontsize', 'file-text', 'setFooter', 'Clear\x20All', 'buttongroup', 'hover', 'format', 'stack-exchange', 'Tooltip\x20Width', 'anchor', 'getList', 'file-pdf-o', 'totalIconsPerPage', 'bundlenoaccess', 'rebel', 'container', 'topLeft', 'variable', '#9933ff', '<div\x20class=\x22vzcbtext\x22>', 'tada', 'edit', 'zoomOutUp', '\x09\x09\x09\x09\x09\x09q-title-translation=\x22strikethrough\x22>', 'cogs', 'ttp.delay', '<div\x20style=\x27text-align:center\x27\x20id=\x27fpicker-target\x27></div>', 'climberfinance', 'wobble', 'display', 'life-buoy', 'vzb-lui-icon', '#ebd6ff', '.btn-icon-selected', 'Select\x20Possible', 'cursor', 'eject', 'Select\x20Alternative', 'fadeOutDownBig', 'switch', 'zoomInRight', 'magic', '.download-link', 'props.about', 'cab', 'day', 'bgtype', 'tipso', 'fadeInRight', 'exchange', 'append', 'Background', 'tag', 'map-marker', 'share-alt-square', 'Unlock\x20Field', 'qUrlDef', '#c285ff', 'Color', 'selectPossible', 'ops', 'setItem', 'URL', 'sort', '/VizlibAdvancedTextObject/v1.7.12/static/fontawesome-webfont-c8ddf1.woff', 'Create\x20Bookmark', 'background-size', 'slideInLeft', 'revokeObjectURL', 'bundles', 'html5', 'conditional', 'ajax', 'plus', 'dimensions', 'client.property-panel/components/components', '.qv-inner-object', 'getLibraryContent', 'server', 'inbox', 'buildModal', 'caret-square-o-right', 'tags', 'repeat', 'terminal', '.btn-arrow', 'Font\x20Color', 'iconset_mapicon', 'manual', 'vzb-license-modal', 'clock-o', 'rotateInUpRight', 'extensionMeta', 'setHeader', 'src', 'flipOutX', 'icon_img', 'ql-editor', 'dynamic', 'ttp.typeWidth', 'stop', 'magnet', 'bolt', 'random', '.vzcbinfo', 'advancedMode', 'ttp.titleContent', 'map', 'mode', 'iconClass', 'bgimage', 'bullhorn', 'defineReadOnly', 'layout', 'style', 'huge', '$parent', 'title', 'text-change', 'vzb-spinner', 'justify-content', 'getWidthStyle', 'fadeOut', 'iconset_elusiveicon', 'addClass', 'allocatedusers', 'column', 'flag', 'mismatch', 'Free\x20Trial', 'props.iconpicker', 'push', 'Offset\x20value\x20of\x20the\x20tooltip\x20on\x20Y\x20axis\x20(px)\x20', 'arrows-h', 'cloud-upload', 'slack', 'beer', 'createObjectURL', 'diamond', 'enigmaModel', 'navicon', 'input', 'html', 'forEach', 'toUTCString', 'leanpub', '\x09\x09\x09\x09\x09\x09<i\x20class=\x22fa\x20fa-italic\x22\x20style=\x22font-color:\x20white;\x20font-size:14px;veritcal-align:middle;\x22></i>', 'subscript', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22vzb-license-modal-bundle-name\x22>', 'tip', '</button>', 'tumblr', 'trash', 'Use\x20Scroll', 'calendar-o', 'line-chart', 'destroy', 'btn-primary', 'lastWorkingDate', 'buildModalContent', 'props', 'prop', 'decorate', '#663d00', 'tencent-weibo', 'scroll.x', '^.*((/dev-hub/mashup-editor)|(/extensions/.*/.*.html)).*$', 'unselectedClass', 'exports', '),rgba(255,255,255,', 'circle-thin', 'Enable\x20Title', 'nowrap', 'showArrow', 'visibleExpr', 'isDismissed', 'lastIndexOf', 'getRefValue', '\x22\x20method\x20does\x20not\x20exists.', 'blur', 'user-md', '\x09\x09\x09\x09\x09<div\x20class=\x22label\x22\x20ng-if=\x22label\x22\x20ng-class=\x22{\x20\x27disabled\x27:\x20readOnly\x20}\x22>', '#002966', '\x22></i>', 'selectMatch', 'motorcycle', 'link', 'contentBackgroundExpr', 'large', 'square-o', 'download', 'border', 'Text', '\x09\x09\x09\x09\x09\x09<i\x20class=\x22fa\x20fa-strikethrough\x22\x20style=\x22font-color:\x20white;\x20font-size:14px;veritcal-align:middle;\x22></i>', 'folder', 'getBundlesToDisplay', 'getExpirationDate', 'VizlibAdvancedTextObject', 'phone', 'forumbee', 'paperclip', 'Professional', 'inline', 'ttp.titleColor', 'mobile-phone', 'hidden', '\x22TimesNewRoman\x22,\x20\x22Times\x20New\x20Roman\x22,\x20\x22Times\x22,\x20\x22Baskerville\x22,\x20\x22Georgia\x22,\x20\x22serif\x22', 'hotel', 'Fixed\x20Value', 'Font\x20Family', '\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22icons-count\x22\x20style=\x22text-align:right\x22></span>', 'export', 'Export\x20Data', 'titleBackground', 'newspaper-o', '\x20&\x27', 'body', 'reply-all', '</div>', 'share-alt', 'fadeInDown', 'rollOut', 'slideOutDown', 'ttp.offsetY', 'share', 'Select\x20Excluded', 'which', 'selectedClass', 'setArrowNextIconClass', 'Show\x20Tooltip\x20on\x20HOVER\x20object', '/qHyperCubeDef', 'totalPages', 'extBackgroundtransparency', 'file-video-o', 'Drop\x20Shadow', 'Max\x20Width', 'https://daneden.github.io/animate.css/', '.qv-gridcell', '/error/', 'reddit', 'borderright', 'dropbox', 'bottom-left', 'catch', 'shirtsinbulk', 'Full\x20screen\x20Icon', 'youtube-square', 'vzcbactive', '\x22\x20style=\x22text-align:right;\x20padding-right:5px;\x22>', 'vzb-license-modal-footer-content', 'Vizlib\x20Actions', 'contenteditable', 'hinge', '></input>', 'chevron-down', '\x22Comic\x20Sans\x20MS\x22', 'updateIcons', 'showmaximize', '\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20/>', 'fadeInDownBig', 'reorder', 'github-square', 'ambulance', 'arrowPrevIconClass', 'LocalStorageManager', 'error', '/*!\x0a\x20*\x20Bootstrap-iconpicker\x20v1.7.0\x0a\x20*\x0a\x20*\x20Copyright\x202013-2015\x20Victor\x20Valencia\x20Rico.\x0a\x20*\x20Licensed\x20under\x20the\x20Apache\x20License\x20v2.0\x0a\x20*\x20http://www.apache.org/licenses/LICENSE-2.0\x0a\x20*\x0a\x20*\x20Designed\x20and\x20built\x20with\x20all\x20the\x20love\x20in\x20the\x20world\x20by\x20@recktoner.\x0a\x20*/.iconpicker\x20.caret{margin-left:10px!important}.iconpicker{min-width:60px}.iconpicker\x20input.search-control{margin-bottom:6px;margin-top:6px}div.iconpicker.left\x20.table-icons{margin-right:auto}div.iconpicker.center\x20.table-icons{margin-left:auto;margin-right:auto}div.iconpicker.right\x20.table-icons{margin-left:auto}.table-icons\x20.btn{min-height:30px;min-width:35px;text-align:center;padding:0;margin:2px}.table-icons\x20td{min-width:39px}.popover{max-width:inherit!important}.iconpicker-popover{z-index:1050!important}.iconpicker-popover\x20.search-control{margin-bottom:6px;margin-top:6px}', 'spinner', 'undefined', 'rgba(', '\x22></span>', 'About\x20', 'class', ';\x20path=/', 'block', 'data-cache-id=\x22', 'CSV', 'getBoundingClientRect', 'caret-left', '/content', 'gotoSheet', 'github', 'arrow-right', 'handler', 'parents', 'minus', 'parentNode', 'tfoot', 'ICONSET_EMPTY', 'crosshairs', 'type', 'font-size', 'venus-mars', 'snow', 'set', 'align-left', 'bounceOutLeft', 'iconpicker-popover', 'getMode', 'contain', '30%', 'paint-brush', 'BGColorPicker', 'vzb-license-modal-description', '<div></div>', 'register', 'plus-square-o', 'setSearchText', 'fixFontStringValue', 'life-ring', '.vzcbheader', 'setCols', 'em-item-list-', 'pinterest', 'hide', 'tipso_style', 'charCodeAt', 'text/css', 'flask', 'Arial', 'list-alt', 'dashed', 'totalusers', 'buildModalHeader', '\x09\x09\x09\x09\x09\x20\x20{{label}}', 'google', 'modalManager', 'titleColorPickerExpr', 'turkish-lira', 'middle', 'Add\x20an\x20inline\x20editor\x20on\x20the\x20text\x20object\x20to\x20have\x20easy\x20access\x20to\x20text\x20formatting\x20options.', '\x22Lucida\x20Sans\x20Typewriter\x22,\x20\x22Lucida\x20Console\x22,\x20\x22Monaco\x22,\x20\x22Bitstream\x20Vera\x20Sans\x20Mono\x22,\x20\x22monospace\x22', 'background-image', 'Bookmark\x20Title', 'animationIn', 'ioxhost', 'getTime', 'asyncIterator', 'key', 'lock', 'files-o', 'ttp.contentColorPickerExpr', 'bookmark.title', 'rollIn', 'XXX_ONPREMISE_COMPANY_XXX', '\x09\x09\x09\x09\x09\x09ng-disabled=\x22readOnly\x22', 'bell-o', 'warning', 'cube', '\x0a\x20\x20\x20\x20.vzb-license-modal-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.4);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#FFFFFF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#838383;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-header-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#CECECE;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-header-warning-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-header-warning-container\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#212429;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20calc(100%\x20-\x2050px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-description\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-bundle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-content\x20a\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#3C46B0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-bundle-name\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-content\x20.vzb-license-days-to-expire\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#B32828;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#FAF9FA;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20#CECECE;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-footer-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20calc(100%\x20-\x2050px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-footer-content\x20a\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#3C46B0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-footer-content\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-modal-footer\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#BDBDBD;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-close\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#212429;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2035px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2025px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.vzb-license-close:hover,\x0a\x20\x20\x20\x20.vzb-license-close:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a', 'localStorageManager', 'extColorPicker', 'CSV_C', 'Export\x20complete', 'setMilliseconds', 'Top', '.page-count', '.lui-dialog-container', 'visibility', 'underline', '.btn-next', 'indexOf', 'parent', 'navigation', 'QlikView\x20Sans,sans-serif', 'VERSION_XXX', 'border-bottom', 'Times\x20New\x20Roman', 'ICONSET', 'substring', 'angle-double-right', 'vertical', 'Open\x20in\x20same\x20window', '#a10000', 'pre-wrap', '\x20\x20\x20<td\x20colspan=\x22', 'customFontFamily', '</a>\x0a\x20\x20\x20\x20', 'fadeOutLeft', 'tooltipMode', 'check-square', 'Onpremise', 'Show', 'flipInX', 'component', 'setIcon', 'Default', 'plug', 'setSeconds', 'zoomOutRight', 'selectExcluded', 'wheelchair', 'height', 'bounceOut', 'name=\x22', 'ttp.showQuestionMark', 'mars-stroke', 'hdd-o', 'no', 'Delay\x20(Delay\x20before\x20showing\x20the\x20tooltip\x20in\x20ms)', 'jpy', 'startsWith', 'fill', 'foursquare', 'enableAnimations', 'bookmark', 'ttp.tooltipMode', 'car', '\x20px)', 'Border', 'copy', 'removeChild', 'media', 'vatoAppContent', '<div\x20style=\x22display:none\x22\x20class=\x22vzcbinfo\x22>Click\x20on\x20the\x20boxes\x20to\x20enable/disable</div>', 'ttp.advancedMode', 'tachometer', 'sheet', 'slideshare', 'vzbtextobject', 'bell', 'propertyIsEnumerable', 'content', 'fadeInRightBig', 'linkedin-square', '#003700', '#545352', 'button[role=\x22iconpicker\x22],div[role=\x22iconpicker\x22]', 'Solid', 'iconset', 'won', 'onpremise_expire_date', 'arrow-circle-up', 'getDaysToExpiration', 'slider', 'strings', '__generator', '/VizlibAdvancedTextObject/v1.7.12/static/fontawesome-webfont-1dc35d.ttf', 'align-right', 'return', 'truck', 'border-right', 'moon-o', 'fontFamily', 'bottomleftradius', 'settings', 'verify', 'XXX_ONPREMISE_EXPIRE_DATE_XXX', 'object', 'toISOString', 'slideOutRight', 'Your\x20exported\x20data\x20is\x20ready\x20for\x20download.', 'measures', 'width', 'vzb-license-modal-content', 'rubberBand', 'Vizlib-', 'Open\x20URL', 'url', 'github-alt', '<div\x20class=\x27vzipContainer\x27>', 'text-decoration', 'data', 'money', 'vzb-license-modal-header', 'webpackJsonp_VizlibAdvancedTextObject', 'showHideCondition', '.search-control', 'Dimension\x20Fields\x20(pipe\x20separated)', 'sort-alpha-asc', 'actions', 'Iconpicker\x20=>\x20The\x20number\x20of\x20rows\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x200.\x20[option.rows\x20=\x20', 'wifi', 'arrow-down', 'fadeInLeft', 'closePermanently', 'check', 'pop', 'get', 'thumbs-down', 'Abillity\x20to\x20interact\x20with\x20the\x20tooltip\x20content.\x20Tooltip\x20doesn\x27t\x20disappear\x20on\x20hover\x20it.\x20i.e:\x20clickable\x20links\x20on\x20the\x20tooltip\x20text.', 'file-text-o', 'timeoutId', 'th-list', 'setLabelFooter', 'animationOut', 'popover', 'zoomInLeft', 'eye-slash', 'arrowNextIconClass', 'sessionConfig', 'setIconset', 'Width\x20based\x20on\x20the\x20content', 'next', 'each', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09<style\x20type=\x22text/css\x22>\x0a\x09\x09\x09\x09\x09\x09.avzb_btn_vzba\x20{\x20\x0a\x09\x09\x09\x09\x09\x09\x09-webkit-border-radius:\x2060;\x0a\x09\x09\x09\x09\x09\x09\x09-moz-border-radius:\x2060;\x0a\x09\x09\x09\x09\x09\x09\x09border-radius:\x201px;\x0a\x09\x09\x09\x09\x09\x09\x09font-family:\x20Arial;\x0a\x09\x09\x09\x09\x09\x09\x09color:\x20#ffffff;\x20\x0a\x09\x09\x09\x09\x09\x09\x09font-size:\x2014;\x0a\x09\x09\x09\x09\x09\x09\x09background:\x20#EB5E15;\x0a\x09\x09\x09\x09\x09\x09\x09padding:\x2010px\x2020px\x2010px\x2020px;\x0a\x09\x09\x09\x09\x09\x09\x09text-decoration:\x20none;\x0a\x09\x09\x09\x09\x09\x09\x09border-radius:\x2060px;\x0a\x09\x09\x09\x09\x09\x09\x09box-shadow:\x200\x204px\x208px\x200\x20rgba(0,\x200,\x200,\x200.2),\x200\x203px\x202px\x200\x20rgba(0,\x200,\x200,\x200.19);\x0a\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20.avzb_btn_vzba:hover\x20{\x0a\x09\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#eb4b15;\x0a\x09\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09.avzb_bar-main-container_avzb\x20{\x0a\x09\x09\x09\x09\x09\x09\x20\x20width:\x20100%;\x0a\x09\x09\x09\x09\x09\x09\x20\x20height:\x2050px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-webkit-border-radius:\x204px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-moz-border-radius:\x204px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20border-radius:\x204px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20font-family:\x20sans-serif;\x0a\x09\x09\x09\x09\x09\x09\x20\x20font-weight:\x20normal;\x0a\x09\x09\x09\x09\x09\x09\x20\x20font-size:\x200.9em;\x0a\x09\x09\x09\x09\x09\x09\x20\x20color:\x20#FFF;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_bar-container_avzb\x20{\x0a\x09\x09\x09\x09\x09\x09\x20\x20float:\x20left;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-webkit-border-radius:\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-moz-border-radius:\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20border-radius:\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20height:\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20background:\x20#FFF;\x0a\x09\x09\x09\x09\x09\x09\x20\x20border:\x201px\x20solid\x20rgba(0,0,0,0.1);\x0a\x09\x09\x09\x09\x09\x09\x20\x20width:\x2090%;\x0a\x09\x09\x09\x09\x09\x09\x20\x20margin:\x205px\x200px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20overflow:\x20hidden;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_bar_avzb\x20{\x0a\x09\x09\x09\x09\x09\x09\x20\x20float:\x20left;\x0a\x09\x09\x09\x09\x09\x09\x20\x20background:\x20#EB5E15;\x0a\x09\x09\x09\x09\x09\x09\x20\x20height:\x20100%;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-webkit-border-radius:\x2010px\x200px\x200px\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-moz-border-radius:\x2010px\x200px\x200px\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20border-radius:\x2010px\x200px\x200px\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-ms-filter:\x20\x22progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\x22;\x0a\x09\x09\x09\x09\x09\x09\x20\x20filter:\x20alpha(opacity=100);\x0a\x09\x09\x09\x09\x09\x09\x20\x20-moz-opacity:\x201;\x0a\x09\x09\x09\x09\x09\x09\x20\x20-khtml-opacity:\x201;\x0a\x09\x09\x09\x09\x09\x09\x20\x20opacity:\x201;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x20\x20\x0a\x09\x09\x09\x09\x09\x09.avzb_strap_bg_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09top:\x200;\x0a\x09\x09\x09\x09\x09\x09\x09bottom:\x200;\x0a\x09\x09\x09\x09\x09\x09\x09right:\x203em;\x0a\x09\x09\x09\x09\x09\x09\x09width:\x2012%;\x0a\x09\x09\x09\x09\x09\x09\x09height:\x20100%;\x0a\x09\x09\x09\x09\x09\x09\x09background-image:\x20linear-gradient(#EB5E15,\x20#EB5E15);\x0a\x09\x09\x09\x09\x09\x09\x09transform:\x20skewX(45deg);\x0a\x09\x09\x09\x09\x09\x09\x09transform-origin:\x20top\x20left;\x0a\x09\x09\x09\x09\x09\x09\x09box-shadow:\x200\x200px\x200px\x200\x20rgba(0,\x200,\x200,\x200.2),\x200\x200px\x205px\x200\x20rgba(0,\x200,\x200,\x200.19);\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09.avzb_strap_text_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09top:\x201.3em;\x0a\x09\x09\x09\x09\x09\x09\x09right:\x200em;\x0a\x09\x09\x09\x09\x09\x09\x09color:\x20white;\x0a\x09\x09\x09\x09\x09\x09\x09font-size:\x2014px;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09.avzb_rotate_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09transform:\x20rotate(-90deg);\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09/*\x20Legacy\x20vendor\x20prefixes\x20that\x20you\x20probably\x20don\x27t\x20need...\x20*/\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09/*\x20Safari\x20*/\x0a\x09\x09\x09\x09\x09\x09\x09-webkit-transform:\x20rotate(45deg);\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09/*\x20Firefox\x20*/\x0a\x09\x09\x09\x09\x09\x09\x09-moz-transform:\x20rotate(45deg);\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09/*\x20IE\x20*/\x0a\x09\x09\x09\x09\x09\x09\x09-ms-transform:\x20rotate(45deg);\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09/*\x20Opera\x20*/\x0a\x09\x09\x09\x09\x09\x09\x09-o-transform:\x20rotate(45deg);\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09/*\x20Internet\x20Explorer\x20*/\x0a\x09\x09\x09\x09\x09\x09\x09filter:\x20progid:DXImageTransform.Microsoft.BasicImage(rotation=-3);\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_ext_icon_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09top:\x201.85em;\x0a\x09\x09\x09\x09\x09\x09\x09right:\x201.2em;\x0a\x09\x09\x09\x09\x09\x09\x09width:\x2072px;\x0a\x09\x09\x09\x09\x09\x09\x09height:\x2072px;\x0a\x09\x09\x09\x09\x09\x09\x09-webkit-border-radius:\x204px;\x0a\x09\x09\x09\x09\x09\x09\x09-moz-border-radius:\x204px;\x0a\x09\x09\x09\x09\x09\x09\x09overflow:hidden;\x0a\x09\x09\x09\x09\x09\x09\x09border-radius:\x204px;\x0a\x09\x09\x09\x09\x09\x09\x09box-shadow:\x200\x204px\x208px\x200\x20rgba(0,\x200,\x200,\x200.2),\x200\x206px\x2020px\x200\x20rgba(0,\x200,\x200,\x200.19);\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_subscription_icon_vzba{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09top:1em;\x0a\x09\x09\x09\x09\x09\x09\x09right:0.3em;\x0a\x09\x09\x09\x09\x09\x09\x20\x20}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_subscription_without_icon_vzba{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09top:2.5em;\x0a\x09\x09\x09\x09\x09\x09\x09right:1em;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_extension_name_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09top:\x204em;\x0a\x09\x09\x09\x09\x09\x09\x09left:\x201.2em;\x0a\x09\x09\x09\x09\x09\x09\x09width:\x2050%;\x0a\x09\x09\x09\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09\x09\x09\x09color:\x20white;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_version_tag_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09\x09\x09\x09top:\x206.4em;\x0a\x09\x09\x09\x09\x09\x09\x09left:\x201em;\x0a\x09\x09\x09\x09\x09\x09\x09line-height:\x200;\x0a\x09\x09\x09\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09\x09\x09\x09white-space:\x20nowrap;\x0a\x09\x09\x09\x09\x09\x09\x09-webkit-border-radius:\x2030;\x0a\x09\x09\x09\x09\x09\x09\x09-moz-border-radius:\x2060;\x0a\x09\x09\x09\x09\x09\x09\x09border-radius:\x201px;\x0a\x09\x09\x09\x09\x09\x09\x09font-family:\x20Arial;\x0a\x09\x09\x09\x09\x09\x09\x09color:\x20#ffffff;\x20\x0a\x09\x09\x09\x09\x09\x09\x09text-decoration:\x20none;\x0a\x09\x09\x09\x09\x09\x09\x09border-radius:\x2060px;\x0a\x09\x09\x09\x09\x09\x09\x09box-shadow:\x200\x200px\x200px\x200\x20rgba(0,\x200,\x200,\x200.2),\x201px\x201px\x207px\x201px\x20rgba(0,\x200,\x200,\x200.19);\x0a\x09\x09\x09\x09\x09\x09\x20\x20}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_version_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09padding:\x208px\x200px\x208px\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x09text-align:\x20left;\x0a\x09\x09\x09\x09\x09\x09\x09font-size:\x2085%;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_white_dot_vzba\x20{\x0a\x09\x09\x09\x09\x09\x09\x09text-align:\x20right;\x0a\x09\x09\x09\x09\x09\x09\x09padding:\x207.2px\x208px\x208px\x2010px;\x0a\x09\x09\x09\x09\x09\x09\x09font-size:\x20125%;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09\x09.avzb_white_avzb\x20\x20\x20{\x20background:\x20#FFF;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x09</style>\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09<div\x20ng-if=\x22!isIndependentExtension()\x22\x0a\x09\x09\x09\x09\x09\x09<div\x20style=\x22width:100%;\x20text-align:left;\x20position:\x20relative;\x20overflow:hidden;\x20height:92px;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<img\x20src=\x22{{banner_img}}\x22\x20alt=\x22{{extensionName}}\x22\x20style=\x22max-width:250px\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20ng-if=\x22showImage()\x22\x20class=\x22avzb_ext_icon_vzba\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<img\x20src=\x22{{icon_img}}\x22\x20style=\x22background:white;height:72px;width:72px;\x22/>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_extension_name_vzba\x22\x20style=\x22display:\x20none;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x20\x09<img\x20src=\x22{{extensionNameImg}}\x22\x20style=\x22max-width:\x2080%;\x20max-height:20px;\x22\x20/>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20ng-if=\x22user_mode==\x27Freemium\x27\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_strap_bg_vzba\x22></div>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_strap_text_vzba\x20avzb_rotate_vzba\x22>Free\x20trial</div>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_subscription_icon_vzba\x22\x20\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<img\x20src=\x22{{subscription_icon}}\x22\x20style=\x22max-width:24px;\x20{{sub_icon_style}}\x22\x20title=\x22{{user_mode_label}}\x22/>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x0a\x09\x09\x09\x09\x09<div\x20ng-if=\x22isIndependentExtension()\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20style=\x22width:100%;\x20text-align:left;\x20position:\x20relative;\x20overflow:hidden;\x20height:92px;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<img\x20src=\x22{{banner_img}}\x22\x20alt=\x22{{extensionName}}\x22\x20style=\x22max-width:250px\x22>\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20ng-if=\x22user_mode==\x27Freemium\x27\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_strap_bg_vzba\x22></div>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_strap_text_vzba\x20avzb_rotate_vzba\x22>Free\x20trial</div>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_subscription_without_icon_vzba\x22\x20\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<img\x20src=\x22{{subscription_icon}}\x22\x20style=\x22max-width:24px;\x20{{sub_icon_style}}\x22\x20title=\x22{{user_mode_label}}\x22/>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x0a\x0a\x09\x09\x09\x09\x09<a\x20href=\x22{{changeloglink}}\x22\x20target=\x22_blank\x22\x20title=\x22Open\x20extension\x20changelog\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_version_tag_vzba\x22\x20ng-style=\x22{background:\x20badge_color}\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_version_vzba\x22>Version\x20{{version}}</div>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22avzb_white_dot_vzba\x22>●</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</a>\x0a\x0a\x09\x09\x09\x09\x09<div\x20style=\x22margin:\x2025px\x205px\x2015px;\x20width:95%;\x20text-align:center;\x20font-size:0.9em;\x20color:\x20#002e6d\x22>\x0a\x09\x09\x09\x09\x09\x09<p>Learn\x20more\x20about\x20our\x20other\x20extensions\x20<a\x20href=\x22https://home.vizlib.com\x22\x20target=\x22_blank\x22\x20style=\x22color:\x20#5779EB;\x22>here!</a></p>\x0a\x09\x09\x09\x09\x09\x20</div>\x0a\x09\x09\x09\x09\x09\x20\x0a\x09\x09\x09\x09\x09\x20<div\x20ng-if=\x22user_mode==\x27Freemium\x27\x22\x20\x20style=\x22width:95%;\x20margin-bottom:5px;\x20text-align:\x20center;\x20font-size:0.9em;\x20margin-right:10px;\x20margin-left:\x2010px;\x20color:\x20#667dbc\x22>\x0a\x09\x09\x09\x09\x09\x20\x09<div\x20class=\x22avzb_bar-main-container_avzb\x20avzb_white_avzb\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20style=\x22color:\x20#002e6d;\x20font-family:\x20\x27QlikView\x20Sans\x27,\x20sans-serif;\x20text-align:center\x20\x22>License\x20Usage\x20({{allocatedusers}}\x20of\x20{{totalusers}})</div>\x0a\x09\x09\x09\x09\x09\x20\x09\x09<div\x20class=\x22avzb_bar-container_avzb\x22>\x0a\x09\x09\x09\x09\x09\x20\x20\x09\x09\x09<div\x20class=\x22avzb_bar_avzb\x22\x20ng-style=\x22{\x27width\x27:usage+\x27%\x27}\x22></div>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x20\x20\x09\x09<div\x20style=\x22color:\x20#002e6d;\x22>\x0a\x09\x09\x09\x09\x09\x20\x09\x09Enjoy\x20access\x20to\x20a\x20highly\x20customisable\x20Visualisation\x20Library\x20and\x20hands-on\x20support.\x0a\x09\x09\x09\x09\x20\x20\x09\x09</div>\x0a\x09\x20\x20\x09\x09\x09\x09\x09<div\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2020px\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<a\x20class=\x22avzb_btn_vzba\x22\x20href=\x22http://bit.ly/2ZmMuOE\x22\x20target=\x22_blank\x22\x20style=\x22color:\x20#ffffff;\x20margin-top:\x2040px\x22>\x20\x20\x0a\x09\x09\x20\x20\x09\x09\x09\x09\x09\x09<b>Add\x20more\x20users</b>\x0a\x09\x09\x09\x09\x09\x09\x09</a>\x0a\x09\x20\x20\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09<div\x20ng-if=\x22user_mode==\x27Onpremise\x27\x22\x20\x20style=\x22width:95%;margin-bottom:5px;\x20text-align:\x20center;\x20font-size:0.9em;\x20margin-right:10px;\x20color:\x20#002e6d\x22>\x0a\x09\x09\x09\x09\x09\x09<p\x20ng-if=\x22user_mode==\x27Onpremise\x27\x22\x20style=\x20\x22text-align:\x20left;\x20margin-left:\x2010px;font-style:\x20italic;\x22\x20>\x20On-Premise\x20license\x20details:\x20</p>\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x20\x20\x20<div\x20style=\x22text-align:left;margin-left:13px\x22>\x0a\x09\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20<p>•\x20Licensed\x20to:\x20<b>{{onpremise_user}}</b></p>\x0a\x09\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20<p>•\x20Company:\x09<b>{{onpremise_company}}</b></p>\x0a\x09\x09\x09\x09\x09\x20\x20\x20\x20\x20\x20<p>•\x20Expiry\x20date:\x20<b>{{onpremise_expire_date}}</b></p>\x0a\x09\x09\x09\x09\x09\x20\x20\x20</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09<div\x20style=\x22width:95%;\x20text-align:center;\x20font-size:0.9em;\x20margin-left:10px;\x22\x20title=\x22Open\x20Vizlib\x20Community\x22>\x0a\x09\x09\x09\x09\x09\x09\x20<svg\x20style=\x22vertical-align:\x20middle;\x22\x20width=\x2212\x22\x20height=\x2212\x22\x20viewBox=\x220\x200\x201792\x201792\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill=\x22#5779EB\x22\x20d=\x22M888\x201184l116-116-152-152-116\x20116v56h96v96h56zm440-720q-16-16-33\x201l-350\x20350q-17\x2017-1\x2033t33-1l350-350q17-17\x201-33zm80\x20594v190q0\x20119-84.5\x20203.5t-203.5\x2084.5h-832q-119\x200-203.5-84.5t-84.5-203.5v-832q0-119\x2084.5-203.5t203.5-84.5h832q63\x200\x20117\x2025\x2015\x207\x2018\x2023\x203\x2017-9\x2029l-49\x2049q-14\x2014-32\x208-23-6-45-6h-832q-66\x200-113\x2047t-47\x20113v832q0\x2066\x2047\x20113t113\x2047h832q66\x200\x20113-47t47-113v-126q0-13\x209-22l64-64q15-15\x2035-7t20\x2029zm-96-738l288\x20288-672\x20672h-288v-288zm444\x20132l-92\x2092-288-288\x2092-92q28-28\x2068-28t68\x2028l152\x20152q28\x2028\x2028\x2068t-28\x2068z\x22/></svg>\x0a\x09\x09\x09\x09\x09\x20\x20\x20<a\x20href={{feedback}}\x20target=\x22_blank\x22\x20style=\x22text-decoration:\x20none;\x20color:\x20#002e6d\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x20Feedback\x20or\x20ideas?\x20Visit\x20our\x20Community.\x0a\x09\x09\x09\x09\x09\x20\x20\x20</a>\x0a\x09\x09\x09\x09\x09</div>\x20\x20\x20\x0a\x0a\x09\x09\x09\x09\x09<br>\x0a\x09\x09\x09\x09\x09<div\x20style=\x22width:95%;\x20text-align:\x20left;\x20font-size:10px;\x20margin-left:10px;\x20color:\x20#002e6d\x22><i>Contact\x20<a\x20href=\x22mailto:{{email}}\x22\x20style=\x22color:\x20#5779EB\x22>\x20{{email}}</a>\x20for\x20further\x20assistance.</i></div>\x0a\x09\x09\x09\x09\x09<br/>\x0a\x0a\x09\x09\x09\x09\x09<div\x20style=\x22width:95%;\x20text-align:\x20right;\x20font-size:10px;\x20margin-right:10px;\x20color:\x20#002e6d;\x20position:relative;\x22>\x0a\x09\x09\x09\x09\x09\x09<a\x20href={{tc}}\x20target=\x22_blank\x22\x20style=\x22color:\x20#5779EB;\x20position:absolute;\x20left:10px;\x20top:45px;\x22>Terms\x20&\x20Conditions</a>\x0a\x09\x09\x09\x09\x09\x09<a\x20href={{doclink}}\x20target=\x22_blank\x22\x20style=\x22text-decoration:\x20none;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<img\x20src=\x22{{documentationIcon}}\x22\x20alt=\x22Documentation\x22\x20style=\x22width:70px\x22/>\x0a\x09\x09\x09\x09\x09\x09</a>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09', 'qExpr', 'round', 'medium', 'Scroll', 'vatoActions', 'showOnLoad', '#276e27', 'dashboard', '<div/>', '#006100', 'HyperCube', 'user-times', '\x09\x09\x09\x09\x09\x09ng-class=\x22{\x27lui-active\x20qui-active\x27:states.strikethrough}\x22', 'university', 'fontcolor', 'area-chart', 'bus', 'font', 'chevron-circle-down', 'iconClassFix', 'nodeType', 'file-audio-o', 'setPlacement', 'folder-o', 'dialogTitle', 'mobile', 'off', 'trophy', 'paste', 'database', 'chevron-circle-up', 'fontfamily', ';\x20expires=', 'picture-o', 'backgroundcolor', 'preventDefault', 'border-bottom-left-radius', '<div\x20class=\x27vzipHeader\x27>Icon\x20Picker\x20(font-awesome)\x20</div>', 'arrows', 'Lock\x20Field', 'chevron-circle-left', 'OOXML', 'italic', 'Arial\x20Narrow', 'addQuillEditor', '/media', 'buildModalFooter', 'exclamation-triangle', 'external-link-square', 'version', '<tr>', 'without', '.vzcbactive\x20{\x0a\x20\x20background-color:\x20#fab761;\x0a}\x0a/*Border\x20panel\x20component\x20*/\x0a.vzcbheader\x20{\x0a\x20\x20padding:\x208px\x2010px\x208px\x2010px;\x0a}\x0a#vzcbmain\x20{\x0a\x20\x20width:\x2050%;\x0a\x20\x20margin:\x200\x20auto;\x0a}\x0a#vzcbwrapper\x20{\x0a\x20\x20border:\x201px\x20solid\x20transparent;\x0a\x20\x20width:\x2095px;\x0a\x20\x20height:\x2060px;\x0a\x20\x20position:\x20relative;\x0a}\x0a#vzcbleft\x20{\x0a\x20\x20width:\x207px;\x0a\x20\x20height:\x2052px;\x0a\x20\x20border:\x201px\x20solid\x20#cccccc;\x0a\x20\x20position:\x20absolute;\x0a}\x0a#vzcbtop\x20{\x0a\x20\x20width:\x2070px;\x0a\x20\x20height:\x207px;\x0a\x20\x20border:\x201px\x20solid\x20#cccccc;\x0a\x20\x20position:\x20absolute;\x0a}\x0a#vzcbtop,\x0a#vzcbbottom\x20{\x0a\x20\x20margin-left:\x2012px;\x0a}\x0a.vzcbtext\x20{\x0a\x20\x20margin:\x2010px;\x0a\x20\x20margin-top:\x2017px;\x0a\x20\x20margin-bottom:\x2011px;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20color:\x20#595959;\x0a\x20\x20font-weight:\x20bold;\x0a\x20\x20cursor:\x20default;\x0a}\x0a#vzcbbottom\x20{\x0a\x20\x20width:\x2070px;\x0a\x20\x20height:\x207px;\x0a\x20\x20border:\x201px\x20solid\x20#cccccc;\x0a\x20\x20position:\x20absolute;\x0a}\x0a#vzcbright\x20{\x0a\x20\x20width:\x207px;\x0a\x20\x20height:\x2052px;\x0a\x20\x20border:\x201px\x20solid\x20#cccccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20margin-left:\x2086px;\x0a}\x0a.vzcbinfo\x20{\x0a\x20\x20margin-left:\x2010px;\x0a\x20\x20margin-right:\x205px;\x0a\x20\x20margin-bottom:\x2010px;\x0a\x20\x20font-style:\x20italic;\x0a}\x0a/*Icon\x20picker\x20*/\x0a.vzipHeader\x20{\x0a\x20\x20padding-left:\x2010px;\x0a\x20\x20padding-right:\x2010px;\x0a\x20\x20padding-top:\x205px;\x0a}\x0a.vzipContainer\x20{\x0a\x20\x20padding-left:\x2010px;\x0a\x20\x20padding-right:\x2010px;\x0a\x20\x20padding-bottom:\x2010px;\x0a}\x0a.qv-object-VizlibAdvancedTextObject\x20.fa\x20{\x0a\x20\x20font-family:\x20FontAwesome;\x0a}\x0a.vzbtextobject\x20.ql-editor\x20>\x20*\x20{\x0a\x20\x20pointer-events:\x20none;\x0a}\x0a.vzbtextobject-proppanel-action-documentation\x20{\x0a\x20\x20display:\x20block;\x0a\x20\x20position:\x20relative;\x0a\x20\x20height:\x2020px;\x0a\x20\x20margin:\x200px\x2010px;\x0a}\x0a.vzbtextobject-proppanel-action-documentation\x20a\x20{\x0a\x20\x20display:\x20block;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20color:\x20#0000ff;\x0a\x20\x20font-size:\x2013px;\x0a\x20\x20top:\x20-15px;\x0a\x20\x20font-weight:\x20700;\x0a\x20\x20font-style:\x20italic;\x0a}\x0a.ql-snow\x20.ql-color-picker.ql-color\x20.ql-picker-item[data-value=\x27reset\x27]\x20{\x0a\x20\x20width:\x20100%;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20background-color:\x20white;\x0a}\x0a.ql-snow\x20.ql-color-picker.ql-color\x20.ql-picker-item[data-value=\x27reset\x27]:hover\x20{\x0a\x20\x20color:\x20unset;\x0a}\x0a', 'folder-open-o', 'Constructor', 'url.url', 'action', 'institution', 'Conditional', 'venus-double', 'mars-stroke-h', 'tty', 'genderless', 'envelope-square', 'align-center', 'send-o', 'whitelist', 'flipInY', '\x09\x09\x09\x09\x09\x09qva-activate=\x22select(\x27italic\x27)\x22', 'bounceInDown', '#7db8da', 'leaf', 'adn', 'right', 'file-movie-o', 'circle-o-notch', 'offsetX', 'setDate', 'remove', '#f93f17', 'list-ol', 'TEXT_NODE', 'text-align', 'ttp.contentBackground', 'retweet', 'expand', 'rotateInUpLeft', 'export.measures', 'Verdana', 'createSessionObject', 'client.property-panel/component-utils', 'clean', 'doReload', 'VizlibTextObj_', 'flex-direction', 'sent', 'showTitle', 'detach', 'setAttribute', '#6b24b2', '#fpicker-target', '#7b7a78', 'lightSpeedOut', 'updateIconsCount', 'Bottom', 'slideOutLeft', 'Middle', 'star', 'hand-o-down', 'inr', '#ffcf02', 'cart-plus', 'codepen', 'soundcloud', 'focus', 'flag-o', 'cloud', '\x20\x20\x20</td>', '-533', 'angellist', 'columns', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACmCAYAAACLM15VAAAL1klEQVR4nO2dX2gc1xXGv7P0xdC8KmFWBgVko+2b27q1JFjZBRNI/BIXGUJJbRRo4+QlddrgUhLbaQqKm5i8pH8MFnFDCdg0T8Evgbor2JWpXftxRGyIwNKS6NmQtzl9mJmd2dHM7mr/aHb3fD8wXmnvnXvumW/uPXPunZE898YJkNa4a5MOPD2etx1DhehGaa5eyduMXvhe3gaMCgI8m7cNw4QCG3nb0CuFvA0gJC8ofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVkofmKWkdzS7NachT1tUHVKgf172uYuEeBx3jaMGiMpfkDeFaC8d83tWUvdo7iUtwmjBsMeYhaKn5iF4idmofiJWSh+YhaKn5hlRFOdJMnnf3nzzV7qv/jaB+8JZF+/7BkFKP4x4Yc/PvD9buvev/fwiTXhAwx7iGEofmIWip+YheInZqH4iVkofmIWpjrHhHO//fv1Xuor9Dtr6U6Kf0z4fPXBRi/1rQkfYNhDDEPxE7NQ/MQsFD8xC8VPzELxE7OYS3Uenh7q1+8AAO4+4it49gJT4j88vR83//mHvM1oy9RPX83bBBMw7CFmMTXyjzMny4emeqnf6wrxKELxjwlXPvj16W7r3r/38Mnnqw8+7Kc9owDDHmIWip+YheInZjEX89+/9/BJ3jZ0QNevISGdY0r8dx89xsnXP6SwCACGPcQwpkb+cWZEwrmhguIfE1587YP3eqlv8TFGin9MsCjeXmHMT8xC8ROzUPzELBQ/MQvFT8xC8ROzmEp1Hp7ej9//5tTQLwZxC8beYEr8QG9/u4qMFwx7iFnMjfzjysZ//3ah27r37z18cvK1D/kYIyFWoPiJWSh+YhaKn5jF1A3v3UePsfiLP+VtBhkSTIkf4EtgSQTDHmIWcyP/uDL1k1cv5W3DqMGRn5iF4idmofiJWSh+YhaKn5iF4idmofiJWczl+V//+c/yNqEtH//r33mbYAJT4j88vR+/e+tU3ma0heLfGxj2ELNQ/MQsFD8xC8VPzELxE7NQ/MQsplKddx89xp8v38jbDDIkmBI/wBw6iWDYQ8xC8ROzUPzELBQ/MQvFT8xC8ROzmEt1jisKfJ23DaMGxT8mlOa3rudtw6jBsIeYheInZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVlGdD+/vqN5m0BGnpEUf2muXsnbBjL6MOwhZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZqH4iVkofmIWip+YheInZtnx9ga3WjwN6DOppQV3AL49gXSHWytWBCir4sww/OnUJvGvV4sXRXABkJaV1qvONiB/1YJcLc1u1gdqIRkL3JqzIEAZACBYApC7+BNhj57tqJbIBAQXxPMeuDVnYQB2kXFG8ShvE4Bk2CMyEXy6OTO3dSpZ2K05C6JyDNCz/gUgE6J6w12bPMQZYHjxR135D1S3Z+brTw+ijfVa8QaARVU9X5qvv5/8vjRXr7jV4hlAn0Gh8OkgbNgtqW9sU9X/pf0+iPUr7trkVah+JkAZIhPwvJcB7OgwGRJUpiCID24DaEMXIK3D5WGI8+N0le0pzW7WIfJS+LMA5/pnEuk/GQmMfjLIC2tAdP2uztLsZt2tFldEsASRCbfmLCSzQO7apAPPexkiz4vqDEQmoLqtIutQvYVC4dNW4VIYZqngWFhfgVUAgGIlPpKsV51vITKRNe12WsatOQtQHIHI8wDQ1K7iEQryNgDA0+MieEGBp+N9g0hFoR9nZcTctUlHPP1Vsk+iuN0ugdDIxKXYJsC3rdrthMb5ghyEYDp5zjqxseXxQ/szznsQnr2uwNPhzfFu+rZb//T6otpVAEvwrTwCoHFgX7jejcaIEE6JIhMCTECkDM87l3W/0Mg8SZB7Cuo3nOL/GE2jnYw8Lcq41eJpgV4W/2Y+XidqV1CG552IHytuW/C7RVEspPXLrRZPi+gnqX0SlMXzzmbWg14WwURTJi7hk2S7YRwej0bWa8XGC67VH0BeQfSLz0SknDx+dM5QhuoxAAtA7F6iyV2yvF4rLjcOKVIM7RHBJ4BAPQ9IhMlutXhN/CxQs/vDvkEW16vFSzPzWxeRoFv/9Cb+gnwJ1aAB2Rf/ShQN4atiBcAqRDeC+HMpvF8Q1Y8ANN1c+yLBBfiV/bQq8LVfH0eCtr7uyfYEAr3csBdYheotQL5JszndrkSZxH2QW3MW/JPv11XgCgR3oDIFoBzOoGn+2JVtnh5HMCgEI2h2nwVPNf2suK0S/A/9LlzX8X2Oc8FFUE6b5TNR7wCAljNFcL6XdvgGQHOCBRfcmnM72Xa3/ulJ/KXZzfp6rejbLDgG4GKsM4Hwd4QYFQDXwwUPAIvu2qTTNNrFHVEoJEfCwSywxTJdpZ2ZropbczYQjXI3Z+brO8usTX4J1a2MBt4FkNYn3x9V5ysRWUaqP9rY1tRuLL4XeUnVOwCVX4biUujR6PvCw/iBglH1YorxFbfm3BHA738wy5fm6hW35hwFgHAGUMUKRP8RVuzkIhHoZUAyz7dbc26HbfsXQ0IDXfpnINsbRPCC345uZ8XW8GeD4LN3IPzork06Ubwnb+11CrVNpqt1mQxbO+pTPP0X80dHtmW0W5rdrPt261fxfjT+7cK3WSIOjxWz8qt4G+2O69achWjUTvdNaa5eCe/1gkE2ld36ZyDiV8DPJYtkd74gX0YVZCr6HDvxoht9Ny4POuhT0wmK+2Pcife11fkOFsZEdaZfTQ9m5A9HuYwrEUhejbGp2p9S/TLjsodo133ag9Tk0BD1tbVvgtmrjynVnmJ+fzoPbngVt/ti0ZgTz7YMG6mp6RDV7TZbvkaO3rI9nh4PHaLQ7/pgD8kJd23SaUp1JldrR3ARqx09iV+AZ2M/3OnZGgM0ZVsyKM3nEO55+keRMFyNpaZjJHP6o07X4vdDHu9smKJCIUqbBStqZUAOtq4fRgDyTfRN9HlX+eShJtY/KTwcxk2AAj0ByM6FrxhhWrvPLUfnO5nibS53EAjy+H2i6xteUf0olqL6ItVowXTmAfzFhvBgG6mfxyXrEe9TvN854K5NOqlfNMKaKC3aDcnFzvYVOvONf3ECAnzbpWk72LX43bVJx60VKwAWAQSjfrDfJUT1FuBnfTL3+8cWsuKje2muXvFXT/3Fj8yTlSSoE+7rSLO7o+MMgHifIFjae1tiM4+/8ryT0OciP+qmhWhE1rO76V/SN2llmtYCWmQQd0tq2CPAObeatD/Y7ASN9n6obqvg1I5Rv1D4FKrLgL/NYb1abNqeAJHnYxuXriTbV+CKAMsQmRDPe+BWnSvNS+2yD4IfxJ85UJF1Afzl92rxGuLbKaDPCLxz7bbcDpKwTwKUkeyTX+AIIAdF8FTasxQ9Ed+GIrLsVosHEfgnHHgU8oX4+7QW3WrxWnyVNnbOMhHFbUiwZSXevw7CvLBtf7AsVqB6K9z6IcCzAj0LQRhe9+1ZgCbxN2J1fw/HclalsCwE76TF5MGOzzMi+CS4Yi80thhJ8zFSH3yYr7/vVosHG/td4rZknQHFCoIbtmApfylqL95ofx3YKS37BDSZ2Dr27aLt2c36erV4CcF+qSb/hC0X5G143gmITPjfSzQKx32e4T8tyFXxvOghp6B/6nnn0e5Zj4K8rarTApQD/YWPO0YGqG73e8U/+RjjO1k3FAqsKrCqqucVerQ0t9XyZrQ0v3VdoUdVsRJsNtoOjwPgpirOlOa2Mh+BLM1vvaKKMwBuRtuYddu3ASvBd83tJcun1EnZO9Iol2VLv8qU5rdeafJJWCXwLRSXFHp0h319sG1mfutikGlq8mfDttnNuhYKh1SxkjxWJ/6L6uv5+PluCrkybAyfD1HFmYYvgvINvxQKhzIfhunSP/LcGyfa1iNkHOF7e4hZKH5iFoqfmIXiJ2ah+IlZKH5iFoqfmIXiJ2b5P3ziMUCEkcAgAAAAAElFTkSuQmCC', 'Comic\x20Sans\x20MS', 'animateNumDuration', 'Sheet\x20Id', 'optional', 'vimeo-square', 'text-height', '#444444', 'toFixed', 'joomla', 'Image', 'true', 'rows', 'Unlock\x20and\x20Clear\x20All', 'setTime', 'zoomInUp', 'getSizeAndMode', 'glyphicon\x20glyphicon-arrow-right', 'Bottom-left', 'Activate\x20Previous\x20Sheet', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20Contact\x20<a\x20href=\x22mailto:support@vizlib.com\x22>support@vizlib.com</a>\x20for\x20further\x20assistance\x0a\x20\x20\x20\x20', 'plane', 'scroll.y', 'code', '$scope', 'play-circle-o', 'Static\x20with\x20(px\x20or\x20%)', 'eyedropper', 'windows', 'times', 'borderstyle', 'file-picture-o', 'modalOverlay', 'https://static.vizlib.com/vizlib-extensions/VizlibAdvancedTextObject/v1.7.12/static/vzl-dependencies.js', 'briefcase', 'qHyperCubeDef', '-999', 'selected', 'superscript', '#5B0635', 'backgroundColor', 'thumbs-o-down', '\x22Arial\x20Narrow\x22,\x20Arial,\x20sans-serif', 'promise', 'Keep\x20Aspect', 'selectAlternative', 'ceil', 'span', 'signal', 'linkText', 'ℹ\x20Run\x20an\x20array\x20of\x20action\x20triggered\x20by\x20different\x20events\x20within\x20Qlik\x20Sense.', 'Dotted', 'csv', '.animate-number', 'share-square', 'facebook-official', '#000000', 'Position', 'iconset_glyphicon', 'pow', 'send', 'back', 'unlock-alt', 'BookmarkList', 'qInfo', 'Width', 'initial', 'import', 'delay', 'arrow-circle-down', 'rotate-left', 'copyright', 'linkTarget', 'LocalStorageCleaner', 'ttp', 'certificate', 'Add\x20a\x20list\x20of\x20field\x20names\x20as\x20dimensions\x20like\x20this:\x20=\x27Country|State|Product\x27', '#vzcbtop', 'dollar', 'inArray', 'charAt', 'bordertop', 'font-style', 'items', 'locals', 'smartEditor', 'iconset_weathericon', 'fire', 'venus', 'bouncerTokens', 'Settings', 'wordpress', 'unlock', '__esModule', '.ql-toolbar\x20{\x0a\x20\x20background:\x20white;\x0a\x20\x20display:\x20none;\x0a\x20\x20z-index:\x201000;\x0a\x20\x20top:\x200px;\x0a\x20\x20left:\x200px;\x0a}\x0a\x0a.ql-editor\x20{\x0a\x20\x20padding:\x200px\x2010px;\x0a\x20\x20line-height:\x201.3;\x0a\x20\x20font-family:\x20inherit;\x0a}\x0a\x0adiv.ql-container\x20div.ql-editor:not([font-family])\x20{\x0a\x20\x20font-family:\x20inherit;\x0a}\x0a\x0adiv.ql-editor\x20i:before\x20{\x0a\x20\x20font-family:\x20\x27FontAwesome\x27;\x0a}\x0a\x0a.ql-editor::before\x20{\x0a\x20\x20left:\x2050%;\x0a\x20\x20transform:\x20translate(-50%);\x0a}\x0a', 'Georgia', 'user_mode_label', 'areBouncerTokensValid', 'throw', 'vzbLicenseExpirationNotifier', 'Medium', 'mktexpired', 'bullet', 'iconpicker', 'toStringTag', '.btn-previous\x20>\x20span', 'pied-piper', 'clearTimeout', 'unlockAll', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdoAAACwCAIAAAAnnjhwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAwgSURBVHhe7d0JWJR1HsBxBrwFNQiPUskbEkFbl/LAg1JXPJ8ysX0ys2PLxzRXc2vZ1NKtVlNLTTMfdz2yUvPsEBATxTQRtcy8Ca82wQMjb4WZ/cv/D40wsqLMzG/s+3nmsd/7f4eJh3n48vr6zmAJDYn1AgC4m7f5LwDArcgxAIhAjgFABHIMACKQYwAQgRwDgAjkGABEIMcAIAI5BgARyDEAiECOAUAEcgwAIpBjABCBHAOACOQYAEQgxwAgAjkGABHIMQCIQI4BQARyDAAikGMAEIEcA4AI5BgARCDHACACOQYAEcgxAIhAjgFABHIMACKQYwAQgRwDgAjkGABEIMcAIAI5BgARyDEAiECOAUAEn+qBkWYEII/NZjMTSoPFYjGTPBwdAyKo7DpkdqOUmC9rEWa3W5FjwG1MCfKYJbiJeRrymCWXI8eAG7j32x7Fc9ezQ44Bl3LXtzpKyvXPFDkGXMT13964da581sgx4AqE2KO55ukjx4DT0eLbgAueRHIMOBctvm04+6kkxwAggiU0JNaMAAD34egYAEQgxwAgAjkGABHIMQCIQI4BQARyDAAikGMAEIEcA4AI5BgARCDHACACOQYAEcgxAIhAjgFABHIMACKQYwAQgRwDgAjkGABEIMcAIAI5BgARyDEAiECOAUAEcgwAIpBjABCBHAOACOQYAESwhIbEmtFpevZqMfCpyHr1A318Srn+Vqv1YPrJefO+Xr50m1kCAM/kUz0w0ozOoVr8xlt9/AN8vb0tZqn0WCwWf//KHaNCMjN+3bPnZ7MKAB7I6Scr1HGxmZxp4NOu+L8AgPM4Pcf16geayZmCggJK/UwIALiS0xPmmkparjIzAHgijigBQAT35Dg7+0JW1rmitwsXrph7eHnl5lpPnz7v8Ga12sydAOB24fQL3XbufsNMdh7sMP748V/Nhp2nn2k/bHhnPX+7/fATj8/ScyFLlr3QJLiW2cjXImxUTo7VbNwCb2+Ln18F9QPDbAOAS/x+T1aonxP6Zn9VxkOdmq7/OjZ5Y+z0958wS3kc3hkAShHnjq8R0+/+atUqeXt7t2vfJCTkLrMKAM5Hjq9x8uQZPVit1qyss3oGABcgx9eYOWPtkk9Tv9mU9troFZmZDs5uA4CTkONrHD586vUxK/7yzJzly3gTDAAuRY6vUbly+Ro1qqhb9epVzNJ11Kt3Z6/e94U3r1uhQlmzZMfh46hFP78KZiNP4yY1O3cJ7RsTEfVgiJrLlHH8dOiHUrdKlcrpFYvFEhjoV7ZcmYJdDj824E5fvdfhJwlAFHJ8jScGtFmT9LK6fRk/3CwV0SS41qqEEZ99+dd/vvnIgo+f25Qy6rE/P2D25Sv0OH/q2kx9yObU0UOHddJ3aNSoxvKVQ5cuHzLpncdGjek1ZdrjalaPGd0tTN/Bnn4odYt57H5//8oTJsakbh+zdv0rNWtWiVv9kt7VvUdzc+98VapWTPzqb3pv3aAAswpAKvfkWAVo4qR+RW/R3cPNPaRSx6eTJverU8ffbHt5lS3rE/tqjyFDHzLbRbTvEKwCav8hzcJqz5n/bMNGNcx2PnWf8W/HdO9x3S+Cj7f3ezP6d40OK1/+6tHu2TMXN206oHd16hyqhwJRUSHqc1NDevqJ/fsy9CIAsdyT4w4dg7t0bVb01rhx4UJJM+DJtv4BvvGrvp80MT4+bqdZVesD2wYEVDYbdiwWr0GDowq9ocajfSOqVq2ohh/Tjs/5d/K4sSvXr9975XKO3hv7as/rnVto175Js7A6ZiNPwefQqlWDQmdCCgIdH/e9HgBIxsmKkjl2LLtT1ISRLy2a+58NI0csHPWPpXpdHa72K3LKQlHrgYF+b49fNaD/rN49p8ycsVYtjhm1/KMF36xZs6vPw9MmT0pYvHDLC4M+nD07WX+IqmqDBtX1XEiL+4JUf4e+sCCmz/Se3d7Jzr6wds3uS5euvrK8bLkyHTqG6Lsp6kFUoPVs/2MDgFjkuGRWJ+w8d+6S2fDyWrF8uzrC1XN4eF09FKJSO3/exu3bDqt7njp1Tq3YbLZ/vfnF8Bc/sX9V9+r436JZr4HjdyVdl7RH/QxIWrtn9+6fDx48abXazp+/vGHDfr23c5emelBUmlWg1bB/f8bB9BN6EYBk7sxxZuavn3/27exZ65OT9125kmtWZVP5M1O+A/vNadmatarqwd7lyznX+zUlKsrqz8qVywcFBdRvEFgx/6oJpXxeSYva8d1RM9mJX2XORbRu00g9mp4L0hyXvxeAcG7L8aeLU3tEvxP7ypIp764e/Pz8vn2mp+UfZnqWCxfNu9DVqOEgx9d787lWrRu+N6N/ytYxm1NHfxE3fOXnwz5eOMjsu75cq4P3SFq/bp/+IVHu6vmKYDWoKKs05+3kTAXgMdyT4y0p6eNeX3nhwm9HmmkHMocN/ehifto8UW7ujb6f3IAn28yaPbB9h2B9HbH6OmRlnfvll/N6b0mpL9r6dXv1HPXgverPyHaNVZrV8MMPP/10NCtvDwDp3JPjWR+s039Vt3f40ElPPJTz9TXnBzIysvVQvLpBASNGdtXzmsRdD/ea+sAfx7Zv+2Z0l0l68SYUXDsRcX999WebthwaA57HPTnes9vx6dTrrcuhL1ArYLFYgvPf+C3j2C96KF5YeJ2C694mjF914ECmPqFxK79cakPy/rNnL6qhWrVKwSG1WrVuqGb1Ay/B7p8HAQjnnhxXrVbJTNeqdofjdWe48XML9rp1C7f/J7vnnu9Q8PqOlJR0PRTPPuj2Vwo3bXq3mUruypXctV/t1vPj/Vvrs9g7vjuSceyGDtgBSOCeHLfOO3wrqlUrx+vOcCz/YLZvTMTc+c+2bHmP3ixeufJlExJf+njh86PG9Ppk8aDBQ8yL8dTB6ZLFqXouXsGFcYp6kO49wttGNh4+osvYNx45dOikXh/4VORrY3vr+QbFrTIHwr1636cHzlQAnsU9OR76Yqei1yE82jeieQvHl+46w6ovduihdm3/P7S8p9odDl5TV9SH8zfu3PlTs7A6KuKhobX1os1me3fyavvrkYuRsjl9x44jem7evO5b4/u+/8GAgU+3WzB/46S34/R60D13htxbsje/3/xNWrbdPwZardaE+B/MBgBP4J4cV6lacfHSwdHdwn19r/5t/a6773j5791Gv9ZL73WNme8nzZqZdPTIqRKdtVB3HjliUcrmHwsulD554syLQz5atDBFb/5fqt0jhn2StHaP2fbyUhldtmTr/Hmb1iXtnTY18cjhU2ZHSeTkWBMTd5kNL69tWw8VvJU+AI/gnl9dak8dVBa8eOFWlNavLr1B6nMObXb3oUOnMm/sgoqiAgP91FHw2bMX9+3NKHqdyU1o167J9JnmV/yNe33l4kVb9AzAI7jn6NheqbTY9dRPkZTN6TfdYuXEiTNbUw/u3XOsVFqsNMp/A6acnNzE1ZypADyM+3OMW1S7jn/X6DB169GzhV7ZtDHt9OmbfFEJAHdxeo6tjl7XW+rUAWYpHWJ6noiI+hMmxqhbg4bmfeDmztmgBwAexOk5PphuLt5yqqNHsm7uOuLbTE5O7rSpialbDpptAJ7Dp3pgpBmd49LlnI5Rv70Pr5NMnZK4a9d/zcbvzMWLl9PSjq9L2rti2bbJkxOS1+0zOwB4FKdfWaE80qflwKci6wYFFPqlGLfOZrOp4+J5c7/mKgIAns4VOdZ8fLxLu8Yqxzf5WmcAkMZ1OQYAFIML3QBABHIMACKQYwAQgRwDgAjkGABEIMcAIAI5BgARyDEAiECOAUAEcgwAIpBjABCBHAOACOQYAEQgxwAgAjkGABHIMQCIQI4BQARyDAAikGMAEIEcA4AI5BgARCDHACACOQYAEcgxAIhAjgFABHIMACKQYwAQgRwDgAjkGABEIMcAIAI5BgARyDEAiECOAUAEcgwAIpBjABCBHAOACOQYAEQgxwAgAjkGABHIMQCIQI4BQARyDAAikGMAEIEcA4AI5BgARCDHACACOQYAEcgxAIhAjgFABHIMACKQYwAQgRwDgAjkGABEIMcAIAI5BgARyDEAiECOAUAEcgwAIpBjABCBHAOACOQYAEQgxwAgAjkGABHIMQCIQI4BQARyDAAikGMAEMDL6395r/ztka8yZAAAAABJRU5ErkJggg==', 'subway', 'http://', 'qExtendsId', '{2}', 'Show\x20Tooltip\x20on\x20CLICK\x20object', '#888888', 'radiobuttons', 'pause', 'print', 'pinterest-p', 'Show\x20Tooltip\x20on\x20Page\x20Load', '#0047b2', 'maxcdn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABfCAYAAABcHBGtAAAACXBIWXMAAC4jAAAuIwF4pT92AAAJnElEQVR4nN2cXWgcVRTHT9OkTZrYpNpWqg/ZVJ+CpemXlBZMpE/WohH6oFCaVvChiBJRECpIK1hQKraI9qEgiRUUrJiKrfgQmggVtR8mVPJU2wTU0g/SbNvNR5tk5D+5E+/ce+6d3ZnZ3dn8YAiZmd2557/nnvt15s5zHIcKTIt4XIvhsT3ibx8RjWhX80S+hUgRUaswuomI6rU77AwJQSBOFxENWu+OQD6EqCOiXeJYrV2NRj8RdYgjXm+BEDEdKcdxOpzC0SGeGUv54/AIuP8+ImrTrli4OTJN129N+W5YvmQ+La0rM3+Ip1M8P1K1iSoECtBORLXaFYmhq5N0duCe+3fw6hTdUARQWbZkPqVWzKf6FeW0oXGB+zeANBEdEuUJRVghUiJ4GWMAjO69MOEKEGR4ENWV86h5XSU1r10YJEq/CM45e0cYIVpFsGK9YODKfTrePUoDl+9r1+KgcWUFbd+yiBobKkzflhaBuku7YiFXIVANPtbOCg/oPJnJmwAqEKTt2Wqbh7whqktW5CJEBxcQR8cd1wNOnRnTPlAItm6ucj1kUeU87mmdwjsCyVYIVgR4wZHjd2nw6qT2gUKSWlFOe7bXmLwjKzGyEYKtDucG7tGR43coM17wLjoLAuqe7Q/Q+sYF3OXAahIkBALjd+pJtAYQIYlADLQuDC/YAqhNiJTo5/tahySL4GEQIy3GPH3aB4jI1o3rUkXwqkPSQRlRVoVaEetYTELsUztLM4Ex+SJ4oKxDehBfbep9ckKkRICcBU0kWoekBMZsyIgyj+plbhc2+uCE2KdWCfQTit1EhgFlRtkVajmvUIVIqf0FdJmL1VmKA5QdNii0qV6hCqEpxShachhs8NkqC8F6Q6HGDvkENqDZV/B5hdwnbVXvNCiZMxtXLaSNTyxw/9q4/M8kZcYcuj48RdduTdGfl+675+Kg98I417do9XqccodqUJ5cRdPz9ifRpwVXPV5B77zMjtiz4uKl+/TVT5lYBPngtTp1PDLkeYVXNVLqDPOpM+PaF4Vhy4bKSJ+HkAderXP/RoWxqV7Mrs8KoVWLcwNanQppCDsIypn2lxZTdRU71M4ag03u+kqZ/I8HgmRcnaeohZe/JyjGBAGbmKbUtb1c/sejEC3F3k9HfPUehsJ7nnuqilY+ys4r0KrHKqj7d829cwK2KdN8sx6BBRlfNGNUix01+KG1+PXiBL3/edptNTiWPzifOZujELptsN1dRHCDhczQv8XrTs8Ioo0cXUyekgsG25rKuAFIsQdXd8entXNxYbAtpQnBuE7BqankxoLxwdiYyu8TQ4CgueVJvu+BzlW+iF7pYhTAazVMTe6VmLrbHEUT4usDS7VzQVz8iw+icZC4qmECTWs+q0ZJCIE+x9Guu9r5OClXV44ti6sFB32KEz+P0ve98c6QMTYOakKQWDUytLd5A0Z7vU3EguvD0251iJtqfo2UF6L+kfK8jzde3HtTO1cIYBvDYJkQIi1fY1xnzsDYlvaEAD3yFeQezFkhdNvcJUBeiIYKU10qaWAT4xFdRiHA+sZokyBJxGBTjyxEn5jInKV5HfuhkoaxaUitGqSuFMOFkOY3V4AtTLWYtdkoBEBu0lzBYAsrBJrRE/JdWBBJ8XlJJQW8gVncOSH3odSxhpZntHNbdSSbuYFSPnqMNpBoxuCzlUsdQhRtlk98cTJTsiviSGF+c8di9XSvOnPPjT61VDzUr1IMnCgz8qkYNBs5IVBv9ssnkMz51g72CxMNyswkou7nxlecECRyB/rlE/VuUmfpiIGyMgmo/VwcJIsQJNzHNxhD5C0FMQzphSRsYpf4bUL0qUllVAJiWETYbcqxpAAhSHQ4DqsnkyqGRYTDXIdRhms+OYxJ6Qe/vBP5xZSooHVAYGRiAsWZlO7Rx72xM5ODecd9U6cYoJ8AT2BaBzBMRA9pZxlyEULraMlgGQ0JnoXyjpk+Qg03kFJhFdJuiuoRKsheQxJavgSBAOjgGWIBxxJTSyGTixC+G9N3p6m2xhxr4SG95yfcdJ2oM+KYWcKkCuYTbB5wbXiKHtZzKJ7mJp5U2OjCUKee+rZ7jBbXzDMNb90CzxS6xs2UhzBICc52dhxzixj54jsML6P4+PGXMTp9boI+fF0rqpb2wJGtEFoyyd83Jmngt5lEzqC6CkNkYxBgTbndMN4Q+FiyiE2xCqF9mZd5ggK8dzTt/oJbN1Vl9est4idRc8L0WiWadKUZ1X5EjtBCqPUeBcKBYLZ1cyVtaFwY5vVmK3iN+uzAhJsvafIAJh5pdYUjVNVgXgiZBQXs/CHjHnBzeAi8JawHePngiDOm6uS7X8+aMzb5MqGCJaM6y6D7LvgkUffMVXjLsiVl1jjgxY8bt6aNv7oN5kUVr/zWJjRbIXyqhl0XhWE48rmuavCapqAmNJtKrNUxg+qJAJ7EoNkQRggt6hpUT4gQbHXSbFAJ5REG1RMDWhcFrdULI4SmpkH1xKDuVBKXEL4vYdROHEzzrv2YkYVg1E4cSENSCHyFKOeqwaidOJgUY7JsAJa1ED41GbUTxyhfRi3o5yKEpqJB7URhaN6tcSJICE1Fg9qJgwnqmi25CKGpaFA7cTBBXbMlFyF8KjIqJxam02ftSwQNunwqMiq7eIkYLesqKTM2nZcNeDBvuXNbjTt9j6UDvNlrG7wxnT7rzolBQvhUVFXmZqUwGfPuK7WxrnVABHynN/ME0XF4EzWYJFaFNzTzTaZlvyAhfCpCZW+7NOz/ZJqBwlwDkjMwlRb1/XJVBBk8/5lNVe6hbglnmDMxBkzbdD7U+0M+wcwHBhJlm6aA/aWMeEsJTMrQfm5rCAoQAn2I09rZEITZuAsiwBNMM1khMQrB+/b/QmRLr1h2X6MmmJBIMoFRzWv5l9ZyFAHGNIgV7iHtqh2jTTYhgkiLleYG8YAOEYha1DRFEnEDrtoWkKUHsSwi7JY28fQ2zVkjypHW7tYJFSNMi75e+k1XwIQou7UbiTr80bHbWtyACEy99tgdlOMgdj1o5VIYJFiFbULIi75pYfghU/NjoIXb2ItE5+zgsduzccMiQloYZ518VaiTRHleudbAJZNpm+BKBxh0HGeX4zh1zPVsD2zQ28dtCZwZm3Y+++aO03N+XLsmGHEcpynixr54frtUhhbmHqsQUQsgH3UhdkiOQwROFPZHtVWNfGCMGwr9olrZYlCsFGvLeDZuCAouAhXpBdge0exp/Q0pR7qgIlAR3wQeEV34TulcZ7FEoCJVDRWk/kEULbm1YBDRf+4leJuXDQPoAAAAAElFTkSuQmCC', '<p>', 'usage', 'visible', 'compress', 'concat', 'filterIcons', '#cce8cc', 'plus-square', 'cog', 'user', 'cacheBundles', 'google-plus', 'Action\x20Required', 'states', 'Vertical\x20Alignment', '<Select\x20a\x20value>', '=OSUser()', 'trigger', '\x09\x09\x09\x09\x09\x09qva-activate=\x22select(\x27strikethrough\x27)\x22', 'All\x20Values', 'Hover', 'readOnly', 'list-ul', 'showImage', 'bounceInLeft', 'ttp.enabled', 'skype', 'setTimeout', 'DEFAULTS', 'trash-o', 'Forward', '1.7.12', '\x09\x09\x09\x09\x09\x09q-title-translation=\x22Bold\x22>', '#28728A', 'Reload\x20App', 'Show\x20Condition', 'center', 'floppy-o', 'horizontalalignment', 'LUI\x20icons', 'sitemap', 'extStyleMode', 'setAlign', 'closest', 'animateNumber', 'Horizontal\x20scroll', 'Border\x20Style', 'imageURL', 'user_account_url', 'scissors', 'puzzle-piece', 'titleBackgroundExpr', 'field.value', 'life-saver', 'expired', 'className', 'Define\x20your\x20own\x20font\x20family', 'args', 'image', 'toggle-off', 'fadeOutRight', 'floor', 'digg', 'birthday-cake', 'bordercolorpicker', 'bs.iconpicker', 'removeClass', 'simplybuilt', 'align', 'toString', 'sheet.type', '_self', '__awaiter', 'registerBundle', 'automobile', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACnCAYAAACb1CfSAAAACXBIWXMAAB7BAAAewQHDaVRTAAAI6UlEQVR4nO3dPWxTVxgG4I+UQiiOoBJtcRbSDgnKAkqMisRgjwglggEJwdJ0ScoEUpA6xiydQELq0nhpWRLGlERtt8ZDpVQQCktEPLSwEFArFUSggf64+oxvuPHxvfccx+CXnPeRUNGxb0ivX5+/+/l6U7lcFkf7RWSn60HktZsi8tDlBGw2WkwaxCERyYnIPuNRIntFEZmq/rkTd1Rcj6lBzItI1niEaP0ui8jZqJ40KpiXROSM0UrUXI+qo/FUUjB17jjLIZtes09F5JvwP1kbzJsMJbXImnC2hX6HSwwltdDX1YV2RdBj6kLnR74q1GJ3RaRLQj1mnq8IAdhTXQxVekztPn/hq0IgKr1mW5BQIhDaa+5vC084iUDkdCivu8NO1EKX23j2CVAXg0mQGEyCxGASJAaTIDGYBInBJEgMJkFiMAkSg0mQGEyCxGASJAaTIDGYBInBJEgMJkFiMAkSg0mQGEyCxGASJAaTIDGYBInBJEg2t7puqfn5F3dETqd3Smcnb/2+HqXSfXn8eOWNOJeQwdSTNzk5JxMTc7K8/Gy1va9vj5w7d1i6u3cbx1C0QmHWOJfp9A4ZHT0sudzeyONaCfJOHKdOfSWl0gOjPXDhwgnYE4omn5+SmZlbkb/V2NhRGRyEu0tQES6Y+u4uFIpGe1gqtVWmp89KR0f7amsw5Pusdoienr4p589/m3hGrl49gza0F+GGch1ykuiQNDt7e807fWTkcsJRG9/wcFaGh3Or/586HbKhz9NhHQnUqlwn5+F5UBx9LsWLmw6FLS7inUuoYOqix9a9e3W/HoY2CKhg9vd3GW1Renq4Mk+iK28b4bk6Crg55sDAvthV5MvnrV1J6vzKd7VvbJ2DJy0kpbILctBoazW4YOrkXRc2cXPNkyc/NlaR4Uk/BefpYOVcxs01s9keI9AI4C5JauAKhaHIYUh7RrQVJCodosfHhyoXJurR0SmfP1bnkdaDvtX1i3f7ixVjKtVe2VTnZcnG6D5veK9XzyXwFTS8DXYiDSariwgSfHURNUftJVudfyIXw8AO5Xoiay8z6iReF0bkLpM5/yadSw7lhInBJEgMJkFiMAkSg0mQGEyCxH1MR9cWnsv3P/3ldNDp4yl57923jHaKxmA6Kt5YkYXf/nY6SMN85NA2o52icSh38GSlLNcXnjsf951jD0sMppPivP1HP8L+ePif3Fn6x2inaAymg+KN6OLlJMX5xo/1EYNp6fc//5W76+j1ri0wmC4YTEvr6S2lOpwv/Oq2aPIZg2lptsH5ZZiu6MkOg2lBFy7a463XtQZW9L5iMC00a+HydKXMcFpiMC00cwi+zkWQFQYzgfZw2tM1iy6injTx521UDGYC2x5uT9r+6i57zWQMZownDnPCI4farcPJeWYyBjOG9my2w3imd6tk+7Ya7fXo9XYO5/EYzBi2PVumd4tsb98kvR+9bTwWpdHr7r5gMCO4VBId6N1S+W9XerPs2ml3Std7JWmjYzAjuPRoOowHDvTaDed63V2vv1N9DGYE2x4tGMYD2X67YAoXQbEYzDpcKomCYTygw/k7oaDGYQFxNAazDpf5X++H5oKnNqxRWEAcjcGsw7aSSPct633ILGM5zxQWEEdiMGu4VBJF7Vtqj2k7nLOAuD4Gs4ZLDxY3ZNvuabKAuD4Gs4ZtJVHUMB6IC22j/6ZPGMwQl0qiqGE84DLP5LaRicEMcan6SeoRdW8zk/CcAAuITQxmlUslUdIwHqi3lRSFpXBrMZhVLpVEtlVEbvNMFhCHMZhVLkOp7Ypbe1UWEDeGwXSsJNLqoS6HsNn2rsJF0Bq825tjT9XVudlp33H7NruNdgkVEG+33JzfyBjMSjGF/T6ihqeRO77Z//xnku3D+5rm1837oXy99yRqNpc3yUbmfTDR5nUsIH7B+2Ai1kRyEeR5MJt1T6Jm4+eBPA8mai2kDue+FxB7HUzkWkjfC4i9DabO4xCH8YDvBcTe7mO6bKrr1Z73m/Q9PbZfxRJ8HsjlKtNG4m0wXVa+nwyknAoy4nz+5UPrfVP9oqvTxzuMdh94OZRrxbhtJZF+dqdZoRTHiiOft428DKbLC97MUEr1Bgm2fC4g9i6Yrt9u5vIRCRsu9zcSj0vhvAumywvd7GE8YHt/I6n27j4WEHsXTJciiVcRStef+7TSw/vXa3oVTNdKomYP4wGtgLe9IYJ4ugjyKpguL7DOA19VjymOvaaPdyD2KpgulUQu88BGuPbGvg3n3gTTtZLI5T6XjXC5LbZ4WEDszZUf3aa58sUuo71V9HM9SL8PGu8LhQkTg0mQGEyCxGASJAaTIDGYBAl2uyid3inDw1mjjRrzpp3LTeVymfe+IzRFDuUEicEkSLBzzOnpm1IozMrS0qPVtoGBfTI8nJPOTs41XczO3q6cy1LpwepR2WyPjIzkpLt7N+TvDDnHzOenZGbmltGuUqmtUigMwZ5QNBcv/iCTkz9H/lZjY0dlcHC/0d5ieHPMiYm5yFCq5eVnMjp6xWgn0/z8ndhQSjW49+49NNpbDW4on5ycM9pq6fCuQ334nZ7JnDee5xvdEtKpTkDf5En0ja7nfHT0cMIzXy+oHlPfueE5ZZxS6X7Mo6SKxUWr87C4iHcuoYK5tGQ/pCCeTGoeqGD293cZbVEyGfvn+koXijY6OvDu+Q43x+zr2yM3btw12mvlcnuN43xXe5lRz1HcQjL8PDRw20U6dzx1atxoD9P9zHz+mNFOaz1+vCKDg5cqC5wo3d0fyMTEZxGPtgzedpHuT164cCJyGGIo7ekQrXu+6fSOusfoKDM+PmS0I4At4tB3u24J6V6c/r2nZ3dlyHGZh9LLc6lXf/SP/l2vnOm5RBzCq4qsLiJErC4iTAwmQWIwCRKDSZAYTILEYBIkBpMgMZgEicEkSAwmQWIwCRKDSZAYTILEYBIkBpMgMZgEicEkSAwmQWIwCRKDSZAYTILEYBIkBpMgMZgEicEkSAwmQWIwCRKDSZAYTILEYBIkBpMgMZgEicEkSAwmQWIwCY+I/A/LATA3es0d4AAAAABJRU5ErkJggg==', 'Always', 'bounceOutRight', '\x09\x09\x09\x09\x09<div\x20class=\x22lui-buttongroup\x20qui-buttongroup\x22\x20>', 'jello', 'bottom', 'contentColor', 'angle-double-down', 'qv-activate', 'facebook-square', 'arrow-left', 'customfontfamily', 'session', 'sign-in', 'renderSnapshot', 'splice', 'fire-extinguisher', 'ttp.titleBackground', 'shift', 'mail-reply-all', 'ttp.titleColorPickerExpr', 'background-color', 'step-forward', 'rotateOutUpLeft', '<input\x20type=\x22hidden\x22\x20', 'onpremise_company', 'toolbar', 'cubes', 'recycle', 'Verdana,\x20Geneva,\x20sans-serif', 'bind', 'desc', 'data-cache-id', 'topleftradius', 'angle-left', 'Cannot\x20call\x20a\x20class\x20as\x20a\x20function', 'defineVisible', 'export.format', 'power-off', 'book', 'clear', 'Animation\x20duration\x20(ms)', 'arrows-v', 'hospital-o', 'appcontent/', 'rotateOutDownLeft', 'appcontent', '\x20btn-icon\x22></button>', 'times-circle', 'qlikPrintingService', 'mars-double', 'totalIcons', 'bar-chart-o', 'music', '[class*=\x22tipso_bubble\x22]', 'this\x20hasn\x27t\x20been\x20initialised\x20-\x20super()\x20hasn\x27t\x20been\x20called', 'typeWidth', 'qItems', 'Choose\x20to\x20pick\x20a\x20color', '.iconpicker', 'arrow-up', '#vzcbright', 'offsetY', 'Position\x20(preferred)', '\x09\x09\x09\x09\x09\x09<i\x20class=\x22fa\x20fa-underline\x22\x20style=\x22font-color:\x20white;\x20font-size:14px;\x20veritcal-align:middle;\x22></i>', 'Bookmark\x20Description', 'size', 'icon', 'Small', 'comments', 'setSearch', 'borderselector', 'scroll.usescroll', 'uniqueId', 'qDimensions', 'qlik', 'cover', 'generateBundleMessages', 'call', '<div\x20class=\x22pp-component\x20vzb-pp-icon-item-component\x20pp-icon-item-component\x20{{classPrefix}}\x20{{classPrefix}}--{{content}}\x20{{size}}\x22\x20ng-if=visible\x20ng-style=style\x20qva-apply-style=style\x20tcl=cl-icon-item>\x20</div>\x20', 'placement', 'borderleft', 'getOwnPropertyDescriptor', 'ttp.titleBackgroundExpr', 'false', 'integer', 'badge', 'file-o', '\x22\x20value=\x22', '#bbbbbb', 'saveProperties', 'displayModal', 'img', 'close', 'transgender', 'disabled', 'tumblr-square', 'viacoin', 'fillwithaspect', '.ql-picker-item[data-value=\x22reset\x22]', 'qStringExpression', 'nextSheet', 'localStorageKey', '\x22Arial\x20Black\x22,\x20\x22Arial\x20Bold\x22,\x20Gadget,\x20sans-serif', 'behance', 'render', 'getCachedBundles', 'iconset_octicon', 'value', 'top-left', 'maxlimit', 'crop', 'elem', 'Object\x20is\x20not\x20iterable.', 'setPrototypeOf', 'LicenseExpirationNotifier', 'substr', 'steam', 'underLine', 'stringify', 'Top\x20Right\x20Radius', 'parentElement', 'bicycle', 'Animation\x20effects\x20uses\x20Animation.css,\x20click\x20here\x20for\x20more\x20information.', 'frown-o', '#3d1466', 'getDate', 'parse', '<div\x20id=\x22vzcbright\x22></div>', 'createBookmark', 'banner_img', 'qUrl', 'cols', 'setMinutes', 'color-picker', 'lockAll', 'smile-o', 'ellipsis-v', 'When\x20text\x20object\x20contains\x20numbers,\x20animate\x20them\x20on\x20change.', 'Custom', 'microphone-slash', 'createElement', '-102', 'zoomInDown', 'cleanUp', 'disable', 'daysToExpiration', 'updateContentLibraryItem', 'userAgent', 'global', 'getElementById', 'Generator\x20is\x20already\x20executing.', 'ttp.maxWidth', '100', 'Smart\x20editor', '\x22Arial\x20Black\x22,\x20\x22Arial\x20Bold\x22,\x20\x22Gadget\x22,\x20\x22sans-serif\x22', 'bomb', '.btn-previous', 'linux', 'file-word-o', 'Tahoma,\x20Verdana,\x20Segoe,\x20sans-serif', 'caret-square-o-up', 'plus-circle', 'minus-square-o', 'trys', 'find', 'Top-left', '$emit', 'horizontal', 'match', 'dashcube', 'jsfiddle', 'interactiveTooltip', '#808080', 'arrow-circle-o-up', 'calculator', 'slideOutUp', 'setArrowClass', 'defineProperty', 'bookmark.id', 'Main\x20Settings', 'bitcoin', 'hasClass', '1px\x201px\x20#000000', 'length', '.btn-previous,\x20.btn-next', 'toggle-down', 'pencil-square', 'Bookmark\x20ID', 'Image\x20Stretch', 'border-top-left-radius', 'Symbol.iterator\x20is\x20not\x20defined.', 'contentColorPickerExpr', 'tbody', 'dropshadow', 'qMeasures', 'Click\x20here\x20to\x20download\x20your\x20data\x20file.', 'dropdown', 'setSelection', '#vzcbleft', 'documentationIcon', 'titleColor', 'stack-overflow', 'play', '$element', 'home', 'backgroundtransparency', 'Apply\x20Bookmark', '<span\x20class=\x22animate-number', 'scroll', 'data-animation-target=\x22', 'slideInDown', 'head', 'usescroll', 'Border\x20Width\x20(', 'LicenseExpirationVerifier', '<i></i>', 'from', 'quote-right', '</span>', 'Show\x20Tooltip\x20arrow.', '/bgimage', 'model', 'search-plus', '#5779EB', 'quote-left', 'qAppObjectList', 'assign', 'Content\x20Color', '#ffc266', 'labelHeader', 'left', 'defineLabel', '\x09\x09\x09\x09\x09\x20\x20</button>', 'rotateInDownRight', 'text', '<span\x20class=\x22caret\x22></span>', 'cc-amex', 'getItem', 'qvangular', 'bottomRight', 'getAttribute', '\x20em-list-no-labels', 'pinterest-square', 'From\x20List', '.cell', 'isNPrinting', 'vizliblibrary', 'small', 'imagestretch', 'level-down', 'Transparency', '<span\x20class=\x22', '#66a3e0', 'keyup', 'showLabels', 'labelFooter', '%22', 'strikethrough', 'currApp', 'changeList', 'drupal', 'archive', '50000', 'Measure\x20Expressions\x20(pipe\x20separated)', 'ship', 'Font\x20Style', 'titleContent', 'imageStretch', 'borderwidth', '.icons-count', '.ql-toolbar', 'bindEvents', 'sort-amount-asc', 'umbrella', '/appcontent', 'cc-mastercard', 'graduation-cap', 'options', 'overflow-y', 'Events', 'slideInUp', 'keys', '<div\x20\x20class=\x22vzcbinfo\x22>Click\x20on\x20the\x20icons\x20to\x20add\x20the\x20image(s)\x20on\x20the\x20text\x20expression\x20above.</div>', 'adjust', 'youtube-play', 'paper-plane', 'top', 'attempted\x20to\x20get\x20private\x20field\x20on\x20non-instance', 'rotateOutUpRight', 'sheet.id', 'history', 'sort-desc', 'bounce', 'setArrowPrevIconClass', 'insertText', 'footer', 'cloud-download', 'https://home.vizlib.com/terms-and-conditions/?utm_source=inapp&utm_medium=extension&utm_campaign=VizlibAdvancedTextObject', '-503', '__assign', 'rotateOut', 'extension', 'noConflict', 'display:\x20none;', 'fadeOutLeftBig', 'fast-forward', 'Font\x20Size\x20(', '\x09\x09\x09\x09\x09\x09q-title-translation=\x22Italic\x22>', 'sort-alpha-desc', '=EngineVersion()', 'apply', '%27', 'lui-button', 'th-large', 'xing', 'male', 'flex-end', 'getAppObjectList', 'vzb-license-modal-footer', 'Text\x20color\x20can\x20be\x20hex,\x20rgb,\x20rgba\x20or\x20color\x20name.', 'bounceOutUp', 'rupee', 'shield', 'cookie', 'Global\x20Radius', 'Hide\x20Delay\x20(Delay\x20before\x20hiding\x20the\x20tooltip\x20in\x20ms)', 'rgba', 'expandable-items', 'rouble', 'setHours', 'flipOutY', 'array', 'replace', 'table', 'laptop', 'fadeOutUpBig', 'dotted', 'removeAddClass', 'Selection\x20in\x20Field', 'isPrinting', '\x22Arial\x20Narrow\x22,\x20\x22Arial\x22,\x20\x22sans-serif\x22', 'zoomOut', '#ffebcc', 'isLicenseVerificationDisabled', 'tiny', 'bed', '#666600', 'getElementsByTagName', 'wraptext', 'enabled', 'toLowerCase', 'Button\x20Background\x20Color', 'Clear\x20Field', 'hasOwnProperty', '#4477aa', 'getSelection', 'ttp.content', 'comments-o', 'Tooltip\x20Settings\x20Mode', 'zoomIn', '<Type\x20in\x20your\x20Font\x20Name>', 'none', '\x09\x09\x09\x09\x09\x09qva-activate=\x22select(\x27bold\x27)\x22', 'wechat', 'mail-reply', 'definition', 'file-image-o', 'align-justify', 'shake', 'position', 'Sheet\x20Name', 'bell-slash-o', 'flex-start', 'defineValue', 'train', 'Border\x20Color', 'camera-retro', 'Interactivity', 'file-zip-o', 'border-top-right-radius', 'addIcon', 'underscore', 'toggleClass', 'stumbleupon-circle', 'select', 'transparency', 'git', 'useCommaAsDecimals', 'linkedin', 'iconset_materialdesign', 'createTextNode', '\x22QlikView\x20Sans\x22,\x20sans-serif', '#FFFFFF', 'reduce', 'Max\x20Width\x20of\x20the\x20tooltip\x20in\x20px\x20or\x20%\x20of\x20page\x20width\x20(i.e:\x20150\x20or\x2035%)', '#vzcbbottom', 'Tooltip\x20Mode', 'contentBackground', 'instagram', 'qBookmarkList', 'solid', 'user-secret', 'getOwnPropertySymbols', '<div\x20id=\x22vzcbtop\x22></div>', 'Top\x20Left\x20Radius', '0px\x20solid\x20#D9D9D9', '<button\x20class=\x22btn\x20', 'fixed', 'default', '{1}', '#b0afae', 'amd', 'globe', 'vizlibgantt', 'fighter-jet', 'cutlery', 'font-weight', 'git-square', 'appendGlobalStyles', 'fa-', 'Choose\x20to\x20upload\x20image', 'Tooltip', '/media/', 'toprightradius', 'one', 'Title\x20Content\x20(supports\x20HTML)', 'Use\x20\x27,\x27\x27\x20as\x20decimal,\x20ie:\x201.234,12', 'extBackgroundColor', 'innerText', 'euro', '/VizlibAdvancedTextObject/v1.7.12/static/vzb-lui-icons-7f67b3.ttf', '/VizlibAdvancedTextObject/v1.7.12/static/fontawesome-webfont-25a324.eot', 'soccer-ball-o', 'qMeta', 'fa\x20', 'function', 'filter', 'setUnselectedClass', 'angle-right', 'Disabled', 'field.name', 'sheetId', 'fromCharCode', 'css3', 'ttp.width', 'lastfm', 'buysellads', 'label', 'Iconpicker\x20=>\x20The\x20number\x20of\x20columns\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x204.\x20[option.cols\x20=\x20', 'days', 'camera', 'fadeInLeftBig', 'qReturn', 'min', 'getToday', '#008a00', 'boolean', 'getObject', 'tint', 'rank', 'bundlemaxlimit', 'checkLicenseExpirationDate', 'ttp.speed', 'chevron-right'];
(function(_0x4ec0e8, _0x58786d) {
    var _0x4e4f46 = function(_0x2efddc) {
        while (--_0x2efddc) {
            _0x4ec0e8['push'](_0x4ec0e8['shift']());
        }
    };
    _0x4e4f46(++_0x58786d);
}(_0x5878, 0x1af));
var _0x4e4f = function(_0x4ec0e8, _0x58786d) {
    _0x4ec0e8 = _0x4ec0e8 - 0x0;
    var _0x4e4f46 = _0x5878[_0x4ec0e8];
    return _0x4e4f46;
};
(function webpackUniversalModuleDefinition(_0x58e2b2, _0x5b070d) {
    if (typeof exports === 'object' && typeof module === _0x4e4f('0x19d'))
        module['exports'] = _0x5b070d(require('qlik'), require(_0x4e4f('0x48b')), require('jquery'), require(_0x4e4f('0x28')), require(_0x4e4f('0x227')), require(_0x4e4f('0x3fc')));
    else if (typeof define === _0x4e4f('0x4c1') && define[_0x4e4f('0x4a9')])
        define(['qlik', _0x4e4f('0x48b'), 'jquery', _0x4e4f('0x28'), _0x4e4f('0x227'), _0x4e4f('0x3fc'), _0x4e4f('0x267')], _0x5b070d);
    else {
        var _0x34c09f = typeof exports === _0x4e4f('0x19d') ? _0x5b070d(require(_0x4e4f('0x358')), require(_0x4e4f('0x48b')), require(_0x4e4f('0x62d')), require(_0x4e4f('0x28')), require('client.property-panel/component-utils'), require(_0x4e4f('0x3fc'))) : _0x5b070d(_0x58e2b2[_0x4e4f('0x358')], _0x58e2b2['underscore'], _0x58e2b2[_0x4e4f('0x62d')], _0x58e2b2[_0x4e4f('0x28')], _0x58e2b2['client.property-panel/component-utils'], _0x58e2b2['qvangular']);
        for (var _0x40760 in _0x34c09f)
            (typeof exports === _0x4e4f('0x19d') ? exports : _0x58e2b2)[_0x40760] = _0x34c09f[_0x40760];
    }
}(window, function(_0x2f4c92, _0x663354, _0xf83a9e, _0x2cc72a, _0x49af02, _0x5098d6) {
    return function(_0x1ddf85) {
        function _0x582ae1(_0x3a284d) {
            var _0x316e36 = _0x3a284d[0x0];
            var _0x1620cd = _0x3a284d[0x1];
            var _0x34ee14 = _0x3a284d[0x2];
            var _0x71da41,
                _0x2af450,
                _0x3c78b6 = 0x0,
                _0x418dec = [];
            for (; _0x3c78b6 < _0x316e36['length']; _0x3c78b6++) {
                _0x2af450 = _0x316e36[_0x3c78b6];
                if (Object['prototype'][_0x4e4f('0x46f')]['call'](_0x2e21ae, _0x2af450) && _0x2e21ae[_0x2af450]) {
                    _0x418dec[_0x4e4f('0x60')](_0x2e21ae[_0x2af450][0x0]);
                }
                _0x2e21ae[_0x2af450] = 0x0;
            }
            for (_0x71da41 in _0x1620cd) {
                if (Object['prototype'][_0x4e4f('0x46f')]['call'](_0x1620cd, _0x71da41)) {
                    _0x1ddf85[_0x71da41] = _0x1620cd[_0x71da41];
                }
            }
            if (_0x136d76)
                _0x136d76(_0x3a284d);
            while (_0x418dec[_0x4e4f('0x3c5')]) {
                _0x418dec[_0x4e4f('0x31f')]()();
            }
            _0x5c3756['push'][_0x4e4f('0x444')](_0x5c3756, _0x34ee14 || []);
            return _0x8ee481();
        }
        ;
        function _0x8ee481() {
            var _0x1ab1e1;
            for (var _0x506cb2 = 0x0; _0x506cb2 < _0x5c3756[_0x4e4f('0x3c5')]; _0x506cb2++) {
                var _0x1214e8 = _0x5c3756[_0x506cb2];
                var _0x1a20de = !![];
                for (var _0x4419b1 = 0x1; _0x4419b1 < _0x1214e8[_0x4e4f('0x3c5')]; _0x4419b1++) {
                    var _0x7e0353 = _0x1214e8[_0x4419b1];
                    if (_0x2e21ae[_0x7e0353] !== 0x0)
                        _0x1a20de = ![];
                }
                if (_0x1a20de) {
                    _0x5c3756[_0x4e4f('0x31c')](_0x506cb2--, 0x1);
                    _0x1ab1e1 = _0x495606(_0x495606['s'] = _0x1214e8[0x0]);
                }
            }
            return _0x1ab1e1;
        }
        var _0x40b721 = {};
        var _0x2e21ae = {
            0: 0x0
        };
        var _0x5c3756 = [];
        function _0x495606(_0x547fb8) {
            if (_0x40b721[_0x547fb8]) {
                return _0x40b721[_0x547fb8]['exports'];
            }
            var _0x22940d = _0x40b721[_0x547fb8] = {
                'i': _0x547fb8,
                'l': ![],
                'exports': {}
            };
            _0x1ddf85[_0x547fb8]['call'](_0x22940d[_0x4e4f('0x85')], _0x22940d, _0x22940d['exports'], _0x495606);
            _0x22940d['l'] = !![];
            return _0x22940d[_0x4e4f('0x85')];
        }
        _0x495606['m'] = _0x1ddf85;
        _0x495606['c'] = _0x40b721;
        _0x495606['d'] = function(_0x395d8e, _0x5d9168, _0x111535) {
            if (!_0x495606['o'](_0x395d8e, _0x5d9168)) {
                Object[_0x4e4f('0x3bf')](_0x395d8e, _0x5d9168, {
                    'enumerable': !![],
                    'get': _0x111535
                });
            }
        };
        _0x495606['r'] = function(_0x5b8d26) {
            if (typeof Symbol !== _0x4e4f('0xe9') && Symbol[_0x4e4f('0x2ae')]) {
                Object[_0x4e4f('0x3bf')](_0x5b8d26, Symbol['toStringTag'], {
                    'value': 'Module'
                });
            }
            Object[_0x4e4f('0x3bf')](_0x5b8d26, '__esModule', {
                'value': !![]
            });
        };
        _0x495606['t'] = function(_0x3ccb95, _0x50dd52) {
            if (_0x50dd52 & 0x1)
                _0x3ccb95 = _0x495606(_0x3ccb95);
            if (_0x50dd52 & 0x8)
                return _0x3ccb95;
            if (_0x50dd52 & 0x4 && typeof _0x3ccb95 === _0x4e4f('0x19d') && _0x3ccb95 && _0x3ccb95['__esModule'])
                return _0x3ccb95;
            var _0x1235fb = Object[_0x4e4f('0x4fe')](null);
            _0x495606['r'](_0x1235fb);
            Object[_0x4e4f('0x3bf')](_0x1235fb, _0x4e4f('0x4a6'), {
                'enumerable': !![],
                'value': _0x3ccb95
            });
            if (_0x50dd52 & 0x2 && typeof _0x3ccb95 != _0x4e4f('0x5cd'))
                for (var _0x358317 in _0x3ccb95)
                    _0x495606['d'](_0x1235fb, _0x358317, function(_0x261e50) {
                        return _0x3ccb95[_0x261e50];
                    }[_0x4e4f('0x32b')](null, _0x358317));
            return _0x1235fb;
        };
        _0x495606['n'] = function(_0x639b44) {
            var _0x5edfd7 = _0x639b44 && _0x639b44[_0x4e4f('0x2a3')] ? function _0x314f2d() {
                return _0x639b44['default'];
            } : function _0x5515dc() {
                return _0x639b44;
            };
            _0x495606['d'](_0x5edfd7, 'a', _0x5edfd7);
            return _0x5edfd7;
        };
        _0x495606['o'] = function(_0x5461dc, _0x5a6729) {
            return Object[_0x4e4f('0x58e')][_0x4e4f('0x46f')][_0x4e4f('0x35b')](_0x5461dc, _0x5a6729);
        };
        _0x495606['p'] = _0x4e4f('0x5ad');
        var _0x4b04b6 = window[_0x4e4f('0x1ae')] = window[_0x4e4f('0x1ae')] || [];
        var _0x300136 = _0x4b04b6[_0x4e4f('0x60')][_0x4e4f('0x32b')](_0x4b04b6);
        _0x4b04b6[_0x4e4f('0x60')] = _0x582ae1;
        _0x4b04b6 = _0x4b04b6[_0x4e4f('0x4f3')]();
        for (var _0x32ab52 = 0x0; _0x32ab52 < _0x4b04b6['length']; _0x32ab52++)
            _0x582ae1(_0x4b04b6[_0x32ab52]);
        var _0x136d76 = _0x300136;
        _0x5c3756[_0x4e4f('0x60')]([0xb, 0x1]);
        return _0x8ee481();
    }([, function(_0xdf1986, _0x30ed2f) {
        _0xdf1986[_0x4e4f('0x85')] = _0x2f4c92;
    }, function(_0x5ab3ea, _0x35b511) {
        _0x5ab3ea[_0x4e4f('0x85')] = _0x663354;
    }, function(_0x41cc6d, _0xbf2d82) {
        _0x41cc6d[_0x4e4f('0x85')] = _0xf83a9e;
    }, function(_0x4b0505, _0xeda792, _0x3b5286) {
        'use strict';
        var _0x430bd8,
            _0x1f3ac3;
        !(_0x430bd8 = [], _0x1f3ac3 = function() {
            function _0x4db9f3(_0x191da2, _0x40f590, _0x18a8c6) {
                var _0x8334dd = _0x191da2;
                var _0x4b313c = _0x40f590;
                var _0x5a7c98 = _0x40f590[_0x4e4f('0x665')]('.');
                if (_0x5a7c98[_0x4e4f('0x3c5')] > 0x0) {
                    for (var _0x19e28b = 0x0; _0x19e28b < _0x5a7c98[_0x4e4f('0x3c5')] - 0x1; ++_0x19e28b) {
                        if (_0x8334dd[_0x5a7c98[_0x19e28b]])
                            _0x8334dd = _0x8334dd[_0x5a7c98[_0x19e28b]];
                    }
                    _0x4b313c = _0x5a7c98[_0x5a7c98[_0x4e4f('0x3c5')] - 0x1];
                }
                if (_0x18a8c6 == _0x4e4f('0x580'))
                    return _0x8334dd;
                else
                    return _0x4b313c;
            }
            function _0x8b313d(_0x287c17, _0x581804, _0x3f3139) {
                var _0x2356ed = _0x4db9f3(_0x287c17, _0x581804, 'ref');
                var _0x4bc8c9 = _0x4db9f3(_0x287c17, _0x581804, _0x4e4f('0x661'));
                _0x2356ed[_0x4bc8c9] = _0x3f3139;
            }
            function _0x19e02d(_0x448800, _0x2d8194) {
                var _0x3134aa = _0x4db9f3(_0x448800, _0x2d8194, _0x4e4f('0x580'));
                var _0x19a60d = _0x4db9f3(_0x448800, _0x2d8194, _0x4e4f('0x661'));
                return _0x3134aa[_0x19a60d];
            }
            function _0x27101a(_0x3467f4, _0x199046, _0x558e66) {
                var _0xc1e06c = '';
                if (_0x558e66) {
                    var _0x61435b = new Date();
                    _0x61435b[_0x4e4f('0x254')](_0x61435b[_0x4e4f('0x12d')]() + _0x558e66 * 0x18 * 0x3c * 0x3c * 0x3e8);
                    _0xc1e06c = _0x4e4f('0x1ed') + _0x61435b[_0x4e4f('0x6d')]();
                } else
                    var _0xc1e06c = '';
                document[_0x4e4f('0x451')] = _0x3467f4 + '=' + _0x199046 + _0xc1e06c + _0x4e4f('0xee');
            }
            function _0x185c78(_0x4fb847) {
                var _0x3100c9 = _0x4fb847 + '=';
                var _0x414dc9 = document[_0x4e4f('0x451')][_0x4e4f('0x665')](';');
                for (var _0x3d8a48 = 0x0; _0x3d8a48 < _0x414dc9[_0x4e4f('0x3c5')]; _0x3d8a48++) {
                    var _0x216231 = _0x414dc9[_0x3d8a48];
                    while (_0x216231[_0x4e4f('0x296')](0x0) == '\x20')
                        _0x216231 = _0x216231['substring'](0x1, _0x216231['length']);
                    if (_0x216231['indexOf'](_0x3100c9) == 0x0)
                        return _0x216231['substring'](_0x3100c9[_0x4e4f('0x3c5')], _0x216231['length']);
                }
                return null;
            }
            function _0x895d5c(_0x179b95) {
                _0x27101a(_0x179b95, '', -0x1);
            }
            function _0x4ad6f1(_0x2fcce0, _0x42b54d) {
                var _0x2f440b = '';
                var _0x4205e0 = '';
                _0x4205e0 = _0x2fcce0['toString']();
                for (var _0x5cd3ea = 0x0; _0x5cd3ea < _0x2fcce0[_0x4e4f('0x3c5')]; _0x5cd3ea++) {
                    var _0x4c881a = _0x2fcce0[_0x4e4f('0x119')](_0x5cd3ea);
                    var _0x5d815a = _0x4c881a ^ _0x42b54d;
                    _0x2f440b = _0x2f440b + String[_0x4e4f('0x4c8')](_0x5d815a);
                }
                return _0x2f440b;
            }
            function _0x394f06() {
                return [_0x4e4f('0x4a8'), '#7b7a78', _0x4e4f('0x187'), _0x4e4f('0x470'), _0x4e4f('0x213'), _0x4e4f('0x5bc'), _0x4e4f('0x54e'), _0x4e4f('0x21c'), _0x4e4f('0x23b'), _0x4e4f('0x1d3'), '#ffffff', _0x4e4f('0x27e')];
            }
            function _0x4d9fc7() {
                var _0x270dc1 = typeof window[_0x4e4f('0x33e')] !== 'undefined' && typeof window[_0x4e4f('0x33e')][_0x4e4f('0x31b')] !== _0x4e4f('0xe9');
                return _0x270dc1;
            }
            return {
                'setRefValue': _0x8b313d,
                'getRefValue': _0x19e02d,
                'createCookie': _0x27101a,
                'readCookie': _0x185c78,
                'eraseCookie': _0x895d5c,
                'jsEncode': _0x4ad6f1,
                'getColorPalette': _0x394f06,
                'isPrinting': _0x4d9fc7
            };
        }[_0x4e4f('0x444')](_0xeda792, _0x430bd8), _0x1f3ac3 !== undefined && (_0x4b0505['exports'] = _0x1f3ac3));
    }, function(_0x4b2ee9, _0x320819, _0x72aa94) {
        'use strict';
        var _0x1eadb4,
            _0x34c7fa;
        !(_0x1eadb4 = [_0x72aa94(0xf)], _0x34c7fa = function(_0x2c9217) {
            var _0x5d9ca4 = {};
            return {
                'addQuillEditor': function(_0x21614d, _0x342486) {
                    _0x5d9ca4[_0x342486] = _0x21614d;
                },
                'addIcon': function(_0x524c58, _0x2c6449) {
                    var _0x490123 = 0x0;
                    if (typeof _0x5d9ca4[_0x2c6449] != 'undefined') {
                        var _0x12b41f = _0x5d9ca4[_0x2c6449][_0x4e4f('0x471')](!![]);
                        if (_0x12b41f) {
                            _0x490123 = _0x12b41f['index'] + _0x12b41f[_0x4e4f('0x3c5')];
                        }
                        _0x5d9ca4[_0x2c6449][_0x4e4f('0x620')][_0x4e4f('0x90')]();
                    }
                    _0x5d9ca4[_0x2c6449][_0x4e4f('0x434')](_0x490123, '\x20');
                    _0x5d9ca4[_0x2c6449][_0x4e4f('0x3d3')](_0x490123, 0x1);
                    _0x5d9ca4[_0x2c6449][_0x4e4f('0x670')](_0x4e4f('0x350'), _0x524c58);
                    _0x5d9ca4[_0x2c6449][_0x4e4f('0x3d3')](_0x490123, 0x0);
                }
            };
        }[_0x4e4f('0x444')](_0x320819, _0x1eadb4), _0x34c7fa !== undefined && (_0x4b2ee9[_0x4e4f('0x85')] = _0x34c7fa));
    }, , function(_0x38b03d, _0x1424ad) {
        _0x38b03d['exports'] = _0x2cc72a;
    }, function(_0x1483b6, _0x5e122b) {
        _0x1483b6['exports'] = _0x49af02;
    }, , , function(_0x37a9fd, _0x2ab199, _0x28312a) {
        'use strict';
        var _0x108fb8,
            _0xf72ca5;
        var _0x2c6d25 = this && this['__assign'] || function() {
            _0x2c6d25 = Object[_0x4e4f('0x3f0')] || function(_0xf23460) {
                for (var _0x5780a0, _0x5f2cc5 = 0x1, _0x3278bc = arguments[_0x4e4f('0x3c5')]; _0x5f2cc5 < _0x3278bc; _0x5f2cc5++) {
                    _0x5780a0 = arguments[_0x5f2cc5];
                    for (var _0x35bd4f in _0x5780a0)
                        if (Object[_0x4e4f('0x58e')][_0x4e4f('0x46f')][_0x4e4f('0x35b')](_0x5780a0, _0x35bd4f))
                            _0xf23460[_0x35bd4f] = _0x5780a0[_0x35bd4f];
                }
                return _0xf23460;
            };
            return _0x2c6d25[_0x4e4f('0x444')](this, arguments);
        };
        !(_0x108fb8 = [_0x28312a(0x1), _0x28312a(0x2), _0x28312a(0x3), _0x28312a(0xc), _0x28312a(0x18), _0x28312a(0x4), _0x28312a(0x19), _0x28312a(0x1a), _0x28312a(0x23), _0x28312a(0x24), _0x28312a(0x25), _0x28312a(0x26), _0x28312a(0x28), _0x28312a(0x29)], _0xf72ca5 = function(_0x37e694, _0x181cd4, _0x435c6b, _0x5c0d4a, _0x1e71a0, _0x145e90, _0x895086, _0x1b1419, _0xbfdf7e, _0x30b72f, _0x512114, _0x506f20) {
            'use strict';
            var _0x38d19e = ![];
            var _0x41f16e = {};
            return {
                'initialProperties': {
                    'action': [],
                    'qHyperCubeDef': {
                        'qDimensions': [],
                        'qMeasures': [],
                        'showTitles': ![],
                        'qInitialDataFetch': [{
                            'qWidth': 0x0,
                            'qHeight': 0x0
                        }]
                    }
                },
                'definition': _0x5c0d4a,
                'snapshot': {
                    'canTakeSnapshot': !![]
                },
                'support': {
                    'snapshot': !![],
                    'export': !![]
                },
                'getExportRawDataOptions': function(_0x1b6e86, _0x5ddcf2) {
                    return _0x506f20(_0x1b6e86, _0x5ddcf2);
                },
                'template': _0x4e4f('0x10d'),
                'controller': [_0x4e4f('0x25e'), _0x4e4f('0x3d9'), 'luiDialog', function($scope, $element, _0x5e2eb2) {
                    _0x41f16e = _0x5e2eb2;
                    $element[_0x4e4f('0x25e')] = $scope;
                    $scope['getSizeAndMode'] = function() {
                        return {
                            'height': $element['height'](),
                            'width': $element[_0x4e4f('0x1a2')]()
                        };
                    };
                    $scope['$watch']($scope[_0x4e4f('0x256')], function() {
                        _0x463a67($scope, $element);
                    }, !![]);
                }],
                'paint': function($element, _0xfa6c41) {
                    var _0x1f45a2 = this;
                    (function() {
                        'use strict';
                        var _0x34a157 = {
                            912: function(_0x195ce4, _0x4a09d9, _0x22e6a2) {
                                Object['defineProperty'](_0x4a09d9, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x4a09d9[_0x4e4f('0x4db')] = void 0x0;
                                var _0x1fd2fe = _0x22e6a2(0x1bb);
                                var _0x33062e = _0x22e6a2(0x192);
                                var _0x3bb8ff = _0x22e6a2(0x1d5);
                                var _0x2e6b51 = _0x22e6a2(0x27e);
                                var _0x5ec9fb = _0x22e6a2(0x3d2);
                                var _0x4ae3ac = _0x22e6a2(0xb9);
                                function _0x454334(_0x1407ca) {
                                    if (_0x4e4f('0xe9') !== typeof _0x1407ca) {
                                        Object[_0x4e4f('0x427')](_0x1407ca)[_0x4e4f('0x6c')](function(_0x3f9da9) {
                                            _0x4ae3ac[_0x4e4f('0x29f')][_0x3f9da9] = _0x1407ca[_0x3f9da9];
                                        });
                                    }
                                    if (!_0x5ec9fb[_0x4e4f('0x2a7')]()) {
                                        return;
                                    }
                                    if (_0x1fd2fe[_0x4e4f('0x461')]() || _0x1fd2fe[_0x4e4f('0x403')]()) {
                                        return;
                                    }
                                    var _0x789ad3 = new _0x33062e[(_0x4e4f('0x3e4'))]({
                                        'lastWorkingDate': _0x4ae3ac[_0x4e4f('0x29f')][_0x4e4f('0x7b')],
                                        'isLicenseVerificationDisabled': _0x4ae3ac[_0x4e4f('0x29f')][_0x4e4f('0x465')]
                                    });
                                    if (!_0x789ad3[_0x4e4f('0x19b')]()) {
                                        return new _0x2e6b51[(_0x4e4f('0x28f'))]({
                                            'bundleName': _0x4ae3ac['bouncerTokens'][_0x4e4f('0x562')]
                                        })[_0x4e4f('0x39d')]();
                                    }
                                    var _0x174ce2 = _0x789ad3[_0x4e4f('0x18e')]();
                                    return _0x3bb8ff[_0x4e4f('0x30b')]({
                                        'bundleName': _0x4ae3ac[_0x4e4f('0x29f')][_0x4e4f('0x562')],
                                        'adminEmail': _0x4ae3ac[_0x4e4f('0x29f')][_0x4e4f('0x517')],
                                        'daysToExpiration': _0x174ce2
                                    });
                                }
                                _0x4a09d9[_0x4e4f('0x4db')] = _0x454334;
                            },
                            55: function(_0x1b03ee, _0x2f58bf, _0x5f5444) {
                                Object['defineProperty'](_0x2f58bf, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x2f58bf[_0x4e4f('0x380')] = void 0x0;
                                var _0x312b3d = _0x5f5444(0x28f);
                                var _0x5e0570 = _0x5f5444(0x199);
                                var _0x903e95 = _0x5f5444(0xc4);
                                var _0x432c6d = function() {
                                    function _0x2ff055(_0x34b1a9) {
                                        var _0x205a00 = _0x34b1a9['displayDelay'];
                                        this[_0x4e4f('0x22')] = {};
                                        this[_0x4e4f('0x13b')] = new _0x5e0570[(_0x4e4f('0xe5'))]();
                                        this[_0x4e4f('0x123')] = new _0x903e95['LicenseExpirationModalManager']();
                                        this['displayDelay'] = _0x205a00;
                                    }
                                    _0x2ff055['prototype']['register'] = function(_0x14d4ee) {
                                        if (typeof this[_0x4e4f('0x22')][_0x14d4ee[_0x4e4f('0x562')]] === _0x4e4f('0xe9')) {
                                            this[_0x4e4f('0x22')][_0x14d4ee['bundleName']] = _0x14d4ee;
                                        }
                                        this[_0x4e4f('0x2dd')]();
                                    };
                                    _0x2ff055[_0x4e4f('0x58e')][_0x4e4f('0x2dd')] = function() {
                                        var _0x3a9b22 = this;
                                        if (typeof this[_0x4e4f('0x1bf')] !== _0x4e4f('0xe9')) {
                                            window[_0x4e4f('0x2b1')](this['timeoutId']);
                                        }
                                        this['timeoutId'] = window[_0x4e4f('0x2dd')](function() {
                                            _0x3a9b22[_0x4e4f('0x60d')]();
                                        }, this['displayDelay']);
                                    };
                                    _0x2ff055[_0x4e4f('0x58e')][_0x4e4f('0x60d')] = function() {
                                        var _0x2d42c2 = this;
                                        var _0x586c4f = this[_0x4e4f('0xa0')]();
                                        if (_0x586c4f[_0x4e4f('0x3c5')] === 0x0) {
                                            return;
                                        }
                                        return this[_0x4e4f('0x123')]['openModal']({
                                            'bundles': _0x586c4f,
                                            'closePermanently': function() {
                                                _0x2d42c2[_0x4e4f('0x13b')][_0x4e4f('0x2cc')](_0x586c4f[_0x4e4f('0x48')](function(_0x49e902) {
                                                    return {
                                                        'bundleName': _0x49e902[_0x4e4f('0x562')],
                                                        'adminEmail': _0x49e902[_0x4e4f('0x517')],
                                                        'daysToExpiration': _0x49e902['daysToExpiration']
                                                    };
                                                }));
                                            },
                                            'closeTemporarily': function() {
                                                _0x586c4f[_0x4e4f('0x6c')](function(_0xd02b98) {
                                                    _0x2d42c2[_0x4e4f('0x22')][_0xd02b98[_0x4e4f('0x562')]][_0x4e4f('0x8c')] = !![];
                                                });
                                            }
                                        });
                                    };
                                    _0x2ff055['prototype']['getBundlesToDisplay'] = function() {
                                        var _0x237851 = this['localStorageManager'][_0x4e4f('0x377')]();
                                        for (var _0x2bf889 in _0x237851) {
                                            this[_0x4e4f('0x22')][_0x237851[_0x2bf889][_0x4e4f('0x562')]] = _0x312b3d[_0x4e4f('0x439')](_0x312b3d[_0x4e4f('0x439')]({}, _0x237851[_0x2bf889]), {
                                                'isCached': !![]
                                            });
                                        }
                                        return Object[_0x4e4f('0x5a8')](this[_0x4e4f('0x22')])['filter'](function(_0x4afca7) {
                                            return !_0x4afca7['isCached'] && !_0x4afca7[_0x4e4f('0x8c')];
                                        });
                                    };
                                    return _0x2ff055;
                                }();
                                _0x2f58bf[_0x4e4f('0x380')] = _0x432c6d;
                            },
                            402: function(_0x36f4ea, _0x221f71) {
                                Object[_0x4e4f('0x3bf')](_0x221f71, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x221f71['LicenseExpirationVerifier'] = void 0x0;
                                var _0x514391 = function() {
                                    function _0xb8299d(_0x471a78) {
                                        var _0x10c4c5 = _0x471a78['lastWorkingDate'],
                                            _0x476aac = _0x471a78[_0x4e4f('0x465')];
                                        this[_0x4e4f('0x7b')] = _0x10c4c5;
                                        this[_0x4e4f('0x465')] = _0x476aac;
                                    }
                                    _0xb8299d[_0x4e4f('0x58e')]['verify'] = function() {
                                        if (this[_0x4e4f('0x465')] === 'yes') {
                                            return ![];
                                        }
                                        return this['isDateCloseToExpire']();
                                    };
                                    _0xb8299d[_0x4e4f('0x58e')][_0x4e4f('0x18e')] = function() {
                                        var _0x23d1f6 = this[_0x4e4f('0x4d4')]();
                                        var _0x585b3b = this[_0x4e4f('0xa1')]();
                                        return Math[_0x4e4f('0x1ce')]((_0x585b3b[_0x4e4f('0x12d')]() - _0x23d1f6[_0x4e4f('0x12d')]()) / (0x3e8 * 0x3c * 0x3c * 0x18));
                                    };
                                    _0xb8299d[_0x4e4f('0x58e')][_0x4e4f('0x4d4')] = function() {
                                        var _0x158e15 = new Date();
                                        _0x158e15['setHours'](0x0);
                                        _0x158e15[_0x4e4f('0x392')](0x0);
                                        _0x158e15[_0x4e4f('0x161')](0x0);
                                        _0x158e15['setMilliseconds'](0x0);
                                        return _0x158e15;
                                    };
                                    _0xb8299d[_0x4e4f('0x58e')]['getExpirationDate'] = function() {
                                        var _0x209ea4 = this[_0x4e4f('0x7b')][_0x4e4f('0x665')]('/')[0x0];
                                        var _0xad2a78 = this[_0x4e4f('0x7b')]['split']('/')[0x1];
                                        var _0x360376 = this[_0x4e4f('0x7b')][_0x4e4f('0x665')]('/')[0x2];
                                        var _0x25dd8c = new Date(_0xad2a78 + '/' + _0x209ea4 + '/' + _0x360376);
                                        _0x25dd8c[_0x4e4f('0x21a')](_0x25dd8c[_0x4e4f('0x38b')]() + 0x1);
                                        _0x25dd8c[_0x4e4f('0x457')](0x0);
                                        _0x25dd8c[_0x4e4f('0x392')](0x0);
                                        _0x25dd8c[_0x4e4f('0x161')](0x0);
                                        _0x25dd8c[_0x4e4f('0x13f')](0x0);
                                        return _0x25dd8c;
                                    };
                                    _0xb8299d[_0x4e4f('0x58e')][_0x4e4f('0x565')] = function() {
                                        var _0x241f4 = this[_0x4e4f('0x4d4')]();
                                        var _0x191907 = this[_0x4e4f('0xa1')]();
                                        var _0x4cd20c = _0x191907[_0x4e4f('0x12d')]() > _0x241f4[_0x4e4f('0x12d')]();
                                        var _0x131249 = _0x241f4[_0x4e4f('0x12d')]() >= _0x191907[_0x4e4f('0x12d')]() - _0xb8299d[_0x4e4f('0x4ef')];
                                        return _0x4cd20c && _0x131249;
                                    };
                                    _0xb8299d[_0x4e4f('0x4ef')] = 0x240c8400;
                                    return _0xb8299d;
                                }();
                                _0x221f71['LicenseExpirationVerifier'] = _0x514391;
                            },
                            638: function(_0x33ea99, _0x1c2d8d, _0x57e1bc) {
                                Object[_0x4e4f('0x3bf')](_0x1c2d8d, '__esModule', {
                                    'value': !![]
                                });
                                _0x1c2d8d[_0x4e4f('0x28f')] = void 0x0;
                                var _0xe765a7 = _0x57e1bc(0x199);
                                var _0x2a8fec = function() {
                                    function _0x28db0f(_0x16cee5) {
                                        var _0x53627c = _0x16cee5['bundleName'];
                                        this['localStorageManager'] = new _0xe765a7[(_0x4e4f('0xe5'))]();
                                        this['bundleName'] = _0x53627c;
                                    }
                                    _0x28db0f['prototype'][_0x4e4f('0x39d')] = function() {
                                        var _0x2ff8e1 = this[_0x4e4f('0x13b')]['getCachedBundles']();
                                        if (Object['keys'](_0x2ff8e1)[_0x4e4f('0x3c5')] === 0x0) {
                                            return;
                                        }
                                        delete _0x2ff8e1[this[_0x4e4f('0x562')]];
                                        if (Object[_0x4e4f('0x427')](_0x2ff8e1)[_0x4e4f('0x3c5')] === 0x0) {
                                            return this['localStorageManager']['clear']();
                                        }
                                        return localStorage[_0x4e4f('0x1a')](_0xe765a7[_0x4e4f('0xe5')]['localStorageKey'], JSON[_0x4e4f('0x384')](_0x2ff8e1));
                                    };
                                    return _0x28db0f;
                                }();
                                _0x1c2d8d['LocalStorageCleaner'] = _0x2a8fec;
                            },
                            409: function(_0x129cdf, _0x1a415b) {
                                Object['defineProperty'](_0x1a415b, '__esModule', {
                                    'value': !![]
                                });
                                _0x1a415b[_0x4e4f('0xe5')] = void 0x0;
                                var _0x3ee2d2 = function() {
                                    function _0x190858() {}
                                    _0x190858[_0x4e4f('0x58e')][_0x4e4f('0x377')] = function() {
                                        var _0x3cd069 = localStorage[_0x4e4f('0x3fb')](_0x190858[_0x4e4f('0x373')]);
                                        return null === _0x3cd069 ? {} : JSON[_0x4e4f('0x38c')](_0x3cd069);
                                    };
                                    _0x190858[_0x4e4f('0x58e')][_0x4e4f('0x2cc')] = function(_0x4f7949) {
                                        var _0x463bb9 = this[_0x4e4f('0x377')]();
                                        _0x4f7949[_0x4e4f('0x6c')](function(_0x210662) {
                                            _0x463bb9[_0x210662[_0x4e4f('0x562')]] = _0x210662;
                                        });
                                        return localStorage[_0x4e4f('0x1a')](_0x190858[_0x4e4f('0x373')], JSON[_0x4e4f('0x384')](_0x463bb9));
                                    };
                                    _0x190858['prototype'][_0x4e4f('0x335')] = function() {
                                        return localStorage['removeItem'](_0x190858[_0x4e4f('0x373')]);
                                    };
                                    _0x190858[_0x4e4f('0x373')] = 'vzbLicenseExpirationDialogDisplayed';
                                    return _0x190858;
                                }();
                                _0x1a415b['LocalStorageManager'] = _0x3ee2d2;
                            },
                            24: function(_0x22d79d, _0x4ec292) {
                                Object[_0x4e4f('0x3bf')](_0x4ec292, '__esModule', {
                                    'value': !![]
                                });
                                _0x4ec292['appendGlobalStyles'] = void 0x0;
                                var _0x5aff30 = _0x4e4f('0x13a');
                                function _0x2eee3f() {
                                    var _0x2d3cd3 = document[_0x4e4f('0x3e1')] || document[_0x4e4f('0x469')]('head')[0x0];
                                    var _0x10015c = document[_0x4e4f('0x39a')]('style');
                                    _0x10015c[_0x4e4f('0xff')] = _0x4e4f('0x11a');
                                    _0x10015c['appendChild'](document[_0x4e4f('0x494')](_0x5aff30));
                                    _0x2d3cd3['appendChild'](_0x10015c);
                                }
                                _0x4ec292[_0x4e4f('0x4b0')] = _0x2eee3f;
                            },
                            862: function(_0x2ffeb2, _0xfd5e4, _0x527184) {
                                Object[_0x4e4f('0x3bf')](_0xfd5e4, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0xfd5e4[_0x4e4f('0x368')] = void 0x0;
                                var _0x2d53d2 = _0x527184(0x18);
                                var _0x48d38f = _0x527184(0x314);
                                function _0x46717c(_0x4f4498) {
                                    _0x2d53d2[_0x4e4f('0x4b0')]();
                                    var _0x44b96c = document['getElementsByClassName']('vzb-license-modal-overlay');
                                    while (_0x44b96c[0x0]) {
                                        _0x44b96c[0x0][_0x4e4f('0xfb')][_0x4e4f('0x178')](_0x44b96c[0x0]);
                                    }
                                    return document[_0x4e4f('0xb5')][_0x4e4f('0x653')](_0x48d38f[_0x4e4f('0x2d')](_0x4f4498));
                                }
                                _0xfd5e4[_0x4e4f('0x368')] = _0x46717c;
                            },
                            788: function(_0x2ce397, _0x489d5a, _0x1d760e) {
                                Object[_0x4e4f('0x3bf')](_0x489d5a, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x489d5a[_0x4e4f('0x2d')] = void 0x0;
                                var _0x2c0146 = _0x1d760e(0x2d6);
                                var _0x3155be = _0x1d760e(0x3e3);
                                var _0x11ad94 = _0x1d760e(0x323);
                                function _0x332aa8(_0xb5123d) {
                                    var _0x39d37a = _0xb5123d[_0x4e4f('0x22')],
                                        _0x56d193 = _0xb5123d[_0x4e4f('0x1b8')],
                                        _0x289489 = _0xb5123d[_0x4e4f('0x5a0')];
                                    var _0x49f74f = document[_0x4e4f('0x39a')](_0x4e4f('0x4df'));
                                    _0x49f74f[_0x4e4f('0x2f9')] = 'vzb-license-modal-overlay';
                                    var _0x59fb1e = document['createElement']('div');
                                    _0x59fb1e[_0x4e4f('0x2f9')] = _0x4e4f('0x36');
                                    _0x59fb1e[_0x4e4f('0x653')](_0x2c0146[_0x4e4f('0x120')]({
                                        'modalOverlay': _0x49f74f,
                                        'closeTemporarily': _0x289489
                                    }));
                                    _0x59fb1e[_0x4e4f('0x653')](_0x3155be[_0x4e4f('0x7c')]({
                                        'bundles': _0x39d37a
                                    }));
                                    _0x59fb1e['appendChild'](_0x11ad94[_0x4e4f('0x1fb')]({
                                        'modalOverlay': _0x49f74f,
                                        'closePermanently': _0x56d193
                                    }));
                                    _0x49f74f[_0x4e4f('0x653')](_0x59fb1e);
                                    return _0x49f74f;
                                }
                                _0x489d5a[_0x4e4f('0x2d')] = _0x332aa8;
                            },
                            995: function(_0x33c51b, _0x1dcc8b) {
                                Object[_0x4e4f('0x3bf')](_0x1dcc8b, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x1dcc8b[_0x4e4f('0x7c')] = _0x1dcc8b[_0x4e4f('0x35a')] = void 0x0;
                                function _0xd5dd37(_0x172d61) {
                                    var _0x4630fb = _0x172d61[_0x4e4f('0x22')];
                                    return _0x4630fb[_0x4e4f('0x48')](function(_0x3ec7d9) {
                                        var _0x5d7cce = document[_0x4e4f('0x39a')]('p');
                                        _0x5d7cce['className'] = 'vzb-license-modal-bundle';
                                        _0x5d7cce[_0x4e4f('0x60b')] = _0x4e4f('0x71') + _0x3ec7d9[_0x4e4f('0x562')] + '</span>\x20license\x20will\x20expire\x20in\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22vzb-license-days-to-expire\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x3ec7d9[_0x4e4f('0x39f')] + '\x20' + (_0x3ec7d9['daysToExpiration'] === 0x1 ? _0x4e4f('0xa') : _0x4e4f('0x4cf')) + '.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                                        return _0x5d7cce;
                                    });
                                }
                                _0x1dcc8b['generateBundleMessages'] = _0xd5dd37;
                                function _0x3254de(_0x26597a) {
                                    var _0x4d97cc = _0x26597a['bundles'];
                                    var _0x229e2c = document[_0x4e4f('0x39a')](_0x4e4f('0x4df'));
                                    _0x229e2c[_0x4e4f('0x2f9')] = _0x4e4f('0x1a3');
                                    var _0x89c68f = document['createElement']('p');
                                    _0x89c68f['className'] = _0x4e4f('0x10c');
                                    _0x89c68f['innerHTML'] = _0x4e4f('0x5b5') + _0x4d97cc[0x0]['adminEmail'] + '\x22>' + _0x4d97cc[0x0][_0x4e4f('0x517')] + _0x4e4f('0x156');
                                    _0x229e2c['appendChild'](_0x89c68f);
                                    _0xd5dd37({
                                        'bundles': _0x4d97cc
                                    })[_0x4e4f('0x6c')](function(_0x4431e7) {
                                        _0x229e2c[_0x4e4f('0x653')](_0x4431e7);
                                    });
                                    return _0x229e2c;
                                }
                                _0x1dcc8b[_0x4e4f('0x7c')] = _0x3254de;
                            },
                            803: function(_0x561daf, _0x2bee48) {
                                Object['defineProperty'](_0x2bee48, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x2bee48['buildModalFooter'] = void 0x0;
                                function _0x506a34(_0x5d1c85) {
                                    var _0x5b9b71 = _0x5d1c85[_0x4e4f('0x266')],
                                        _0x5a3792 = _0x5d1c85['closePermanently'];
                                    var _0xacbd43 = document[_0x4e4f('0x39a')]('div');
                                    _0xacbd43['className'] = _0x4e4f('0x44c');
                                    var _0x27ac5f = document[_0x4e4f('0x39a')]('div');
                                    _0x27ac5f[_0x4e4f('0x2f9')] = _0x4e4f('0xd6');
                                    var _0x4e5373 = document['createElement']('p');
                                    _0x4e5373[_0x4e4f('0x60b')] = _0x4e4f('0x25a');
                                    var _0x2afb88 = document['createElement'](_0x4e4f('0x664'));
                                    _0x2afb88[_0x4e4f('0x4ba')] = 'Don\x27t\x20show\x20again';
                                    _0x2afb88[_0x4e4f('0x553')] = function() {
                                        var _0x3eff3b;
                                        _0x5a3792();
                                        (_0x3eff3b = _0x5b9b71[_0x4e4f('0xfb')]) === null || _0x3eff3b === void 0x0 ? void 0x0 : _0x3eff3b[_0x4e4f('0x178')](_0x5b9b71);
                                    };
                                    _0x27ac5f['appendChild'](_0x4e5373);
                                    _0x27ac5f[_0x4e4f('0x653')](_0x2afb88);
                                    _0xacbd43['appendChild'](_0x27ac5f);
                                    return _0xacbd43;
                                }
                                _0x2bee48[_0x4e4f('0x1fb')] = _0x506a34;
                            },
                            726: function(_0x1ff708, _0x3b54d3) {
                                Object[_0x4e4f('0x3bf')](_0x3b54d3, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x3b54d3['buildModalHeader'] = void 0x0;
                                function _0x4f322d(_0x22de34) {
                                    var _0x31fee0 = _0x22de34[_0x4e4f('0x266')],
                                        _0x4fbe44 = _0x22de34[_0x4e4f('0x5a0')];
                                    var _0x5dd5d6 = document['createElement'](_0x4e4f('0x4df'));
                                    _0x5dd5d6['className'] = _0x4e4f('0x1ad');
                                    var _0xc98b4b = document['createElement'](_0x4e4f('0x4df'));
                                    _0xc98b4b[_0x4e4f('0x2f9')] = _0x4e4f('0x551');
                                    var _0x4fbe85 = document[_0x4e4f('0x39a')](_0x4e4f('0x275'));
                                    _0x4fbe85[_0x4e4f('0x60b')] = _0x4e4f('0x61e');
                                    _0x4fbe85[_0x4e4f('0x2f9')] = _0x4e4f('0x514');
                                    _0x4fbe85[_0x4e4f('0x553')] = function() {
                                        var _0x5086dc;
                                        _0x4fbe44();
                                        (_0x5086dc = _0x31fee0[_0x4e4f('0xfb')]) === null || _0x5086dc === void 0x0 ? void 0x0 : _0x5086dc['removeChild'](_0x31fee0);
                                    };
                                    var _0x329eec = document[_0x4e4f('0x39a')](_0x4e4f('0x369'));
                                    _0x329eec[_0x4e4f('0x3b')] = _0x4e4f('0x51d');
                                    var _0x4baeff = document[_0x4e4f('0x39a')]('p');
                                    _0x4baeff[_0x4e4f('0x4ba')] = _0x4e4f('0x2ce');
                                    var _0x449876 = document['createElement'](_0x4e4f('0x4df'));
                                    _0x449876['className'] = _0x4e4f('0x5f0');
                                    _0x449876[_0x4e4f('0x653')](_0x329eec);
                                    _0x449876['appendChild'](_0x4baeff);
                                    _0xc98b4b['appendChild'](_0x449876);
                                    _0xc98b4b[_0x4e4f('0x653')](_0x4fbe85);
                                    _0x5dd5d6[_0x4e4f('0x653')](_0xc98b4b);
                                    return _0x5dd5d6;
                                }
                                _0x3b54d3[_0x4e4f('0x120')] = _0x4f322d;
                            },
                            469: function(_0x539e70, _0x8ba98, _0x43e52d) {
                                Object[_0x4e4f('0x3bf')](_0x8ba98, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x8ba98[_0x4e4f('0x30b')] = void 0x0;
                                var _0x50c900 = _0x43e52d(0x37);
                                function _0x301ac8(_0x28c639) {
                                    var _0x2fc95f = _0x28c639[_0x4e4f('0x562')],
                                        _0x490961 = _0x28c639[_0x4e4f('0x517')],
                                        _0x35c4e2 = _0x28c639['daysToExpiration'];
                                    var _0x2ae2ff = 0xfa0;
                                    if (_0x4e4f('0xe9') !== typeof window['vzbLicenseExpirationNotifier']) {
                                        return window[_0x4e4f('0x2a9')][_0x4e4f('0x10e')]({
                                            'bundleName': _0x2fc95f,
                                            'adminEmail': _0x490961,
                                            'daysToExpiration': _0x35c4e2
                                        });
                                    }
                                    window['vzbLicenseExpirationNotifier'] = new _0x50c900[(_0x4e4f('0x380'))]({
                                        'displayDelay': _0x2ae2ff
                                    });
                                    return window[_0x4e4f('0x2a9')][_0x4e4f('0x10e')]({
                                        'bundleName': _0x2fc95f,
                                        'adminEmail': _0x490961,
                                        'daysToExpiration': _0x35c4e2
                                    });
                                }
                                _0x8ba98[_0x4e4f('0x30b')] = _0x301ac8;
                            },
                            978: function(_0x1bd5e2, _0x546b6c, _0x46ac7c) {
                                Object[_0x4e4f('0x3bf')](_0x546b6c, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x546b6c[_0x4e4f('0x2a7')] = void 0x0;
                                var _0x10a486 = _0x46ac7c(0xb9);
                                function _0x282281() {
                                    var _0x423455 = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
                                    return _0x423455['test'](_0x10a486[_0x4e4f('0x29f')][_0x4e4f('0x7b')]) && _0x10a486[_0x4e4f('0x29f')][_0x4e4f('0x517')][_0x4e4f('0x3c5')] > 0x0 && _0x10a486[_0x4e4f('0x29f')][_0x4e4f('0x562')][_0x4e4f('0x3c5')] > 0x0;
                                }
                                _0x546b6c[_0x4e4f('0x2a7')] = _0x282281;
                            },
                            185: function(_0x40c0ed, _0xfe50da) {
                                Object['defineProperty'](_0xfe50da, '__esModule', {
                                    'value': !![]
                                });
                                _0xfe50da[_0x4e4f('0x29f')] = void 0x0;
                                _0xfe50da['bouncerTokens'] = {
                                    'bundleName': _0x4e4f('0x639'),
                                    'adminEmail': 'miran@wunderapps.ch',
                                    'isLicenseVerificationDisabled': _0x4e4f('0x16b'),
                                    'lastWorkingDate': _0x4e4f('0x533')
                                };
                            },
                            443: function(_0x27529a, _0xbfdf70) {
                                Object['defineProperty'](_0xbfdf70, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0xbfdf70[_0x4e4f('0x403')] = _0xbfdf70[_0x4e4f('0x461')] = void 0x0;
                                function _0x3f4e12() {
                                    return typeof window['qlikPrintingService'] !== 'undefined' && typeof window[_0x4e4f('0x33e')]['renderSnapshot'] !== 'undefined';
                                }
                                _0xbfdf70[_0x4e4f('0x461')] = _0x3f4e12;
                                function _0x516fd4() {
                                    return typeof window[_0x4e4f('0x33e')] !== 'undefined' && typeof window[_0x4e4f('0x33e')][_0x4e4f('0x376')] !== _0x4e4f('0xe9');
                                }
                                _0xbfdf70[_0x4e4f('0x403')] = _0x516fd4;
                            },
                            196: function(_0xf32928, _0x78699f, _0x102444) {
                                Object[_0x4e4f('0x3bf')](_0x78699f, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                                _0x78699f[_0x4e4f('0x608')] = void 0x0;
                                var _0x4099a3 = _0x102444(0x35e);
                                var _0x34178d = function() {
                                    function _0x4c51e7() {}
                                    _0x4c51e7['prototype']['openModal'] = function(_0x34859a) {
                                        _0x4099a3[_0x4e4f('0x368')](_0x34859a);
                                    };
                                    return _0x4c51e7;
                                }();
                                _0x78699f[_0x4e4f('0x608')] = _0x34178d;
                            },
                            655: function(_0x451b62, _0x415a17, _0x5e6945) {
                                _0x5e6945['r'](_0x415a17);
                                _0x5e6945['d'](_0x415a17, {
                                    '__extends': function() {
                                        return _0x5cecec;
                                    },
                                    '__assign': function() {
                                        return _0x4de838;
                                    },
                                    '__rest': function() {
                                        return _0x3bdf26;
                                    },
                                    '__decorate': function() {
                                        return _0x108dfa;
                                    },
                                    '__param': function() {
                                        return _0x1762eb;
                                    },
                                    '__metadata': function() {
                                        return _0x17839b;
                                    },
                                    '__awaiter': function() {
                                        return _0x2ff065;
                                    },
                                    '__generator': function() {
                                        return _0x2a6ce0;
                                    },
                                    '__createBinding': function() {
                                        return _0x37a39c;
                                    },
                                    '__exportStar': function() {
                                        return _0x868c25;
                                    },
                                    '__values': function() {
                                        return _0x55adfd;
                                    },
                                    '__read': function() {
                                        return _0x2f291e;
                                    },
                                    '__spread': function() {
                                        return _0x13f81d;
                                    },
                                    '__spreadArrays': function() {
                                        return _0x3e0cd8;
                                    },
                                    '__await': function() {
                                        return _0xee793;
                                    },
                                    '__asyncGenerator': function() {
                                        return _0x4aca83;
                                    },
                                    '__asyncDelegator': function() {
                                        return _0x2f4f71;
                                    },
                                    '__asyncValues': function() {
                                        return _0x371d30;
                                    },
                                    '__makeTemplateObject': function() {
                                        return _0x3b5ced;
                                    },
                                    '__importStar': function() {
                                        return _0x1dacd5;
                                    },
                                    '__importDefault': function() {
                                        return _0x1c9af5;
                                    },
                                    '__classPrivateFieldGet': function() {
                                        return _0x58770d;
                                    },
                                    '__classPrivateFieldSet': function() {
                                        return _0x79ecd8;
                                    }
                                });
                                var _0x4a92a3 = function(_0x41a065, _0x1f80f4) {
                                    _0x4a92a3 = Object['setPrototypeOf'] || {
                                        '__proto__': []
                                    } instanceof Array && function(_0x229937, _0x2d9aca) {
                                        _0x229937[_0x4e4f('0x508')] = _0x2d9aca;
                                    } || function(_0x28918a, _0x45818e) {
                                        for (var _0x3d5711 in _0x45818e)
                                            if (_0x45818e[_0x4e4f('0x46f')](_0x3d5711))
                                                _0x28918a[_0x3d5711] = _0x45818e[_0x3d5711];
                                    };
                                    return _0x4a92a3(_0x41a065, _0x1f80f4);
                                };
                                function _0x5cecec(_0x2e47e5, _0x4fbb9c) {
                                    _0x4a92a3(_0x2e47e5, _0x4fbb9c);
                                    function _0x5c441a() {
                                        this['constructor'] = _0x2e47e5;
                                    }
                                    _0x2e47e5['prototype'] = _0x4fbb9c === null ? Object[_0x4e4f('0x4fe')](_0x4fbb9c) : (_0x5c441a['prototype'] = _0x4fbb9c['prototype'], new _0x5c441a());
                                }
                                var _0x4de838 = function() {
                                    _0x4de838 = Object[_0x4e4f('0x3f0')] || function _0x7afc73(_0x55089d) {
                                        for (var _0x20d8f1, _0x151495 = 0x1, _0xb502b8 = arguments[_0x4e4f('0x3c5')]; _0x151495 < _0xb502b8; _0x151495++) {
                                            _0x20d8f1 = arguments[_0x151495];
                                            for (var _0x410861 in _0x20d8f1)
                                                if (Object['prototype'][_0x4e4f('0x46f')][_0x4e4f('0x35b')](_0x20d8f1, _0x410861))
                                                    _0x55089d[_0x410861] = _0x20d8f1[_0x410861];
                                        }
                                        return _0x55089d;
                                    };
                                    return _0x4de838[_0x4e4f('0x444')](this, arguments);
                                };
                                function _0x3bdf26(_0x59bca7, _0x15ea0f) {
                                    var _0x587dd3 = {};
                                    for (var _0x1ba3a6 in _0x59bca7)
                                        if (Object[_0x4e4f('0x58e')][_0x4e4f('0x46f')][_0x4e4f('0x35b')](_0x59bca7, _0x1ba3a6) && _0x15ea0f[_0x4e4f('0x146')](_0x1ba3a6) < 0x0)
                                            _0x587dd3[_0x1ba3a6] = _0x59bca7[_0x1ba3a6];
                                    if (_0x59bca7 != null && typeof Object[_0x4e4f('0x4a0')] === _0x4e4f('0x4c1'))
                                        for (var _0x5b0b1a = 0x0, _0x1ba3a6 = Object[_0x4e4f('0x4a0')](_0x59bca7); _0x5b0b1a < _0x1ba3a6[_0x4e4f('0x3c5')]; _0x5b0b1a++) {
                                            if (_0x15ea0f[_0x4e4f('0x146')](_0x1ba3a6[_0x5b0b1a]) < 0x0 && Object[_0x4e4f('0x58e')][_0x4e4f('0x182')][_0x4e4f('0x35b')](_0x59bca7, _0x1ba3a6[_0x5b0b1a]))
                                                _0x587dd3[_0x1ba3a6[_0x5b0b1a]] = _0x59bca7[_0x1ba3a6[_0x5b0b1a]];
                                        }
                                    return _0x587dd3;
                                }
                                function _0x108dfa(_0x2d7f3c, _0x5b3892, _0x513a10, _0x4b3a50) {
                                    var _0x5bd1df = arguments['length'],
                                        _0x220430 = _0x5bd1df < 0x3 ? _0x5b3892 : _0x4b3a50 === null ? _0x4b3a50 = Object[_0x4e4f('0x35f')](_0x5b3892, _0x513a10) : _0x4b3a50,
                                        _0x394460;
                                    if (typeof Reflect === _0x4e4f('0x19d') && typeof Reflect['decorate'] === _0x4e4f('0x4c1'))
                                        _0x220430 = Reflect[_0x4e4f('0x7f')](_0x2d7f3c, _0x5b3892, _0x513a10, _0x4b3a50);
                                    else
                                        for (var _0xa2f102 = _0x2d7f3c[_0x4e4f('0x3c5')] - 0x1; _0xa2f102 >= 0x0; _0xa2f102--)
                                            if (_0x394460 = _0x2d7f3c[_0xa2f102])
                                                _0x220430 = (_0x5bd1df < 0x3 ? _0x394460(_0x220430) : _0x5bd1df > 0x3 ? _0x394460(_0x5b3892, _0x513a10, _0x220430) : _0x394460(_0x5b3892, _0x513a10)) || _0x220430;
                                    return _0x5bd1df > 0x3 && _0x220430 && Object['defineProperty'](_0x5b3892, _0x513a10, _0x220430), _0x220430;
                                }
                                function _0x1762eb(_0x152613, _0x5716db) {
                                    return function(_0x292c36, _0x20400c) {
                                        _0x5716db(_0x292c36, _0x20400c, _0x152613);
                                    };
                                }
                                function _0x17839b(_0x456b15, _0x289d56) {
                                    if (typeof Reflect === _0x4e4f('0x19d') && typeof Reflect[_0x4e4f('0x64c')] === _0x4e4f('0x4c1'))
                                        return Reflect['metadata'](_0x456b15, _0x289d56);
                                }
                                function _0x2ff065(_0x7841b2, _0x525eaa, _0x4048ce, _0x25b1ba) {
                                    function _0xe44e00(_0x184b74) {
                                        return _0x184b74 instanceof _0x4048ce ? _0x184b74 : new _0x4048ce(function(_0x1597a2) {
                                            _0x1597a2(_0x184b74);
                                        });
                                    }
                                    return new (_0x4048ce || (_0x4048ce = Promise))(function(_0x276914, _0x633b4b) {
                                        function _0x492802(_0x3c7dbc) {
                                            try {
                                                _0x219226(_0x25b1ba[_0x4e4f('0x1ca')](_0x3c7dbc));
                                            } catch (_0x485800) {
                                                _0x633b4b(_0x485800);
                                            }
                                        }
                                        function _0x372015(_0x3f7a45) {
                                            try {
                                                _0x219226(_0x25b1ba[_0x4e4f('0x2a8')](_0x3f7a45));
                                            } catch (_0x3e5757) {
                                                _0x633b4b(_0x3e5757);
                                            }
                                        }
                                        function _0x219226(_0x52e0e2) {
                                            _0x52e0e2['done'] ? _0x276914(_0x52e0e2[_0x4e4f('0x379')]) : _0xe44e00(_0x52e0e2['value'])[_0x4e4f('0x654')](_0x492802, _0x372015);
                                        }
                                        _0x219226((_0x25b1ba = _0x25b1ba[_0x4e4f('0x444')](_0x7841b2, _0x525eaa || []))[_0x4e4f('0x1ca')]());
                                    });
                                }
                                function _0x2a6ce0(_0x35d5c2, _0x3e4720) {
                                    var _0x59757b = {
                                            'label': 0x0,
                                            'sent': function() {
                                                if (_0x136399[0x0] & 0x1)
                                                    throw _0x136399[0x1];
                                                return _0x136399[0x1];
                                            },
                                            'trys': [],
                                            'ops': []
                                        },
                                        _0x2d5f81,
                                        _0x10252e,
                                        _0x136399,
                                        _0x41313c;
                                    return _0x41313c = {
                                        'next': _0x56ed51(0x0),
                                        'throw': _0x56ed51(0x1),
                                        'return': _0x56ed51(0x2)
                                    }, typeof Symbol === _0x4e4f('0x4c1') && (_0x41313c[Symbol[_0x4e4f('0x4fd')]] = function() {
                                        return this;
                                    }), _0x41313c;
                                    function _0x56ed51(_0x14ffb3) {
                                        return function(_0x55c1fa) {
                                            return _0x39c400([_0x14ffb3, _0x55c1fa]);
                                        };
                                    }
                                    function _0x39c400(_0x1e0e9d) {
                                        if (_0x2d5f81)
                                            throw new TypeError(_0x4e4f('0x3a4'));
                                        while (_0x59757b)
                                            try {
                                                if (_0x2d5f81 = 0x1, _0x10252e && (_0x136399 = _0x1e0e9d[0x0] & 0x2 ? _0x10252e[_0x4e4f('0x194')] : _0x1e0e9d[0x0] ? _0x10252e[_0x4e4f('0x2a8')] || ((_0x136399 = _0x10252e[_0x4e4f('0x194')]) && _0x136399[_0x4e4f('0x35b')](_0x10252e), 0x0) : _0x10252e['next']) && !(_0x136399 = _0x136399['call'](_0x10252e, _0x1e0e9d[0x1]))[_0x4e4f('0x634')])
                                                    return _0x136399;
                                                if (_0x10252e = 0x0, _0x136399)
                                                    _0x1e0e9d = [_0x1e0e9d[0x0] & 0x2, _0x136399['value']];
                                                switch (_0x1e0e9d[0x0]) {
                                                case 0x0:
                                                case 0x1:
                                                    _0x136399 = _0x1e0e9d;
                                                    break;
                                                case 0x4:
                                                    _0x59757b[_0x4e4f('0x4cd')]++;
                                                    return {
                                                        'value': _0x1e0e9d[0x1],
                                                        'done': ![]
                                                    };
                                                case 0x5:
                                                    _0x59757b[_0x4e4f('0x4cd')]++;
                                                    _0x10252e = _0x1e0e9d[0x1];
                                                    _0x1e0e9d = [0x0];
                                                    continue;
                                                case 0x7:
                                                    _0x1e0e9d = _0x59757b[_0x4e4f('0x19')][_0x4e4f('0x1ba')]();
                                                    _0x59757b[_0x4e4f('0x3b1')][_0x4e4f('0x1ba')]();
                                                    continue;
                                                default:
                                                    if (!(_0x136399 = _0x59757b['trys'], _0x136399 = _0x136399[_0x4e4f('0x3c5')] > 0x0 && _0x136399[_0x136399[_0x4e4f('0x3c5')] - 0x1]) && (_0x1e0e9d[0x0] === 0x6 || _0x1e0e9d[0x0] === 0x2)) {
                                                        _0x59757b = 0x0;
                                                        continue;
                                                    }
                                                    if (_0x1e0e9d[0x0] === 0x3 && (!_0x136399 || _0x1e0e9d[0x1] > _0x136399[0x0] && _0x1e0e9d[0x1] < _0x136399[0x3])) {
                                                        _0x59757b['label'] = _0x1e0e9d[0x1];
                                                        break;
                                                    }
                                                    if (_0x1e0e9d[0x0] === 0x6 && _0x59757b[_0x4e4f('0x4cd')] < _0x136399[0x1]) {
                                                        _0x59757b['label'] = _0x136399[0x1];
                                                        _0x136399 = _0x1e0e9d;
                                                        break;
                                                    }
                                                    if (_0x136399 && _0x59757b['label'] < _0x136399[0x2]) {
                                                        _0x59757b[_0x4e4f('0x4cd')] = _0x136399[0x2];
                                                        _0x59757b[_0x4e4f('0x19')]['push'](_0x1e0e9d);
                                                        break;
                                                    }
                                                    if (_0x136399[0x2])
                                                        _0x59757b[_0x4e4f('0x19')]['pop']();
                                                    _0x59757b[_0x4e4f('0x3b1')][_0x4e4f('0x1ba')]();
                                                    continue;
                                                }
                                                _0x1e0e9d = _0x3e4720[_0x4e4f('0x35b')](_0x35d5c2, _0x59757b);
                                            } catch (_0x3ae509) {
                                                _0x1e0e9d = [0x6, _0x3ae509];
                                                _0x10252e = 0x0;
                                            } finally {
                                                _0x2d5f81 = _0x136399 = 0x0;
                                            }
                                        if (_0x1e0e9d[0x0] & 0x5)
                                            throw _0x1e0e9d[0x1];
                                        return {
                                            'value': _0x1e0e9d[0x0] ? _0x1e0e9d[0x1] : void 0x0,
                                            'done': !![]
                                        };
                                    }
                                }
                                function _0x37a39c(_0x3b3670, _0x2cd670, _0x4f6c09, _0x4b2bf4) {
                                    if (_0x4b2bf4 === undefined)
                                        _0x4b2bf4 = _0x4f6c09;
                                    _0x3b3670[_0x4b2bf4] = _0x2cd670[_0x4f6c09];
                                }
                                function _0x868c25(_0x217683, _0x5dc098) {
                                    for (var _0x2aa3b8 in _0x217683)
                                        if (_0x2aa3b8 !== _0x4e4f('0x4a6') && !_0x5dc098['hasOwnProperty'](_0x2aa3b8))
                                            _0x5dc098[_0x2aa3b8] = _0x217683[_0x2aa3b8];
                                }
                                function _0x55adfd(_0x5428ec) {
                                    var _0x1111ab = typeof Symbol === _0x4e4f('0x4c1') && Symbol[_0x4e4f('0x4fd')],
                                        _0x3bb7c2 = _0x1111ab && _0x5428ec[_0x1111ab],
                                        _0x5d550e = 0x0;
                                    if (_0x3bb7c2)
                                        return _0x3bb7c2['call'](_0x5428ec);
                                    if (_0x5428ec && typeof _0x5428ec[_0x4e4f('0x3c5')] === _0x4e4f('0x504'))
                                        return {
                                            'next': function() {
                                                if (_0x5428ec && _0x5d550e >= _0x5428ec['length'])
                                                    _0x5428ec = void 0x0;
                                                return {
                                                    'value': _0x5428ec && _0x5428ec[_0x5d550e++],
                                                    'done': !_0x5428ec
                                                };
                                            }
                                        };
                                    throw new TypeError(_0x1111ab ? _0x4e4f('0x37e') : _0x4e4f('0x3cc'));
                                }
                                function _0x2f291e(_0xb13b22, _0x16aba0) {
                                    var _0x3e5fd1 = typeof Symbol === _0x4e4f('0x4c1') && _0xb13b22[Symbol[_0x4e4f('0x4fd')]];
                                    if (!_0x3e5fd1)
                                        return _0xb13b22;
                                    var _0x5d2e6b = _0x3e5fd1[_0x4e4f('0x35b')](_0xb13b22),
                                        _0x254739,
                                        _0x36c70b = [],
                                        _0x5f42ab;
                                    try {
                                        while ((_0x16aba0 === void 0x0 || _0x16aba0-- > 0x0) && !(_0x254739 = _0x5d2e6b['next']())[_0x4e4f('0x634')])
                                            _0x36c70b[_0x4e4f('0x60')](_0x254739[_0x4e4f('0x379')]);
                                    } catch (_0x2db2f9) {
                                        _0x5f42ab = {
                                            'error': _0x2db2f9
                                        };
                                    } finally {
                                        try {
                                            if (_0x254739 && !_0x254739['done'] && (_0x3e5fd1 = _0x5d2e6b[_0x4e4f('0x194')]))
                                                _0x3e5fd1[_0x4e4f('0x35b')](_0x5d2e6b);
                                        } finally {
                                            if (_0x5f42ab)
                                                throw _0x5f42ab[_0x4e4f('0xe6')];
                                        }
                                    }
                                    return _0x36c70b;
                                }
                                function _0x13f81d() {
                                    for (var _0x71beaa = [], _0x1e47ad = 0x0; _0x1e47ad < arguments[_0x4e4f('0x3c5')]; _0x1e47ad++)
                                        _0x71beaa = _0x71beaa[_0x4e4f('0x2c6')](_0x2f291e(arguments[_0x1e47ad]));
                                    return _0x71beaa;
                                }
                                function _0x3e0cd8() {
                                    for (var _0x50d2ac = 0x0, _0x116ace = 0x0, _0x516765 = arguments[_0x4e4f('0x3c5')]; _0x116ace < _0x516765; _0x116ace++)
                                        _0x50d2ac += arguments[_0x116ace][_0x4e4f('0x3c5')];
                                    for (var _0x50ab01 = Array(_0x50d2ac), _0x2379c5 = 0x0, _0x116ace = 0x0; _0x116ace < _0x516765; _0x116ace++)
                                        for (var _0x1090b4 = arguments[_0x116ace], _0xc0bfa2 = 0x0, _0x57132e = _0x1090b4[_0x4e4f('0x3c5')]; _0xc0bfa2 < _0x57132e; _0xc0bfa2++, _0x2379c5++)
                                            _0x50ab01[_0x2379c5] = _0x1090b4[_0xc0bfa2];
                                    return _0x50ab01;
                                }
                                ;
                                function _0xee793(_0x33069f) {
                                    return this instanceof _0xee793 ? (this['v'] = _0x33069f, this) : new _0xee793(_0x33069f);
                                }
                                function _0x4aca83(_0x20b735, _0x2b07ae, _0x182e30) {
                                    if (!Symbol[_0x4e4f('0x12e')])
                                        throw new TypeError(_0x4e4f('0x5f7'));
                                    var _0x45c51e = _0x182e30[_0x4e4f('0x444')](_0x20b735, _0x2b07ae || []),
                                        _0x42b722,
                                        _0x5b7f7d = [];
                                    return _0x42b722 = {}, _0xf298b1('next'), _0xf298b1(_0x4e4f('0x2a8')), _0xf298b1(_0x4e4f('0x194')), _0x42b722[Symbol[_0x4e4f('0x12e')]] = function() {
                                        return this;
                                    }, _0x42b722;
                                    function _0xf298b1(_0x2f5f19) {
                                        if (_0x45c51e[_0x2f5f19])
                                            _0x42b722[_0x2f5f19] = function(_0x164aaa) {
                                                return new Promise(function(_0x164272, _0x102145) {
                                                    _0x5b7f7d[_0x4e4f('0x60')]([_0x2f5f19, _0x164aaa, _0x164272, _0x102145]) > 0x1 || _0x497d91(_0x2f5f19, _0x164aaa);
                                                });
                                            };
                                    }
                                    function _0x497d91(_0x462152, _0xc1b238) {
                                        try {
                                            _0x455552(_0x45c51e[_0x462152](_0xc1b238));
                                        } catch (_0x2f5f06) {
                                            _0x3dc8f8(_0x5b7f7d[0x0][0x3], _0x2f5f06);
                                        }
                                    }
                                    function _0x455552(_0x74250c) {
                                        _0x74250c['value'] instanceof _0xee793 ? Promise[_0x4e4f('0x501')](_0x74250c[_0x4e4f('0x379')]['v'])[_0x4e4f('0x654')](_0x186110, _0x2876d0) : _0x3dc8f8(_0x5b7f7d[0x0][0x2], _0x74250c);
                                    }
                                    function _0x186110(_0x2c887f) {
                                        _0x497d91(_0x4e4f('0x1ca'), _0x2c887f);
                                    }
                                    function _0x2876d0(_0x1e5a56) {
                                        _0x497d91(_0x4e4f('0x2a8'), _0x1e5a56);
                                    }
                                    function _0x3dc8f8(_0x2bf6ee, _0x5306a1) {
                                        if (_0x2bf6ee(_0x5306a1), _0x5b7f7d[_0x4e4f('0x31f')](), _0x5b7f7d['length'])
                                            _0x497d91(_0x5b7f7d[0x0][0x0], _0x5b7f7d[0x0][0x1]);
                                    }
                                }
                                function _0x2f4f71(_0xb15cfd) {
                                    var _0x3e6c92,
                                        _0x11629a;
                                    return _0x3e6c92 = {}, _0x47043d(_0x4e4f('0x1ca')), _0x47043d('throw', function(_0x2c72c6) {
                                        throw _0x2c72c6;
                                    }), _0x47043d(_0x4e4f('0x194')), _0x3e6c92[Symbol['iterator']] = function() {
                                        return this;
                                    }, _0x3e6c92;
                                    function _0x47043d(_0x118919, _0x439bff) {
                                        _0x3e6c92[_0x118919] = _0xb15cfd[_0x118919] ? function(_0x4cef05) {
                                            return (_0x11629a = !_0x11629a) ? {
                                                'value': _0xee793(_0xb15cfd[_0x118919](_0x4cef05)),
                                                'done': _0x118919 === 'return'
                                            } : _0x439bff ? _0x439bff(_0x4cef05) : _0x4cef05;
                                        } : _0x439bff;
                                    }
                                }
                                function _0x371d30(_0x5e0b1c) {
                                    if (!Symbol['asyncIterator'])
                                        throw new TypeError(_0x4e4f('0x5f7'));
                                    var _0x5e16cc = _0x5e0b1c[Symbol[_0x4e4f('0x12e')]],
                                        _0x4730f7;
                                    return _0x5e16cc ? _0x5e16cc[_0x4e4f('0x35b')](_0x5e0b1c) : (_0x5e0b1c = typeof _0x55adfd === _0x4e4f('0x4c1') ? _0x55adfd(_0x5e0b1c) : _0x5e0b1c[Symbol[_0x4e4f('0x4fd')]](), _0x4730f7 = {}, _0x619f51(_0x4e4f('0x1ca')), _0x619f51(_0x4e4f('0x2a8')), _0x619f51(_0x4e4f('0x194')), _0x4730f7[Symbol[_0x4e4f('0x12e')]] = function() {
                                        return this;
                                    }, _0x4730f7);
                                    function _0x619f51(_0x3a10aa) {
                                        _0x4730f7[_0x3a10aa] = _0x5e0b1c[_0x3a10aa] && function(_0x35d716) {
                                            return new Promise(function(_0x5edd9e, _0x242ef3) {
                                                _0x35d716 = _0x5e0b1c[_0x3a10aa](_0x35d716),
                                                _0x19ed54(_0x5edd9e, _0x242ef3, _0x35d716[_0x4e4f('0x634')], _0x35d716[_0x4e4f('0x379')]);
                                            });
                                        };
                                    }
                                    function _0x19ed54(_0x354bfd, _0x319921, _0x209860, _0x59d474) {
                                        Promise['resolve'](_0x59d474)[_0x4e4f('0x654')](function(_0x460126) {
                                            _0x354bfd({
                                                'value': _0x460126,
                                                'done': _0x209860
                                            });
                                        }, _0x319921);
                                    }
                                }
                                function _0x3b5ced(_0x280069, _0x1b811b) {
                                    if (Object[_0x4e4f('0x3bf')]) {
                                        Object[_0x4e4f('0x3bf')](_0x280069, 'raw', {
                                            'value': _0x1b811b
                                        });
                                    } else {
                                        _0x280069['raw'] = _0x1b811b;
                                    }
                                    return _0x280069;
                                }
                                ;
                                function _0x1dacd5(_0x3830e7) {
                                    if (_0x3830e7 && _0x3830e7[_0x4e4f('0x2a3')])
                                        return _0x3830e7;
                                    var _0x465159 = {};
                                    if (_0x3830e7 != null)
                                        for (var _0x99b9 in _0x3830e7)
                                            if (Object['hasOwnProperty'][_0x4e4f('0x35b')](_0x3830e7, _0x99b9))
                                                _0x465159[_0x99b9] = _0x3830e7[_0x99b9];
                                    _0x465159[_0x4e4f('0x4a6')] = _0x3830e7;
                                    return _0x465159;
                                }
                                function _0x1c9af5(_0x7d5f78) {
                                    return _0x7d5f78 && _0x7d5f78[_0x4e4f('0x2a3')] ? _0x7d5f78 : {
                                        'default': _0x7d5f78
                                    };
                                }
                                function _0x58770d(_0x3648af, _0x98d251) {
                                    if (!_0x98d251['has'](_0x3648af)) {
                                        throw new TypeError(_0x4e4f('0x42d'));
                                    }
                                    return _0x98d251[_0x4e4f('0x1bb')](_0x3648af);
                                }
                                function _0x79ecd8(_0x5d2cd6, _0x3efe9f, _0x197bec) {
                                    if (!_0x3efe9f[_0x4e4f('0x5f6')](_0x5d2cd6)) {
                                        throw new TypeError('attempted\x20to\x20set\x20private\x20field\x20on\x20non-instance');
                                    }
                                    _0x3efe9f[_0x4e4f('0x103')](_0x5d2cd6, _0x197bec);
                                    return _0x197bec;
                                }
                            }
                        };
                        var _0x3ce0b2 = {};
                        function _0x45260f(_0x4fa866) {
                            if (_0x3ce0b2[_0x4fa866]) {
                                return _0x3ce0b2[_0x4fa866][_0x4e4f('0x85')];
                            }
                            var _0x44c5d2 = _0x3ce0b2[_0x4fa866] = {
                                'exports': {}
                            };
                            _0x34a157[_0x4fa866](_0x44c5d2, _0x44c5d2[_0x4e4f('0x85')], _0x45260f);
                            return _0x44c5d2[_0x4e4f('0x85')];
                        }
                        !function() {
                            _0x45260f['d'] = function(_0x255c9c, _0x3da13e) {
                                for (var _0x24dbd9 in _0x3da13e) {
                                    if (_0x45260f['o'](_0x3da13e, _0x24dbd9) && !_0x45260f['o'](_0x255c9c, _0x24dbd9)) {
                                        Object[_0x4e4f('0x3bf')](_0x255c9c, _0x24dbd9, {
                                            'enumerable': !![],
                                            'get': _0x3da13e[_0x24dbd9]
                                        });
                                    }
                                }
                            };
                        }();
                        !function() {
                            _0x45260f['o'] = function(_0x3b0769, _0x572bc7) {
                                return Object[_0x4e4f('0x58e')][_0x4e4f('0x46f')][_0x4e4f('0x35b')](_0x3b0769, _0x572bc7);
                            };
                        }();
                        !function() {
                            _0x45260f['r'] = function(_0x523188) {
                                if (typeof Symbol !== _0x4e4f('0xe9') && Symbol[_0x4e4f('0x2ae')]) {
                                    Object[_0x4e4f('0x3bf')](_0x523188, Symbol[_0x4e4f('0x2ae')], {
                                        'value': 'Module'
                                    });
                                }
                                Object[_0x4e4f('0x3bf')](_0x523188, _0x4e4f('0x2a3'), {
                                    'value': !![]
                                });
                            };
                        }();
                        var _0x5c8dec = {};
                        !function() {
                            var _0xe059ac = _0x5c8dec;
                            var _0x27e7d1;
                            _0x27e7d1 = {
                                'value': !![]
                            };
                            var _0x2de850 = _0x45260f(0x390);
                            _0x2de850[_0x4e4f('0x4db')]();
                        }();
                    }());
                    var _0x1b2ead = _0x4e4f('0xa2');
                    var HEROKU_URL = 'https://bouncer.vizlib.com' + _0x4e4f('0x62c');
                    if (typeof window['qlikPrintingService'] !== _0x4e4f('0xe9')) {
                        _0xe34dcf(0x1, _0x1b2ead, $element, _0xfa6c41, _0x1f45a2, '');
                    } else {
                        if (_0x12c8ac(_0x4e4f('0x1a5') + _0x1b2ead) == null) {
                            var _0x3a794e;
                            if (_0x1f45a2[_0x4e4f('0x25e')][_0x4e4f('0x15d')][_0x4e4f('0x3eb')][_0x4e4f('0x68')])
                                _0x3a794e = _0x1f45a2['$scope'][_0x4e4f('0x15d')][_0x4e4f('0x3eb')][_0x4e4f('0x68')][_0x4e4f('0x54d')];
                            else
                                _0x3a794e = _0x1f45a2[_0x4e4f('0x25e')]['component'][_0x4e4f('0x3eb')][_0x4e4f('0x54d')];
                            _0x3a794e[_0x4e4f('0x226')]({
                                'qInfo': {
                                    'qType': _0x4e4f('0x1d7')
                                },
                                'user': {
                                    'qStringExpression': _0x4e4f('0x2d2')
                                },
                                'version': {
                                    'qStringExpression': _0x4e4f('0x443')
                                }
                            })[_0x4e4f('0x654')](function(_0x3322cc) {
                                _0x3322cc[_0x4e4f('0x4ff')]()['then'](function(_0x37f45e) {
                                    var _0x20a2fb = '' + 'no' + '' == 'yes' ? !![] : ![];
                                    var _0x38ee6d = _0x20a2fb ? 'user-' + _0x44bf6d(_0x37f45e[_0x4e4f('0x2cb')]) : _0x37f45e[_0x4e4f('0x2cb')];
                                    var _0x309c8a = _0x37f45e[_0x4e4f('0x2cb')] == 'Personal\x5cMe';
                                    var _0x2f28a0 = _0x37f45e[_0x4e4f('0x1fe')];
                                    if (!_0x20a2fb) {
                                        _0x38ee6d = _0x38ee6d['replace'](/\|/g, '_');
                                    }
                                    var _0x234796 = _0x28a8f6('' + '3a18d53-126a522-a7ef11a-9b768d2' + '|' + _0x38ee6d + '|' + _0x309c8a + '|' + _0x1b2ead + '|' + _0x2f28a0, '9');
                                    var _0x3ec792 = HEROKU_URL;
                                    _0x435c6b[_0x4e4f('0x25')]({
                                        'url': _0x3ec792,
                                        'data': {
                                            'data': _0x234796
                                        },
                                        'type': 'Get',
                                        'success': function(_0x474cba) {
                                            _0xe34dcf(_0x474cba, _0x1b2ead, $element, _0xfa6c41, _0x1f45a2, _0x234796);
                                        },
                                        'error': function() {
                                            _0xab64b5($element, _0xfa6c41, ![], _0x4e4f('0x26a'), _0x1f45a2);
                                        }
                                    });
                                });
                            });
                        } else {
                            var _0x3bfe56 = _0x12c8ac(_0x4e4f('0x1a5') + _0x1b2ead);
                            var _0x279bb2 = _0x28a8f6(decodeURIComponent(_0x3bfe56[_0x4e4f('0x45a')](/\+/g, '\x20')), '9')[_0x4e4f('0x665')]('|');
                            if ((_0x279bb2[_0x4e4f('0x3c5')] == 0x4 || _0x279bb2[_0x4e4f('0x3c5')] == 0x5) && _0x279bb2[0x0] == '' + '3a18d53-126a522-a7ef11a-9b768d2') {
                                _0xab64b5($element, _0xfa6c41, !![], '', _0x1f45a2);
                            } else {
                                _0xab64b5($element, _0xfa6c41, ![], '-3', _0x1f45a2);
                            }
                        }
                    }
                    function _0x44bf6d(_0x410153) {
                        function _0x2c6d2c(_0x107363, _0x327b94) {
                            var _0x3d2701,
                                _0x587d0b,
                                _0x4f24a8,
                                _0x4f0dc0,
                                _0x18d443;
                            _0x4f24a8 = _0x107363 & 0x80000000;
                            _0x4f0dc0 = _0x327b94 & 0x80000000;
                            _0x3d2701 = _0x107363 & 0x40000000;
                            _0x587d0b = _0x327b94 & 0x40000000;
                            _0x18d443 = (_0x107363 & 0x3fffffff) + (_0x327b94 & 0x3fffffff);
                            return _0x3d2701 & _0x587d0b ? _0x18d443 ^ 0x80000000 ^ _0x4f24a8 ^ _0x4f0dc0 : _0x3d2701 | _0x587d0b ? _0x18d443 & 0x40000000 ? _0x18d443 ^ 0xc0000000 ^ _0x4f24a8 ^ _0x4f0dc0 : _0x18d443 ^ 0x40000000 ^ _0x4f24a8 ^ _0x4f0dc0 : _0x18d443 ^ _0x4f24a8 ^ _0x4f0dc0;
                        }
                        function _0x574fd2(_0x2cd20d, _0x193e90, _0x3b95cf, _0x1ee892, _0x24f457, _0x58925d, _0x573862) {
                            _0x2cd20d = _0x2c6d2c(_0x2cd20d, _0x2c6d2c(_0x2c6d2c(_0x193e90 & _0x3b95cf | ~_0x193e90 & _0x1ee892, _0x24f457), _0x573862));
                            return _0x2c6d2c(_0x2cd20d << _0x58925d | _0x2cd20d >>> 0x20 - _0x58925d, _0x193e90);
                        }
                        function _0x1af23b(_0x496e2e, _0x7434dd, _0x372702, _0x58c01a, _0x55f57f, _0x43fe9a, _0x2cf4a7) {
                            _0x496e2e = _0x2c6d2c(_0x496e2e, _0x2c6d2c(_0x2c6d2c(_0x7434dd & _0x58c01a | _0x372702 & ~_0x58c01a, _0x55f57f), _0x2cf4a7));
                            return _0x2c6d2c(_0x496e2e << _0x43fe9a | _0x496e2e >>> 0x20 - _0x43fe9a, _0x7434dd);
                        }
                        function _0xb62b5c(_0x3d7ee9, _0x4efe00, _0x120ac1, _0x154432, _0x169e79, _0x361aa1, _0x964944) {
                            _0x3d7ee9 = _0x2c6d2c(_0x3d7ee9, _0x2c6d2c(_0x2c6d2c(_0x4efe00 ^ _0x120ac1 ^ _0x154432, _0x169e79), _0x964944));
                            return _0x2c6d2c(_0x3d7ee9 << _0x361aa1 | _0x3d7ee9 >>> 0x20 - _0x361aa1, _0x4efe00);
                        }
                        function _0x219a1d(_0x5d9b52, _0x59d7d3, _0x4fc25f, _0x126707, _0xe5ba86, _0x3bb8a7, _0x22f34e) {
                            _0x5d9b52 = _0x2c6d2c(_0x5d9b52, _0x2c6d2c(_0x2c6d2c(_0x4fc25f ^ (_0x59d7d3 | ~_0x126707), _0xe5ba86), _0x22f34e));
                            return _0x2c6d2c(_0x5d9b52 << _0x3bb8a7 | _0x5d9b52 >>> 0x20 - _0x3bb8a7, _0x59d7d3);
                        }
                        function _0x52aa4d(_0x3de76d) {
                            var _0x209e36 = '',
                                _0x2e81a0 = '',
                                _0x958370;
                            for (_0x958370 = 0x0; 0x3 >= _0x958370; _0x958370++)
                                _0x2e81a0 = _0x3de76d >>> 0x8 * _0x958370 & 0xff,
                                _0x2e81a0 = '0' + _0x2e81a0[_0x4e4f('0x307')](0x10),
                                _0x209e36 += _0x2e81a0[_0x4e4f('0x381')](_0x2e81a0['length'] - 0x2, 0x2);
                            return _0x209e36;
                        }
                        var _0x5ceef0 = [],
                            _0x23af3a,
                            _0x1aef49,
                            _0x184c1e,
                            _0x49cc93,
                            _0x17edcd,
                            _0x23dfc3,
                            _0x2d62ba,
                            _0x3d6bbb;
                        _0x410153 = function(_0x4f1d03) {
                            _0x4f1d03 = _0x4f1d03[_0x4e4f('0x45a')](/\r\n/g, '\x0a');
                            for (var _0x23a67f = '', _0x20a4e7 = 0x0; _0x20a4e7 < _0x4f1d03['length']; _0x20a4e7++) {
                                var _0xdaebbc = _0x4f1d03[_0x4e4f('0x119')](_0x20a4e7);
                                0x80 > _0xdaebbc ? _0x23a67f += String['fromCharCode'](_0xdaebbc) : (0x7f < _0xdaebbc && 0x800 > _0xdaebbc ? _0x23a67f += String['fromCharCode'](_0xdaebbc >> 0x6 | 0xc0) : (_0x23a67f += String['fromCharCode'](_0xdaebbc >> 0xc | 0xe0), _0x23a67f += String[_0x4e4f('0x4c8')](_0xdaebbc >> 0x6 & 0x3f | 0x80)), _0x23a67f += String['fromCharCode'](_0xdaebbc & 0x3f | 0x80));
                            }
                            return _0x23a67f;
                        }(_0x410153);
                        _0x5ceef0 = function(_0x400072) {
                            var _0x6fda30,
                                _0xfb9bfd = _0x400072[_0x4e4f('0x3c5')];
                            _0x6fda30 = _0xfb9bfd + 0x8;
                            for (var _0x65f53 = 0x10 * ((_0x6fda30 - _0x6fda30 % 0x40) / 0x40 + 0x1), _0x3b3054 = Array(_0x65f53 - 0x1), _0x369cfc = 0x0, _0x5e6f5b = 0x0; _0x5e6f5b < _0xfb9bfd;)
                                _0x6fda30 = (_0x5e6f5b - _0x5e6f5b % 0x4) / 0x4,
                                _0x369cfc = _0x5e6f5b % 0x4 * 0x8,
                                _0x3b3054[_0x6fda30] |= _0x400072[_0x4e4f('0x119')](_0x5e6f5b) << _0x369cfc,
                                _0x5e6f5b++;
                            _0x6fda30 = (_0x5e6f5b - _0x5e6f5b % 0x4) / 0x4;
                            _0x3b3054[_0x6fda30] |= 0x80 << _0x5e6f5b % 0x4 * 0x8;
                            _0x3b3054[_0x65f53 - 0x2] = _0xfb9bfd << 0x3;
                            _0x3b3054[_0x65f53 - 0x1] = _0xfb9bfd >>> 0x1d;
                            return _0x3b3054;
                        }(_0x410153);
                        _0x17edcd = 0x67452301;
                        _0x23dfc3 = 0xefcdab89;
                        _0x2d62ba = 0x98badcfe;
                        _0x3d6bbb = 0x10325476;
                        for (_0x410153 = 0x0; _0x410153 < _0x5ceef0[_0x4e4f('0x3c5')]; _0x410153 += 0x10)
                            _0x23af3a = _0x17edcd,
                            _0x1aef49 = _0x23dfc3,
                            _0x184c1e = _0x2d62ba,
                            _0x49cc93 = _0x3d6bbb,
                            _0x17edcd = _0x574fd2(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x0], 0x7, 0xd76aa478),
                            _0x3d6bbb = _0x574fd2(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x1], 0xc, 0xe8c7b756),
                            _0x2d62ba = _0x574fd2(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x2], 0x11, 0x242070db),
                            _0x23dfc3 = _0x574fd2(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x3], 0x16, 0xc1bdceee),
                            _0x17edcd = _0x574fd2(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x4], 0x7, 0xf57c0faf),
                            _0x3d6bbb = _0x574fd2(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x5], 0xc, 0x4787c62a),
                            _0x2d62ba = _0x574fd2(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x6], 0x11, 0xa8304613),
                            _0x23dfc3 = _0x574fd2(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x7], 0x16, 0xfd469501),
                            _0x17edcd = _0x574fd2(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x8], 0x7, 0x698098d8),
                            _0x3d6bbb = _0x574fd2(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x9], 0xc, 0x8b44f7af),
                            _0x2d62ba = _0x574fd2(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xa], 0x11, 0xffff5bb1),
                            _0x23dfc3 = _0x574fd2(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0xb], 0x16, 0x895cd7be),
                            _0x17edcd = _0x574fd2(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0xc], 0x7, 0x6b901122),
                            _0x3d6bbb = _0x574fd2(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0xd], 0xc, 0xfd987193),
                            _0x2d62ba = _0x574fd2(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xe], 0x11, 0xa679438e),
                            _0x23dfc3 = _0x574fd2(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0xf], 0x16, 0x49b40821),
                            _0x17edcd = _0x1af23b(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x1], 0x5, 0xf61e2562),
                            _0x3d6bbb = _0x1af23b(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x6], 0x9, 0xc040b340),
                            _0x2d62ba = _0x1af23b(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xb], 0xe, 0x265e5a51),
                            _0x23dfc3 = _0x1af23b(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x0], 0x14, 0xe9b6c7aa),
                            _0x17edcd = _0x1af23b(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x5], 0x5, 0xd62f105d),
                            _0x3d6bbb = _0x1af23b(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0xa], 0x9, 0x2441453),
                            _0x2d62ba = _0x1af23b(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xf], 0xe, 0xd8a1e681),
                            _0x23dfc3 = _0x1af23b(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x4], 0x14, 0xe7d3fbc8),
                            _0x17edcd = _0x1af23b(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x9], 0x5, 0x21e1cde6),
                            _0x3d6bbb = _0x1af23b(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0xe], 0x9, 0xc33707d6),
                            _0x2d62ba = _0x1af23b(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x3], 0xe, 0xf4d50d87),
                            _0x23dfc3 = _0x1af23b(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x8], 0x14, 0x455a14ed),
                            _0x17edcd = _0x1af23b(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0xd], 0x5, 0xa9e3e905),
                            _0x3d6bbb = _0x1af23b(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x2], 0x9, 0xfcefa3f8),
                            _0x2d62ba = _0x1af23b(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x7], 0xe, 0x676f02d9),
                            _0x23dfc3 = _0x1af23b(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0xc], 0x14, 0x8d2a4c8a),
                            _0x17edcd = _0xb62b5c(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x5], 0x4, 0xfffa3942),
                            _0x3d6bbb = _0xb62b5c(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x8], 0xb, 0x8771f681),
                            _0x2d62ba = _0xb62b5c(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xb], 0x10, 0x6d9d6122),
                            _0x23dfc3 = _0xb62b5c(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0xe], 0x17, 0xfde5380c),
                            _0x17edcd = _0xb62b5c(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x1], 0x4, 0xa4beea44),
                            _0x3d6bbb = _0xb62b5c(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x4], 0xb, 0x4bdecfa9),
                            _0x2d62ba = _0xb62b5c(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x7], 0x10, 0xf6bb4b60),
                            _0x23dfc3 = _0xb62b5c(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0xa], 0x17, 0xbebfbc70),
                            _0x17edcd = _0xb62b5c(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0xd], 0x4, 0x289b7ec6),
                            _0x3d6bbb = _0xb62b5c(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x0], 0xb, 0xeaa127fa),
                            _0x2d62ba = _0xb62b5c(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x3], 0x10, 0xd4ef3085),
                            _0x23dfc3 = _0xb62b5c(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x6], 0x17, 0x4881d05),
                            _0x17edcd = _0xb62b5c(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x9], 0x4, 0xd9d4d039),
                            _0x3d6bbb = _0xb62b5c(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0xc], 0xb, 0xe6db99e5),
                            _0x2d62ba = _0xb62b5c(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xf], 0x10, 0x1fa27cf8),
                            _0x23dfc3 = _0xb62b5c(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x2], 0x17, 0xc4ac5665),
                            _0x17edcd = _0x219a1d(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x0], 0x6, 0xf4292244),
                            _0x3d6bbb = _0x219a1d(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x7], 0xa, 0x432aff97),
                            _0x2d62ba = _0x219a1d(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xe], 0xf, 0xab9423a7),
                            _0x23dfc3 = _0x219a1d(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x5], 0x15, 0xfc93a039),
                            _0x17edcd = _0x219a1d(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0xc], 0x6, 0x655b59c3),
                            _0x3d6bbb = _0x219a1d(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0x3], 0xa, 0x8f0ccc92),
                            _0x2d62ba = _0x219a1d(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0xa], 0xf, 0xffeff47d),
                            _0x23dfc3 = _0x219a1d(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x1], 0x15, 0x85845dd1),
                            _0x17edcd = _0x219a1d(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x8], 0x6, 0x6fa87e4f),
                            _0x3d6bbb = _0x219a1d(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0xf], 0xa, 0xfe2ce6e0),
                            _0x2d62ba = _0x219a1d(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x6], 0xf, 0xa3014314),
                            _0x23dfc3 = _0x219a1d(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0xd], 0x15, 0x4e0811a1),
                            _0x17edcd = _0x219a1d(_0x17edcd, _0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x5ceef0[_0x410153 + 0x4], 0x6, 0xf7537e82),
                            _0x3d6bbb = _0x219a1d(_0x3d6bbb, _0x17edcd, _0x23dfc3, _0x2d62ba, _0x5ceef0[_0x410153 + 0xb], 0xa, 0xbd3af235),
                            _0x2d62ba = _0x219a1d(_0x2d62ba, _0x3d6bbb, _0x17edcd, _0x23dfc3, _0x5ceef0[_0x410153 + 0x2], 0xf, 0x2ad7d2bb),
                            _0x23dfc3 = _0x219a1d(_0x23dfc3, _0x2d62ba, _0x3d6bbb, _0x17edcd, _0x5ceef0[_0x410153 + 0x9], 0x15, 0xeb86d391),
                            _0x17edcd = _0x2c6d2c(_0x17edcd, _0x23af3a),
                            _0x23dfc3 = _0x2c6d2c(_0x23dfc3, _0x1aef49),
                            _0x2d62ba = _0x2c6d2c(_0x2d62ba, _0x184c1e),
                            _0x3d6bbb = _0x2c6d2c(_0x3d6bbb, _0x49cc93);
                        return (_0x52aa4d(_0x17edcd) + _0x52aa4d(_0x23dfc3) + _0x52aa4d(_0x2d62ba) + _0x52aa4d(_0x3d6bbb))[_0x4e4f('0x46c')]();
                    }
                    ;
                    function _0xe34dcf(_0x1a7e29, _0x4b4183, $element, _0x352137, _0x3de021, _0x3bd9d8) {
                        if (_0x1a7e29 > 0x0) {
                            if (_0x3bd9d8)
                                _0x634f3e(_0x4e4f('0x1a5') + _0x4b4183, encodeURIComponent(_0x3bd9d8)[_0x4e4f('0x45a')](/'/g, _0x4e4f('0x445'))['replace'](/"/g, _0x4e4f('0x40e')), 0xa);
                            _0xab64b5($element, _0x352137, !![], '', _0x3de021);
                        } else
                            _0xab64b5($element, _0x352137, ![], _0x1a7e29, _0x3de021);
                    }
                    function _0x634f3e(_0x145d0a, _0x2a7045, _0x4eb92d) {
                        var _0x1a8fa3 = '';
                        if (_0x4eb92d) {
                            var _0x354e9c = new Date();
                            _0x354e9c[_0x4e4f('0x254')](_0x354e9c[_0x4e4f('0x12d')]() + _0x4eb92d * 0x18 * 0x3c * 0x3c * 0x3e8);
                            _0x1a8fa3 = _0x4e4f('0x1ed') + _0x354e9c[_0x4e4f('0x6d')]();
                        } else
                            var _0x1a8fa3 = '';
                        document[_0x4e4f('0x451')] = _0x145d0a + '=' + _0x2a7045 + _0x1a8fa3 + _0x4e4f('0xee');
                    }
                    function _0x12c8ac(_0x3e8bd1) {
                        var _0x180808 = _0x3e8bd1 + '=';
                        var _0x4b991b = document['cookie']['split'](';');
                        for (var _0x3d06ff = 0x0; _0x3d06ff < _0x4b991b[_0x4e4f('0x3c5')]; _0x3d06ff++) {
                            var _0x3fe9e1 = _0x4b991b[_0x3d06ff];
                            while (_0x3fe9e1[_0x4e4f('0x296')](0x0) == '\x20')
                                _0x3fe9e1 = _0x3fe9e1[_0x4e4f('0x14e')](0x1, _0x3fe9e1[_0x4e4f('0x3c5')]);
                            if (_0x3fe9e1[_0x4e4f('0x146')](_0x180808) == 0x0)
                                return _0x3fe9e1[_0x4e4f('0x14e')](_0x180808['length'], _0x3fe9e1['length']);
                        }
                        return null;
                    }
                    function _0x28a8f6(_0xb36b49, _0x5d3a9e) {
                        var _0x3ae304 = '';
                        var _0x43d1c1 = '';
                        _0x43d1c1 = _0xb36b49[_0x4e4f('0x307')]();
                        for (var _0x3657ae = 0x0; _0x3657ae < _0xb36b49[_0x4e4f('0x3c5')]; _0x3657ae++) {
                            var _0x2956fe = _0xb36b49[_0x4e4f('0x119')](_0x3657ae);
                            var _0x3113ef = _0x2956fe ^ _0x5d3a9e;
                            _0x3ae304 = _0x3ae304 + String[_0x4e4f('0x4c8')](_0x3113ef);
                        }
                        return _0x3ae304;
                    }
                },
                'beforeDestroy': function() {
                    setTimeout(function() {
                        _0x435c6b(_0x4e4f('0x343'))['remove']();
                    }, 0x0);
                }
            };
            function _0x463a67($scope, $element) {
                var _0x4acfd9 = $scope[_0x4e4f('0x4e')];
                var _0x195800 = _0x9dd4be($element, $scope, _0x145e90[_0x4e4f('0x461')]());
                var _0x1b53ed = _0x37e694[_0x4e4f('0x148')][_0x4e4f('0x107')]() === _0x4e4f('0x67f');
                window[_0x4e4f('0x1d1')] = window['vatoActions'] || {};
                window[_0x4e4f('0x1d1')][_0x4acfd9[_0x4e4f('0x286')]['qId']] = _0x195800[_0x4e4f('0x1b3')];
                if (_0x195800[_0x4e4f('0x5b4')]) {
                    if (typeof _0x4acfd9[_0x4e4f('0x7d')] === _0x4e4f('0xe9')) {
                        _0x4acfd9[_0x4e4f('0x7d')] = {
                            'icons': {
                                'showmaximize': ![],
                                'showsnapshot': ![]
                            }
                        };
                    }
                    if (typeof _0x4acfd9[_0x4e4f('0x7d')]['icons'] === _0x4e4f('0xe9')) {
                        _0x4acfd9[_0x4e4f('0x7d')] = {
                            'icons': {
                                'showmaximize': ![],
                                'showsnapshot': ![]
                            }
                        };
                    }
                    if (_0x1b53ed && _0x195800[_0x4e4f('0x29b')]) {
                        $element['on']('contextmenu', function(_0x522907) {
                            $element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))['attr']('contenteditable', _0x4e4f('0x361'));
                            _0x522907['stopPropagation']();
                            _0x522907[_0x4e4f('0x1f0')]();
                            $element[_0x4e4f('0x2d3')](_0x4e4f('0x315'));
                        });
                    }
                    $element['on'](_0x4e4f('0x4e2'), function() {
                        $element['find'](_0x4e4f('0x617'))[_0x4e4f('0x5b3')](_0x4e4f('0xd8'), _0x1b53ed ? _0x4e4f('0x251') : 'false');
                    });
                    var _0x209bd7 = Array[_0x4e4f('0x3e6')]($element['find'](_0x4e4f('0x617'))[_0x4e4f('0xf9')]())['some'](function(_0x129ae0) {
                        return _0x129ae0[_0x4e4f('0x560')]['toLowerCase']() === 'vzb-side-menu';
                    });
                    var _0x268b91 = !!$scope[_0x4e4f('0x4e')][_0x4e4f('0x2b6')] || _0x209bd7;
                    if (_0x268b91) {
                        $element['on']('click', function() {
                            $element[_0x4e4f('0x3b2')]('.ql-editor')[_0x4e4f('0x5b3')](_0x4e4f('0xd8'), _0x4e4f('0x361'))[_0x4e4f('0x61f')](_0x4e4f('0x0'), _0x4e4f('0x288'));
                        });
                    }
                    _0x5569ee(_0x195800, $element, _0x4acfd9);
                    _0x1a28d0(_0x195800, $element);
                    _0x1ae28b(_0x195800, $element);
                    _0x195c96(_0x195800, $element);
                    if (!_0x1b53ed)
                        _0x58d43e(_0x195800, _0x37e694, $element);
                    _0xabe097(_0x195800, $element);
                    _0x4acaeb(_0x195800, $element);
                    _0x1b1419(_0x1b53ed, _0x268b91, _0x195800[_0x4e4f('0x356')], _0x4e4f('0x3f8'), $scope['backendApi'], _0x195800, $element, $scope[_0x4e4f('0x4e')][_0x4e4f('0x2b6')]);
                } else {
                    $element[_0x4e4f('0x61c')]();
                }
                _0x42d4ef($element, _0x4acfd9);
            }
            function _0x9dd4be($element, $scope, _0x6aed9d) {
                var _0x47b8cf = $scope[_0x4e4f('0x4e')];
                var _0x4c42e8 = $element[_0x4e4f('0x1a2')]();
                var _0x3093ea = $element[_0x4e4f('0x165')]();
                var _0x2f012c = _0x4e4f('0x22a') + _0x47b8cf[_0x4e4f('0x286')][_0x4e4f('0x4e0')];
                var _0x4d3d4d = _0x47b8cf[_0x4e4f('0x286')][_0x4e4f('0x4e0')];
                var _0x2cfb56 = /<\/?[a-z][\s\S]*>/i[_0x4e4f('0x5a6')](_0x47b8cf[_0x4e4f('0x3f8')]);
                var _0x46e3f7 = _0x2cfb56 ? _0x47b8cf[_0x4e4f('0x3f8')][_0x4e4f('0x45a')](/(\r\n|\n|\r)/gm, '') : _0x47b8cf['text'];
                var _0xc5fac3 = _0x47b8cf[_0x4e4f('0x507')] && !_0x6aed9d;
                var _0x46019e = _0x47b8cf[_0x4e4f('0x1db')];
                var _0x3e50fc = _0x47b8cf[_0x4e4f('0x66a')];
                var _0x34694f = _0x30b72f[_0x4e4f('0x111')](_0x47b8cf[_0x4e4f('0x1ec')]);
                var _0x4cbece = _0x47b8cf['customfontfamily'];
                var _0x403b80 = _0x47b8cf['fontstyle'];
                var _0x7f5833 = _0x47b8cf[_0x4e4f('0x3cf')];
                var _0x2c1802 = _0x47b8cf['underline'];
                var _0x1ed855 = _0x47b8cf[_0x4e4f('0x2e8')];
                var _0x5e6b09 = _0x47b8cf[_0x4e4f('0x5b2')];
                var _0x5e0f3c = _0x47b8cf[_0x4e4f('0xb')];
                var _0x56561c = _0x47b8cf[_0x4e4f('0x1ef')];
                var _0x5e3cf6 = _0x47b8cf['backgroundtransparency'];
                var _0x2a6cee = _0x47b8cf[_0x4e4f('0x4b')];
                var _0x3a7789 = _0x47b8cf['imagestretch'];
                var _0x37d8b9 = _0x47b8cf['iframeurl'];
                var _0xca837c = _0x47b8cf[_0x4e4f('0x205')];
                var _0x2bc3e3 = typeof _0x47b8cf['extStyleMode'] === _0x4e4f('0xe9') ? !![] : _0x47b8cf[_0x4e4f('0x2eb')];
                var _0x5b66bc = typeof _0x47b8cf['extBackgroundColor'] === _0x4e4f('0xe9') ? 'transparent' : _0x47b8cf[_0x4e4f('0x4b9')];
                var _0x3f1c90 = typeof _0x47b8cf[_0x4e4f('0xc5')] === 'undefined' ? 0x0 : _0x47b8cf[_0x4e4f('0xc5')];
                var _0x3b0fa5;
                if (!_0x6aed9d && !_0x47b8cf[_0x4e4f('0x2bc')]) {
                    var _0x4f8271 = _0x37e694[_0x4e4f('0x410')]($scope[_0x4e4f('0x51')])[_0x4e4f('0x3a2')][_0x4e4f('0x319')];
                    var _0x4b3824 = _0x4f8271[_0x4e4f('0x423')] || _0x2c6d25({}, _0x4f8271[_0x4e4f('0x1c7')]);
                    _0x3b0fa5 = {
                        'prefix': _0x4b3824['prefix']
                    };
                    if (!_0x47b8cf['print']) {
                        _0x47b8cf[_0x4e4f('0x2bc')] = {};
                    }
                    _0x47b8cf[_0x4e4f('0x2bc')][_0x4e4f('0x606')] = _0x3b0fa5;
                } else {
                    _0x3b0fa5 = _0x47b8cf[_0x4e4f('0x2bc')][_0x4e4f('0x606')];
                }
                return {
                    'sessionObj': _0x3b0fa5,
                    'width': _0x4c42e8,
                    'height': _0x3093ea,
                    'id': _0x2f012c,
                    'qId': _0x4d3d4d,
                    'text': _0x46e3f7,
                    'animateNumbers': {
                        'enabled': _0xc5fac3,
                        'commaAsDecimals': typeof _0x47b8cf[_0x4e4f('0x491')] == 'undefined' ? ![] : _0x47b8cf['useCommaAsDecimals'],
                        'duration': typeof _0x47b8cf[_0x4e4f('0x248')] == _0x4e4f('0xe9') ? 0x1f4 : _0x47b8cf['animateNumDuration']
                    },
                    'smartEditor': _0x47b8cf[_0x4e4f('0x29b')],
                    'font': {
                        'color': _0x46019e,
                        'size': _0x3e50fc,
                        'fontFamily': _0x34694f,
                        'customFontFamily': _0x4cbece,
                        'fontStyle': _0x403b80,
                        'dropShadow': _0x7f5833,
                        'underLine': _0x2c1802
                    },
                    'align': {
                        'horizontal': _0x1ed855,
                        'vertical': _0x5e6b09
                    },
                    'border': {
                        'style': _0x47b8cf[_0x4e4f('0x264')],
                        'width': _0x47b8cf[_0x4e4f('0x41a')],
                        'color': _0x47b8cf[_0x4e4f('0x651')],
                        'left': _0x47b8cf[_0x4e4f('0x35e')],
                        'right': _0x47b8cf['borderright'],
                        'top': _0x47b8cf[_0x4e4f('0x297')],
                        'bottom': _0x47b8cf[_0x4e4f('0x602')],
                        'radius': {
                            'radius': _0x47b8cf[_0x4e4f('0x610')],
                            'topLeft': _0x47b8cf[_0x4e4f('0x32e')],
                            'topRight': _0x47b8cf[_0x4e4f('0x4b5')],
                            'bottomLeft': _0x47b8cf[_0x4e4f('0x199')],
                            'bottomRight': _0x47b8cf[_0x4e4f('0x58f')]
                        }
                    },
                    'scroll': {
                        'enabled': typeof _0x47b8cf['scroll'] != _0x4e4f('0xe9') ? _0x47b8cf['scroll'][_0x4e4f('0x3e2')] : !![],
                        'x': typeof _0x47b8cf['scroll'] != _0x4e4f('0xe9') ? _0x47b8cf[_0x4e4f('0x3de')]['x'] : !![],
                        'y': typeof _0x47b8cf[_0x4e4f('0x3de')] != 'undefined' ? _0x47b8cf[_0x4e4f('0x3de')]['y'] : !![]
                    },
                    'background': {
                        'type': _0x5e0f3c,
                        'color': _0x56561c,
                        'transparency': _0x5e3cf6,
                        'imageURL': _0x2a6cee,
                        'imageStretch': _0x3a7789,
                        'iframeURL': _0x37d8b9
                    },
                    'extension': {
                        'switch': _0x2bc3e3,
                        'backgroundColor': _0x5b66bc,
                        'transparency': _0x3f1c90
                    },
                    'actions': _0xca837c,
                    'ttp': _0x47b8cf[_0x4e4f('0x290')],
                    'show': _0x47b8cf[_0x4e4f('0x5b4')] == _0x4e4f('0x572') || _0x47b8cf['show'] == _0x4e4f('0x24') && (typeof _0x47b8cf['showHideCondition'] == 'undefined' || _0x47b8cf[_0x4e4f('0x1af')]['length'] == 0x0 || _0x47b8cf[_0x4e4f('0x1af')] == -0x1 || _0x47b8cf['showHideCondition'] == 0x1),
                    'wraptext': _0x47b8cf[_0x4e4f('0x46a')]
                };
            }
            function _0x5569ee(_0x26ef4b, $element, _0x25c267) {
                var _0x3b7e2d = _0x512114 ? Math[_0x4e4f('0x44')]()[_0x4e4f('0x307')](0x24)['substr'](0x2, 0x9) : '';
                _0x26ef4b['uniqueId'] = _0x26ef4b['id'] + _0x3b7e2d;
                _0x25c267[_0x4e4f('0x356')] = _0x26ef4b['id'] + _0x3b7e2d;
                var _0x4f9c81 = 0x0;
                $element[_0x4e4f('0x61c')]()['append'](_0x435c6b(_0x4e4f('0x1d5'))[_0x4e4f('0x5b3')]({
                    'id': _0x26ef4b[_0x4e4f('0x356')],
                    'class': _0x4e4f('0x180')
                })[_0x4e4f('0x61f')]({
                    'height': _0x26ef4b['height'] - _0x4f9c81 - (_0x26ef4b[_0x4e4f('0x29b')] ? 0xa : 0x5) + 'px',
                    'width': _0x26ef4b[_0x4e4f('0x1a2')] - _0x4f9c81 + 'px',
                    'overflow': 'auto'
                }));
            }
            function _0x4c50a4(element, _0x4b6c50) {
                if (_0x4b6c50[_0x4e4f('0x7d')][_0x4e4f('0x5f4')][_0x4e4f('0xde')]) {
                    element[_0x4e4f('0x3b2')](_0x4e4f('0x5d8'))['show']();
                } else {
                    element[_0x4e4f('0x3b2')](_0x4e4f('0x5d8'))[_0x4e4f('0x117')]();
                }
            }
            function _0x2023b6(element, _0x5f395e, _0x58c64f) {
                var _0x2b0705 = element[_0x4e4f('0x3b2')](_0x4e4f('0x5eb'));
                if (_0x2b0705['length'] === 0x0 && _0x5f395e < 0x19) {
                    setTimeout(function() {
                        _0x2023b6(element, _0x5f395e + 0x1, _0x58c64f);
                    }, 0xc8);
                    return;
                }
                if (_0x58c64f[_0x4e4f('0x7d')]['icons']['showsnapshot']) {
                    _0x2b0705[_0x4e4f('0x5b4')]();
                } else {
                    _0x2b0705['hide']();
                }
            }
            function _0x42d4ef($element, _0x5d7c34) {
                var element = $element[_0x4e4f('0x2ed')](_0x4e4f('0xca'));
                _0x4c50a4(element, _0x5d7c34);
                _0x2023b6(element, 0x0, _0x5d7c34);
            }
            function _0x4acaeb(_0x4ef1c6, $element) {
                $element['find']('#' + _0x4ef1c6[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x424'), _0x4ef1c6[_0x4e4f('0x3de')][_0x4e4f('0x46b')] && _0x4ef1c6[_0x4e4f('0x3de')]['y'] ? _0x4e4f('0x4f5') : _0x4e4f('0xaa'));
                $element[_0x4e4f('0x3b2')]('#' + _0x4ef1c6['uniqueId'])[_0x4e4f('0x61f')](_0x4e4f('0x57f'), _0x4ef1c6[_0x4e4f('0x3de')][_0x4e4f('0x46b')] && _0x4ef1c6[_0x4e4f('0x3de')]['x'] ? _0x4e4f('0x4f5') : _0x4e4f('0xaa'));
                $element[_0x4e4f('0x3b2')]('#' + _0x4ef1c6['uniqueId'])['css']('white-space', _0x4ef1c6[_0x4e4f('0x46a')] ? _0x4e4f('0x153') : _0x4e4f('0x89'));
            }
            function _0x1a28d0(_0x89f685, $element) {
                $element[_0x4e4f('0x3b2')]('#' + _0x89f685[_0x4e4f('0x356')])['css'](_0x4e4f('0x5be'), _0x89f685[_0x4e4f('0x1de')][_0x4e4f('0x5be')]);
                $element[_0x4e4f('0x3b2')]('#' + _0x89f685[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x100'), _0x89f685[_0x4e4f('0x1de')][_0x4e4f('0x34f')]);
                _0x89f685[_0x4e4f('0x1de')]['fontStyle'][_0x4e4f('0x665')](',')[_0x4e4f('0x6c')](function(_0x18188b) {
                    switch (_0x18188b) {
                    case _0x4e4f('0x5ca'):
                        $element[_0x4e4f('0x3b2')]('#' + _0x89f685[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x4ae'), _0x4e4f('0x5ca'));
                        break;
                    case 'italic':
                        $element[_0x4e4f('0x3b2')]('#' + _0x89f685[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x298'), _0x4e4f('0x1f7'));
                        break;
                    case 'strikethrough':
                        $element[_0x4e4f('0x3b2')]('#' + _0x89f685[_0x4e4f('0x356')])[_0x4e4f('0x61f')]('text-decoration', 'line-through');
                        break;
                    case 'underline':
                        $element['find']('#' + _0x89f685[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x1aa'), 'underline');
                        break;
                    }
                });
                switch (_0x89f685['font']['fontFamily']) {
                case _0x4e4f('0x5fe'):
                    $element[_0x4e4f('0x3b2')]('#' + _0x89f685['uniqueId'])[_0x4e4f('0x61f')](_0x4e4f('0x4eb'), _0x89f685[_0x4e4f('0x1de')][_0x4e4f('0x155')]);
                    break;
                default:
                    $element['find']('#' + _0x89f685[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x4eb'), _0x89f685[_0x4e4f('0x1de')][_0x4e4f('0x198')]);
                    break;
                }
                if (_0x89f685[_0x4e4f('0x1de')][_0x4e4f('0x383')]) {
                    $element['find']('#' + _0x89f685['uniqueId'])[_0x4e4f('0x61f')](_0x4e4f('0x1aa'), 'underline');
                }
                ;
                if (_0x89f685[_0x4e4f('0x1de')]['dropShadow']) {
                    $element[_0x4e4f('0x3b2')]('#' + _0x89f685['uniqueId'])[_0x4e4f('0x61f')](_0x4e4f('0x656'), _0x4e4f('0x3c4'));
                }
                ;
            }
            function _0x1ae28b(_0x376e94, $element) {
                if (_0x376e94[_0x4e4f('0x49')] !== _0x4e4f('0x67f')) {
                    $element['find']('#' + _0x376e94[_0x4e4f('0x356')])['css']('text-align', _0x376e94['align'][_0x4e4f('0x3b5')]);
                    $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')]('display', _0x4e4f('0x5de'));
                    $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x22b'), _0x4e4f('0x5b'));
                    switch (_0x376e94[_0x4e4f('0x306')][_0x4e4f('0x150')]) {
                    case _0x4e4f('0x42c'):
                        $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x55'), 'flex-start');
                        break;
                    case _0x4e4f('0x126'):
                        $element['find']('#' + _0x376e94['uniqueId'])['css']('justify-content', 'center');
                        break;
                    case 'bottom':
                        $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x55'), _0x4e4f('0x44a'));
                        break;
                    }
                }
                if (_0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x4f')] != _0x4e4f('0x477')) {
                    if (_0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x3f4')]) {
                        $element['find']('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')]('border-left', _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x1a2')] + _0x4e4f('0x59e') + _0x376e94['border'][_0x4e4f('0x4f')] + '\x20' + _0x376e94['border'][_0x4e4f('0x5be')]);
                    }
                    if (_0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x216')]) {
                        $element[_0x4e4f('0x3b2')]('#' + _0x376e94['uniqueId'])[_0x4e4f('0x61f')](_0x4e4f('0x196'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x1a2')] + 'px\x20' + _0x376e94[_0x4e4f('0x9c')]['style'] + '\x20' + _0x376e94['border']['color']);
                    }
                    if (_0x376e94['border'][_0x4e4f('0x42c')]) {
                        $element['find']('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x521'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x1a2')] + _0x4e4f('0x59e') + _0x376e94['border'][_0x4e4f('0x4f')] + '\x20' + _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x5be')]);
                    }
                    if (_0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x312')]) {
                        $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x14b'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x1a2')] + _0x4e4f('0x59e') + _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x4f')] + '\x20' + _0x376e94['border']['color']);
                    }
                    $element['find']('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x3cb'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x610')][_0x4e4f('0x67a')] + 'px');
                    $element['find']('#' + _0x376e94['uniqueId'])[_0x4e4f('0x61f')](_0x4e4f('0x489'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x610')][_0x4e4f('0x4f1')] + 'px');
                    $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])['css'](_0x4e4f('0x1f1'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x610')]['bottomLeft'] + 'px');
                    $element[_0x4e4f('0x3b2')]('#' + _0x376e94[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x563'), _0x376e94[_0x4e4f('0x9c')][_0x4e4f('0x610')][_0x4e4f('0x3fd')] + 'px');
                }
            }
            function _0x5d5f67(_0x4073a1, _0x4134cf) {
                var _0x14f71c = parseInt(_0x4073a1[_0x4e4f('0x4f3')](0x1, 0x3), 0x10),
                    _0x7d2524 = parseInt(_0x4073a1['slice'](0x3, 0x5), 0x10),
                    _0x1d1a84 = parseInt(_0x4073a1['slice'](0x5, 0x7), 0x10);
                if (_0x4134cf >= 0x0) {
                    return _0x4e4f('0xea') + _0x14f71c + ',\x20' + _0x7d2524 + ',\x20' + _0x1d1a84 + ',\x20' + _0x4134cf + ')';
                } else {
                    return 'rgb(' + _0x14f71c + ',\x20' + _0x7d2524 + ',\x20' + _0x1d1a84 + ')';
                }
            }
            ;
            function _0x195c96(_0x12f7d0, $element) {
                if (_0x12f7d0[_0x4e4f('0x64b')]['type'] == _0x4e4f('0x5be')) {
                    $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x322'), _0x12f7d0[_0x4e4f('0x64b')][_0x4e4f('0x5be')]);
                    var _0x2a27f4 = $element['find']('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x322'));
                    if (_0x2a27f4[_0x4e4f('0x146')]('a') == -0x1) {
                        var _0x2e0260 = _0x2a27f4['replace'](')', ',\x20' + (0x1 - _0x12f7d0[_0x4e4f('0x64b')][_0x4e4f('0x48f')]) + ')')['replace'](_0x4e4f('0x555'), _0x4e4f('0x454'));
                        $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x322'), _0x2e0260);
                    }
                } else if (_0x12f7d0['background'][_0x4e4f('0xff')] == _0x4e4f('0x1a7')) {
                    _0x12f7d0['text'] += '<iframe\x20src=\x22' + _0x12f7d0[_0x4e4f('0x64b')]['iframeURL'] + _0x4e4f('0xdf');
                } else {
                    $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x54c'), 'no-repeat');
                    switch (_0x12f7d0[_0x4e4f('0x64b')][_0x4e4f('0x419')]) {
                    case _0x4e4f('0x16f'):
                        $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x1f'), _0x4e4f('0x4e9'));
                        break;
                    case _0x4e4f('0x548'):
                        $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])['css'](_0x4e4f('0x1f'), _0x4e4f('0x108'));
                        break;
                    case _0x4e4f('0x36f'):
                        $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x1f'), _0x4e4f('0x359'));
                        break;
                    }
                    var _0x16fd37 = _0x12f7d0[_0x4e4f('0x64b')][_0x4e4f('0x48f')];
                    $element[_0x4e4f('0x3b2')]('#' + _0x12f7d0[_0x4e4f('0x356')])[_0x4e4f('0x61f')](_0x4e4f('0x129'), _0x4e4f('0x52e') + _0x16fd37 + _0x4e4f('0x86') + _0x16fd37 + ')),\x20url(\x22' + _0x594c48(_0x12f7d0) + '\x22)');
                }
                ;
                var _0x3fa669 = $element[_0x4e4f('0xf9')]()['eq'](0x4);
                var _0x273125 = _0x3fa669[_0x4e4f('0x3b2')]('.qv-object');
                var _0x850790 = _0x3fa669[_0x4e4f('0x3b2')](_0x4e4f('0x631'));
                var _0x1f56f1 = _0x3fa669[_0x4e4f('0x3b2')](_0x4e4f('0x60a'));
                var _0x2ff1d8 = _0x3fa669[_0x4e4f('0x3b2')](_0x4e4f('0x29'));
                if (_0x12f7d0[_0x4e4f('0x43b')]['switch']) {
                    _0x273125['css'](_0x4e4f('0x9c'), _0x4e4f('0x4a3'))['css'](_0x4e4f('0x64b'), _0x4e4f('0x592'));
                    _0x850790[_0x4e4f('0x61f')]('background', _0x4e4f('0x592'));
                    _0x1f56f1[_0x4e4f('0x61f')](_0x4e4f('0x64b'), _0x4e4f('0x592'));
                    _0x2ff1d8[_0x4e4f('0x61f')]('background', _0x5d5f67(_0x12f7d0['extension'][_0x4e4f('0x26e')], 0x1 - _0x12f7d0[_0x4e4f('0x43b')][_0x4e4f('0x48f')]));
                } else {
                    _0x273125['css'](_0x4e4f('0x9c'), '')[_0x4e4f('0x61f')](_0x4e4f('0x64b'), '');
                    _0x850790['css'](_0x4e4f('0x64b'), '');
                    _0x1f56f1[_0x4e4f('0x61f')](_0x4e4f('0x64b'), '');
                    _0x2ff1d8[_0x4e4f('0x61f')](_0x4e4f('0x64b'), '');
                }
            }
            function _0x594c48(_0x1d5f58) {
                var _0x370cd2 = _0x1d5f58[_0x4e4f('0x64b')][_0x4e4f('0x2f1')];
                if (_0x1d5f58['background'][_0x4e4f('0xff')] == _0x4e4f('0x2fc')) {
                    if (!_0x145e90['isPrinting']()) {
                        var _0x4a4de3 = _0x37e694['currApp']();
                        var _0x58c1c1 = _0x4a4de3[_0x4e4f('0x3eb')][_0x4e4f('0x68')][_0x4e4f('0x54d')] ? _0x4a4de3[_0x4e4f('0x3eb')][_0x4e4f('0x68')][_0x4e4f('0x54d')] : _0x4a4de3[_0x4e4f('0x3eb')][_0x4e4f('0x68')];
                        _0x370cd2 = _0x895086[_0x4e4f('0x3a0')](_0x58c1c1, _0x1d5f58['qId'], _0x370cd2);
                    }
                    return _0x1d5f58[_0x4e4f('0x606')]['prefix'] && _0x370cd2[_0x4e4f('0x3c5')] > 0x0 ? _0x1d5f58['sessionObj'][_0x4e4f('0x65e')] + _0x370cd2[_0x4e4f('0x381')](0x1, _0x370cd2['length']) : _0x370cd2;
                } else {
                    return _0x370cd2;
                }
            }
            function _0x58d43e(_0x44ff21, _0x464548, $element) {
                if (typeof _0x44ff21[_0x4e4f('0x1b3')] != _0x4e4f('0xe9') && _0x44ff21[_0x4e4f('0x1b3')]['length'] != 0x0) {
                    var _0x3065b5 = Promise[_0x4e4f('0x501')](null);
                    $element['find']('#' + _0x44ff21[_0x4e4f('0x356')])[_0x4e4f('0x61f')]('cursor', _0x4e4f('0x4f6'));
                    var _0x338ae0 = _0x464548[_0x4e4f('0x410')]();
                    $element[_0x4e4f('0x3b2')]('#' + _0x44ff21[_0x4e4f('0x356')])[_0x4e4f('0x4e2')](function(_0x37eb23) {
                        if (!_0x37eb23[_0x4e4f('0xbf')] || _0x37eb23[_0x4e4f('0xbf')] !== 0x1) {
                            return;
                        }
                        function _0x38a8bc(_0x1e3045) {
                            function _0x388b0f(_0x1c0f16, _0x2a077d) {
                                setTimeout(_0x2a077d, _0x1c0f16);
                            }
                            ;
                            switch (_0x1e3045[_0x4e4f('0x661')]) {
                            case _0x4e4f('0x460'):
                                var _0x5a82d0 = _0x1e3045[_0x4e4f('0x568')][_0x4e4f('0x661')];
                                var _0x5437c7 = _0x1e3045['field'][_0x4e4f('0x379')];
                                if (_0x5a82d0 && _0x5437c7) {
                                    return _0x338ae0[_0x4e4f('0x568')](_0x5a82d0)[_0x4e4f('0x95')](_0x5437c7, ![]);
                                }
                                break;
                            case _0x4e4f('0x1f4'):
                                var _0x5a82d0 = _0x1e3045[_0x4e4f('0x568')][_0x4e4f('0x661')];
                                if (_0x5a82d0) {
                                    return _0x338ae0[_0x4e4f('0x568')](_0x5a82d0)[_0x4e4f('0x130')]();
                                }
                                break;
                            case _0x4e4f('0xbe'):
                                var _0x5a82d0 = _0x1e3045[_0x4e4f('0x568')][_0x4e4f('0x661')];
                                if (_0x5a82d0) {
                                    return _0x338ae0['field'](_0x5a82d0)[_0x4e4f('0x163')](![]);
                                }
                                break;
                            case 'Select\x20Alternative':
                                var _0x5a82d0 = _0x1e3045[_0x4e4f('0x568')][_0x4e4f('0x661')];
                                if (_0x5a82d0) {
                                    return _0x338ae0['field'](_0x5a82d0)[_0x4e4f('0x273')](![]);
                                }
                                break;
                            case 'Select\x20Possible':
                                var _0x5a82d0 = _0x1e3045['field'][_0x4e4f('0x661')];
                                if (_0x5a82d0) {
                                    return _0x338ae0['field'](_0x5a82d0)[_0x4e4f('0x18')](![]);
                                }
                                break;
                            case _0x4e4f('0x2e0'):
                                return _0x338ae0[_0x4e4f('0x524')]();
                            case _0x4e4f('0x5e4'):
                                return _0x338ae0[_0x4e4f('0x283')]();
                            case _0x4e4f('0x5ae'):
                                return _0x338ae0[_0x4e4f('0x394')]();
                            case _0x4e4f('0x14'):
                                var _0x5a82d0 = _0x1e3045['field']['name'];
                                if (_0x5a82d0) {
                                    return _0x338ae0[_0x4e4f('0x568')](_0x5a82d0)['unlock']();
                                }
                                break;
                            case _0x4e4f('0x571'):
                                return _0x338ae0[_0x4e4f('0x2b2')]();
                            case _0x4e4f('0x253'):
                                return _0x338ae0['clearAll'](!![]);
                            case _0x4e4f('0x66d'):
                                return _0x338ae0['model']['enigmaModel']['app'] ? _0x338ae0['model'][_0x4e4f('0x68')][_0x4e4f('0x54d')]['clearAll'](![]) : _0x338ae0[_0x4e4f('0x3eb')]['enigmaModel'][_0x4e4f('0x5d4')](![]);
                            case _0x4e4f('0x46e'):
                                var _0x5a82d0 = _0x1e3045[_0x4e4f('0x568')]['name'];
                                if (_0x5a82d0) {
                                    return new Promise(function(_0x294f88) {
                                        _0x338ae0[_0x4e4f('0x568')](_0x5a82d0)['clear']()[_0x4e4f('0x654')](function() {
                                            _0x388b0f(0xc8, _0x294f88);
                                        });
                                    });
                                }
                                break;
                            case _0x4e4f('0x650'):
                                return new Promise(function(_0x4402bd) {
                                    _0x464548['navigation'][_0x4e4f('0xf5')](_0x1e3045[_0x4e4f('0x17e')]['id']);
                                    _0x388b0f(0xc8, _0x4402bd);
                                });
                            case 'Activate\x20Next\x20Sheet':
                                return new Promise(function(_0x35313b) {
                                    _0x464548[_0x4e4f('0x148')][_0x4e4f('0x372')]();
                                    _0x388b0f(0xc8, _0x35313b);
                                });
                            case _0x4e4f('0x259'):
                                return new Promise(function(_0x34f104) {
                                    _0x464548[_0x4e4f('0x148')][_0x4e4f('0x546')]();
                                    _0x388b0f(0xc8, _0x34f104);
                                });
                            case _0x4e4f('0x3dc'):
                                var _0x40f3c7 = _0x1e3045[_0x4e4f('0x172')]['id'];
                                if (_0x40f3c7) {
                                    return _0x338ae0[_0x4e4f('0x172')][_0x4e4f('0x444')](_0x40f3c7);
                                }
                                break;
                            case _0x4e4f('0x1e'):
                                var _0x927244 = _0x1e3045[_0x4e4f('0x172')][_0x4e4f('0x52')];
                                var _0x478fc8 = _0x1e3045['bookmark'][_0x4e4f('0x32c')];
                                var _0xeb402b = _0x464548['navigation']['getCurrentSheetId']();
                                var _0x37b82b = {
                                    'qMetaDef': {
                                        'title': _0x927244,
                                        'description': _0x478fc8
                                    },
                                    'creationDate': new Date()[_0x4e4f('0x19e')](),
                                    'qInfo': {
                                        'qType': 'bookmark'
                                    },
                                    'sheetId': _0xeb402b[_0x4e4f('0x4c7')]
                                };
                                if (_0x927244) {
                                    return _0x338ae0[_0x4e4f('0x3eb')][_0x4e4f('0x68')][_0x4e4f('0x38e')](_0x37b82b);
                                }
                                break;
                            case _0x4e4f('0x1a6'):
                                var _0x44fb7c = _0x1e3045[_0x4e4f('0x1a7')][_0x4e4f('0x1a7')];
                                var _0x5d0004 = _0x1e3045[_0x4e4f('0x1a7')]['samewindow'] ? _0x4e4f('0x309') : '_blank';
                                if (_0x44fb7c && _0x5d0004) {
                                    return new Promise(function(_0x8a3c1e) {
                                        window['open'](_0x44fb7c, _0x5d0004);
                                        return _0x388b0f(0xc8, _0x8a3c1e);
                                    });
                                }
                                break;
                            case _0x4e4f('0x5e8'):
                                var _0x4effa0 = _0x1e3045[_0x4e4f('0x67b')][_0x4e4f('0x661')];
                                var _0x5437c7 = _0x1e3045[_0x4e4f('0x67b')][_0x4e4f('0x379')];
                                if (_0x4effa0 && _0x5437c7) {
                                    return _0x338ae0[_0x4e4f('0x67b')]['setContent'](_0x4effa0, _0x5437c7);
                                }
                                break;
                            case 'Reload\x20App':
                                var _0x52a4ec = new Promise(function(_0x3deca7, _0x22284f) {
                                    _0x338ae0[_0x4e4f('0x229')]()[_0x4e4f('0x654')](function() {
                                        _0x338ae0['doSave']()['then'](function() {
                                            _0x3deca7(null);
                                        });
                                    });
                                });
                                return _0x52a4ec;
                            case _0x4e4f('0xb1'):
                                var _0x4eddc0 = '|';
                                var _0x2edb0f = _0x1e3045[_0x4e4f('0xb0')][_0x4e4f('0x27')] ? _0x1e3045[_0x4e4f('0xb0')]['dimensions'][_0x4e4f('0x665')](_0x4eddc0) : [];
                                var _0x21d00d = _0x1e3045['export'][_0x4e4f('0x1a1')] ? _0x1e3045[_0x4e4f('0xb0')][_0x4e4f('0x1a1')][_0x4e4f('0x665')](_0x4eddc0) : [];
                                var _0x209296 = _0x1e3045[_0x4e4f('0xb0')][_0x4e4f('0x670')] ? _0x1e3045['export'][_0x4e4f('0x670')] : _0x4e4f('0x1f6');
                                var _0xe9098d = _0x1e3045[_0x4e4f('0xb0')]['state'] ? _0x1e3045[_0x4e4f('0xb0')][_0x4e4f('0x623')] : 'P';
                                var _0x54ec23 = _0x1e3045[_0x4e4f('0xb0')][_0x4e4f('0x621')] ? _0x1e3045[_0x4e4f('0xb0')][_0x4e4f('0x621')] : 'VizlibExport';
                                var _0x43f33d = _0x209296 && _0x209296 == 'OOXML' ? _0x4e4f('0x50b') : _0x4e4f('0x27a');
                                var _0x39ea03 = _0x338ae0[_0x4e4f('0x3eb')][_0x4e4f('0x68')][_0x4e4f('0x54d')] ? _0x338ae0[_0x4e4f('0x3eb')]['enigmaModel']['app'] : _0x338ae0['model']['enigmaModel'];
                                if (_0x2edb0f[_0x4e4f('0x3c5')] > 0x0 || _0x21d00d[_0x4e4f('0x3c5')] > 0x0) {
                                    var _0xf57297 = {
                                        'qInfo': {
                                            'qType': 'HyperCube'
                                        },
                                        'qHyperCubeDef': {
                                            'qDimensions': [],
                                            'qMeasures': []
                                        }
                                    };
                                    if (_0x2edb0f[_0x4e4f('0x3c5')] > 0x0) {
                                        _0xf57297[_0x4e4f('0x269')][_0x4e4f('0x357')] = _0x2edb0f[_0x4e4f('0x48')](function(_0x273720) {
                                            return {
                                                'qDef': {
                                                    'qFieldDefs': [_0x273720]
                                                }
                                            };
                                        });
                                    }
                                    if (_0x21d00d[_0x4e4f('0x3c5')] > 0x0) {
                                        _0xf57297[_0x4e4f('0x269')][_0x4e4f('0x3d0')] = _0x21d00d[_0x4e4f('0x48')](function(_0x4f44a7) {
                                            return {
                                                'qDef': {
                                                    'qDef': _0x4f44a7
                                                }
                                            };
                                        });
                                    }
                                    _0xf57297['qHyperCubeDef'][_0x4e4f('0x547')] = _0x2edb0f['map'](function(_0x36d44e, _0x5d3244) {
                                        return _0x5d3244;
                                    })[_0x4e4f('0x2c6')](_0x21d00d[_0x4e4f('0x48')](function(_0x56dc93, _0xfd486b) {
                                        return _0x2edb0f['length'] + _0xfd486b;
                                    }));
                                    var _0x559f70 = '';
                                    _0x39ea03['app'][_0x4e4f('0x226')](_0xf57297)['then'](function(_0x4498c2) {
                                        _0x559f70 = _0x4498c2['id'];
                                        return _0x39ea03[_0x4e4f('0x54d')][_0x4e4f('0x4d7')](_0x559f70);
                                    })['then'](function(_0x1878b3) {
                                        return _0x1878b3['exportData'](_0x209296, _0x4e4f('0xc3'), _0x54ec23, _0xe9098d);
                                    })[_0x4e4f('0x654')](function(_0x52691a) {
                                        _0x39ea03['app']['destroySessionObject'](_0x559f70);
                                        var _0x5a35fe = _0x52691a[_0x4e4f('0x46f')](_0x4e4f('0x390')) ? _0x52691a[_0x4e4f('0x390')] : _0x52691a;
                                        var _0x415c1b = _0x464548[_0x4e4f('0x410')]()['global'];
                                        var _0x156d15 = _0x415c1b['session'][_0x4e4f('0x423')][_0x4e4f('0x65e')][_0x4e4f('0x4f3')](0x0, -0x1);
                                        var _0x24e348 = _0x156d15 + _0x5a35fe;
                                        var _0x31773f = function() {
                                            _0x435c6b(_0x4e4f('0x142'))[_0x4e4f('0x22e')]();
                                        };
                                        var _0x4f70be = ![];
                                        _0x415c1b[_0x4e4f('0x537')]()['then'](function(_0x4be08b) {
                                            _0x4f70be = _0x4be08b && _0x4be08b['qReturn'];
                                            _0x41f16e['show']({
                                                'template': _0xbfdf7e,
                                                'controller': [_0x4e4f('0x25e'), '$http', function(scope, _0x182ef7) {
                                                    scope[_0x4e4f('0x1e5')] = _0x4e4f('0x13e');
                                                    scope[_0x4e4f('0x64e')] = _0x4e4f('0x1a0');
                                                    scope[_0x4e4f('0x56d')] = !![];
                                                    scope[_0x4e4f('0x54f')] = _0x24e348;
                                                    scope[_0x4e4f('0x277')] = _0x4e4f('0x3d1');
                                                    scope['linkDownload'] = _0x54ec23 + '.' + _0x43f33d;
                                                    scope[_0x4e4f('0x28e')] = '_self';
                                                    scope['cancelButton'] = ![];
                                                    scope['dialog'] = {
                                                        'close': _0x31773f
                                                    };
                                                    setTimeout(function() {
                                                        var _0x32d202 = _0x435c6b(_0x4e4f('0x7'));
                                                        _0x32d202[_0x4e4f('0x4b6')](_0x4e4f('0x4e2'), function(_0x590c98) {
                                                            _0x590c98['stopPropagation']();
                                                            _0x590c98[_0x4e4f('0x1f0')]();
                                                            _0x182ef7[_0x4e4f('0x1bb')](scope[_0x4e4f('0x54f')], {
                                                                'responseType': 'blob'
                                                            })[_0x4e4f('0x654')](function(_0x5df3e6) {
                                                                _0x1ffbaf(_0x5df3e6[_0x4e4f('0x1ab')], _0x54ec23, scope[_0x4e4f('0x598')], scope[_0x4e4f('0x54f')]);
                                                                _0x31773f();
                                                            });
                                                        });
                                                    }, 0x64);
                                                }],
                                                'closeOnEscape': !![],
                                                'onClose': _0x31773f
                                            });
                                        });
                                    })[_0x4e4f('0xd0')](function(_0x2d9685) {
                                        if (!_0x2d9685['substring'](0x0, 0x13) === _0x4e4f('0x641')) {
                                            console[_0x4e4f('0xe6')](_0x2d9685);
                                        }
                                    });
                                }
                                break;
                            }
                            ;
                            return _0x3065b5;
                        }
                        _0x44ff21[_0x4e4f('0x1b3')][_0x4e4f('0x497')](function(_0x101d92, _0x1e46a1, _0x8f5dd8) {
                            return _0x101d92['then'](function() {
                                return _0x38a8bc(window[_0x4e4f('0x1d1')][_0x44ff21[_0x4e4f('0x4e0')]][_0x8f5dd8]);
                            });
                        }, _0x3065b5);
                    });
                }
            }
            function _0x47192f() {
                var _0x4ae8a9 = navigator[_0x4e4f('0x3a1')][_0x4e4f('0x3b6')](/Chrom(e|ium)\/([0-9]+)\./);
                return _0x4ae8a9 ? parseInt(_0x4ae8a9[0x2], 0xa) : ![];
            }
            function _0x1ffbaf(_0x5e2811, _0x398579, _0x4b56d7, _0x26df25) {
                if (navigator['msSaveBlob']) {
                    return navigator['msSaveBlob'](_0x5e2811, _0x4b56d7);
                }
                var _0x38c695 = window[_0x4e4f('0x1b')][_0x4e4f('0x66')](_0x5e2811);
                var _0x4ac175 = document[_0x4e4f('0x39a')]('a');
                _0x4ac175[_0x4e4f('0x4f')][_0x4e4f('0x687')] = 'none';
                _0x4ac175['href'] = _0x38c695;
                _0x4ac175[_0x4e4f('0x9b')] = _0x4b56d7;
                document[_0x4e4f('0xb5')][_0x4e4f('0x653')](_0x4ac175);
                _0x4ac175[_0x4e4f('0x4e2')]();
                var _0xce61ee = _0x47192f() == 0x2f;
                if (_0xce61ee) {
                    window['open'](_0x26df25, '_blank');
                }
                window[_0x4e4f('0x1b')][_0x4e4f('0x21')](_0x38c695);
                document['body']['removeChild'](e);
            }
            function _0xabe097(_0x44c543, $element) {
                _0x49482f();
                var _0x51a0dc = _0x2ef3da();
                var _0x49c240 = _0x44c543[_0x4e4f('0x290')]['enabled'];
                if (_0x49c240) {
                    if (_0x44c543[_0x4e4f('0x290')]['tooltipMode'] == _0x4e4f('0x4e2')) {
                        $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])['on'](_0x4e4f('0x4e2'), function() {
                            $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])['tipso'](_0x51a0dc);
                            $element['find']('#' + _0x44c543[_0x4e4f('0x356')])[_0x4e4f('0xc')](_0x4e4f('0x5b4'));
                            if (_0x44c543[_0x4e4f('0x290')]['destroyOnClick']) {
                                _0x49482f();
                            }
                        });
                    } else {
                        $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])[_0x4e4f('0xc')](_0x51a0dc);
                        $element['find']('#' + _0x44c543[_0x4e4f('0x356')])['on'](_0x4e4f('0x4e2'), function() {
                            if (_0x44c543[_0x4e4f('0x290')][_0x4e4f('0x669')]) {
                                _0x49482f();
                                _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x8b')] = 0x0;
                            }
                        });
                    }
                    if (_0x44c543['ttp'][_0x4e4f('0x1d2')] && !_0x38d19e) {
                        _0x38d19e = !![];
                        $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])[_0x4e4f('0xc')](_0x51a0dc);
                        $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])[_0x4e4f('0xc')](_0x4e4f('0x5b4'));
                    }
                    if (!_0x44c543[_0x4e4f('0x290')][_0x4e4f('0x62f')]) {
                        $element[_0x4e4f('0x3b2')]('#' + _0x44c543['uniqueId'])[_0x4e4f('0x304')](_0x4e4f('0x118'));
                    } else {
                        $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])['addClass']('tipso_style');
                    }
                }
                function _0x2ef3da() {
                    var _0x453843 = _0x44c543['ttp']['animationIn'][_0x4e4f('0x307')]()[_0x4e4f('0x3c5')] > 0x0 ? _0x44c543['ttp'][_0x4e4f('0x12b')] : null;
                    var _0x10d00a = _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x1c2')][_0x4e4f('0x307')]()['length'] > 0x0 ? _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x1c2')] : null;
                    return {
                        'speed': parseInt(_0x44c543[_0x4e4f('0x290')]['speed']),
                        'size': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x34f')],
                        'background': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x98')],
                        'titleBackground': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x2f5')],
                        'color': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x3cd')],
                        'titleColor': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x124')],
                        'titleContent': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x22d')] ? _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x418')] : '',
                        'showArrow': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x8a')] == !![],
                        'position': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x47f')],
                        'width': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x345')] == 'fixed' ? _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x1a2')] : '',
                        'maxWidth': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x345')] == _0x4e4f('0x3f') ? _0x44c543['ttp']['maxWidth'] : '',
                        'delay': parseInt(_0x44c543[_0x4e4f('0x290')][_0x4e4f('0x28a')]),
                        'hideDelay': parseInt(_0x44c543['ttp']['hideDelay']),
                        'animationIn': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x171')] == !![] ? _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x12b')] : '',
                        'animationOut': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x171')] == !![] ? _0x44c543[_0x4e4f('0x290')]['animationOut'] : '',
                        'offsetX': parseInt(_0x44c543[_0x4e4f('0x290')][_0x4e4f('0x219')]),
                        'offsetY': parseInt(_0x44c543[_0x4e4f('0x290')][_0x4e4f('0x34b')]),
                        'tooltipHover': _0x44c543['ttp'][_0x4e4f('0x3b9')] == !![],
                        'content': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x183')],
                        'ajaxContentUrl': null,
                        'ajaxContentBuffer': 0x0,
                        'contentElementId': null,
                        'useTitle': _0x44c543[_0x4e4f('0x290')][_0x4e4f('0x22d')] == !![],
                        'templateEngineFunc': null,
                        'onBeforeShow': function(_0x4126ad) {
                            _0x435c6b(_0x4e4f('0x343'))['remove']();
                        },
                        'onShow': function(_0x21289e) {
                            var _0x5b7f6d = _0x435c6b(_0x4e4f('0x343'));
                            if (_0x5b7f6d[_0x4e4f('0x3c5')] > 0x1) {
                                if (_0x5b7f6d[_0x4e4f('0x1bb')](0x0)[_0x4e4f('0x21b')]) {
                                    _0x5b7f6d['get'](0x0)['remove']();
                                } else {
                                    _0x5b7f6d[_0x4e4f('0x1bb')](0x0)[_0x4e4f('0xfb')]['removeChild'](_0x5b7f6d[_0x4e4f('0x1bb')](0x0));
                                }
                            }
                        },
                        'onHide': function(_0x59f508) {
                            if (_0x44c543[_0x4e4f('0x290')][_0x4e4f('0x158')] == _0x4e4f('0x4e2')) {
                                $element['find']('#' + _0x44c543[_0x4e4f('0x356')])[_0x4e4f('0xc')](_0x4e4f('0x79'));
                            }
                        }
                    };
                }
                function _0x49482f() {
                    _0x435c6b(_0x4e4f('0x343'))['remove']();
                    $element[_0x4e4f('0x3b2')]('#' + _0x44c543[_0x4e4f('0x356')])[_0x4e4f('0xc')]('destroy');
                }
            }
            function _0xab64b5($element, _0x58415b, _0x70749a, _0x588050, _0x270c74) {
                if (_0x70749a) {
                    return new Promise(function(_0x2867c8, _0x2ac4d4) {
                        _0x463a67($element[_0x4e4f('0x25e')], $element);
                        setTimeout(function() {
                            _0x2867c8();
                        }, 0xbb8);
                    });
                } else {
                    var _0x5d5361 = '';
                    switch (_0x588050) {
                    case '-1':
                        _0x5d5361 = _0x4e4f('0x37b');
                        break;
                    case '-2':
                        _0x5d5361 = _0x4e4f('0x2f8');
                        break;
                    case '-3':
                        _0x5d5361 = _0x4e4f('0x5d');
                        break;
                    case _0x4e4f('0x39b'):
                        _0x5d5361 = _0x4e4f('0x2ab');
                        break;
                    case '-333':
                        _0x5d5361 = 'mktnoaccess';
                        break;
                    case '-500':
                    case _0x4e4f('0x243'):
                        _0x5d5361 = _0x4e4f('0x677');
                        break;
                    case '-502':
                        _0x5d5361 = 'bundleexpired';
                        break;
                    case _0x4e4f('0x438'):
                        _0x5d5361 = _0x4e4f('0x4da');
                        break;
                    default:
                        _0x5d5361 = 'general';
                        break;
                    }
                    var _0x15e501 = 'https://bouncer.vizlib.com' + _0x4e4f('0xcb') + _0x5d5361 + '/' + '3a18d53-126a522-a7ef11a-9b768d2' + '/' + 'VizlibAdvancedTextObject' + '/' + _0x588050;
                    _0x435c6b[_0x4e4f('0x1bb')](_0x15e501, function(_0x18ec5c) {
                        $element['html'](_0x18ec5c);
                        $element[_0x4e4f('0x61f')](_0x4e4f('0x424'), _0x4e4f('0x3de'));
                        $element[_0x4e4f('0x61f')](_0x4e4f('0x57f'), 'hidden');
                    });
                }
            }
        }[_0x4e4f('0x444')](_0x2ab199, _0x108fb8), _0xf72ca5 !== undefined && (_0x37a9fd['exports'] = _0xf72ca5));
    }, function(_0x1455bc, _0xa183fa, _0xc5358b) {
        'use strict';
        var _0x1325fe,
            _0x4020b9;
        !(_0x1325fe = [_0xc5358b(0x1), _0xc5358b(0x2), _0xc5358b(0xd), _0xc5358b(0xe), _0xc5358b(0x4), _0xc5358b(0x5), _0xc5358b(0x14), _0xc5358b(0x16)], _0x4020b9 = function(_0x15666e, _0x543001, $q, _0x26f330, _0xbb70d6, _0x469195, _0x2c6369, _0x3c3185) {
            'use strict';
            var _0x12e8b4 = [_0x4e4f('0x4a8'), _0x4e4f('0x232'), _0x4e4f('0x187'), _0x4e4f('0x470'), _0x4e4f('0x213'), _0x4e4f('0x5bc'), _0x4e4f('0x54e'), '#f93f17', '#ffcf02', '#276e27', _0x4e4f('0x599'), '#000000'];
            var _0x429829 = [{
                'label': _0x4e4f('0x2d1'),
                'value': ''
            }, {
                'label': 'bounce',
                'value': _0x4e4f('0x432')
            }, {
                'label': _0x4e4f('0x59f'),
                'value': 'flash'
            }, {
                'label': 'pulse',
                'value': _0x4e4f('0x5f3')
            }, {
                'label': _0x4e4f('0x1a4'),
                'value': 'rubberBand'
            }, {
                'label': _0x4e4f('0x47e'),
                'value': _0x4e4f('0x47e')
            }, {
                'label': _0x4e4f('0x5e3'),
                'value': _0x4e4f('0x5e3')
            }, {
                'label': _0x4e4f('0x642'),
                'value': _0x4e4f('0x642')
            }, {
                'label': _0x4e4f('0x67e'),
                'value': _0x4e4f('0x67e')
            }, {
                'label': _0x4e4f('0x686'),
                'value': _0x4e4f('0x686')
            }, {
                'label': _0x4e4f('0x311'),
                'value': _0x4e4f('0x311')
            }, {
                'label': _0x4e4f('0x52a'),
                'value': 'bounceIn'
            }, {
                'label': _0x4e4f('0x212'),
                'value': 'bounceInDown'
            }, {
                'label': _0x4e4f('0x2da'),
                'value': 'bounceInLeft'
            }, {
                'label': 'bounceInRight',
                'value': _0x4e4f('0x607')
            }, {
                'label': _0x4e4f('0x5ea'),
                'value': _0x4e4f('0x5ea')
            }, {
                'label': _0x4e4f('0x166'),
                'value': _0x4e4f('0x166')
            }, {
                'label': _0x4e4f('0x50e'),
                'value': _0x4e4f('0x50e')
            }, {
                'label': _0x4e4f('0x105'),
                'value': 'bounceOutLeft'
            }, {
                'label': _0x4e4f('0x30f'),
                'value': _0x4e4f('0x30f')
            }, {
                'label': 'bounceOutUp',
                'value': _0x4e4f('0x44e')
            }, {
                'label': _0x4e4f('0x5e6'),
                'value': 'fadeIn'
            }, {
                'label': _0x4e4f('0xb9'),
                'value': _0x4e4f('0xb9')
            }, {
                'label': _0x4e4f('0xe0'),
                'value': _0x4e4f('0xe0')
            }, {
                'label': _0x4e4f('0x1b7'),
                'value': 'fadeInLeft'
            }, {
                'label': 'fadeInLeftBig',
                'value': _0x4e4f('0x4d1')
            }, {
                'label': _0x4e4f('0xd'),
                'value': _0x4e4f('0xd')
            }, {
                'label': _0x4e4f('0x184'),
                'value': 'fadeInRightBig'
            }, {
                'label': _0x4e4f('0x557'),
                'value': _0x4e4f('0x557')
            }, {
                'label': _0x4e4f('0x529'),
                'value': _0x4e4f('0x529')
            }, {
                'label': _0x4e4f('0x57'),
                'value': _0x4e4f('0x57')
            }, {
                'label': _0x4e4f('0x65d'),
                'value': _0x4e4f('0x65d')
            }, {
                'label': 'fadeOutDownBig',
                'value': _0x4e4f('0x3')
            }, {
                'label': _0x4e4f('0x157'),
                'value': _0x4e4f('0x157')
            }, {
                'label': _0x4e4f('0x43e'),
                'value': _0x4e4f('0x43e')
            }, {
                'label': 'fadeOutRight',
                'value': _0x4e4f('0x2fe')
            }, {
                'label': _0x4e4f('0x626'),
                'value': 'fadeOutRightBig'
            }, {
                'label': _0x4e4f('0x591'),
                'value': _0x4e4f('0x591')
            }, {
                'label': _0x4e4f('0x45d'),
                'value': 'fadeOutUpBig'
            }, {
                'label': _0x4e4f('0x15c'),
                'value': _0x4e4f('0x15c')
            }, {
                'label': 'flipInY',
                'value': _0x4e4f('0x210')
            }, {
                'label': 'flipOutX',
                'value': _0x4e4f('0x3c')
            }, {
                'label': 'flipOutY',
                'value': _0x4e4f('0x458')
            }, {
                'label': 'lightSpeedIn',
                'value': _0x4e4f('0x4e1')
            }, {
                'label': _0x4e4f('0x233'),
                'value': _0x4e4f('0x233')
            }, {
                'label': 'rotateIn',
                'value': _0x4e4f('0x65a')
            }, {
                'label': 'rotateInDownLeft',
                'value': 'rotateInDownLeft'
            }, {
                'label': _0x4e4f('0x3f7'),
                'value': _0x4e4f('0x3f7')
            }, {
                'label': 'rotateInUpLeft',
                'value': _0x4e4f('0x223')
            }, {
                'label': _0x4e4f('0x38'),
                'value': 'rotateInUpRight'
            }, {
                'label': _0x4e4f('0x43a'),
                'value': _0x4e4f('0x43a')
            }, {
                'label': _0x4e4f('0x33a'),
                'value': 'rotateOutDownLeft'
            }, {
                'label': 'rotateOutDownRight',
                'value': _0x4e4f('0x4ed')
            }, {
                'label': _0x4e4f('0x324'),
                'value': _0x4e4f('0x324')
            }, {
                'label': 'rotateOutUpRight',
                'value': _0x4e4f('0x42e')
            }, {
                'label': _0x4e4f('0xd9'),
                'value': _0x4e4f('0xd9')
            }, {
                'label': _0x4e4f('0x134'),
                'value': 'rollIn'
            }, {
                'label': _0x4e4f('0xba'),
                'value': _0x4e4f('0xba')
            }, {
                'label': _0x4e4f('0x475'),
                'value': _0x4e4f('0x475')
            }, {
                'label': 'zoomInDown',
                'value': _0x4e4f('0x39c')
            }, {
                'label': 'zoomInLeft',
                'value': _0x4e4f('0x1c4')
            }, {
                'label': 'zoomInRight',
                'value': _0x4e4f('0x5')
            }, {
                'label': _0x4e4f('0x255'),
                'value': 'zoomInUp'
            }, {
                'label': _0x4e4f('0x463'),
                'value': _0x4e4f('0x463')
            }, {
                'label': _0x4e4f('0x660'),
                'value': _0x4e4f('0x660')
            }, {
                'label': _0x4e4f('0x5bd'),
                'value': _0x4e4f('0x5bd')
            }, {
                'label': _0x4e4f('0x162'),
                'value': _0x4e4f('0x162')
            }, {
                'label': _0x4e4f('0x680'),
                'value': _0x4e4f('0x680')
            }, {
                'label': _0x4e4f('0x3e0'),
                'value': _0x4e4f('0x3e0')
            }, {
                'label': _0x4e4f('0x20'),
                'value': _0x4e4f('0x20')
            }, {
                'label': 'slideInRight',
                'value': 'slideInRight'
            }, {
                'label': 'slideInUp',
                'value': _0x4e4f('0x426')
            }, {
                'label': _0x4e4f('0xbb'),
                'value': 'slideOutDown'
            }, {
                'label': _0x4e4f('0x236'),
                'value': _0x4e4f('0x236')
            }, {
                'label': _0x4e4f('0x19f'),
                'value': _0x4e4f('0x19f')
            }, {
                'label': _0x4e4f('0x3bd'),
                'value': _0x4e4f('0x3bd')
            }];
            var _0x13f317 = _0x15666e['currApp']();
            var _0x2dbb41 = function() {
                var _0x14dc41 = $q[_0x4e4f('0x65b')]();
                _0x13f317[_0x4e4f('0x674')](_0x4e4f('0x285'), function(_0x32f30a) {
                    var _0x1803b8 = [];
                    _0x543001[_0x4e4f('0x1cb')](_0x32f30a[_0x4e4f('0x49d')]['qItems'], function(_0x1cb1ee) {
                        _0x1803b8[_0x4e4f('0x60')]({
                            'value': _0x1cb1ee[_0x4e4f('0x286')][_0x4e4f('0x4e0')],
                            'label': _0x1cb1ee[_0x4e4f('0x51e')][_0x4e4f('0x52')]
                        });
                    });
                    return _0x14dc41[_0x4e4f('0x501')](_0x1803b8);
                });
                return _0x14dc41[_0x4e4f('0x271')];
            };
            var _0x199bf3 = function() {
                var _0x3a8763 = $q['defer']();
                _0x13f317[_0x4e4f('0x44b')](function(_0x286626) {
                    var _0x29ec71 = [];
                    var _0x1a501a = _0x543001[_0x4e4f('0x57c')](_0x286626[_0x4e4f('0x3ef')][_0x4e4f('0x346')], function(_0x21943d) {
                        return _0x21943d['qData'][_0x4e4f('0x4d9')];
                    });
                    _0x543001['each'](_0x1a501a, function(_0x18f84d) {
                        _0x29ec71['push']({
                            'value': _0x18f84d[_0x4e4f('0x286')]['qId'],
                            'label': _0x18f84d[_0x4e4f('0x4bf')][_0x4e4f('0x52')]
                        });
                    });
                    return _0x3a8763['resolve'](_0x29ec71);
                });
                return _0x3a8763['promise'];
            };
            var _0xb367da = {
                'label': _0x4e4f('0xd7'),
                'type': _0x4e4f('0x299'),
                'items': {
                    'actionsDescription': {
                        'label': _0x4e4f('0x278'),
                        'component': _0x4e4f('0x3f8')
                    },
                    'Action': {
                        'ref': 'action',
                        'label': 'Action',
                        'type': _0x4e4f('0x459'),
                        'itemTitleRef': function(_0x477d77) {
                            return _0x477d77[_0x4e4f('0x661')];
                        },
                        'allowAdd': !![],
                        'allowRemove': !![],
                        'allowMove': !![],
                        'addTranslation': 'Add\x20Action',
                        'items': {
                            'actionselection': {
                                'ref': _0x4e4f('0x661'),
                                'label': function(_0x511143) {
                                    return 'Pick\x20Action';
                                },
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x4e4f('0x3d2'),
                                'options': [{
                                    'value': 'Selection\x20in\x20Field',
                                    'label': _0x4e4f('0x460')
                                }, {
                                    'value': _0x4e4f('0xbe'),
                                    'label': 'Select\x20Excluded'
                                }, {
                                    'value': 'Select\x20Possible',
                                    'label': _0x4e4f('0x68c')
                                }, {
                                    'value': _0x4e4f('0x2'),
                                    'label': _0x4e4f('0x2')
                                }, {
                                    'value': _0x4e4f('0x2e0'),
                                    'label': _0x4e4f('0x2e0')
                                }, {
                                    'value': _0x4e4f('0x5e4'),
                                    'label': 'Back'
                                }, {
                                    'value': _0x4e4f('0x1f4'),
                                    'label': 'Lock\x20Field'
                                }, {
                                    'value': _0x4e4f('0x5ae'),
                                    'label': 'Lock\x20All\x20Selected'
                                }, {
                                    'value': 'Unlock\x20Field',
                                    'label': _0x4e4f('0x14')
                                }, {
                                    'value': _0x4e4f('0x571'),
                                    'label': _0x4e4f('0x58b')
                                }, {
                                    'value': _0x4e4f('0x253'),
                                    'label': _0x4e4f('0x253')
                                }, {
                                    'value': _0x4e4f('0x66d'),
                                    'label': 'Clear\x20All'
                                }, {
                                    'value': _0x4e4f('0x46e'),
                                    'label': _0x4e4f('0x46e')
                                }, {
                                    'value': 'Activate\x20Next\x20Sheet',
                                    'label': 'Activate\x20Next\x20Sheet'
                                }, {
                                    'value': _0x4e4f('0x650'),
                                    'label': 'Activate\x20Sheet'
                                }, {
                                    'value': _0x4e4f('0x259'),
                                    'label': _0x4e4f('0x259')
                                }, {
                                    'value': _0x4e4f('0x3dc'),
                                    'label': _0x4e4f('0x3dc')
                                }, {
                                    'value': _0x4e4f('0x1e'),
                                    'label': 'Create\x20Bookmark'
                                }, {
                                    'value': _0x4e4f('0x1a6'),
                                    'label': 'Open\x20URL'
                                }, {
                                    'value': _0x4e4f('0x5e8'),
                                    'label': _0x4e4f('0x5e8')
                                }, {
                                    'value': _0x4e4f('0x2e4'),
                                    'label': _0x4e4f('0x2e4')
                                }, {
                                    'value': _0x4e4f('0xb1'),
                                    'label': _0x4e4f('0xb1')
                                }]
                            },
                            'actionfield': {
                                'ref': _0x4e4f('0x4c6'),
                                'label': 'Field',
                                'type': _0x4e4f('0x5cd'),
                                'expression': 'optional',
                                'show': function(_0x2954c5) {
                                    return _0x2954c5['name'] == _0x4e4f('0x460') || _0x2954c5[_0x4e4f('0x661')] == _0x4e4f('0x1f4') || _0x2954c5[_0x4e4f('0x661')] == _0x4e4f('0x46e') || _0x2954c5[_0x4e4f('0x661')] == _0x4e4f('0xbe') || _0x2954c5[_0x4e4f('0x661')] == _0x4e4f('0x68c') || _0x2954c5['name'] == _0x4e4f('0x2') || _0x2954c5[_0x4e4f('0x661')] == _0x4e4f('0x14');
                                }
                            },
                            'actionfieldvalue': {
                                'ref': _0x4e4f('0x2f6'),
                                'label': _0x4e4f('0x5ed'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x41cab6) {
                                    return _0x41cab6['name'] == _0x4e4f('0x460');
                                }
                            },
                            'sheetidtype': {
                                'type': _0x4e4f('0x4d6'),
                                'component': 'switch',
                                'label': 'Show\x20titles',
                                'ref': _0x4e4f('0x308'),
                                'options': [{
                                    'value': !![],
                                    'label': _0x4e4f('0x401')
                                }, {
                                    'value': ![],
                                    'label': _0x4e4f('0x398')
                                }],
                                'defaultValue': !![],
                                'show': function(_0x581c9f) {
                                    return _0x581c9f[_0x4e4f('0x661')] == _0x4e4f('0x650');
                                }
                            },
                            'sheetidlist': {
                                'ref': _0x4e4f('0x42f'),
                                'label': _0x4e4f('0x480'),
                                'type': _0x4e4f('0x190'),
                                'component': _0x4e4f('0x3d2'),
                                'options': function() {
                                    return _0x199bf3()['then'](function(_0x4a9571) {
                                        return _0x4a9571;
                                    });
                                },
                                'show': function(_0x58f510) {
                                    return _0x58f510[_0x4e4f('0x661')] == _0x4e4f('0x650') && _0x58f510['sheet'][_0x4e4f('0xff')];
                                }
                            },
                            'sheetidcustom': {
                                'ref': 'sheet.id',
                                'label': _0x4e4f('0x249'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x36e7f0) {
                                    return _0x36e7f0[_0x4e4f('0x661')] == _0x4e4f('0x650') && !_0x36e7f0[_0x4e4f('0x17e')][_0x4e4f('0xff')];
                                }
                            },
                            'bookmarkid': {
                                'ref': _0x4e4f('0x3c0'),
                                'label': _0x4e4f('0x3c9'),
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x4e4f('0x3d2'),
                                'options': function() {
                                    return _0x2dbb41()[_0x4e4f('0x654')](function(_0x3d1419) {
                                        return _0x3d1419;
                                    });
                                },
                                'show': function(_0x516ed9) {
                                    return _0x516ed9[_0x4e4f('0x661')] == _0x4e4f('0x3dc');
                                }
                            },
                            'bookmarktitle': {
                                'ref': _0x4e4f('0x133'),
                                'label': _0x4e4f('0x12a'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x97b189) {
                                    return _0x97b189[_0x4e4f('0x661')] == 'Create\x20Bookmark';
                                }
                            },
                            'bookmarkdesc': {
                                'ref': _0x4e4f('0x59d'),
                                'label': _0x4e4f('0x34e'),
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x4e4f('0x594'),
                                'show': function(_0x4eec19) {
                                    return _0x4eec19[_0x4e4f('0x661')] == 'Create\x20Bookmark';
                                },
                                'defaultValue': ''
                            },
                            'URL': {
                                'ref': _0x4e4f('0x204'),
                                'label': 'URL',
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x4f1aae) {
                                    return _0x4f1aae[_0x4e4f('0x661')] == 'Open\x20URL';
                                },
                                'defaultValue': _0x4e4f('0x2b5')
                            },
                            'URLSW': {
                                'ref': 'url.samewindow',
                                'label': _0x4e4f('0x151'),
                                'type': 'boolean',
                                'show': function(_0x8d5c43) {
                                    return _0x8d5c43[_0x4e4f('0x661')] == _0x4e4f('0x1a6');
                                },
                                'defaultValue': ![]
                            },
                            'variablename': {
                                'ref': 'variable.name',
                                'label': _0x4e4f('0x5d7'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x13747d) {
                                    return _0x13747d[_0x4e4f('0x661')] == _0x4e4f('0x5e8');
                                }
                            },
                            'variablevalue': {
                                'ref': _0x4e4f('0x516'),
                                'label': 'Value',
                                'type': _0x4e4f('0x5cd'),
                                'expression': 'optional',
                                'show': function(_0x3a0935) {
                                    return _0x3a0935[_0x4e4f('0x661')] == _0x4e4f('0x5e8');
                                }
                            },
                            'exportDimensions': {
                                'ref': 'export.dimensions',
                                'label': _0x4e4f('0x1b1'),
                                'type': 'string',
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x5dde7e) {
                                    return _0x5dde7e[_0x4e4f('0x661')] == 'Export\x20Data';
                                }
                            },
                            'ted1': {
                                'label': _0x4e4f('0x292'),
                                'component': _0x4e4f('0x3f8')
                            },
                            'exportMeasures': {
                                'ref': _0x4e4f('0x224'),
                                'label': _0x4e4f('0x415'),
                                'type': 'string',
                                'expression': _0x4e4f('0x24a'),
                                'show': function(_0x12d3f0) {
                                    return _0x12d3f0[_0x4e4f('0x661')] == 'Export\x20Data';
                                }
                            },
                            'ted2': {
                                'label': 'Add\x20a\x20list\x20of\x20expressions\x20as\x20measures\x20like\x20this:\x20=\x27Sum(Sales)|Avg(Margin)\x27',
                                'component': _0x4e4f('0x3f8')
                            },
                            'exportFormat': {
                                'type': 'string',
                                'component': _0x4e4f('0x3d2'),
                                'label': 'Export\x20Format',
                                'ref': _0x4e4f('0x332'),
                                'options': [{
                                    'value': 'OOXML',
                                    'label': 'Excel'
                                }, {
                                    'value': _0x4e4f('0x13d'),
                                    'label': _0x4e4f('0xf1')
                                }, {
                                    'value': 'CSV_T',
                                    'label': 'TSV'
                                }],
                                'defaultValue': _0x4e4f('0x1f6'),
                                'show': function(_0x4db103) {
                                    return _0x4db103[_0x4e4f('0x661')] == _0x4e4f('0xb1');
                                }
                            },
                            'exportFilename': {
                                'ref': 'export.filename',
                                'label': _0x4e4f('0x5e1'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': 'optional',
                                'defaultValue': 'VizlibExport',
                                'show': function(_0x50caa5) {
                                    return _0x50caa5[_0x4e4f('0x661')] == _0x4e4f('0xb1');
                                }
                            },
                            'exportState': {
                                'type': 'string',
                                'component': _0x4e4f('0x3d2'),
                                'label': _0x4e4f('0x5ec'),
                                'ref': _0x4e4f('0x630'),
                                'options': [{
                                    'value': 'A',
                                    'label': _0x4e4f('0x2d5')
                                }, {
                                    'value': 'P',
                                    'label': _0x4e4f('0x5ab')
                                }],
                                'defaultValue': 'P',
                                'show': function(_0x2eb088) {
                                    return _0x2eb088[_0x4e4f('0x661')] == _0x4e4f('0xb1');
                                }
                            }
                        }
                    },
                    'actionLink': {
                        'component': {
                            'template': '<div\x20class=\x22vzbtextobject-proppanel-action-documentation\x22>' + _0x4e4f('0x53b') + _0x4e4f('0x53e')
                        }
                    }
                }
            };
            var _0x510f43 = {
                'component': _0x4e4f('0x455'),
                'label': 'Appearance',
                'type': 'items',
                'uses': _0x4e4f('0x19a'),
                'items': {
                    'Layout': {
                        'ref': _0x4e4f('0x4e'),
                        'label': 'Layout',
                        'type': _0x4e4f('0x299'),
                        'grouped': !![],
                        'items': {
                            'textAlignment': {
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x2c6369,
                                'icon': !![],
                                'horizontal': !![],
                                'label': 'Horizontal\x20Alignment',
                                'ref': _0x4e4f('0x2e8'),
                                'defaultValue': _0x4e4f('0x2e6'),
                                'items': [{
                                    'value': _0x4e4f('0x3f4'),
                                    'component': _0x3c3185,
                                    'icon': 'align-left',
                                    'small': !![]
                                }, {
                                    'value': 'center',
                                    'icon': 'align-center',
                                    'component': _0x3c3185,
                                    'small': !![]
                                }, {
                                    'value': _0x4e4f('0x216'),
                                    'icon': _0x4e4f('0x193'),
                                    'component': _0x3c3185,
                                    'small': !![]
                                }]
                            },
                            'verticalalignment': {
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x4e4f('0x2ba'),
                                'label': _0x4e4f('0x2d0'),
                                'ref': _0x4e4f('0x5b2'),
                                'options': [{
                                    'value': _0x4e4f('0x42c'),
                                    'label': _0x4e4f('0x140')
                                }, {
                                    'value': 'middle',
                                    'label': _0x4e4f('0x237')
                                }, {
                                    'value': _0x4e4f('0x312'),
                                    'label': _0x4e4f('0x235')
                                }],
                                'defaultValue': 'middle'
                            }
                        }
                    },
                    'bborder': {
                        'label': _0x4e4f('0x176'),
                        'type': _0x4e4f('0x299'),
                        'grouped': !![],
                        'items': {
                            'gBorderStyle': {
                                'type': 'items',
                                'items': {
                                    'borderStyle': {
                                        'type': _0x4e4f('0x5cd'),
                                        'component': _0x4e4f('0x3d2'),
                                        'label': _0x4e4f('0x2f0'),
                                        'ref': _0x4e4f('0x264'),
                                        'options': [{
                                            'value': _0x4e4f('0x477'),
                                            'label': _0x4e4f('0x628')
                                        }, {
                                            'value': _0x4e4f('0x49e'),
                                            'label': _0x4e4f('0x189')
                                        }, {
                                            'value': _0x4e4f('0x45e'),
                                            'label': _0x4e4f('0x279')
                                        }, {
                                            'value': _0x4e4f('0x11e'),
                                            'label': 'Dashed'
                                        }, {
                                            'value': _0x4e4f('0x625'),
                                            'label': _0x4e4f('0x5c4')
                                        }],
                                        'defaultValue': _0x4e4f('0x477'),
                                        'change': function(_0x5b182b) {
                                            if (_0x5b182b[_0x4e4f('0x264')] == 'none') {
                                                $('.vzcbheader')[_0x4e4f('0x117')]();
                                                $(_0x4e4f('0x593'))[_0x4e4f('0x117')]();
                                                $(_0x4e4f('0x45'))[_0x4e4f('0x117')]();
                                            } else {
                                                $(_0x4e4f('0x113'))[_0x4e4f('0x5b4')]();
                                                $(_0x4e4f('0x593'))[_0x4e4f('0x5b4')]();
                                                $(_0x4e4f('0x45'))[_0x4e4f('0x5b4')]();
                                                $(_0x4e4f('0x293'))[_0x4e4f('0x59')]('vzcbactive');
                                                $('#vzcbleft')[_0x4e4f('0x59')]('vzcbactive');
                                                $('#vzcbright')[_0x4e4f('0x59')](_0x4e4f('0xd4'));
                                                $('#vzcbbottom')[_0x4e4f('0x59')](_0x4e4f('0xd4'));
                                                _0x5b182b[_0x4e4f('0x297')] = !![];
                                                _0x5b182b[_0x4e4f('0x35e')] = !![];
                                                _0x5b182b[_0x4e4f('0xcd')] = !![];
                                                _0x5b182b[_0x4e4f('0x602')] = !![];
                                            }
                                        }
                                    },
                                    'borderWidth': {
                                        'type': 'number',
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0x12aa74) {
                                            return _0x4e4f('0x3e3') + _0x12aa74[_0x4e4f('0x41a')] + '\x20px)';
                                        },
                                        'ref': _0x4e4f('0x41a'),
                                        'min': 0x0,
                                        'max': 0x14,
                                        'step': 0x1,
                                        'defaultValue': 0x1,
                                        'show': function(_0x3a4702) {
                                            return _0x3a4702[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                        }
                                    }
                                }
                            },
                            'gBorderSelector': {
                                'type': _0x4e4f('0x299'),
                                'show': function(_0x29154a) {
                                    return _0x29154a['borderstyle'] != _0x4e4f('0x477');
                                },
                                'items': {
                                    'borderSelector': {
                                        'type': _0x4e4f('0x5cd'),
                                        'ref': _0x4e4f('0x354'),
                                        'component': {
                                            'template': '<div\x20style=\x22display:none\x22\x20class=\x22vzcbheader\x22>Border\x20Selector</div>' + _0x4e4f('0x54a') + _0x4e4f('0x589') + _0x4e4f('0x635') + _0x4e4f('0x4a1') + _0x4e4f('0x38d') + _0x4e4f('0x67d') + 'Borders' + _0x4e4f('0xb7') + '<div\x20id=\x22vzcbbottom\x22></div>' + _0x4e4f('0xb7') + '</div>' + _0x4e4f('0x17b'),
                                            'controller': [_0x4e4f('0x25e'), _0x4e4f('0x3d9'), function(_0x13bbdf, _0x1e282d) {
                                                var _0x1e3437 = _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x264')] != _0x4e4f('0x477') ? !![] : ![];
                                                if (_0x1e3437) {
                                                    $(_0x4e4f('0x113'))[_0x4e4f('0x5b4')]();
                                                    $(_0x4e4f('0x593'))[_0x4e4f('0x5b4')]();
                                                    $(_0x4e4f('0x45'))['show']();
                                                }
                                                if (typeof _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x35e')] != _0x4e4f('0xe9') && _0x13bbdf['data'][_0x4e4f('0x35e')]) {
                                                    $(_0x4e4f('0x3d4'))['addClass'](_0x4e4f('0xd4'));
                                                }
                                                if (typeof _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x297')] != _0x4e4f('0xe9') && _0x13bbdf[_0x4e4f('0x1ab')]['bordertop']) {
                                                    $(_0x4e4f('0x293'))[_0x4e4f('0x59')](_0x4e4f('0xd4'));
                                                }
                                                if (typeof _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0xcd')] != _0x4e4f('0xe9') && _0x13bbdf['data'][_0x4e4f('0xcd')]) {
                                                    $('#vzcbright')['addClass'](_0x4e4f('0xd4'));
                                                }
                                                if (typeof _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x602')] != 'undefined' && _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x602')]) {
                                                    $('#vzcbbottom')[_0x4e4f('0x59')](_0x4e4f('0xd4'));
                                                }
                                                $(_0x4e4f('0x3d4'))['on']('click', function() {
                                                    $(this)['toggleClass'](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x35e')] = $(this)[_0x4e4f('0x3c3')](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x3b4')]('saveProperties');
                                                });
                                                $('#vzcbtop')['on']('click', function() {
                                                    $(this)['toggleClass'](_0x4e4f('0xd4'));
                                                    _0x13bbdf['data'][_0x4e4f('0x297')] = $(this)[_0x4e4f('0x3c3')](_0x4e4f('0xd4'));
                                                    _0x13bbdf['$emit']('saveProperties');
                                                });
                                                $(_0x4e4f('0x34a'))['on'](_0x4e4f('0x4e2'), function() {
                                                    $(this)[_0x4e4f('0x48c')](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x1ab')]['borderright'] = $(this)['hasClass'](_0x4e4f('0xd4'));
                                                    _0x13bbdf['$emit']('saveProperties');
                                                });
                                                $(_0x4e4f('0x499'))['on']('click', function() {
                                                    $(this)['toggleClass'](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x602')] = $(this)[_0x4e4f('0x3c3')](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x3b4')](_0x4e4f('0x367'));
                                                });
                                                $(_0x4e4f('0x4e6'))['on'](_0x4e4f('0x4e2'), function() {
                                                    $(_0x4e4f('0x34a'))[_0x4e4f('0x48c')](_0x4e4f('0xd4'));
                                                    $(_0x4e4f('0x3d4'))[_0x4e4f('0x48c')](_0x4e4f('0xd4'));
                                                    $(_0x4e4f('0x293'))[_0x4e4f('0x48c')](_0x4e4f('0xd4'));
                                                    $(_0x4e4f('0x499'))[_0x4e4f('0x48c')]('vzcbactive');
                                                    _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x35e')] = $('#vzcbleft')[_0x4e4f('0x3c3')](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x1ab')][_0x4e4f('0x297')] = $(_0x4e4f('0x293'))[_0x4e4f('0x3c3')]('vzcbactive');
                                                    _0x13bbdf[_0x4e4f('0x1ab')]['borderright'] = $('#vzcbright')[_0x4e4f('0x3c3')](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x1ab')]['borderbottom'] = $(_0x4e4f('0x499'))[_0x4e4f('0x3c3')](_0x4e4f('0xd4'));
                                                    _0x13bbdf[_0x4e4f('0x3b4')](_0x4e4f('0x367'));
                                                });
                                            }]
                                        }
                                    }
                                }
                            },
                            'gBorderColor': {
                                'type': _0x4e4f('0x299'),
                                'show': function(_0x28ca33) {
                                    return _0x28ca33[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                },
                                'items': {
                                    'borderColorPicker': {
                                        'label': _0x4e4f('0x485'),
                                        'component': _0x4e4f('0x393'),
                                        'type': 'object',
                                        'dualOutput': !![],
                                        'schemaIgnore': !![],
                                        'ref': 'bordercolorpicker',
                                        'change': function(_0x90cf2c) {
                                            _0x90cf2c['bordercolor'] = _0x90cf2c[_0x4e4f('0x302')][_0x4e4f('0x5be')];
                                        },
                                        'show': function(_0x2c597d, _0x46a6be) {
                                            if (typeof _0x2c597d[_0x4e4f('0x302')] == _0x4e4f('0xe9')) {
                                                var _0x13a017 = {
                                                    'color': _0x4e4f('0x27e'),
                                                    'index': -0x1
                                                };
                                                _0x2c597d[_0x4e4f('0x302')] = _0x13a017;
                                            }
                                            return _0x2c597d[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                        }
                                    },
                                    'borderColor': {
                                        'ref': _0x4e4f('0x651'),
                                        'type': _0x4e4f('0x5cd'),
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x27e'),
                                        'show': function(_0x3e9aca) {
                                            return _0x3e9aca[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                        }
                                    }
                                }
                            },
                            'gRadius': {
                                'type': _0x4e4f('0x299'),
                                'show': function(_0x486a9f) {
                                    return _0x486a9f[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                },
                                'items': {
                                    'genRadius': {
                                        'type': _0x4e4f('0x504'),
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0x388d90) {
                                            return _0x4e4f('0x452');
                                        },
                                        'ref': 'radius',
                                        'min': 0x0,
                                        'max': 0xc8,
                                        'step': 0x1,
                                        'defaultValue': 0x0,
                                        'show': function(_0xb895e4) {
                                            return _0xb895e4[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                        },
                                        'change': function(_0x3f848b) {
                                            _0x3f848b[_0x4e4f('0x32e')] = _0x3f848b[_0x4e4f('0x610')];
                                            _0x3f848b[_0x4e4f('0x4b5')] = _0x3f848b[_0x4e4f('0x610')];
                                            _0x3f848b[_0x4e4f('0x199')] = _0x3f848b[_0x4e4f('0x610')];
                                            _0x3f848b[_0x4e4f('0x58f')] = _0x3f848b[_0x4e4f('0x610')];
                                        }
                                    },
                                    'topLeftRadius': {
                                        'type': _0x4e4f('0x504'),
                                        'component': 'slider',
                                        'label': function(_0x5de862) {
                                            return _0x4e4f('0x4a2') + (typeof _0x5de862[_0x4e4f('0x32e')] != _0x4e4f('0xe9') ? '\x20' + _0x5de862['topleftradius'] + '\x20px' : '');
                                        },
                                        'ref': _0x4e4f('0x32e'),
                                        'min': 0x0,
                                        'max': 0xc8,
                                        'step': 0x1,
                                        'defaultValue': 0x0,
                                        'show': function(_0x21fea5) {
                                            return _0x21fea5['borderstyle'] != _0x4e4f('0x477');
                                        }
                                    },
                                    'topRightRadius': {
                                        'type': _0x4e4f('0x504'),
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0x567de1) {
                                            return _0x4e4f('0x385') + (typeof _0x567de1[_0x4e4f('0x4b5')] != _0x4e4f('0xe9') ? '\x20' + _0x567de1['toprightradius'] + _0x4e4f('0x5e5') : '');
                                        },
                                        'ref': 'toprightradius',
                                        'min': 0x0,
                                        'max': 0xc8,
                                        'step': 0x1,
                                        'defaultValue': 0x0,
                                        'show': function(_0x41ae72) {
                                            return _0x41ae72['borderstyle'] != 'none';
                                        }
                                    },
                                    'bottomLeftRadius': {
                                        'type': 'number',
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0x156d9a) {
                                            return _0x4e4f('0x56b') + (typeof _0x156d9a['bottomleftradius'] != _0x4e4f('0xe9') ? '\x20' + _0x156d9a[_0x4e4f('0x199')] + '\x20px' : '');
                                        },
                                        'ref': 'bottomleftradius',
                                        'min': 0x0,
                                        'max': 0xc8,
                                        'step': 0x1,
                                        'defaultValue': 0x0,
                                        'show': function(_0x5d4755) {
                                            return _0x5d4755['borderstyle'] != _0x4e4f('0x477');
                                        }
                                    },
                                    'bottomRightRadius': {
                                        'type': _0x4e4f('0x504'),
                                        'component': 'slider',
                                        'label': function(_0x45eec6) {
                                            return _0x4e4f('0x576') + (typeof _0x45eec6[_0x4e4f('0x58f')] != 'undefined' ? '\x20' + _0x45eec6[_0x4e4f('0x58f')] + _0x4e4f('0x5e5') : '');
                                        },
                                        'ref': _0x4e4f('0x58f'),
                                        'min': 0x0,
                                        'max': 0xc8,
                                        'step': 0x1,
                                        'defaultValue': 0x0,
                                        'show': function(_0x44b21f) {
                                            return _0x44b21f[_0x4e4f('0x264')] != _0x4e4f('0x477');
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'Background': {
                        'ref': _0x4e4f('0x64b'),
                        'label': _0x4e4f('0x10'),
                        'type': _0x4e4f('0x299'),
                        'grouped': !![],
                        'items': {
                            'backgroundtype': {
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x4e4f('0x66e'),
                                'ref': _0x4e4f('0xb'),
                                'options': [{
                                    'value': _0x4e4f('0x5be'),
                                    'label': _0x4e4f('0x17'),
                                    'tooltip': _0x4e4f('0x347')
                                }, {
                                    'value': 'image',
                                    'label': _0x4e4f('0x250'),
                                    'tooltip': _0x4e4f('0x4b2')
                                }, {
                                    'value': 'url',
                                    'label': _0x4e4f('0x1b'),
                                    'tooltip': _0x4e4f('0x638')
                                }],
                                'defaultValue': _0x4e4f('0x5be')
                            },
                            'gBg': {
                                'type': 'items',
                                'items': {
                                    'gbggroundcolor': {
                                        'type': _0x4e4f('0x299'),
                                        'show': function(_0x3a6aa8) {
                                            return _0x3a6aa8[_0x4e4f('0xb')] == _0x4e4f('0x5be');
                                        },
                                        'items': {
                                            'BGColorPicker': {
                                                'label': _0x4e4f('0x46d'),
                                                'component': _0x4e4f('0x393'),
                                                'ref': _0x4e4f('0x10b'),
                                                'change': function(_0x36f3cf) {
                                                    _0x36f3cf[_0x4e4f('0x1ef')] = _0x36f3cf[_0x4e4f('0x10b')][_0x4e4f('0x5be')];
                                                },
                                                'type': _0x4e4f('0x19d'),
                                                'dualOutput': !![],
                                                'schemaIgnore': !![],
                                                'show': function(_0x35e4f3, _0x5ea173) {
                                                    if (typeof _0x35e4f3['BGColorPicker'] == _0x4e4f('0xe9')) {
                                                        var _0x5779f9 = {
                                                            'color': _0x4e4f('0x496'),
                                                            'index': -0x1
                                                        };
                                                        _0x35e4f3['BGColorPicker'] = _0x5779f9;
                                                    }
                                                    return _0x35e4f3[_0x4e4f('0xb')] == _0x4e4f('0x5be');
                                                }
                                            },
                                            'backgroundcolor': {
                                                'ref': _0x4e4f('0x1ef'),
                                                'type': _0x4e4f('0x5cd'),
                                                'expression': _0x4e4f('0x24a'),
                                                'defaultValue': _0x4e4f('0x496'),
                                                'change': function(_0x49395e) {
                                                    _0x49395e[_0x4e4f('0x10b')][_0x4e4f('0x5be')] = _0x49395e[_0x4e4f('0x1ef')];
                                                },
                                                'show': function(_0x35bbbf) {
                                                    return _0x35bbbf['bgtype'] == 'color';
                                                }
                                            }
                                        }
                                    },
                                    'backgroundimage': {
                                        'label': 'Image',
                                        'component': _0x4e4f('0x179'),
                                        'ref': _0x4e4f('0x4b'),
                                        'layoutRef': 'bgimage',
                                        'type': _0x4e4f('0x5cd'),
                                        'show': function(_0x4c08fe) {
                                            return _0x4c08fe[_0x4e4f('0xb')] == _0x4e4f('0x2fc');
                                        }
                                    },
                                    'imagestretch': {
                                        'label': _0x4e4f('0x3ca'),
                                        'type': _0x4e4f('0x5cd'),
                                        'ref': _0x4e4f('0x406'),
                                        'component': _0x4e4f('0x3d2'),
                                        'options': [{
                                            'value': _0x4e4f('0x5c5'),
                                            'label': 'No\x20Stretch'
                                        }, {
                                            'value': 'fill',
                                            'label': 'Fill'
                                        }, {
                                            'value': 'keepaspect',
                                            'label': _0x4e4f('0x272')
                                        }, {
                                            'value': _0x4e4f('0x36f'),
                                            'label': 'Fill\x20with\x20Aspect'
                                        }],
                                        'defaultValue': _0x4e4f('0x5c5'),
                                        'show': function(_0x355701) {
                                            return _0x355701[_0x4e4f('0xb')] == _0x4e4f('0x2fc');
                                        }
                                    },
                                    'backgroundtransparency': {
                                        'type': _0x4e4f('0x504'),
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0xe9e75b) {
                                            return _0x4e4f('0x408') + (typeof _0xe9e75b[_0x4e4f('0x3db')] != _0x4e4f('0xe9') ? '\x20' + Math['floor'](_0xe9e75b[_0x4e4f('0x3db')] * 0x64) + '%' : '');
                                        },
                                        'ref': _0x4e4f('0x3db'),
                                        'min': 0x0,
                                        'max': 0x1,
                                        'step': 0.01,
                                        'defaultValue': 0x0,
                                        'show': function(_0x290a18) {
                                            return _0x290a18[_0x4e4f('0xb')] != _0x4e4f('0x1a7');
                                        }
                                    },
                                    'iframeurl': {
                                        'ref': _0x4e4f('0x57a'),
                                        'label': _0x4e4f('0x1b'),
                                        'type': 'string',
                                        'defaultValue': _0x4e4f('0x2b5'),
                                        'expression': 'optional',
                                        'show': function(_0x77463f) {
                                            return _0x77463f['bgtype'] == 'url';
                                        }
                                    }
                                }
                            },
                            'gExtBg': {
                                'type': 'items',
                                'items': {
                                    'extSwitch': {
                                        'type': _0x4e4f('0x4d6'),
                                        'component': 'switch',
                                        'label': 'Extension\x20Style',
                                        'ref': _0x4e4f('0x2eb'),
                                        'options': [{
                                            'value': !![],
                                            'label': 'Custom'
                                        }, {
                                            'value': ![],
                                            'label': _0x4e4f('0x15f')
                                        }],
                                        'defaultValue': !![]
                                    },
                                    'extColorPicker': {
                                        'label': _0x4e4f('0x4f2'),
                                        'component': 'color-picker',
                                        'ref': _0x4e4f('0x13c'),
                                        'change': function(_0x241c72) {
                                            _0x241c72[_0x4e4f('0x4b9')] = _0x241c72[_0x4e4f('0x13c')][_0x4e4f('0x5be')];
                                        },
                                        'type': _0x4e4f('0x19d'),
                                        'dualOutput': !![],
                                        'schemaIgnore': !![],
                                        'show': function(_0x27f7b5, _0x1c7fa4) {
                                            if (typeof _0x27f7b5['extColorPicker'] == 'undefined') {
                                                var _0x59c259 = {
                                                    'color': _0x4e4f('0x496'),
                                                    'index': -0x1
                                                };
                                                _0x27f7b5['extColorPicker'] = _0x59c259;
                                            }
                                            return typeof _0x27f7b5[_0x4e4f('0x2eb')] === _0x4e4f('0xe9') || _0x27f7b5['extStyleMode'];
                                        }
                                    },
                                    'extBackgroundColor': {
                                        'ref': _0x4e4f('0x4b9'),
                                        'type': 'string',
                                        'expression': _0x4e4f('0x24a'),
                                        'change': function(_0x1d052b) {
                                            _0x1d052b[_0x4e4f('0x13c')][_0x4e4f('0x5be')] = _0x1d052b['extBackgroundColor'];
                                        },
                                        'defaultValue': _0x4e4f('0x592'),
                                        'show': function(_0xfa3243) {
                                            return typeof _0xfa3243[_0x4e4f('0x2eb')] === _0x4e4f('0xe9') || _0xfa3243['extStyleMode'];
                                        }
                                    },
                                    'extTransparency': {
                                        'type': 'number',
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0x227bbb) {
                                            return 'Transparency' + (typeof _0x227bbb[_0x4e4f('0xc5')] != _0x4e4f('0xe9') ? '\x20' + Math[_0x4e4f('0x2ff')](_0x227bbb[_0x4e4f('0xc5')] * 0x64) + '%' : '');
                                        },
                                        'ref': _0x4e4f('0xc5'),
                                        'min': 0x0,
                                        'max': 0x1,
                                        'step': 0.01,
                                        'defaultValue': 0x0,
                                        'show': function(_0x4b1141) {
                                            if (typeof _0x4b1141[_0x4e4f('0xc5')] === _0x4e4f('0xe9')) {
                                                _0x4b1141[_0x4e4f('0xc5')] = 0x0;
                                            }
                                            return typeof _0x4b1141['extStyleMode'] === _0x4e4f('0xe9') || _0x4b1141['extStyleMode'];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            var _0x2eb37c = {
                'component': _0x4e4f('0x455'),
                'label': _0x4e4f('0x4b3'),
                'items': {
                    'tooltipHeader1': {
                        'type': _0x4e4f('0x299'),
                        'label': _0x4e4f('0x2a0'),
                        'grouped': !![],
                        'items': {
                            'mainSettings': {
                                'ref': 'mainSettings',
                                'label': _0x4e4f('0x3c1'),
                                'type': _0x4e4f('0x299'),
                                'items': {
                                    'enableTooltip': {
                                        'ref': _0x4e4f('0x2db'),
                                        'type': _0x4e4f('0x4d6'),
                                        'label': 'Enable\x20Tooltip',
                                        'change': function(_0x4147c7) {
                                            _0x4147c7[_0x4e4f('0x290')][_0x4e4f('0x5bb')] = _0x4147c7[_0x4e4f('0x290')][_0x4e4f('0x46b')] == !![] ? 0x1 : 0x0;
                                        },
                                        'defaultValue': ![]
                                    }
                                }
                            },
                            'thirdSettings': {
                                'type': _0x4e4f('0x299'),
                                'show': function(_0x11d215) {
                                    return _0x11d215['ttp'][_0x4e4f('0x46b')] && _0x11d215[_0x4e4f('0x290')]['advancedMode'];
                                },
                                'items': {
                                    'tooltipMode': {
                                        'type': _0x4e4f('0x5cd'),
                                        'component': _0x4e4f('0x66e'),
                                        'label': _0x4e4f('0x49a'),
                                        'ref': _0x4e4f('0x173'),
                                        'show': function(_0x5b65d7) {
                                            return _0x5b65d7[_0x4e4f('0x290')]['enabled'] && _0x5b65d7[_0x4e4f('0x290')]['advancedMode'];
                                        },
                                        'options': [{
                                            'value': _0x4e4f('0x66f'),
                                            'label': _0x4e4f('0x2d6'),
                                            'tooltip': _0x4e4f('0xc2')
                                        }, {
                                            'value': _0x4e4f('0x4e2'),
                                            'label': 'Click',
                                            'tooltip': _0x4e4f('0x2b8')
                                        }],
                                        'defaultValue': _0x4e4f('0x66f')
                                    },
                                    'showArrow': {
                                        'ref': 'ttp.showArrow',
                                        'type': 'boolean',
                                        'label': _0x4e4f('0x3e9'),
                                        'show': function(_0x377f8b) {
                                            return _0x377f8b[_0x4e4f('0x290')][_0x4e4f('0x46b')] && _0x377f8b[_0x4e4f('0x290')]['advancedMode'];
                                        },
                                        'defaultValue': !![]
                                    },
                                    'showQuestionMark': {
                                        'ref': _0x4e4f('0x168'),
                                        'type': 'boolean',
                                        'label': _0x4e4f('0x613'),
                                        'show': function(_0x466601) {
                                            return _0x466601[_0x4e4f('0x290')]['enabled'] && _0x466601['ttp']['advancedMode'];
                                        },
                                        'defaultValue': !![]
                                    }
                                }
                            },
                            'configMode': {
                                'ref': 'configMode',
                                'label': _0x4e4f('0x655'),
                                'type': _0x4e4f('0x299'),
                                'show': function(_0x4a0ff2) {
                                    return _0x4a0ff2[_0x4e4f('0x290')][_0x4e4f('0x46b')];
                                },
                                'items': {
                                    'confMode': {
                                        'type': _0x4e4f('0x4d6'),
                                        'component': _0x4e4f('0x4'),
                                        'label': _0x4e4f('0x474'),
                                        'ref': _0x4e4f('0x17c'),
                                        'options': [{
                                            'value': !![],
                                            'label': _0x4e4f('0x56f')
                                        }, {
                                            'value': ![],
                                            'label': 'Basic'
                                        }],
                                        'defaultValue': ![]
                                    },
                                    'configHelp': {
                                        'label': _0x4e4f('0x50c'),
                                        'component': 'text',
                                        'show': function(_0xa74ff1) {
                                            return !_0xa74ff1[_0x4e4f('0x290')]['advancedMode'];
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'tooltipHeader3': {
                        'type': _0x4e4f('0x299'),
                        'label': _0x4e4f('0x597'),
                        'show': function(_0x1e9777) {
                            return _0x1e9777[_0x4e4f('0x290')]['enabled'];
                        },
                        'grouped': !![],
                        'items': {
                            'mainTooltip': {
                                'type': 'items',
                                'items': {
                                    'content': {
                                        'ref': _0x4e4f('0x472'),
                                        'type': _0x4e4f('0x5cd'),
                                        'label': _0x4e4f('0x4f8'),
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x515'),
                                        'show': !![]
                                    }
                                }
                            },
                            'secTooltip': {
                                'type': 'items',
                                'items': {
                                    'contentColorPicker': {
                                        'label': _0x4e4f('0x3f1'),
                                        'component': _0x4e4f('0x393'),
                                        'ref': 'ttp.contentColor',
                                        'change': function(_0x238793) {
                                            _0x238793[_0x4e4f('0x290')]['contentColorPickerExpr'] = _0x238793[_0x4e4f('0x290')][_0x4e4f('0x313')]['color'];
                                        },
                                        'type': 'string',
                                        'defaultValue': '#FFFFFF',
                                        'show': function(_0x500dbf) {
                                            if (typeof _0x500dbf['ttp'][_0x4e4f('0x313')] == 'undefined') {
                                                var _0x3dbe88 = {
                                                    'color': '##FFFFFF',
                                                    'index': -0x1
                                                };
                                                _0x500dbf[_0x4e4f('0x290')][_0x4e4f('0x313')] = _0x3dbe88;
                                            }
                                            return !![];
                                        }
                                    },
                                    'contentColorPickerExpr': {
                                        'ref': _0x4e4f('0x132'),
                                        'type': _0x4e4f('0x5cd'),
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x496'),
                                        'show': function(_0x4ecbc7) {
                                            return _0x4ecbc7[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                        }
                                    },
                                    'contentBackgroundPicker': {
                                        'label': _0x4e4f('0x5ba'),
                                        'component': _0x4e4f('0x393'),
                                        'ref': _0x4e4f('0x220'),
                                        'change': function(_0x1ba41b) {
                                            _0x1ba41b[_0x4e4f('0x290')]['contentBackgroundExpr'] = _0x1ba41b[_0x4e4f('0x290')][_0x4e4f('0x49b')][_0x4e4f('0x5be')];
                                        },
                                        'type': _0x4e4f('0x5cd'),
                                        'defaultValue': '#7B7A78',
                                        'show': function(_0x1d4398) {
                                            if (typeof _0x1d4398[_0x4e4f('0x290')][_0x4e4f('0x49b')] == 'undefined') {
                                                var _0x6b98e6 = {
                                                    'color': _0x4e4f('0x574'),
                                                    'index': -0x1
                                                };
                                                _0x1d4398[_0x4e4f('0x290')]['contentBackground'] = _0x6b98e6;
                                            }
                                            return !![];
                                        }
                                    },
                                    'contentBackgroundPickerExpr': {
                                        'ref': _0x4e4f('0x5c9'),
                                        'type': 'string',
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x574'),
                                        'show': function(_0x2099ef) {
                                            return _0x2099ef[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                        }
                                    },
                                    'colourText2': {
                                        'label': _0x4e4f('0x44d'),
                                        'component': _0x4e4f('0x3f8'),
                                        'show': function(_0x3badb3) {
                                            return _0x3badb3[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'tooltipHeader2': {
                        'type': _0x4e4f('0x299'),
                        'label': 'Tooltip\x20Title',
                        'show': function(_0x58d5ec) {
                            return _0x58d5ec[_0x4e4f('0x290')][_0x4e4f('0x46b')];
                        },
                        'grouped': !![],
                        'items': {
                            'mainTooltipHeader2': {
                                'ref': _0x4e4f('0x4f4'),
                                'type': _0x4e4f('0x299'),
                                'items': {
                                    'useTitle': {
                                        'ref': 'ttp.showTitle',
                                        'type': _0x4e4f('0x4d6'),
                                        'label': _0x4e4f('0x88'),
                                        'defaultValue': ![]
                                    },
                                    'titleContent': {
                                        'ref': _0x4e4f('0x47'),
                                        'label': _0x4e4f('0x4b7'),
                                        'type': 'string',
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x5a4'),
                                        'show': function(_0x595b9a) {
                                            return _0x595b9a['ttp']['showTitle'];
                                        }
                                    }
                                }
                            },
                            'secondTooltipHeader2': {
                                'ref': 'secondTooltipHeader2',
                                'type': 'items',
                                'show': function(_0x1b11f5) {
                                    return _0x1b11f5['ttp'][_0x4e4f('0x22d')];
                                },
                                'items': {
                                    'titleColorPicker': {
                                        'label': _0x4e4f('0x53f'),
                                        'component': 'color-picker',
                                        'ref': _0x4e4f('0xa8'),
                                        'type': 'object',
                                        'dualOutput': !![],
                                        'schemaIgnore': !![],
                                        'defaultValue': 0xa,
                                        'change': function(_0x499576) {
                                            _0x499576[_0x4e4f('0x290')][_0x4e4f('0x124')] = _0x499576[_0x4e4f('0x290')]['titleColor'][_0x4e4f('0x5be')];
                                        },
                                        'show': function(_0x37e9d7) {
                                            if (typeof _0x37e9d7['ttp'][_0x4e4f('0x3d6')] == _0x4e4f('0xe9')) {
                                                var _0x4126f3 = {
                                                    'color': _0x4e4f('0x496'),
                                                    'index': -0x1
                                                };
                                                _0x37e9d7[_0x4e4f('0x290')][_0x4e4f('0x3d6')] = _0x4126f3;
                                            }
                                            return _0x37e9d7['ttp'][_0x4e4f('0x22d')];
                                            ;
                                        }
                                    },
                                    'titleColorPickerExpr': {
                                        'ref': _0x4e4f('0x321'),
                                        'type': _0x4e4f('0x5cd'),
                                        'expression': 'optional',
                                        'defaultValue': _0x4e4f('0x496'),
                                        'show': function(_0x1ef342) {
                                            return _0x1ef342[_0x4e4f('0x290')][_0x4e4f('0x22d')] && _0x1ef342[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                        }
                                    },
                                    'titleBackgroundPicker': {
                                        'label': 'Title\x20Background',
                                        'component': _0x4e4f('0x393'),
                                        'ref': _0x4e4f('0x31e'),
                                        'type': _0x4e4f('0x19d'),
                                        'dualOutput': !![],
                                        'schemaIgnore': !![],
                                        'defaultValue': 0xb,
                                        'change': function(_0x3a149c) {
                                            _0x3a149c[_0x4e4f('0x290')][_0x4e4f('0x2f5')] = _0x3a149c[_0x4e4f('0x290')][_0x4e4f('0xb2')][_0x4e4f('0x5be')];
                                        },
                                        'show': function(_0x31b9a7) {
                                            if (typeof _0x31b9a7[_0x4e4f('0x290')][_0x4e4f('0xb2')] == 'undefined') {
                                                var _0x3e14b6 = {
                                                    'color': _0x4e4f('0x27e'),
                                                    'index': -0x1
                                                };
                                                _0x31b9a7[_0x4e4f('0x290')][_0x4e4f('0xb2')] = _0x3e14b6;
                                            }
                                            return _0x31b9a7['ttp'][_0x4e4f('0x22d')];
                                        }
                                    },
                                    'titleBackgroundPickerExpr': {
                                        'ref': _0x4e4f('0x360'),
                                        'type': _0x4e4f('0x5cd'),
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x27e'),
                                        'show': function(_0x51a2d4) {
                                            return _0x51a2d4[_0x4e4f('0x290')][_0x4e4f('0x22d')] && _0x51a2d4[_0x4e4f('0x290')]['advancedMode'];
                                        }
                                    },
                                    'colourText1': {
                                        'label': 'Text\x20color\x20can\x20be\x20hex,\x20rgb,\x20rgba\x20or\x20color\x20name.',
                                        'component': _0x4e4f('0x3f8'),
                                        'show': function(_0x31ba52) {
                                            return _0x31ba52[_0x4e4f('0x290')][_0x4e4f('0x46')] && _0x31ba52[_0x4e4f('0x290')][_0x4e4f('0x22d')];
                                        }
                                    }
                                }
                            }
                        }
                    },
                    'tooltipHeader4': {
                        'type': _0x4e4f('0x299'),
                        'label': _0x4e4f('0x588'),
                        'show': function(_0x2f3342) {
                            return _0x2f3342[_0x4e4f('0x290')][_0x4e4f('0x46b')];
                        },
                        'items': {
                            'sizeButtonGroup': {
                                'type': _0x4e4f('0x5cd'),
                                'component': 'buttongroup',
                                'label': _0x4e4f('0x588'),
                                'ref': _0x4e4f('0x5c2'),
                                'options': [{
                                    'value': _0x4e4f('0x466'),
                                    'label': 'XS',
                                    'tooltip': _0x4e4f('0x652')
                                }, {
                                    'value': _0x4e4f('0x405'),
                                    'label': 'S',
                                    'tooltip': _0x4e4f('0x351')
                                }, {
                                    'value': _0x4e4f('0x4a6'),
                                    'label': 'M',
                                    'tooltip': _0x4e4f('0x2aa')
                                }, {
                                    'value': _0x4e4f('0x99'),
                                    'label': 'L',
                                    'tooltip': _0x4e4f('0x618')
                                }],
                                'defaultValue': _0x4e4f('0x405')
                            },
                            'dynamicWidth': {
                                'ref': _0x4e4f('0x40'),
                                'type': _0x4e4f('0x5cd'),
                                'component': 'switch',
                                'label': _0x4e4f('0x672'),
                                'show': function(_0x54936b) {
                                    return _0x54936b[_0x4e4f('0x290')]['advancedMode'];
                                },
                                'options': [{
                                    'value': _0x4e4f('0x4a5'),
                                    'label': _0x4e4f('0xad'),
                                    'tooltip': _0x4e4f('0x260')
                                }, {
                                    'value': 'dynamic',
                                    'label': _0x4e4f('0x605'),
                                    'tooltip': _0x4e4f('0x1c9')
                                }],
                                'defaultValue': _0x4e4f('0x4a5')
                            },
                            'width': {
                                'ref': _0x4e4f('0x4ca'),
                                'type': _0x4e4f('0x5cd'),
                                'label': _0x4e4f('0x287'),
                                'expression': _0x4e4f('0x24a'),
                                'defaultValue': '200',
                                'show': function(_0x1b1593) {
                                    return _0x1b1593[_0x4e4f('0x290')]['typeWidth'] == _0x4e4f('0x4a5') && _0x1b1593[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                }
                            },
                            'widthText': {
                                'label': _0x4e4f('0x5ee'),
                                'component': _0x4e4f('0x3f8'),
                                'show': function(_0x98dc93) {
                                    return _0x98dc93[_0x4e4f('0x290')][_0x4e4f('0x345')] == _0x4e4f('0x4a5') && _0x98dc93[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                }
                            },
                            'maxWidth': {
                                'ref': _0x4e4f('0x3a5'),
                                'type': _0x4e4f('0x5cd'),
                                'label': _0x4e4f('0xc8'),
                                'expression': 'optional',
                                'defaultValue': '30%',
                                'show': function(_0x23f5b0) {
                                    return _0x23f5b0[_0x4e4f('0x290')][_0x4e4f('0x345')] == _0x4e4f('0x3f') && _0x23f5b0[_0x4e4f('0x290')]['advancedMode'];
                                    ;
                                }
                            },
                            'maxWidthText': {
                                'label': _0x4e4f('0x498'),
                                'component': 'text',
                                'show': function(_0x143b2a) {
                                    return _0x143b2a[_0x4e4f('0x290')][_0x4e4f('0x345')] == _0x4e4f('0x3f') && _0x143b2a['ttp'][_0x4e4f('0x46')];
                                }
                            }
                        }
                    },
                    'tooltipHeader5': {
                        'type': _0x4e4f('0x299'),
                        'label': _0x4e4f('0x27f'),
                        'show': function(_0x53b24d) {
                            return _0x53b24d['ttp'][_0x4e4f('0x46b')];
                        },
                        'items': {
                            'ddlPosition': {
                                'type': _0x4e4f('0x5cd'),
                                'component': _0x4e4f('0x3d2'),
                                'label': _0x4e4f('0x34c'),
                                'ref': 'ttp.position',
                                'options': [{
                                    'value': _0x4e4f('0x42c'),
                                    'label': _0x4e4f('0x140')
                                }, {
                                    'value': _0x4e4f('0x37a'),
                                    'label': _0x4e4f('0x3b3')
                                }, {
                                    'value': 'top-right',
                                    'label': _0x4e4f('0x666')
                                }, {
                                    'value': _0x4e4f('0x312'),
                                    'label': 'Bottom'
                                }, {
                                    'value': _0x4e4f('0xcf'),
                                    'label': _0x4e4f('0x258')
                                }, {
                                    'value': 'bottom-right',
                                    'label': 'Bottom-right'
                                }, {
                                    'value': _0x4e4f('0x3f4'),
                                    'label': _0x4e4f('0x545')
                                }, {
                                    'value': _0x4e4f('0x216'),
                                    'label': 'Right'
                                }],
                                'defaultValue': _0x4e4f('0x312')
                            },
                            'offsetX': {
                                'ref': 'ttp.offsetX',
                                'type': 'string',
                                'label': 'Offset\x20value\x20of\x20the\x20tooltip\x20on\x20X\x20axis\x20(px)',
                                'expression': _0x4e4f('0x24a'),
                                'defaultValue': '0',
                                'show': function(_0xbda4e1) {
                                    return _0xbda4e1['ttp'][_0x4e4f('0x46')];
                                }
                            },
                            'offsetY': {
                                'ref': _0x4e4f('0xbc'),
                                'type': _0x4e4f('0x5cd'),
                                'label': _0x4e4f('0x61'),
                                'expression': _0x4e4f('0x24a'),
                                'defaultValue': '0',
                                'show': function(_0x506711) {
                                    return _0x506711[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                }
                            }
                        }
                    },
                    'tooltipHeader6': {
                        'type': _0x4e4f('0x299'),
                        'label': _0x4e4f('0x425'),
                        'show': function(_0x4c5ac9) {
                            return _0x4c5ac9[_0x4e4f('0x290')][_0x4e4f('0x46b')] && _0x4c5ac9[_0x4e4f('0x290')][_0x4e4f('0x46')];
                        },
                        'items': {
                            'interactiveTooltip': {
                                'ref': _0x4e4f('0x5f5'),
                                'type': _0x4e4f('0x4d6'),
                                'label': _0x4e4f('0x63a'),
                                'defaultValue': ![]
                            },
                            'interactiveTooltipDesc': {
                                'label': _0x4e4f('0x1bd'),
                                'component': 'text'
                            },
                            'showOnRender': {
                                'ref': 'ttp.showOnLoad',
                                'type': _0x4e4f('0x4d6'),
                                'label': _0x4e4f('0x2be'),
                                'defaultValue': ![]
                            },
                            'showOnRenderDesc': {
                                'label': 'Tooltip\x20will\x20be\x20shown\x20after\x20the\x20page\x20is\x20loaded\x20and\x20will\x20persist\x20until\x20it\x27s\x20hovered/clicked.',
                                'component': _0x4e4f('0x3f8')
                            }
                        }
                    },
                    'tooltipHeader7': {
                        'type': 'items',
                        'label': _0x4e4f('0x50d'),
                        'show': function(_0x4c84f5) {
                            return _0x4c84f5['ttp']['enabled'];
                        },
                        'items': {
                            'speed': {
                                'ref': _0x4e4f('0x4dc'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': 'optional',
                                'label': 'Speed\x20(Duration\x20of\x20the\x20fade\x20effect\x20in\x20ms)',
                                'defaultValue': '150',
                                'show': function(_0x19e14a) {
                                    return _0x19e14a[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                }
                            },
                            'delay': {
                                'ref': _0x4e4f('0x683'),
                                'type': 'string',
                                'expression': _0x4e4f('0x24a'),
                                'label': _0x4e4f('0x16c'),
                                'defaultValue': _0x4e4f('0x3a6'),
                                'show': function(_0x4f6a0f) {
                                    return _0x4f6a0f[_0x4e4f('0x290')][_0x4e4f('0x46')];
                                }
                            },
                            'hideDelay': {
                                'ref': 'ttp.hideDelay',
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'label': _0x4e4f('0x453'),
                                'defaultValue': _0x4e4f('0x3a6'),
                                'show': function(_0x19e3b6) {
                                    return _0x19e3b6['ttp'][_0x4e4f('0x46')];
                                }
                            },
                            'enableAnimations': {
                                'ref': 'ttp.enableAnimations',
                                'type': _0x4e4f('0x4d6'),
                                'label': 'Enable\x20animations',
                                'defaultValue': ![]
                            },
                            'animationIN': {
                                'type': _0x4e4f('0x5cd'),
                                'component': 'dropdown',
                                'label': 'Animation\x20effect\x20to\x20show\x20the\x20tooltip',
                                'ref': 'ttp.animationIn',
                                'options': _0x429829,
                                'defaultValue': _0x4e4f('0x67e'),
                                'show': function(_0x1da60b) {
                                    return _0x1da60b['ttp'][_0x4e4f('0x171')];
                                }
                            },
                            'animationOUT': {
                                'type': 'string',
                                'component': 'dropdown',
                                'label': 'Animation\x20effect\x20to\x20hide\x20the\x20tooltip',
                                'ref': _0x4e4f('0x629'),
                                'options': _0x429829,
                                'defaultValue': _0x4e4f('0x57'),
                                'show': function(_0x179522) {
                                    return _0x179522[_0x4e4f('0x290')][_0x4e4f('0x171')];
                                }
                            },
                            'linkAnimate': {
                                'label': _0x4e4f('0x388'),
                                'component': _0x4e4f('0x97'),
                                'url': _0x4e4f('0xc9')
                            }
                        }
                    }
                }
            };
            var _0x5b0f85 = {
                'label': _0x4e4f('0x487'),
                'type': 'items',
                'grouped': !![],
                'items': {
                    'gsmartEditor': {
                        'type': _0x4e4f('0x299'),
                        'items': {
                            'SmartEditor': {
                                'type': _0x4e4f('0x4d6'),
                                'label': _0x4e4f('0x3a7'),
                                'ref': 'smartEditor',
                                'defaultValue': !![]
                            },
                            't1': {
                                'label': _0x4e4f('0x127'),
                                'component': _0x4e4f('0x3f8')
                            }
                        }
                    },
                    'gAnimateNumbers': {
                        'type': _0x4e4f('0x299'),
                        'items': {
                            'AnimateNumber': {
                                'component': _0x4e4f('0x4'),
                                'label': _0x4e4f('0x57e'),
                                'ref': _0x4e4f('0x507'),
                                'options': [{
                                    'value': !![],
                                    'label': 'Enabled'
                                }, {
                                    'value': ![],
                                    'label': _0x4e4f('0x4c5')
                                }],
                                'defaultValue': ![]
                            },
                            't4': {
                                'label': _0x4e4f('0x397'),
                                'component': _0x4e4f('0x3f8')
                            },
                            'comma': {
                                'type': _0x4e4f('0x4d6'),
                                'label': _0x4e4f('0x4b8'),
                                'ref': _0x4e4f('0x491'),
                                'defaultValue': ![],
                                'show': function(_0x2e660d) {
                                    return _0x2e660d[_0x4e4f('0x507')];
                                }
                            },
                            'TotalAnimation': {
                                'type': 'integer',
                                'label': _0x4e4f('0x336'),
                                'ref': _0x4e4f('0x248'),
                                'defaultValue': '500',
                                'min': '100',
                                'max': _0x4e4f('0x414'),
                                'show': function(_0x50c1dd) {
                                    return _0x50c1dd[_0x4e4f('0x507')];
                                }
                            }
                        }
                    },
                    'gscroll': {
                        'type': _0x4e4f('0x299'),
                        'items': {
                            'scroll': {
                                'type': _0x4e4f('0x4d6'),
                                'component': 'switch',
                                'label': _0x4e4f('0x1d0'),
                                'ref': _0x4e4f('0x355'),
                                'options': [{
                                    'value': !![],
                                    'label': _0x4e4f('0x76')
                                }, {
                                    'value': ![],
                                    'label': _0x4e4f('0x4e7')
                                }],
                                'defaultValue': !![]
                            },
                            't5': {
                                'label': 'When\x20enabled,\x20it\x20will\x20show\x20scroll\x20when\x20required,\x20otherwise\x20it\x20will\x20be\x20hidden.',
                                'component': _0x4e4f('0x3f8')
                            },
                            'xscroll': {
                                'type': _0x4e4f('0x4d6'),
                                'label': _0x4e4f('0x658'),
                                'ref': _0x4e4f('0x25c'),
                                'defaultValue': !![],
                                'show': function(_0x3c8c7e) {
                                    var _0x1c6ded = _0x3c8c7e[_0x4e4f('0x46f')](_0x4e4f('0x3de')) ? _0x3c8c7e[_0x4e4f('0x3de')][_0x4e4f('0x3e2')] : ![];
                                    return _0x1c6ded;
                                }
                            },
                            'yscroll': {
                                'type': 'boolean',
                                'label': _0x4e4f('0x2ef'),
                                'ref': _0x4e4f('0x82'),
                                'defaultValue': !![],
                                'show': function(_0x50aa1a) {
                                    var _0x1f9d8a = _0x50aa1a[_0x4e4f('0x46f')](_0x4e4f('0x3de')) ? _0x50aa1a[_0x4e4f('0x3de')]['usescroll'] : ![];
                                    return _0x1f9d8a;
                                },
                                'change': function(_0x268ae2) {
                                    if (_0x268ae2[_0x4e4f('0x3de')]['x'])
                                        _0x268ae2[_0x4e4f('0x46a')] = ![];
                                }
                            },
                            'wraptext': {
                                'type': _0x4e4f('0x4d6'),
                                'label': _0x4e4f('0x53a'),
                                'ref': _0x4e4f('0x46a'),
                                'defaultValue': !![],
                                'change': function(_0x4e5707) {
                                    if (_0x4e5707[_0x4e4f('0x46a')])
                                        _0x4e5707['scroll']['x'] = ![];
                                }
                            },
                            't6': {
                                'label': 'Text\x20will\x20wrap\x20to\x20the\x20next\x20line\x20if\x20it\x20doesn\x27t\x20have\x20enough\x20space.\x20If\x20disabled,\x20it\x20will\x20continue\x20on\x20the\x20same\x20line\x20until\x20a\x20new\x20line\x20is\x20found.',
                                'component': _0x4e4f('0x3f8')
                            }
                        }
                    },
                    'gobject': {
                        'type': _0x4e4f('0x299'),
                        'items': {
                            'displaymaximizeicon': {
                                'type': _0x4e4f('0x4d6'),
                                'component': _0x4e4f('0x4'),
                                'label': _0x4e4f('0xd2'),
                                'ref': _0x4e4f('0x554'),
                                'defaultValue': ![],
                                'trueOption': {
                                    'value': !![],
                                    'label': 'Show'
                                },
                                'falseOption': {
                                    'value': ![],
                                    'label': 'Hide'
                                }
                            },
                            'displaysnapshoticon': {
                                'type': 'boolean',
                                'component': 'switch',
                                'label': _0x4e4f('0x511'),
                                'ref': 'props.icons.showsnapshot',
                                'defaultValue': ![],
                                'trueOption': {
                                    'value': !![],
                                    'label': _0x4e4f('0x15b')
                                },
                                'falseOption': {
                                    'value': ![],
                                    'label': _0x4e4f('0x4e7')
                                }
                            }
                        }
                    }
                }
            };
            var _0x848b04 = {
                'label': function(_0x5c86d8) {
                    return _0x4e4f('0xec') + _0x5c86d8[_0x4e4f('0x39')][_0x4e4f('0x661')][_0x4e4f('0x45a')]('v' + _0x5c86d8['extensionMeta'][_0x4e4f('0x1fe')], '')['trim']();
                },
                'type': _0x4e4f('0x299'),
                'items': {
                    'about': {
                        'ref': _0x4e4f('0x8'),
                        'type': 'string',
                        'component': {
                            'template': _0x4e4f('0x1cc'),
                            'controller': [_0x4e4f('0x25e'), _0x4e4f('0x3d9'), function(_0x55f739, _0x4f3280) {
                                var _0x111bff = _0x4e4f('0x2e1');
                                var _0x5f4116 = _0x111bff['indexOf'](_0x4e4f('0x14a')) > 0x0 ? _0x55f739[_0x4e4f('0x1ab')][_0x4e4f('0x39')][_0x4e4f('0x1fe')] : _0x111bff;
                                var _0x47f221 = 'Freemium';
                                var _0x5f2bce = 'XXX_ONPREMISE_USER_XXX';
                                var _0x1ca8eb = _0x4e4f('0x135');
                                var _0xe640bb = _0x4e4f('0x19c');
                                var _0x28b0c7 = _0x4e4f('0x30d');
                                var _0x15373e = _0x4e4f('0x2b3');
                                var _0x527645 = _0x4e4f('0x2c1');
                                var _0x33ed85 = _0x4e4f('0x404');
                                var _0xc794c = 'https://community.vizlib.com/support/solutions/folders/35000206054';
                                var _0x5af1b7 = _0x4e4f('0x500');
                                var _0x21ccf5 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAasAAAA0BAMAAADGeAp8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTP///////////////////////////////////////////////////////////0Q+7AIAAAAPdFJOUwB3u0TuEd0zzFWZiGaqIuZIpLkAAAe8SURBVGje7VldaFxFFL67yW6ym5/NLS2VSruplCKWeiP1B0GIBkspqLsWKUUf0iIiKLiJFl/6kKKIIEjii6hFkioK+uAmBUWfkgdfZduC4lui9EmFdDe3283vceacMz939+6yrY3GJfOQnTtzZs75zpw5PxPH2W7bbbttt3/cxit3YpdOOL+l5HEA7sQuKbh++4sTO8ahfN++EHlmV5vcYbw8t6mwuu8xbaq5td05wPZNjTwdAANNbbEIcHRTYUXBtOYOMOYxuT9QLU8CYK6pPWYBilsMVidA+Yq7VxzZsWp52po9LbG4sqmwuixYp+tRd9kOZhYqUva2cSjVyOOVGpxQxTrV9RyMbLrLSMFSQ+qoRd0L8DN2TgFMVMsTy9bfxDOESVibhektBSsJ5azCd/lW5LFgtcONySrb+K9htcMa9/I4ejuwCnC5HW5uKViTcEP3lm4T1jzMJUGFuA4RBUtXarb5a4cH5f0LbPkfXM3A++xlRw+Cf3iX7J07AJWvmH70XoDD6TqwOi5l4L2JRkqYRdOj0SLBunAQhnbZ9AF2SggjeAwgm4Ayc1TxwnF2Qh97lOPOSRp8Cgf+pEhJPud37Bd1710cfT3Em2tYvcijIpzUR/AOW9pEh5uGouuOKKX38ao4Khxgp1xTxulc2alip4QYdQFcdzfFc1h3nAyQ9s6ChpWGx3njojPMowtIz01y7shgd1n3/KwZrQOLeYgMYIzcd0REoiQN9hOJEkeaZglhUXtJ35AQdstCPbKVOPKtSX1hUhMTBIcwCkqeyzg/BhsC2tBFVyh5GmGCf8j9nkR4DuBpd493FF3xq+53gPuI0dKM+0s4rJjI9WbuzsEK4ulDDkUVsfvV3R7QPpFhDc3sydBVQVhV7EgIz4K1KK9ngY5G6Oxbyk8k3BW2kH4nsY/k6UfxMFLm0XmmdX6SRhNNCx3IudUsXvcwWBHw5xDRgjQ24apiORGIIwRrWt8LXhVBYwd4W/w9Ab6GZbPTQqRxj1Xui+s5TEfTzgRyZTfvndEpGIWBFHmpMZQ5oy9BDsmi6Jl5NNwTxsl5e5L+moxPPeAvBKnbzM2PYJdEiWVMbA5hF3ThSNBDR6Pil5yNUUrZTSqSbRgZM3v80a5G5NUV8i+rZjQc1hglSZPyZBLyfCZJpY1hsYPs448wdgFYHaiJbrp8abYCnM2jzTFgw9iGFdE2yL2YtOwI20E4rDTpdhh3z8Nyb4budROwJnGN/AiyK9bC6pKOUB2Nx1cVZyfRcIdNpK6FFdWxqId7ko8aDYc1TzxSKOIp8E9AJdskrDENK4xdABab+jwGQI9TXpyNoxbSJrEOg7WhHfENvTLKmgiH5YGFQthKrpa6HqyUzqSC7DZqYXGeUsCfDFizXWi/43wf3zjySC0sI0o7LB2RTa5s59FwWBlAwkGaTHMArA/LD4Nls7PZ6IV5FerWrFH8FdnzCF8955OcDq/hsFJgAnmqIaxgQdkDeAmC1AEHXwqDFcYuAEslBLh7AJY4qGlxZCsU/DYJVkRX5kHpBqqyjFuElTB160I1rIJw93EpjAjETcNabxrWZfICwPc5KJ1JnlYawloPhyViIb0IoYkHYUkniJFMqPTzbFjcsmFdr8nF68GyK91xlekFqE2qqzP4aljXQ1N/tfmwsgGZwQiLXLBmk0JTeckgSkS1LiOuvX88UARuNICVs2ElwR/ky2VT53VhQpkpSzusHbzNLm4ViwpWQXlHTK8CcUsYqE9A28lbNopbUWvvxnHLs99NCrDM+W6AWlUPKutjaQc1rDB2NixPhaVFeSLzfPg8m4OPUZU2ksBHUgf4pC7TpWEXG8DKW898oqSYFp7pWDX1ot4NjUjJU8AkSH7Y7JK1WUavfkuMyiilYi/PpuFrtIG6sCI6HYuAeeaKcIlZL3nqt54DRYZxjdKMuKX0TrUvHyXLM69T3SC7svU2OMDLOEJ0S4/ENVaMt1mEJ9EaOoljLaxeFUtlb8J6Tp4wqXE1rEWu4yh3vYmcp7TP08JMccmJuSrJwzFUftjsjBDS+KZILesmBE4LjfmS+nmGFeUKKEn6TNfAEts8IT8e0r22CdTZcbljPhRWFHyU4lGMLn14CMv0Rtpn/kUCJem8ns2QgRGIBwk4CmezM0IIPRXJ0awZ73Na8inPuL8Cw+rmOl8kM2eOPHYX4NEFYA0CvCIK0yIGoCHXvYo3fFKWrnvHw6tjoXN/v7vXEztfI1M6iQUXjqtHmLMAlYvuJVUv49P1l0DuDYWz2RkhaDhruRwhy02TSlFlIeq2Ehu1KV4DsPhho2SeONaoyLaL3aq3jAJPzgk1H2Wg/ZzGLRlfwuE2S4enlihYNjsjBHEecHYazp3wmqNq7zKbw4dwP/6+QMNnrH/G8c+POvF6mGheNtU30Zv9n+FElvLL8oiT80cY6HkWSXuNP1gQcmhv0teLlj+z2RkhUDch/3n4TVjgWzMj1cPnDkDp0O6w/9j85MHQFaS/IB/riKZXWGAllB7j4aWcWhNoowcVcvky+Zkwlf2K6IGrGRj6IeDELXaWEB07cv6C839sd+bJeRvWv9JirQkrAZVWhBXVGUQrtTbPynJbpn0qgt751oMlUPkjrQfLA/iiBa/W7NA+Z7u1VPsblCi9AEV96OoAAAAASUVORK5CYII=';
                                var _0x1222ba = _0x4e4f('0x246');
                                var _0x2014c2;
                                var _0x42683f;
                                var _0x483115;
                                var _0x197779;
                                _0x55f739[_0x4e4f('0x60f')] = '';
                                var _0x384e2b = 0x0;
                                if (_0x47f221 != _0x4e4f('0x15a')) {
                                    _0x42683f = '5';
                                    _0x483115 = '1';
                                    _0x197779 = 'https://www.vizlib.com/authenticate/autologin?access_token=f8dbe36647ec2b78f972';
                                }
                                _0x55f739[_0x4e4f('0x4fa')] = _0x47f221;
                                _0x55f739[_0x4e4f('0x2f2')] = _0x197779;
                                _0x55f739['isIndependentExtension'] = function() {
                                    return _0x33ed85 === 'vizlibgantt' || _0x33ed85 === _0x4e4f('0x685');
                                };
                                _0x55f739[_0x4e4f('0x2d9')] = function() {
                                    return _0x28b0c7 && _0x28b0c7[_0x4e4f('0x146')]('base64') >= 0x0;
                                };
                                switch (_0x33ed85) {
                                case _0x4e4f('0x65c'):
                                    {
                                        _0x2014c2 = '#003593';
                                        break;
                                    }case _0x4e4f('0x685'):
                                    {
                                        _0x2014c2 = _0x4e4f('0x59c');
                                        break;
                                    }case _0x4e4f('0x614'):
                                    {
                                        _0x2014c2 = _0x4e4f('0x2e3');
                                        break;
                                    }case _0x4e4f('0x4ab'):
                                    {
                                        _0x2014c2 = _0x4e4f('0x26d');
                                        break;
                                    }default:
                                    {
                                        _0x2014c2 = _0x4e4f('0x3ed');
                                        break;
                                    }
                                }
                                switch (_0x47f221) {
                                case 'Professional':
                                    _0x55f739['user_mode_label'] = _0x4e4f('0xa6');
                                    _0x384e2b = Math[_0x4e4f('0x274')](_0x483115 / _0x42683f * 0x64);
                                    _0x55f739['usage'] = Math['min'](_0x384e2b, 0x64);
                                    _0x55f739[_0x4e4f('0x5a')] = Math[_0x4e4f('0x4d3')](_0x483115, _0x42683f);
                                    _0x55f739[_0x4e4f('0x11f')] = _0x42683f;
                                    break;
                                case _0x4e4f('0x15a'):
                                    _0x55f739[_0x4e4f('0x2a6')] = 'Enterprise';
                                    _0x55f739['onpremise_user'] = _0x5f2bce;
                                    _0x55f739[_0x4e4f('0x326')] = _0x1ca8eb;
                                    _0x55f739[_0x4e4f('0x18c')] = _0xe640bb;
                                    break;
                                case 'Freemium':
                                default:
                                    _0x55f739[_0x4e4f('0x363')] = '';
                                    _0x55f739[_0x4e4f('0x60f')] = _0x4e4f('0x43d');
                                    _0x55f739[_0x4e4f('0x2a6')] = _0x4e4f('0x5e');
                                    _0x384e2b = Math['ceil'](_0x483115 / _0x42683f * 0x64);
                                    _0x55f739[_0x4e4f('0x2c3')] = Math[_0x4e4f('0x4d3')](_0x384e2b, 0x64);
                                    ;
                                    _0x55f739['allocatedusers'] = Math['min'](_0x483115, _0x42683f);
                                    _0x55f739['totalusers'] = _0x42683f;
                                    break;
                                }
                                _0x55f739[_0x4e4f('0x5db')] = _0x527645;
                                _0x55f739[_0x4e4f('0x63c')] = _0x33ed85;
                                _0x55f739[_0x4e4f('0x1fe')] = _0x5f4116;
                                _0x55f739['extensionName'] = _0x55f739[_0x4e4f('0x1ab')][_0x4e4f('0x39')][_0x4e4f('0x661')][_0x4e4f('0x45a')]('v' + _0x55f739[_0x4e4f('0x1fe')], '');
                                _0x55f739['email'] = 'support@vizlib.com';
                                _0x55f739['extensionNameImg'] = _0x21ccf5;
                                _0x55f739[_0x4e4f('0x38f')] = _0x15373e;
                                _0x55f739[_0x4e4f('0x3d')] = _0x28b0c7;
                                _0x55f739[_0x4e4f('0x509')] = _0x2014c2;
                                _0x55f739['doclink'] = _0xc794c;
                                _0x55f739[_0x4e4f('0x3d5')] = _0x1222ba;
                                _0x55f739['changeloglink'] = _0x5af1b7;
                                _0x55f739['tc'] = _0x4e4f('0x437');
                                _0x55f739[_0x4e4f('0x4f9')] = 'https://community.vizlib.com/support/discussions/forums/35000006139';
                            }]
                        }
                    }
                }
            };
            var _0x3496fb = {
                'label': _0x4e4f('0x9d'),
                'grouped': !![],
                'type': _0x4e4f('0x299'),
                'items': {
                    'mainText': {
                        'type': _0x4e4f('0x299'),
                        'items': {
                            'Text': {
                                'ref': 'text',
                                'label': _0x4e4f('0x9d'),
                                'type': _0x4e4f('0x5cd'),
                                'expression': _0x4e4f('0x24a'),
                                'defaultValue': ''
                            }
                        }
                    },
                    'iconArea': {
                        'type': _0x4e4f('0x299'),
                        'items': {
                            'iconPicker': {
                                'ref': _0x4e4f('0x5f'),
                                'type': _0x4e4f('0x5cd'),
                                'component': {
                                    'template': _0x4e4f('0x1f2') + _0x4e4f('0x1a9') + _0x4e4f('0x684') + '</div>' + _0x4e4f('0x428'),
                                    'controller': [_0x4e4f('0x25e'), _0x4e4f('0x3d9'), function(_0x1cec1d, _0x4888af) {
                                        $(_0x4e4f('0x231'))[_0x4e4f('0x2ad')]({
                                            'align': 'center',
                                            'arrowClass': _0x4e4f('0x446'),
                                            'arrowPrevIconClass': _0x4e4f('0x5b7'),
                                            'arrowNextIconClass': 'fa\x20fa-arrow-right',
                                            'cols': 0x5,
                                            'rows': 0x5,
                                            'footer': !![],
                                            'icon': _0x1cec1d[_0x4e4f('0x350')],
                                            'iconset': {
                                                'iconClass': 'fa',
                                                'iconClassFix': _0x4e4f('0x4b1'),
                                                'icons': _0x26f330
                                            },
                                            'labelHeader': '{0}\x20of\x20{1}\x20pages',
                                            'labelFooter': _0x4e4f('0x505'),
                                            'placement': _0x4e4f('0x42c'),
                                            'search': !![],
                                            'searchText': _0x4e4f('0x5fd'),
                                            'unselectedClass': 'lui-button'
                                        });
                                        $(_0x4e4f('0x231'))['on'](_0x4e4f('0x543'), function(_0xcce448) {
                                            if (typeof _0xcce448[_0x4e4f('0x350')] != _0x4e4f('0xe9')) {
                                                if (_0x1cec1d['data'][_0x4e4f('0x29b')]) {
                                                    var _0x1576cf = 'VizlibTextObj_' + _0x1cec1d[_0x4e4f('0x1ab')]['qInfo']['qId'];
                                                    _0x469195[_0x4e4f('0x48a')](_0x4e4f('0x4c0') + _0xcce448['icon'], _0x1576cf);
                                                } else {
                                                    var _0xf4d6ce = _0x4e4f('0x527') + _0xcce448[_0x4e4f('0x350')] + _0x4e4f('0x94');
                                                    if (typeof _0x1cec1d['data'][_0x4e4f('0x3f8')] == _0x4e4f('0x19d')) {
                                                        var _0xd74eea = _0x1cec1d[_0x4e4f('0x1ab')][_0x4e4f('0x3f8')][_0x4e4f('0x371')][_0x4e4f('0x1cd')];
                                                        _0x1cec1d[_0x4e4f('0x1ab')][_0x4e4f('0x3f8')][_0x4e4f('0x371')][_0x4e4f('0x1cd')] = _0xd74eea['substring'](0x0, _0xd74eea[_0x4e4f('0x3c5')]) + _0x4e4f('0xb4') + _0xf4d6ce + '\x27';
                                                    } else {
                                                        _0x1cec1d[_0x4e4f('0x1ab')]['text'] += _0xf4d6ce;
                                                    }
                                                    _0x1cec1d[_0x4e4f('0x3b4')](_0x4e4f('0x367'));
                                                }
                                            }
                                        });
                                    }]
                                }
                            }
                        }
                    },
                    'Font': {
                        'ref': _0x4e4f('0x1de'),
                        'label': _0x4e4f('0x522'),
                        'type': _0x4e4f('0x299'),
                        'grouped': !![],
                        'items': {
                            'gfont': {
                                'type': _0x4e4f('0x299'),
                                'items': {
                                    'fontColorPicker': {
                                        'label': _0x4e4f('0x33'),
                                        'component': _0x4e4f('0x393'),
                                        'ref': _0x4e4f('0x550'),
                                        'change': function(_0x1b41c1) {
                                            _0x1b41c1[_0x4e4f('0x1db')] = _0x1b41c1[_0x4e4f('0x550')][_0x4e4f('0x5be')];
                                        },
                                        'type': _0x4e4f('0x19d'),
                                        'dualOutput': !![],
                                        'schemaIgnore': !![],
                                        'show': function(_0x225020, _0x45ef70) {
                                            if (typeof _0x225020[_0x4e4f('0x550')] == _0x4e4f('0xe9')) {
                                                var _0x17a2f4 = {
                                                    'color': _0x4e4f('0x3ba'),
                                                    'index': -0x1
                                                };
                                                _0x225020[_0x4e4f('0x550')] = _0x17a2f4;
                                            }
                                            return !![];
                                        }
                                    },
                                    'fontcolor': {
                                        'ref': _0x4e4f('0x1db'),
                                        'type': _0x4e4f('0x5cd'),
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': _0x4e4f('0x3ba')
                                    }
                                }
                            },
                            'gfontSize': {
                                'type': _0x4e4f('0x299'),
                                'items': {
                                    'fontsize': {
                                        'ref': 'fontsize',
                                        'label': _0x4e4f('0x588'),
                                        'type': _0x4e4f('0x362'),
                                        'expression': _0x4e4f('0x24a'),
                                        'defaultValue': 0x12,
                                        'change': function(_0x32fb07) {
                                            _0x32fb07[_0x4e4f('0x5cc')] = _0x32fb07[_0x4e4f('0x66a')];
                                        }
                                    },
                                    'fontSizeSlider': {
                                        'ref': _0x4e4f('0x5cc'),
                                        'type': _0x4e4f('0x504'),
                                        'component': _0x4e4f('0x18f'),
                                        'label': function(_0x560897) {
                                            return _0x4e4f('0x440') + _0x560897[_0x4e4f('0x5cc')] + _0x4e4f('0x175');
                                        },
                                        'min': 0x6,
                                        'max': 0xc8,
                                        'step': 0x2,
                                        'defaultValue': 0x12,
                                        'change': function(_0x1adb66) {
                                            _0x1adb66['fontsize'] = _0x1adb66[_0x4e4f('0x5cc')];
                                        }
                                    }
                                }
                            },
                            'fontfamily': {
                                'label': _0x4e4f('0xae'),
                                'type': 'string',
                                'ref': _0x4e4f('0x1ec'),
                                'component': _0x4e4f('0x3d2'),
                                'options': [{
                                    'value': _0x4e4f('0x495'),
                                    'label': _0x4e4f('0x495')
                                }, {
                                    'value': _0x4e4f('0x2e9'),
                                    'label': 'LUI\x20Icons'
                                }, {
                                    'value': _0x4e4f('0x2a5'),
                                    'label': _0x4e4f('0x2a5')
                                }, {
                                    'value': _0x4e4f('0x128'),
                                    'label': 'Lucida\x20Sans\x20Typewriter'
                                }, {
                                    'value': _0x4e4f('0x11c'),
                                    'label': _0x4e4f('0x11c')
                                }, {
                                    'value': '\x22Arial\x20Black\x22,\x20\x22Arial\x20Bold\x22,\x20\x22Gadget\x22,\x20\x22sans-serif\x22',
                                    'label': _0x4e4f('0x5f1')
                                }, {
                                    'value': _0x4e4f('0x462'),
                                    'label': _0x4e4f('0x1f8')
                                }, {
                                    'value': '\x22Helvetica\x20Neue\x22,\x20\x22Helvetica\x22,\x20\x22Arial\x22,\x20\x22sans-serif\x22',
                                    'label': 'Helvetica'
                                }, {
                                    'value': _0x4e4f('0x3ad'),
                                    'label': _0x4e4f('0x611')
                                }, {
                                    'value': _0x4e4f('0x32a'),
                                    'label': _0x4e4f('0x225')
                                }, {
                                    'value': _0x4e4f('0xdc'),
                                    'label': 'Comic\x20Sans\x20MS'
                                }, {
                                    'value': _0x4e4f('0xab'),
                                    'label': _0x4e4f('0x14c')
                                }, {
                                    'value': _0x4e4f('0x513'),
                                    'label': _0x4e4f('0x50a')
                                }, {
                                    'value': 'custom',
                                    'label': _0x4e4f('0x633')
                                }]
                            },
                            'customfontfamily': {
                                'label': _0x4e4f('0x2fa'),
                                'type': 'string',
                                'ref': _0x4e4f('0x318'),
                                'defaultValue': _0x4e4f('0x476'),
                                'show': function(_0x4cc04f) {
                                    return _0x4cc04f[_0x4e4f('0x1ec')] == _0x4e4f('0x5fe');
                                }
                            },
                            'gfontStyle': {
                                'type': _0x4e4f('0x299'),
                                'items': {
                                    'fontstyle': {
                                        'ref': 'fontstyle',
                                        'label': _0x4e4f('0x417'),
                                        'type': 'string',
                                        'component': {
                                            'template': _0x4e4f('0x578') + _0x4e4f('0x92') + _0x4e4f('0x121') + '\x09\x09\x09\x09\x09</div>' + _0x4e4f('0x310') + '\x09\x09\x09\x09\x09\x20\x20<button' + _0x4e4f('0x5f2') + '\x09\x09\x09\x09\x09\x09ng-class=\x22{\x27lui-active\x20qui-active\x27:states.bold}\x22' + '\x09\x09\x09\x09\x09\x09ng-disabled=\x22readOnly\x22' + _0x4e4f('0x478') + _0x4e4f('0x2e2') + '\x09\x09\x09\x09\x09\x09<i\x20class=\x22fa\x20fa-bold\x22\x20style=\x22font-color:\x20white;\x20font-size:14px;veritcal-align:middle;\x22></i>' + _0x4e4f('0x3f6') + _0x4e4f('0x523') + _0x4e4f('0x5f2') + '\x09\x09\x09\x09\x09\x09ng-class=\x22{\x27lui-active\x20qui-active\x27:states.italic}\x22' + _0x4e4f('0x136') + _0x4e4f('0x211') + _0x4e4f('0x441') + _0x4e4f('0x6f') + _0x4e4f('0x3f6') + _0x4e4f('0x523') + _0x4e4f('0x5f2') + _0x4e4f('0x1d9') + _0x4e4f('0x136') + _0x4e4f('0x2d4') + _0x4e4f('0x681') + _0x4e4f('0x9e') + '\x09\x09\x09\x09\x09\x20\x20</button>' + '\x09\x09\x09\x09\x09\x20\x20<button' + _0x4e4f('0x5f2') + '\x09\x09\x09\x09\x09\x09ng-class=\x22{\x27lui-active\x20qui-active\x27:states.underline}\x22' + _0x4e4f('0x136') + _0x4e4f('0x5fc') + '\x09\x09\x09\x09\x09\x09q-title-translation=\x22Underline\x22>' + _0x4e4f('0x34d') + _0x4e4f('0x3f6') + _0x4e4f('0x536') + '\x09\x09\x09\x09\x20\x20</div>',
                                            'controller': [_0x4e4f('0x25e'), _0x4e4f('0x3d9'), function(_0x476db2, _0x1f8216) {
                                                function _0x23c83b() {
                                                    _0x476db2[_0x4e4f('0x2c4')] = !![];
                                                    _0x476db2[_0x4e4f('0x4cd')] = _0x476db2[_0x4e4f('0x47b')][_0x4e4f('0x4cd')];
                                                    var _0x4ac93a = _0xbb70d6[_0x4e4f('0x8e')](_0x476db2[_0x4e4f('0x1ab')], _0x476db2[_0x4e4f('0x47b')][_0x4e4f('0x580')]);
                                                    _0x476db2['states'] = {};
                                                    if (_0x4ac93a) {
                                                        if (typeof _0x4ac93a === _0x4e4f('0x19d') && _0x4ac93a[_0x4e4f('0x371')]) {
                                                            _0x476db2[_0x4e4f('0x645')] = !![];
                                                            _0x4ac93a = _0x4ac93a[_0x4e4f('0x371')][_0x4e4f('0x1cd')] || '';
                                                        }
                                                        var _0xf58de4 = _0x4ac93a[_0x4e4f('0x665')](',');
                                                        _0xf58de4['forEach'](function(_0x46d33f) {
                                                            _0x476db2['states'][_0x46d33f] = _0x46d33f;
                                                        });
                                                    }
                                                }
                                                _0x476db2[_0x4e4f('0x48e')] = function(_0x1874d0) {
                                                    if (_0x476db2[_0x4e4f('0x2cf')][_0x1874d0])
                                                        delete _0x476db2[_0x4e4f('0x2cf')][_0x1874d0];
                                                    else
                                                        _0x476db2[_0x4e4f('0x2cf')][_0x1874d0] = _0x1874d0;
                                                    var _0x2d5892 = Object[_0x4e4f('0x427')](_0x476db2[_0x4e4f('0x2cf')])[_0x4e4f('0x561')](',');
                                                    if (_0x476db2[_0x4e4f('0x645')]) {
                                                        var _0x5db293 = _0xbb70d6[_0x4e4f('0x8e')](_0x476db2[_0x4e4f('0x1ab')], _0x476db2['definition'][_0x4e4f('0x580')]);
                                                        if (_0x5db293 && _0x5db293[_0x4e4f('0x371')] && _0x5db293[_0x4e4f('0x371')][_0x4e4f('0x1cd')]) {
                                                            _0x5db293[_0x4e4f('0x371')]['qExpr'] += _0x2d5892;
                                                        } else
                                                            _0xbb70d6['setRefValue'](_0x476db2[_0x4e4f('0x1ab')], _0x476db2[_0x4e4f('0x47b')][_0x4e4f('0x580')], _0x2d5892);
                                                    } else
                                                        _0xbb70d6[_0x4e4f('0x5ff')](_0x476db2['data'], _0x476db2[_0x4e4f('0x47b')]['ref'], _0x2d5892);
                                                    _0x476db2[_0x4e4f('0x3b4')]('saveProperties');
                                                };
                                                _0x476db2['$on'](_0x4e4f('0x5b1'), function() {
                                                    _0x23c83b();
                                                });
                                                _0x23c83b();
                                            }]
                                        }
                                    },
                                    'dropshadow': {
                                        'ref': _0x4e4f('0x3cf'),
                                        'label': _0x4e4f('0xc7'),
                                        'type': _0x4e4f('0x4d6'),
                                        'defaultValue': ![]
                                    }
                                }
                            }
                        }
                    }
                }
            };
            var _0x214bf7 = {
                'type': _0x4e4f('0x299'),
                'label': 'Show',
                'grouped': !![],
                'items': {
                    'show': {
                        'type': 'string',
                        'component': _0x4e4f('0x66e'),
                        'label': _0x4e4f('0x15b'),
                        'ref': _0x4e4f('0x5b4'),
                        'options': [{
                            'value': _0x4e4f('0x572'),
                            'label': _0x4e4f('0x30e'),
                            'tooltip': _0x4e4f('0x30e')
                        }, {
                            'value': _0x4e4f('0x24'),
                            'label': _0x4e4f('0x207'),
                            'tooltip': 'Set\x20a\x20conditional\x20expression'
                        }],
                        'defaultValue': 'always'
                    },
                    'showHide': {
                        'ref': _0x4e4f('0x1af'),
                        'type': 'string',
                        'expression': _0x4e4f('0x572'),
                        'label': _0x4e4f('0x2e5'),
                        'show': function(_0xa40fde) {
                            return _0xa40fde[_0x4e4f('0x5b4')] == _0x4e4f('0x24');
                        }
                    }
                }
            };
            return {
                'type': _0x4e4f('0x299'),
                'component': 'accordion',
                'items': {
                    'sectionText': _0x3496fb,
                    'sectionDataHandling': _0x214bf7,
                    'sectionSettings': _0x510f43,
                    'sectionTooltip': _0x2eb37c,
                    'sectionInteractivity': _0x5b0f85,
                    'sectionAction': _0xb367da,
                    'sectionAbout': _0x848b04
                }
            };
        }[_0x4e4f('0x444')](_0xa183fa, _0x1325fe), _0x4020b9 !== undefined && (_0x1455bc[_0x4e4f('0x85')] = _0x4020b9));
    }, function(_0x268f05, _0x2eb4eb) {
        _0x268f05['exports'] = _0x5098d6;
    }, function(_0x547175, _0x470c62, _0x3d5576) {
        'use strict';
        var _0x190971,
            _0x5d2f9a;
        !(_0x190971 = [], _0x5d2f9a = function() {
            return ['', _0x4e4f('0x429'), _0x4e4f('0x215'), _0x4e4f('0x20d'), _0x4e4f('0x47d'), _0x4e4f('0x104'), _0x4e4f('0x193'), _0x4e4f('0xe3'), _0x4e4f('0x673'), _0x4e4f('0x643'), _0x4e4f('0x244'), _0x4e4f('0x314'), 'angle-double-left', _0x4e4f('0x14f'), 'angle-double-up', _0x4e4f('0x51c'), _0x4e4f('0x32f'), _0x4e4f('0x4c4'), 'angle-up', 'apple', _0x4e4f('0x413'), _0x4e4f('0x1dc'), _0x4e4f('0x28b'), _0x4e4f('0x662'), 'arrow-circle-o-down', 'arrow-circle-o-left', 'arrow-circle-o-right', _0x4e4f('0x3bb'), _0x4e4f('0x5b0'), _0x4e4f('0x18d'), _0x4e4f('0x1b6'), _0x4e4f('0x317'), _0x4e4f('0xf7'), _0x4e4f('0x349'), _0x4e4f('0x1f3'), _0x4e4f('0x648'), _0x4e4f('0x62'), _0x4e4f('0x337'), _0x4e4f('0x540'), 'at', _0x4e4f('0x30c'), 'backward', 'ban', 'bank', _0x4e4f('0x4e5'), _0x4e4f('0x341'), 'barcode', _0x4e4f('0x590'), _0x4e4f('0x467'), _0x4e4f('0x65'), _0x4e4f('0x375'), _0x4e4f('0x5df'), _0x4e4f('0x181'), _0x4e4f('0x137'), _0x4e4f('0x5dd'), _0x4e4f('0x481'), _0x4e4f('0x387'), _0x4e4f('0x526'), _0x4e4f('0x301'), 'bitbucket', 'bitbucket-square', _0x4e4f('0x3c2'), 'bold', _0x4e4f('0x43'), _0x4e4f('0x3a9'), _0x4e4f('0x334'), _0x4e4f('0x172'), 'bookmark-o', _0x4e4f('0x268'), 'btc', _0x4e4f('0x582'), _0x4e4f('0x520'), 'building-o', _0x4e4f('0x4c'), 'bullseye', _0x4e4f('0x1dd'), _0x4e4f('0x4cc'), _0x4e4f('0x9'), _0x4e4f('0x3bc'), 'calendar', _0x4e4f('0x77'), _0x4e4f('0x4d0'), _0x4e4f('0x486'), _0x4e4f('0x174'), _0x4e4f('0x5c0'), _0x4e4f('0xf3'), 'caret-right', 'caret-square-o-down', 'caret-square-o-left', _0x4e4f('0x2e'), _0x4e4f('0x3ae'), 'caret-up', 'cart-arrow-down', _0x4e4f('0x23c'), 'cc', _0x4e4f('0x3fa'), 'cc-discover', _0x4e4f('0x421'), 'cc-paypal', _0x4e4f('0x4f0'), 'cc-visa', _0x4e4f('0x291'), 'chain', _0x4e4f('0x57b'), _0x4e4f('0x1b9'), _0x4e4f('0x50f'), _0x4e4f('0x512'), _0x4e4f('0x159'), 'check-square-o', _0x4e4f('0x1df'), _0x4e4f('0x1f5'), 'chevron-circle-right', _0x4e4f('0x1eb'), _0x4e4f('0xdb'), _0x4e4f('0x52c'), _0x4e4f('0x4dd'), 'chevron-up', 'child', 'circle', 'circle-o', _0x4e4f('0x218'), _0x4e4f('0x87'), _0x4e4f('0x503'), _0x4e4f('0x37'), _0x4e4f('0x36a'), _0x4e4f('0x241'), _0x4e4f('0x436'), _0x4e4f('0x63'), 'cny', _0x4e4f('0x25d'), 'code-fork', _0x4e4f('0x23d'), 'coffee', _0x4e4f('0x2ca'), _0x4e4f('0x682'), _0x4e4f('0x245'), 'comment', 'comment-o', _0x4e4f('0x352'), _0x4e4f('0x473'), 'compass', _0x4e4f('0x2c5'), _0x4e4f('0x502'), _0x4e4f('0x177'), _0x4e4f('0x28d'), 'credit-card', _0x4e4f('0x37c'), _0x4e4f('0xfe'), _0x4e4f('0x4c9'), _0x4e4f('0x139'), _0x4e4f('0x328'), _0x4e4f('0x5af'), _0x4e4f('0x4ad'), _0x4e4f('0x1d4'), _0x4e4f('0x3b7'), _0x4e4f('0x1ea'), 'dedent', _0x4e4f('0x57d'), 'desktop', 'deviantart', _0x4e4f('0x67'), _0x4e4f('0x300'), _0x4e4f('0x294'), _0x4e4f('0x577'), 'download', _0x4e4f('0x5ef'), _0x4e4f('0xce'), _0x4e4f('0x412'), _0x4e4f('0x67f'), _0x4e4f('0x1'), _0x4e4f('0x55f'), _0x4e4f('0x396'), 'empire', 'envelope', _0x4e4f('0x52f'), _0x4e4f('0x20c'), 'eraser', _0x4e4f('0x5f8'), _0x4e4f('0x4bb'), _0x4e4f('0xe'), 'exclamation', _0x4e4f('0x649'), _0x4e4f('0x1fc'), _0x4e4f('0x222'), _0x4e4f('0x55e'), _0x4e4f('0x1fd'), _0x4e4f('0x583'), _0x4e4f('0x1c5'), _0x4e4f('0x261'), 'facebook', 'facebook-f', _0x4e4f('0x27d'), _0x4e4f('0x316'), _0x4e4f('0x5b9'), _0x4e4f('0x43f'), 'fax', 'female', _0x4e4f('0x4ac'), _0x4e4f('0x54b'), 'file-archive-o', _0x4e4f('0x1e2'), 'file-code-o', 'file-excel-o', _0x4e4f('0x47c'), _0x4e4f('0x217'), _0x4e4f('0x364'), _0x4e4f('0x675'), _0x4e4f('0x538'), _0x4e4f('0x265'), 'file-powerpoint-o', _0x4e4f('0x595'), _0x4e4f('0x66b'), _0x4e4f('0x1be'), _0x4e4f('0xc6'), _0x4e4f('0x3ac'), _0x4e4f('0x488'), _0x4e4f('0x131'), 'film', _0x4e4f('0x4c2'), _0x4e4f('0x29d'), _0x4e4f('0x31d'), _0x4e4f('0x5c'), 'flag-checkered', _0x4e4f('0x240'), _0x4e4f('0x59f'), _0x4e4f('0x11b'), _0x4e4f('0x63e'), _0x4e4f('0x2e7'), _0x4e4f('0x9f'), _0x4e4f('0x1e4'), _0x4e4f('0x4f7'), _0x4e4f('0x202'), _0x4e4f('0x1de'), _0x4e4f('0xa4'), _0x4e4f('0x524'), _0x4e4f('0x170'), _0x4e4f('0x389'), _0x4e4f('0x4e8'), 'gamepad', 'gavel', 'gbp', 'ge', 'gear', 'gears', _0x4e4f('0x20b'), 'gift', _0x4e4f('0x490'), _0x4e4f('0x4af'), _0x4e4f('0xf6'), _0x4e4f('0x1a8'), _0x4e4f('0xe2'), _0x4e4f('0x615'), 'glass', _0x4e4f('0x4aa'), _0x4e4f('0x122'), _0x4e4f('0x2cd'), 'google-plus-square', 'google-wallet', _0x4e4f('0x422'), _0x4e4f('0x4fb'), 'group', _0x4e4f('0x541'), _0x4e4f('0x584'), _0x4e4f('0x239'), 'hand-o-left', _0x4e4f('0x63b'), _0x4e4f('0x575'), _0x4e4f('0x16a'), _0x4e4f('0x612'), 'headphones', 'heart', _0x4e4f('0x56e'), _0x4e4f('0x55b'), _0x4e4f('0x430'), _0x4e4f('0x3da'), _0x4e4f('0x338'), _0x4e4f('0xac'), _0x4e4f('0x23'), 'ils', 'image', _0x4e4f('0x2c'), 'indent', _0x4e4f('0x531'), 'info-circle', _0x4e4f('0x23a'), _0x4e4f('0x49c'), _0x4e4f('0x206'), _0x4e4f('0x12c'), _0x4e4f('0x1f7'), _0x4e4f('0x24f'), _0x4e4f('0x16d'), _0x4e4f('0x3b8'), _0x4e4f('0x12f'), 'keyboard-o', 'krw', _0x4e4f('0x62b'), _0x4e4f('0x45c'), _0x4e4f('0x4cb'), 'lastfm-square', _0x4e4f('0x214'), _0x4e4f('0x6e'), _0x4e4f('0x59a'), _0x4e4f('0x657'), _0x4e4f('0x407'), 'level-up', 'life-bouy', _0x4e4f('0x688'), _0x4e4f('0x112'), _0x4e4f('0x2f7'), _0x4e4f('0x5e9'), _0x4e4f('0x78'), 'link', _0x4e4f('0x492'), _0x4e4f('0x185'), _0x4e4f('0x3ab'), _0x4e4f('0x5f9'), _0x4e4f('0x11d'), _0x4e4f('0x21d'), _0x4e4f('0x2d8'), 'location-arrow', _0x4e4f('0x130'), 'long-arrow-down', 'long-arrow-left', 'long-arrow-right', _0x4e4f('0x519'), _0x4e4f('0x6'), _0x4e4f('0x42'), 'mail-forward', _0x4e4f('0x47a'), _0x4e4f('0x320'), _0x4e4f('0x449'), _0x4e4f('0x12'), 'mars', _0x4e4f('0x33f'), _0x4e4f('0x169'), _0x4e4f('0x209'), 'mars-stroke-v', _0x4e4f('0x2c0'), _0x4e4f('0x616'), _0x4e4f('0x1cf'), 'medkit', 'meh-o', _0x4e4f('0x5fa'), 'microphone', _0x4e4f('0x399'), _0x4e4f('0xfa'), _0x4e4f('0x52d'), _0x4e4f('0x5d0'), _0x4e4f('0x3b0'), _0x4e4f('0x1e6'), _0x4e4f('0xa9'), _0x4e4f('0x1ac'), _0x4e4f('0x197'), 'mortar-board', _0x4e4f('0x96'), _0x4e4f('0x342'), _0x4e4f('0x69'), 'neuter', _0x4e4f('0xb3'), 'openid', _0x4e4f('0x5a5'), 'pagelines', _0x4e4f('0x10a'), _0x4e4f('0x42b'), 'paper-plane-o', _0x4e4f('0xa5'), 'paragraph', _0x4e4f('0x1e9'), _0x4e4f('0x2bb'), 'paw', 'paypal', _0x4e4f('0x5dc'), _0x4e4f('0x3c8'), 'pencil-square-o', _0x4e4f('0xa3'), 'phone-square', _0x4e4f('0x564'), _0x4e4f('0x1ee'), 'pie-chart', _0x4e4f('0x2b0'), 'pied-piper-alt', _0x4e4f('0x116'), _0x4e4f('0x2bd'), _0x4e4f('0x400'), _0x4e4f('0x25b'), _0x4e4f('0x3d8'), _0x4e4f('0x636'), _0x4e4f('0x25f'), _0x4e4f('0x160'), _0x4e4f('0x26'), _0x4e4f('0x3af'), _0x4e4f('0x2c9'), _0x4e4f('0x10f'), _0x4e4f('0x333'), _0x4e4f('0x2bc'), _0x4e4f('0x2f4'), 'qq', _0x4e4f('0x62e'), 'question', 'question-circle', _0x4e4f('0x3ee'), _0x4e4f('0x3e7'), 'ra', _0x4e4f('0x44'), _0x4e4f('0x678'), _0x4e4f('0x329'), _0x4e4f('0xcc'), _0x4e4f('0x585'), 'refresh', _0x4e4f('0x21b'), _0x4e4f('0x4ea'), _0x4e4f('0xe1'), _0x4e4f('0x30'), 'reply', _0x4e4f('0xb6'), _0x4e4f('0x221'), _0x4e4f('0x64a'), _0x4e4f('0x55d'), 'rocket', _0x4e4f('0x28c'), _0x4e4f('0x530'), _0x4e4f('0x456'), 'rss', _0x4e4f('0x58d'), 'rub', _0x4e4f('0x5a3'), _0x4e4f('0x44f'), _0x4e4f('0x64f'), _0x4e4f('0x2f3'), 'search', 'search-minus', _0x4e4f('0x3ec'), 'sellsy', _0x4e4f('0x282'), _0x4e4f('0x20e'), _0x4e4f('0x2b'), _0x4e4f('0xbd'), _0x4e4f('0xb8'), _0x4e4f('0x13'), _0x4e4f('0x27c'), _0x4e4f('0x60c'), _0x4e4f('0x627'), _0x4e4f('0x53c'), _0x4e4f('0x450'), _0x4e4f('0x416'), _0x4e4f('0xd1'), 'shopping-cart', _0x4e4f('0x31a'), 'sign-out', _0x4e4f('0x276'), _0x4e4f('0x305'), _0x4e4f('0x2ea'), _0x4e4f('0x646'), _0x4e4f('0x2dc'), _0x4e4f('0x64'), 'sliders', _0x4e4f('0x17f'), _0x4e4f('0x395'), _0x4e4f('0x4be'), _0x4e4f('0x1c'), _0x4e4f('0x1b2'), _0x4e4f('0x442'), _0x4e4f('0x41e'), 'sort-amount-desc', 'sort-asc', _0x4e4f('0x431'), 'sort-down', _0x4e4f('0x5cb'), 'sort-numeric-desc', 'sort-up', _0x4e4f('0x23e'), _0x4e4f('0x539'), _0x4e4f('0xe8'), _0x4e4f('0x518'), 'spotify', _0x4e4f('0x579'), _0x4e4f('0x9a'), _0x4e4f('0x671'), _0x4e4f('0x3d7'), _0x4e4f('0x238'), 'star-half', 'star-half-empty', 'star-half-full', _0x4e4f('0x535'), 'star-o', _0x4e4f('0x382'), 'steam-square', 'step-backward', _0x4e4f('0x323'), _0x4e4f('0x5a1'), _0x4e4f('0x41'), _0x4e4f('0x61a'), _0x4e4f('0x40f'), 'stumbleupon', _0x4e4f('0x48d'), _0x4e4f('0x70'), _0x4e4f('0x2b4'), 'suitcase', _0x4e4f('0x659'), _0x4e4f('0x26c'), _0x4e4f('0x59b'), _0x4e4f('0x45b'), _0x4e4f('0x619'), _0x4e4f('0x17d'), _0x4e4f('0x11'), _0x4e4f('0x2f'), 'tasks', _0x4e4f('0x5b8'), _0x4e4f('0x81'), _0x4e4f('0x31'), _0x4e4f('0x24c'), _0x4e4f('0x5d6'), 'th', _0x4e4f('0x447'), _0x4e4f('0x1c0'), _0x4e4f('0x542'), _0x4e4f('0x1bc'), _0x4e4f('0x26f'), 'thumbs-o-up', 'thumbs-up', 'ticket', _0x4e4f('0x263'), _0x4e4f('0x33d'), _0x4e4f('0x5e0'), _0x4e4f('0x4d8'), _0x4e4f('0x3c7'), _0x4e4f('0x5b6'), _0x4e4f('0x2fd'), 'toggle-on', 'toggle-right', 'toggle-up', _0x4e4f('0x484'), _0x4e4f('0x36b'), _0x4e4f('0x549'), _0x4e4f('0x75'), _0x4e4f('0x2df'), _0x4e4f('0x61b'), _0x4e4f('0x53d'), _0x4e4f('0x1e8'), _0x4e4f('0x195'), 'try', _0x4e4f('0x20a'), _0x4e4f('0x74'), _0x4e4f('0x36d'), _0x4e4f('0x125'), _0x4e4f('0x624'), 'twitter', 'twitter-square', _0x4e4f('0x41f'), _0x4e4f('0x144'), _0x4e4f('0x609'), _0x4e4f('0x1da'), 'unlink', _0x4e4f('0x2a2'), _0x4e4f('0x284'), 'unsorted', 'upload', 'usd', 'user', _0x4e4f('0x91'), _0x4e4f('0x596'), _0x4e4f('0x49f'), _0x4e4f('0x1d8'), _0x4e4f('0x528'), _0x4e4f('0x29e'), _0x4e4f('0x208'), _0x4e4f('0x101'), _0x4e4f('0x36e'), 'video-camera', _0x4e4f('0x24b'), 'vine', 'vk', 'volume-down', 'volume-off', 'volume-up', _0x4e4f('0x138'), _0x4e4f('0x479'), _0x4e4f('0x5fb'), 'weixin', 'whatsapp', _0x4e4f('0x164'), _0x4e4f('0x1b5'), _0x4e4f('0x262'), _0x4e4f('0x18b'), _0x4e4f('0x2a1'), _0x4e4f('0x534'), _0x4e4f('0x448'), 'xing-square', 'yahoo', _0x4e4f('0x5c7'), _0x4e4f('0x58c'), _0x4e4f('0x5d9'), _0x4e4f('0x42a'), _0x4e4f('0xd3')];
        }[_0x4e4f('0x444')](_0x470c62, _0x190971), _0x5d2f9a !== undefined && (_0x547175[_0x4e4f('0x85')] = _0x5d2f9a));
    }, , , , , , function(_0x1715e2, _0x373383, _0x28b4cf) {
        'use strict';
        var _0x321326,
            _0x2103d9;
        !(_0x321326 = [_0x28b4cf(0x15), _0x28b4cf(0x7), _0x28b4cf(0x8), _0x28b4cf(0x2)], _0x2103d9 = function(_0x3f168f, _0x47280f, _0x499cbb, _0x3e8b3d) {
            var _0x16aeef = {
                'template': _0x3f168f,
                'controller': [_0x4e4f('0x25e'), function($scope) {
                    var _0x3900a4 = $scope[_0x4e4f('0x47b')]['items'] || {};
                    var _0x14d98b = function() {
                        return $scope[_0x4e4f('0x1ab')];
                    };
                    $scope[_0x4e4f('0x299')] = Object['keys'](_0x3900a4)[_0x4e4f('0x4c2')](function(_0x26ca4f) {
                        return _0x3900a4[_0x26ca4f];
                    })[_0x4e4f('0x48')](function(_0x385f15) {
                        var _0xe1f2b1 = _0x3900a4[_0x385f15];
                        var _0x16235d = {
                            'component': _0x47280f['findComponent'](_0xe1f2b1),
                            'definition': _0xe1f2b1,
                            'data': _0x14d98b,
                            'key': _0x385f15,
                            'value': _0xe1f2b1[_0x4e4f('0x379')],
                            'icon': _0xe1f2b1[_0x4e4f('0x350')],
                            'title': _0xe1f2b1[_0x4e4f('0x4cd')],
                            'show': _0xe1f2b1['show'],
                            'labelPlacement': _0xe1f2b1[_0x4e4f('0x64d')] || _0x4e4f('0x42c'),
                            'labelStyle': _0xe1f2b1['labelStyle'] || ''
                        };
                        _0x499cbb[_0x4e4f('0x3f5')](_0x16235d, _0xe1f2b1, _0x14d98b);
                        _0x499cbb[_0x4e4f('0x331')](_0x16235d, _0xe1f2b1, _0x14d98b);
                        return _0x16235d;
                    });
                    $scope[_0x4e4f('0x3b5')] = $scope[_0x4e4f('0x47b')][_0x4e4f('0x3b5')] || !0x1;
                    $scope['sizeClass'] = $scope[_0x4e4f('0x47b')]['size'] || _0x4e4f('0x405');
                    $scope[_0x4e4f('0x510')] = $scope[_0x4e4f('0x299')][_0x4e4f('0x3c5')] > 0x1 && $scope['items'][_0x4e4f('0x3c5')] < 0x5 ? _0x4e4f('0x115') + $scope[_0x4e4f('0x299')][_0x4e4f('0x3c5')] : '';
                    if ($scope[_0x4e4f('0x47b')][_0x4e4f('0x40c')] === ![]) {
                        $scope['listClass'] += _0x4e4f('0x3ff');
                    }
                    _0x499cbb[_0x4e4f('0x3f5')]($scope, $scope[_0x4e4f('0x47b')], _0x14d98b, $scope[_0x4e4f('0x2fb')]['handler']);
                    _0x499cbb['defineVisible']($scope, $scope[_0x4e4f('0x2fb')][_0x4e4f('0xf8')]);
                    _0x499cbb[_0x4e4f('0x4d')]($scope, $scope[_0x4e4f('0x2fb')][_0x4e4f('0xf8')]);
                    _0x499cbb[_0x4e4f('0x5c6')]($scope, $scope[_0x4e4f('0x2fb')][_0x4e4f('0xf8')]);
                    _0x499cbb[_0x4e4f('0x483')]($scope, $scope[_0x4e4f('0x47b')], _0x14d98b);
                    $scope[_0x4e4f('0x4fc')] = function(_0x5c8e0b) {
                        if (_0x3e8b3d['isArray']($scope[_0x4e4f('0x379')])) {
                            if (_0x3e8b3d[_0x4e4f('0x604')]($scope['value'], _0x5c8e0b[_0x4e4f('0x379')])) {
                                if ($scope[_0x4e4f('0x379')][_0x4e4f('0x3c5')] > 0x1) {
                                    $scope[_0x4e4f('0x379')] = _0x3e8b3d[_0x4e4f('0x200')]($scope[_0x4e4f('0x379')], _0x5c8e0b[_0x4e4f('0x379')]);
                                } else {
                                    return;
                                }
                            } else {
                                $scope[_0x4e4f('0x379')][_0x4e4f('0x60')](_0x5c8e0b[_0x4e4f('0x379')]);
                            }
                        } else {
                            $scope[_0x4e4f('0x379')] = _0x5c8e0b[_0x4e4f('0x379')];
                        }
                        $scope[_0x4e4f('0x543')]();
                    };
                    $scope[_0x4e4f('0x644')] = function(_0x5c944f) {
                        if (_0x3e8b3d['isArray']($scope[_0x4e4f('0x379')])) {
                            return _0x3e8b3d[_0x4e4f('0x604')]($scope[_0x4e4f('0x379')], _0x5c944f[_0x4e4f('0x379')]);
                        }
                        return _0x5c944f[_0x4e4f('0x379')] === $scope['value'];
                    };
                    $scope['options'] = [];
                    $scope[_0x4e4f('0x56')] = function(_0x375e50) {
                        if (_0x375e50 % 0x3 === 0x0 || _0x375e50 >= 0x5) {
                            return {
                                'width': _0x4e4f('0x109')
                            };
                        } else {
                            return {
                                'width': '45%'
                            };
                        }
                    };
                }]
            };
            return _0x16aeef;
        }[_0x4e4f('0x444')](_0x373383, _0x321326), _0x2103d9 !== undefined && (_0x1715e2[_0x4e4f('0x85')] = _0x2103d9));
    }, function(_0x5463ba, _0x51ae1d) {
        _0x5463ba[_0x4e4f('0x85')] = '<div\x20class=\x22pp-component\x20vzb-pp-item-selection-list\x20pp-selection-list-component\x20vzb\x22\x20ng-if=visible\x20tcl=cl-item-selection-list>\x20<div\x20class=\x22pp-item-label\x20vzb-pp-label\x22\x20ng-if=label>{{label}}</div>\x20<ul\x20class=\x22pp-item-selection-list\x20cl-item-selection-list\x20{{listClass}}\x20{{sizeClass}}\x22\x20ng-class=\x22{\x27vertical\x27\x20:\x20!horizontal}\x22>\x20<li\x20ng-repeat=\x22item\x20in\x20items\x22\x20qva-activate=onChange(item)\x20ng-show=item.visible\x20ng-style=getWidthStyle(items.length)\x20ng-class=\x22{\x27pp-active\x27\x20:\x20isActive(item),\x20}\x22>\x20<div\x20ng-show=\x22item.labelPlacement\x20==\x20\x27top\x27\x22\x20class=label>\x20<span>{{item.label}}</span>\x20</div>\x20<button\x20ng-class=\x22{\x27item\x27:true,\x27selected\x27\x20:\x20isActive(item)}\x22\x20title={{item.title}}>\x20<div\x20include-pp-component\x20x-component=item.component\x20x-definition=item.definition\x20x-data=data\x20x-args=args></div>\x20</button>\x20<div\x20ng-show=\x22item.labelPlacement\x20==\x20\x27bottom\x27\x22\x20class=label>\x20<span>{{item.label}}</span>\x20</div>\x20</li>\x20</ul>\x20</div>';
    }, function(_0x148274, _0x555e69, _0x57158f) {
        'use strict';
        var _0x2db68d,
            _0xab0aa5;
        !(_0x2db68d = [_0x57158f(0x17), _0x57158f(0x7), _0x57158f(0x8)], _0xab0aa5 = function(_0x1b914a, _0x55c5c7, _0x5b0659) {
            var _0x1c99d2 = {
                'template': _0x1b914a,
                'controller': [_0x4e4f('0x25e'), function($scope) {
                    var _0x2b049e = function() {
                        return $scope[_0x4e4f('0x1ab')];
                    };
                    $scope[_0x4e4f('0x183')] = $scope[_0x4e4f('0x47b')][_0x4e4f('0x350')] || $scope[_0x4e4f('0x47b')][_0x4e4f('0x379')];
                    $scope[_0x4e4f('0x34f')] = $scope[_0x4e4f('0x47b')][_0x4e4f('0x405')] ? _0x4e4f('0x405') : '';
                    $scope['classPrefix'] = _0x4e4f('0x689');
                    $scope[_0x4e4f('0x4f')] = {
                        'width': _0x4e4f('0x601')
                    };
                    _0x5b0659['defineLabel']($scope, $scope[_0x4e4f('0x47b')], _0x2b049e, $scope[_0x4e4f('0x2fb')][_0x4e4f('0xf8')]);
                    _0x5b0659[_0x4e4f('0x331')]($scope, $scope[_0x4e4f('0x2fb')]['handler']);
                    _0x5b0659[_0x4e4f('0x4d')]($scope, $scope['args'][_0x4e4f('0xf8')]);
                    _0x5b0659[_0x4e4f('0x5c6')]($scope, $scope[_0x4e4f('0x2fb')][_0x4e4f('0xf8')]);
                    _0x5b0659[_0x4e4f('0x483')]($scope, $scope[_0x4e4f('0x47b')], _0x2b049e);
                }]
            };
            return _0x1c99d2;
        }[_0x4e4f('0x444')](_0x555e69, _0x2db68d), _0xab0aa5 !== undefined && (_0x148274['exports'] = _0xab0aa5));
    }, function(_0xc8f172, _0x1eea8e) {
        _0xc8f172[_0x4e4f('0x85')] = _0x4e4f('0x35c');
    }, , function(_0x5d4fa2, _0x4dc92f, _0x24cb59) {
        'use strict';
        var _0x561cc5,
            _0x446fd3;
        !(_0x561cc5 = [_0x24cb59(0x1)], _0x446fd3 = function(_0x580a16) {
            var _0x2be7cb = _0x580a16[_0x4e4f('0x410')]();
            function _0x1fdfe7(_0x54c174, _0x52b22b, _0x1da460) {
                var _0x4526a3;
                if (_0x2be7cb && _0x1da460) {
                    var _0x4cb093 = _0x580a16['navigation'][_0x4e4f('0x107')]() !== 'edit';
                    try {
                        var _0x4526a3;
                        var _0x4ba521 = ![];
                        var _0x18fd57 = _0x2be7cb['global'];
                        _0x18fd57[_0x4e4f('0x537')]()[_0x4e4f('0x654')](function(_0xa4beac) {
                            _0x4ba521 = _0xa4beac && _0xa4beac[_0x4e4f('0x4d2')];
                            if (_0x4ba521) {
                                if (_0x1da460['startsWith'](_0x4e4f('0x420')) || _0x1da460[_0x4e4f('0x16e')](_0x4e4f('0x1fa')) || _0x1da460[_0x4e4f('0x16e')](_0x4e4f('0xf4'))) {
                                    var _0x5d3fd7;
                                    var _0x508f5c = _0x1da460[_0x4e4f('0x14e')](_0x1da460[_0x4e4f('0x8d')]('/') + 0x1);
                                    new Promise(function(_0x5b6449) {
                                        if (window['vatoAppContent']) {
                                            _0x5b6449(window[_0x4e4f('0x17a')]);
                                        } else {
                                            _0x54c174[_0x4e4f('0x2a')](_0x4e4f('0x33b'))[_0x4e4f('0x654')](function(_0x5da874) {
                                                _0x5b6449(_0x5da874);
                                            });
                                        }
                                    })[_0x4e4f('0x654')](function(_0x242afb) {
                                        window[_0x4e4f('0x17a')] = _0x242afb;
                                        _0x5d3fd7 = _0x242afb[_0x4e4f('0x4c2')](function(_0x3cb00f) {
                                            return _0x3cb00f[_0x4e4f('0x15')] === _0x4e4f('0x4b4') + _0x508f5c;
                                        })[_0x4e4f('0x48')](function(_0x42f420) {
                                            return _0x42f420[_0x4e4f('0x390')];
                                        });
                                        if (_0x5d3fd7[_0x4e4f('0x3c5')] > 0x0 && _0x5d3fd7[0x0] !== _0x1da460) {
                                            _0x4526a3 = {
                                                'qPath': _0x4e4f('0x3ea'),
                                                'qOp': _0x4e4f('0x63f'),
                                                'qValue': '\x22' + _0x5d3fd7[0x0] + '\x22'
                                            };
                                            _0x54c174[_0x4e4f('0x54d')][_0x4e4f('0x4d7')](_0x52b22b)[_0x4e4f('0x654')](function(_0x22be35) {
                                                _0x22be35[_0x4e4f('0x5ce')]([_0x4526a3], _0x4cb093);
                                            });
                                            return _0x5d3fd7[0x0];
                                        }
                                    });
                                }
                            } else {
                                if (_0x1da460[_0x4e4f('0x16e')]('/appcontent')) {
                                    var _0xd533c0;
                                    var _0x3e4251 = _0x1da460[_0x4e4f('0x3b6')](/appcontent\/.*?\//);
                                    if (_0x3e4251 && _0x3e4251[_0x4e4f('0x3c5')] > 0x0) {
                                        var _0x44fc25 = _0x3e4251[0x0]['replace'](_0x4e4f('0x339'), '')['replace']('/', '');
                                        var _0x31b3e1 = _0x1da460[_0x4e4f('0x3b6')](/([a-f|0-9]+-){3,}/) ? !![] : ![];
                                        if (_0x31b3e1 && _0x44fc25 !== _0x2be7cb['id']) {
                                            _0xd533c0 = _0x1da460['replace'](_0x44fc25, _0x2be7cb['id']);
                                            if (_0xd533c0 !== _0x1da460) {
                                                _0x4526a3 = {
                                                    'qPath': _0x4e4f('0x3ea'),
                                                    'qOp': _0x4e4f('0x63f'),
                                                    'qValue': '\x22' + _0xd533c0 + '\x22'
                                                };
                                                _0x54c174[_0x4e4f('0x54d')]['getObject'](_0x52b22b)[_0x4e4f('0x654')](function(_0x3d15e5) {
                                                    _0x3d15e5[_0x4e4f('0x5ce')]([_0x4526a3], _0x4cb093);
                                                });
                                                return _0xd533c0;
                                            }
                                        }
                                    }
                                } else if (_0x1da460[_0x4e4f('0x16e')](_0x4e4f('0x1fa'))) {
                                    var _0xd533c0 = _0x4e4f('0x566') + _0x2be7cb['id'] + _0x1da460[_0x4e4f('0x14e')](_0x1da460['lastIndexOf']('/'));
                                    if (_0xd533c0 !== _0x1da460) {
                                        _0x4526a3 = {
                                            'qPath': '/bgimage',
                                            'qOp': 'Replace',
                                            'qValue': '\x22' + _0xd533c0 + '\x22'
                                        };
                                        _0x54c174[_0x4e4f('0x54d')][_0x4e4f('0x4d7')](_0x52b22b)[_0x4e4f('0x654')](function(_0x457b70) {
                                            _0x457b70[_0x4e4f('0x5ce')]([_0x4526a3], _0x4cb093);
                                        });
                                        return _0xd533c0;
                                    }
                                } else if (_0x1da460['startsWith'](_0x4e4f('0xf4'))) {
                                    var _0x5d3fd7 = [];
                                    var _0x508f5c = _0x1da460['substring'](_0x1da460[_0x4e4f('0x8d')]('/') + 0x1);
                                    var _0x3e4251 = _0x1da460[_0x4e4f('0x3b6')](/content\/.*?\//);
                                    var _0x2b2fd2;
                                    var _0x4ff432;
                                    if (_0x3e4251 && _0x3e4251[_0x4e4f('0x3c5')] > 0x0) {
                                        var _0x44fc25 = _0x3e4251[0x0]['replace']('content/', '')[_0x4e4f('0x45a')]('/', '');
                                        _0x54c174[_0x4e4f('0x2a')](_0x44fc25)[_0x4e4f('0x654')](function(_0x3a6e3f) {
                                            if (_0x3a6e3f[_0x4e4f('0x3c5')] > 0x0) {
                                                _0x5d3fd7 = _0x3a6e3f[_0x4e4f('0x4c2')](function(_0x334d9) {
                                                    return _0x334d9[_0x4e4f('0x15')][_0x4e4f('0x14e')](_0x1da460['lastIndexOf']('/') + 0x1) === _0x508f5c;
                                                })[_0x4e4f('0x48')](function(_0x1119a9) {
                                                    return _0x1119a9[_0x4e4f('0x390')];
                                                });
                                            }
                                            if (_0x5d3fd7['length'] == 0x0) {
                                                new Promise(function(_0x3fc721) {
                                                    if (window[_0x4e4f('0x17a')]) {
                                                        _0x3fc721(window['vatoAppContent']);
                                                    } else {
                                                        _0x54c174['getLibraryContent']('appcontent')['then'](function(_0x1e688b) {
                                                            if (_0x1e688b[_0x4e4f('0x3c5')] == 0x0) {
                                                                _0x54c174[_0x4e4f('0x2a')](_0x2be7cb['id'])[_0x4e4f('0x654')](function(_0x16be9f) {
                                                                    _0x3fc721(_0x16be9f);
                                                                });
                                                            } else {
                                                                _0x3fc721(_0x1e688b);
                                                            }
                                                        });
                                                    }
                                                })[_0x4e4f('0x654')](function(_0x58b18b) {
                                                    window[_0x4e4f('0x17a')] = _0x58b18b;
                                                    _0x5d3fd7 = _0x58b18b[_0x4e4f('0x4c2')](function(_0x3fe0de) {
                                                        return _0x3fe0de[_0x4e4f('0x15')][_0x4e4f('0x16e')](_0x4e4f('0x420')) && _0x3fe0de['qUrlDef']['substring'](_0x3fe0de['qUrlDef']['lastIndexOf']('/') + 0x1) === _0x508f5c;
                                                    })['map'](function(_0x2489c1) {
                                                        return _0x2489c1[_0x4e4f('0x390')];
                                                    });
                                                    if (_0x5d3fd7[_0x4e4f('0x3c5')] > 0x0 && _0x5d3fd7[0x0] !== _0x1da460) {
                                                        _0x4526a3 = {
                                                            'qPath': _0x4e4f('0x3ea'),
                                                            'qOp': _0x4e4f('0x63f'),
                                                            'qValue': '\x22' + _0x5d3fd7[0x0] + '\x22'
                                                        };
                                                        _0x54c174[_0x4e4f('0x54d')][_0x4e4f('0x4d7')](_0x52b22b)[_0x4e4f('0x654')](function(_0x5e2f94) {
                                                            _0x5e2f94[_0x4e4f('0x5ce')]([_0x4526a3], _0x4cb093);
                                                        });
                                                        return _0x5d3fd7[0x0];
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    } catch (_0x37d067) {
                        console[_0x4e4f('0xe6')](_0x37d067);
                    }
                }
                return _0x1da460;
            }
            return {
                'updateContentLibraryItem': _0x1fdfe7
            };
        }[_0x4e4f('0x444')](_0x4dc92f, _0x561cc5), _0x446fd3 !== undefined && (_0x5d4fa2[_0x4e4f('0x85')] = _0x446fd3));
    }, function(_0x3b2024, _0x2b7ea5, _0x3490bc) {
        'use strict';
        var _0x5bac96,
            _0x311a47;
        var _0x1e04c5 = this && this[_0x4e4f('0x30a')] || function(_0x89be25, _0x36c370, _0x387ad8, _0x1c025d) {
            function _0x60bb14(_0x794fb0) {
                return _0x794fb0 instanceof _0x387ad8 ? _0x794fb0 : new _0x387ad8(function(_0x4259f5) {
                    _0x4259f5(_0x794fb0);
                });
            }
            return new (_0x387ad8 || (_0x387ad8 = Promise))(function(_0x55fe7a, _0x5935db) {
                function _0x41c154(_0x2bb9f0) {
                    try {
                        _0x539528(_0x1c025d['next'](_0x2bb9f0));
                    } catch (_0x2c3308) {
                        _0x5935db(_0x2c3308);
                    }
                }
                function _0x50f8e2(_0x19a970) {
                    try {
                        _0x539528(_0x1c025d[_0x4e4f('0x2a8')](_0x19a970));
                    } catch (_0x12e8a9) {
                        _0x5935db(_0x12e8a9);
                    }
                }
                function _0x539528(_0x29062e) {
                    _0x29062e[_0x4e4f('0x634')] ? _0x55fe7a(_0x29062e[_0x4e4f('0x379')]) : _0x60bb14(_0x29062e['value'])[_0x4e4f('0x654')](_0x41c154, _0x50f8e2);
                }
                _0x539528((_0x1c025d = _0x1c025d[_0x4e4f('0x444')](_0x89be25, _0x36c370 || []))[_0x4e4f('0x1ca')]());
            });
        };
        var _0x271c9c = this && this[_0x4e4f('0x191')] || function(_0x245e75, _0x4e7b11) {
            var _0x40187d = {
                    'label': 0x0,
                    'sent': function() {
                        if (_0x3ea1c9[0x0] & 0x1)
                            throw _0x3ea1c9[0x1];
                        return _0x3ea1c9[0x1];
                    },
                    'trys': [],
                    'ops': []
                },
                _0x472d34,
                _0xf2380a,
                _0x3ea1c9,
                _0x19a0e2;
            return _0x19a0e2 = {
                'next': _0x395009(0x0),
                'throw': _0x395009(0x1),
                'return': _0x395009(0x2)
            }, typeof Symbol === _0x4e4f('0x4c1') && (_0x19a0e2[Symbol[_0x4e4f('0x4fd')]] = function() {
                return this;
            }), _0x19a0e2;
            function _0x395009(_0x18d5ae) {
                return function(_0xb9a431) {
                    return _0x7b9258([_0x18d5ae, _0xb9a431]);
                };
            }
            function _0x7b9258(_0x71c417) {
                if (_0x472d34)
                    throw new TypeError(_0x4e4f('0x3a4'));
                while (_0x40187d)
                    try {
                        if (_0x472d34 = 0x1, _0xf2380a && (_0x3ea1c9 = _0x71c417[0x0] & 0x2 ? _0xf2380a['return'] : _0x71c417[0x0] ? _0xf2380a[_0x4e4f('0x2a8')] || ((_0x3ea1c9 = _0xf2380a[_0x4e4f('0x194')]) && _0x3ea1c9[_0x4e4f('0x35b')](_0xf2380a), 0x0) : _0xf2380a[_0x4e4f('0x1ca')]) && !(_0x3ea1c9 = _0x3ea1c9[_0x4e4f('0x35b')](_0xf2380a, _0x71c417[0x1]))['done'])
                            return _0x3ea1c9;
                        if (_0xf2380a = 0x0, _0x3ea1c9)
                            _0x71c417 = [_0x71c417[0x0] & 0x2, _0x3ea1c9[_0x4e4f('0x379')]];
                        switch (_0x71c417[0x0]) {
                        case 0x0:
                        case 0x1:
                            _0x3ea1c9 = _0x71c417;
                            break;
                        case 0x4:
                            _0x40187d['label']++;
                            return {
                                'value': _0x71c417[0x1],
                                'done': ![]
                            };
                        case 0x5:
                            _0x40187d[_0x4e4f('0x4cd')]++;
                            _0xf2380a = _0x71c417[0x1];
                            _0x71c417 = [0x0];
                            continue;
                        case 0x7:
                            _0x71c417 = _0x40187d[_0x4e4f('0x19')][_0x4e4f('0x1ba')]();
                            _0x40187d['trys'][_0x4e4f('0x1ba')]();
                            continue;
                        default:
                            if (!(_0x3ea1c9 = _0x40187d[_0x4e4f('0x3b1')], _0x3ea1c9 = _0x3ea1c9[_0x4e4f('0x3c5')] > 0x0 && _0x3ea1c9[_0x3ea1c9[_0x4e4f('0x3c5')] - 0x1]) && (_0x71c417[0x0] === 0x6 || _0x71c417[0x0] === 0x2)) {
                                _0x40187d = 0x0;
                                continue;
                            }
                            if (_0x71c417[0x0] === 0x3 && (!_0x3ea1c9 || _0x71c417[0x1] > _0x3ea1c9[0x0] && _0x71c417[0x1] < _0x3ea1c9[0x3])) {
                                _0x40187d[_0x4e4f('0x4cd')] = _0x71c417[0x1];
                                break;
                            }
                            if (_0x71c417[0x0] === 0x6 && _0x40187d[_0x4e4f('0x4cd')] < _0x3ea1c9[0x1]) {
                                _0x40187d[_0x4e4f('0x4cd')] = _0x3ea1c9[0x1];
                                _0x3ea1c9 = _0x71c417;
                                break;
                            }
                            if (_0x3ea1c9 && _0x40187d[_0x4e4f('0x4cd')] < _0x3ea1c9[0x2]) {
                                _0x40187d[_0x4e4f('0x4cd')] = _0x3ea1c9[0x2];
                                _0x40187d[_0x4e4f('0x19')][_0x4e4f('0x60')](_0x71c417);
                                break;
                            }
                            if (_0x3ea1c9[0x2])
                                _0x40187d[_0x4e4f('0x19')][_0x4e4f('0x1ba')]();
                            _0x40187d['trys'][_0x4e4f('0x1ba')]();
                            continue;
                        }
                        _0x71c417 = _0x4e7b11[_0x4e4f('0x35b')](_0x245e75, _0x40187d);
                    } catch (_0x2bbe1f) {
                        _0x71c417 = [0x6, _0x2bbe1f];
                        _0xf2380a = 0x0;
                    } finally {
                        _0x472d34 = _0x3ea1c9 = 0x0;
                    }
                if (_0x71c417[0x0] & 0x5)
                    throw _0x71c417[0x1];
                return {
                    'value': _0x71c417[0x0] ? _0x71c417[0x1] : void 0x0,
                    'done': !![]
                };
            }
        };
        !(_0x5bac96 = [_0x3490bc(0x1), _0x3490bc(0x3), _0x3490bc(0x2), _0x3490bc(0x1b), _0x3490bc(0x1c), _0x3490bc(0x1e), _0x3490bc(0x5), _0x3490bc(0x1f), _0x3490bc(0x20), _0x3490bc(0x21)], _0x311a47 = function(_0x4c5d9a, _0x4d7df0, _0x658002, _0x3e5557, _0xb3c7c5, _0x3c57c7, _0x25f811, _0x3cecbb, _0x4193ad) {
            var _0x1da10e = {
                'color': _0x3cecbb['getToolbarColorPalette']()
            };
            _0x3c57c7(_0x3e5557);
            var _0x55968f = _0x3e5557[_0x4e4f('0x289')]('attributors/style/align');
            _0x55968f[_0x4e4f('0x20f')] = ['left', 'center', _0x4e4f('0x216'), _0x4e4f('0x5c8')];
            _0x3e5557[_0x4e4f('0x10e')](_0x55968f, !![]);
            var _0xa3bd02 = [[_0x4e4f('0x5ca'), _0x4e4f('0x1f7'), 'underline', 'strike'], [{
                'list': 'ordered'
            }, {
                'list': _0x4e4f('0x2ac')
            }], [{
                'size': [_0x4e4f('0x405'), ![], 'large', _0x4e4f('0x50')]
            }], [_0x1da10e, {
                'background': []
            }], [{
                'align': []
            }], [_0x4e4f('0x228')]];
            var _0x939747 = null;
            var _0x1a4392 = null;
            var _0x59490e = {};
            var _0x353082 = {};
            var _0x595f46 = {};
            var _0x28e2b9 = ![];
            var _0x1b3161 = ![];
            function _0x1f1a8e(elementId, _0x1b58af, _0x196d78) {
                return _0x1e04c5(this, void 0x0, void 0x0, function() {
                    var _0x17a3e2;
                    return _0x271c9c(this, function(_0x13163a) {
                        _0x17a3e2 = new _0x3e5557('#' + elementId, {
                            'modules': {
                                'toolbar': _0xa3bd02
                            },
                            'placeholder': _0x4e4f('0x637'),
                            'theme': _0x4e4f('0x102')
                        });
                        _0x59490e[elementId] = _0x4d7df0('#' + elementId)['parent']()[_0x4e4f('0x3b2')](_0x4e4f('0x41c'));
                        _0x353082[elementId] = _0x4d7df0('#' + elementId)[_0x4e4f('0x2ed')](_0x4e4f('0x402'));
                        _0x17a3e2[_0x4e4f('0x587')](_0x4e4f('0x327'))[_0x4e4f('0x647')](_0x4e4f('0x5be'), function(_0x102f65) {
                            if (!!_0x196d78) {
                                return;
                            }
                            if (_0x102f65 === _0x4e4f('0x5d5')) {
                                _0x102f65 = null;
                            }
                            _0x17a3e2[_0x4e4f('0x670')]('color', _0x102f65);
                        });
                        _0x17a3e2['getModule'](_0x4e4f('0x327'))[_0x4e4f('0x647')](_0x4e4f('0x306'), function(_0x732dc8) {
                            if (!!_0x196d78) {
                                return;
                            }
                            if (_0x732dc8 === ![]) {
                                _0x732dc8 = _0x4e4f('0x3f4');
                            }
                            _0x17a3e2[_0x4e4f('0x670')](_0x4e4f('0x306'), _0x732dc8);
                        });
                        _0x4d7df0(_0x4e4f('0x370'))[_0x4e4f('0x3f8')](_0x4e4f('0x5e2'));
                        return [0x2, _0x17a3e2];
                    });
                });
            }
            function _0x3969d7() {
                var _0x32534f = Object['keys'](_0x59490e);
                for (var _0x505998 = 0x0; _0x505998 < _0x32534f[_0x4e4f('0x3c5')]; _0x505998++) {
                    _0x59490e[_0x32534f[_0x505998]][_0x4e4f('0x61f')](_0x4e4f('0x687'), _0x4e4f('0x477'));
                }
            }
            function _0x5eb5f0(elementId) {
                _0x3969d7();
                _0x59490e[elementId]['css'](_0x4e4f('0x143'), _0x4e4f('0xaa'));
                _0x59490e[elementId][_0x4e4f('0x61f')](_0x4e4f('0x687'), 'block');
                _0x59490e[elementId]['css'](_0x4e4f('0x47f'), 'fixed');
                var _0x500dd2 = _0x4d7df0('#grid-wrap')[0x0][_0x4e4f('0xf2')]();
                var _0x4a14d2 = _0x59490e[elementId][_0x4e4f('0x147')]()[0x0][_0x4e4f('0xf2')]();
                var _0xfc78ea = _0x59490e[elementId][0x0][_0x4e4f('0xf2')]();
                if (_0x4a14d2[_0x4e4f('0x3f4')] + _0xfc78ea[_0x4e4f('0x1a2')] - _0x500dd2[_0x4e4f('0x3f4')] < _0x500dd2[_0x4e4f('0x1a2')]) {
                    _0x59490e[elementId][_0x4e4f('0x61f')](_0x4e4f('0x42c'), _0x4a14d2[_0x4e4f('0x42c')] - 0x3a + 'px')[_0x4e4f('0x61f')]('left', _0x4a14d2[_0x4e4f('0x3f4')] + 'px');
                } else {
                    _0x59490e[elementId][_0x4e4f('0x61f')](_0x4e4f('0x42c'), _0x4a14d2[_0x4e4f('0x42c')] - 0x3a + 'px')[_0x4e4f('0x61f')]('left', _0x4a14d2[_0x4e4f('0x3f4')] - (_0xfc78ea['width'] - _0x4a14d2[_0x4e4f('0x1a2')]) + 'px');
                }
                _0x59490e[elementId][_0x4e4f('0x61f')](_0x4e4f('0x143'), _0x4e4f('0x2c4'));
            }
            function _0x539a0b(elementId, _0x30e61e, _0x1db72f, _0x409f16, _0x4aa930) {
                var element = _0x4d7df0('#' + elementId);
                _0x30e61e[_0x4e4f('0x503')][_0x4e4f('0x58a')](_0x1db72f);
                if (_0x939747 && _0x1a4392 === elementId) {
                    _0x30e61e[_0x4e4f('0x3d3')](_0x939747);
                    _0x30e61e[_0x4e4f('0x23f')]();
                    if (_0x4aa930)
                        _0x5eb5f0(elementId);
                } else if (_0x595f46[elementId] === ![] && _0x409f16 === !![]) {
                    _0x30e61e[_0x4e4f('0x23f')]();
                    if (_0x4aa930)
                        _0x5eb5f0(elementId);
                }
                element[_0x4e4f('0x61f')]({
                    'height': _0x4e4f('0x601'),
                    'display': _0x4e4f('0xef')
                });
                var _0x319964 = function _0xb9a5ad() {
                    if (!_0x30e61e['hasFocus']()) {
                        _0x30e61e[_0x4e4f('0x23f')]();
                    }
                    if (_0x4aa930)
                        _0x5eb5f0(elementId);
                    _0x1a4392 = elementId;
                    _0x47d266(elementId);
                    _0x1b3161 = !![];
                };
                element['on'](_0x4e4f('0x4e2'), _0x319964);
                _0x4d7df0('.ql-formats')[_0x4e4f('0x663')](function(_0x5132b7) {
                    _0x5132b7[_0x4e4f('0x1f0')]();
                    _0x1b3161 = !![];
                });
            }
            function _0x723538(_0xfc466f) {
                if (!_0x1b3161) {
                    _0x3969d7();
                    _0x131b71();
                }
                _0x1b3161 = ![];
            }
            function _0x47d266(elementId) {
                if (!_0x28e2b9) {
                    _0x4d7df0('body')['on'](_0x4e4f('0x4e2'), _0x723538);
                    _0x28e2b9 = !![];
                }
            }
            function _0x131b71() {
                _0x4d7df0('body')['off'](_0x4e4f('0x4e2'), _0x723538);
                _0x28e2b9 = ![];
            }
            function _0x5d7a09(_0x9f68d8) {
                var _0x56c820 = document[_0x4e4f('0x3a3')](_0x9f68d8);
                var _0x3b159e = document[_0x4e4f('0x60e')]('#' + _0x9f68d8 + _0x4e4f('0x5d2'));
                var _0x3242ba = document['createElement']('div');
                _0x3242ba['setAttribute']('id', _0x4e4f('0x54'));
                _0x3242ba[_0x4e4f('0x4f')][_0x4e4f('0x1a2')] = _0x4e4f('0x601');
                _0x3242ba[_0x4e4f('0x4f')][_0x4e4f('0x165')] = _0x4e4f('0x601');
                _0x3242ba['style'][_0x4e4f('0x47f')] = _0x4e4f('0x5a2');
                _0x3242ba[_0x4e4f('0x4f')][_0x4e4f('0x3f4')] = '0';
                _0x3242ba[_0x4e4f('0x4f')][_0x4e4f('0x42c')] = '0';
                _0x4d7df0(_0x3242ba)[_0x4e4f('0x6b')](_0x4193ad);
                if (!!_0x3b159e) {
                    _0x3b159e[_0x4e4f('0x22f')](_0x4e4f('0xd8'), _0x4e4f('0x361'));
                    _0x3b159e[_0x4e4f('0x4f')]['opacity'] = '0';
                }
                _0x56c820[_0x4e4f('0x653')](_0x3242ba);
            }
            function _0x294850(_0x5ca44f, _0x5aab59, _0x4f9d07, _0x3126b4) {
                return _0x1e04c5(this, void 0x0, void 0x0, function() {
                    var _0x29acf3;
                    return _0x271c9c(this, function(_0x214909) {
                        switch (_0x214909[_0x4e4f('0x4cd')]) {
                        case 0x0:
                            return [0x4, _0x658002['debounce'](function(_0x5af104) {
                                return _0x1e04c5(this, void 0x0, void 0x0, function() {
                                    var _0x425e76;
                                    return _0x271c9c(this, function(_0x15d17d) {
                                        _0x939747 = _0x5ca44f['getSelection']();
                                        _0x425e76 = _0x4d7df0(_0x5af104)[_0x4e4f('0x3b2')]('.ql-editor')['html']();
                                        _0x425e76 = _0x425e76[_0x4e4f('0x45a')](new RegExp('\x22', 'g'), '\x5c\x22');
                                        if (_0x425e76 && _0x425e76[_0x4e4f('0x381')](_0x425e76[_0x4e4f('0x3c5')] - 0xb) == '<p><br></p>') {
                                            _0x425e76 = _0x425e76[_0x4e4f('0x381')](0x0, _0x425e76[_0x4e4f('0x3c5')] - 0xb) + '<p>&#8205;</p>';
                                        }
                                        _0x4f9d07[_0x4e4f('0x5ce')]([{
                                            'qPath': '/' + _0x5aab59,
                                            'qOp': _0x4e4f('0x45a'),
                                            'qValue': '\x22' + _0x425e76 + '\x22'
                                        }], !!_0x3126b4);
                                        _0x5d7a09(_0x4d7df0(_0x5af104)[_0x4e4f('0x5b3')]('id'));
                                        return [0x2];
                                    });
                                });
                            }, 0x4b0)];
                        case 0x1:
                            _0x29acf3 = _0x214909[_0x4e4f('0x22c')]();
                            _0x5ca44f['on'](_0x4e4f('0x53'), function(_0x1ef09e, _0xa7d12a, _0x4dbd87) {
                                _0x29acf3(_0x5ca44f[_0x4e4f('0x679')], _0x4f9d07);
                            });
                            return [0x2];
                        }
                    });
                });
            }
            function _0x11ebe1(_0x1a0846, _0x1f69c4) {
                var _0x23d1a0 = _0x1f69c4[_0x4e4f('0x3b2')](_0x4e4f('0x617'))[_0x4e4f('0x5ac')]();
                var _0xd3008d = 0x0;
                for (var _0x13f73b = 0x0; _0x13f73b < _0x23d1a0[_0x4e4f('0x3c5')]; _0x13f73b++) {
                    var _0x4b4349 = _0x23d1a0[_0x13f73b][_0x4e4f('0xf2')]();
                    _0xd3008d += _0x4b4349[_0x4e4f('0x165')];
                }
                return _0x1a0846[_0x4e4f('0x165')] > _0xd3008d;
            }
            return function(_0x4d818f, _0x255ce8, elementId, _0x9c9afd, _0x37f1ef, _0x1d2c2f, element, _0x39bc1c) {
                var element;
                return _0x1e04c5(this, void 0x0, void 0x0, function() {
                    var _0x27a12a,
                        _0x8a7748,
                        _0x49791a,
                        _0x3a2b0a,
                        _0x3ff6ab,
                        _0x8a57df;
                    return _0x271c9c(this, function(_0x2249f5) {
                        switch (_0x2249f5[_0x4e4f('0x4cd')]) {
                        case 0x0:
                            element = _0x4d7df0('#' + elementId);
                            _0x27a12a = _0x1d2c2f[_0x4e4f('0x3f8')];
                            if (!(_0x4d818f && _0x1d2c2f[_0x4e4f('0x29b')] && !_0x255ce8))
                                return [0x3, 0x3];
                            return [0x4, _0x1f1a8e(elementId, _0x1d2c2f[_0x4e4f('0x29b')], _0x39bc1c)];
                        case 0x1:
                            _0x8a7748 = _0x2249f5[_0x4e4f('0x22c')]();
                            _0x25f811[_0x4e4f('0x1f9')](_0x8a7748, elementId);
                            _0x539a0b(elementId, _0x8a7748, _0x27a12a, _0x1d2c2f[_0x4e4f('0x29b')], _0x4d818f);
                            return [0x4, _0x294850(_0x8a7748, _0x9c9afd, _0x37f1ef, _0x39bc1c)];
                        case 0x2:
                            _0x2249f5['sent']();
                            element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))[_0x4e4f('0x61f')](_0x4e4f('0x21f'), _0x1d2c2f['align']['horizontal']);
                            element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))[_0x4e4f('0x61f')](_0x4e4f('0x687'), _0x4e4f('0x5de'));
                            element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))[_0x4e4f('0x61f')]('flex-direction', _0x4e4f('0x5b'));
                            if (_0x11ebe1(_0x1d2c2f, element)) {
                                switch (_0x1d2c2f[_0x4e4f('0x306')]['vertical']) {
                                case _0x4e4f('0x42c'):
                                    element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))[_0x4e4f('0x61f')](_0x4e4f('0x55'), 'flex-start');
                                    break;
                                case _0x4e4f('0x126'):
                                    element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))['css'](_0x4e4f('0x55'), 'center');
                                    break;
                                case 'bottom':
                                    element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))['css'](_0x4e4f('0x55'), 'flex-end');
                                    break;
                                }
                                if (!!_0x39bc1c) {
                                    _0x8a7748[_0x4e4f('0x39e')]();
                                    _0x8a7748[_0x4e4f('0x423')][_0x4e4f('0x2d7')] = !![];
                                }
                            } else {
                                element[_0x4e4f('0x3b2')](_0x4e4f('0x617'))[_0x4e4f('0x61f')]('justify-content', _0x4e4f('0x482'));
                            }
                            return [0x3, 0x4];
                        case 0x3:
                            if (!element[_0x4e4f('0x1bb')]()[_0x4e4f('0x3c5')]) {
                                return [0x2];
                            }
                            _0x49791a = /<br\s*\/?>/i;
                            if (_0x49791a[_0x4e4f('0x5a6')](_0x27a12a)) {
                                _0x27a12a = _0x4e4f('0x2c2') + _0x27a12a + '</p>';
                            }
                            element[_0x4e4f('0x5b3')](_0x4e4f('0xed'), _0x4e4f('0x3e'))['html'](_0x27a12a);
                            _0x3a2b0a = ![];
                            if (element[_0x4e4f('0x61f')](_0x4e4f('0x55')) === _0x4e4f('0x44a')) {
                                element[_0x4e4f('0x61f')](_0x4e4f('0x55'), _0x4e4f('0x482'));
                                _0x3a2b0a = !![];
                            }
                            _0x3ff6ab = Math[_0x4e4f('0x2ff')](element[_0x4e4f('0x1bb')](0x0)['scrollHeight']);
                            _0x8a57df = Math['floor'](element[_0x4e4f('0x165')]());
                            if (_0x8a57df + 0x1 < _0x3ff6ab) {
                                element['css']('justify-content', _0x4e4f('0x482'));
                            } else if (_0x3a2b0a) {
                                element[_0x4e4f('0x61f')](_0x4e4f('0x55'), 'flex-end');
                            }
                            element[_0x4e4f('0x61f')](_0x4e4f('0x21f'), _0x1d2c2f[_0x4e4f('0x306')][_0x4e4f('0x3b5')]);
                            element[_0x4e4f('0x61f')]('vertical-align', _0x1d2c2f[_0x4e4f('0x306')][_0x4e4f('0x150')]);
                            if (_0x1d2c2f[_0x4e4f('0x507')][_0x4e4f('0x46b')]) {
                                _0xb3c7c5(elementId, _0x1d2c2f['animateNumbers']['duration'], _0x1d2c2f[_0x4e4f('0x507')]['commaAsDecimals']);
                            }
                            _0x2249f5[_0x4e4f('0x4cd')] = 0x4;
                        case 0x4:
                            _0x595f46[elementId] = _0x1d2c2f[_0x4e4f('0x29b')];
                            return [0x2];
                        }
                    });
                });
            };
        }[_0x4e4f('0x444')](_0x2b7ea5, _0x5bac96), _0x311a47 !== undefined && (_0x3b2024[_0x4e4f('0x85')] = _0x311a47));
    }, , function(_0x5c05d3, _0x4371d1, _0x2e7928) {
        'use strict';
        var _0x17a19a,
            _0x3a9929;
        Object[_0x4e4f('0x3bf')](_0x4371d1, _0x4e4f('0x2a3'), {
            'value': !![]
        });
        _0x2e7928(0x1d);
        !(_0x17a19a = [_0x2e7928(0x3)], _0x3a9929 = function(_0x28f07e) {
            var _0x4c6808 = null;
            var _0x3d67cb;
            var _0x2646ef = 0x12c;
            var _0x29d7c7 = ![];
            function _0x4753b2(_0x34d3f8) {
                var _0x5da7b2 = _0x34d3f8['toString']()['split']('.');
                _0x5da7b2[0x0] = _0x5da7b2[0x0][_0x4e4f('0x45a')](/\B(?=(\d{3})+(?!\d))/g, !_0x29d7c7 ? ',' : '.');
                return _0x5da7b2['join'](!_0x29d7c7 ? '.' : ',');
            }
            function _0x3e40c9(_0x2734b7, elementId) {
                var _0x47f429 = '';
                var _0x56252f = '<span>';
                var _0x4d7495 = _0x4e4f('0x3e8');
                for (var _0x3c42e1 = 0x0; _0x3c42e1 < _0x2734b7['length']; _0x3c42e1++) {
                    var _0x509b2a = /((?:[0-9]+[.,]*)+)/['test'](_0x2734b7[_0x3c42e1]);
                    if (_0x509b2a) {
                        var _0x20b8f4 = elementId + '-' + _0x3d67cb;
                        var _0x22b0cd = _0x2734b7[_0x3c42e1][_0x4e4f('0x146')](!_0x29d7c7 ? ',' : '.') > 0x0;
                        var _0x32101f = _0x2734b7[_0x3c42e1][_0x4e4f('0x146')](!_0x29d7c7 ? '.' : ',') > 0x0;
                        var _0x1865b8 = _0x32101f ? _0x2734b7[_0x3c42e1]['split'](!_0x29d7c7 ? '.' : ',')[0x1]['length'] : 0x0;
                        var _0x554290 = !_0x29d7c7 ? parseFloat(_0x2734b7[_0x3c42e1][_0x4e4f('0x45a')](/,/g, '')) : parseFloat(_0x2734b7[_0x3c42e1][_0x4e4f('0x45a')](/\./g, '')[_0x4e4f('0x45a')](/,/g, '.'));
                        if (_0x4c6808[_0x20b8f4] !== undefined && _0x4c6808[_0x20b8f4] != null) {
                            _0x554290 = _0x4c6808[_0x20b8f4];
                        }
                        _0x47f429 += _0x4e4f('0x3dd') + '\x22\x20' + _0x4e4f('0xf0') + _0x20b8f4 + '\x22\x20' + _0x4e4f('0x3df') + _0x2734b7[_0x3c42e1] + '\x22>' + (_0x22b0cd ? _0x4753b2(_0x554290) : _0x554290) + '</span>';
                        _0x3d67cb++;
                    } else {
                        _0x47f429 += _0x2734b7[_0x3c42e1];
                    }
                }
                return _0x56252f + _0x47f429 + _0x4d7495;
            }
            function _0x414f55(_0x28d15b, _0x35c3a8, _0x4e4487) {
                var _0x329a8d = document['createElement']('div');
                _0x329a8d['innerHTML'] = _0x4e4487;
                var elements = _0x329a8d[_0x4e4f('0x556')];
                var elementsLength = elements[_0x4e4f('0x3c5')];
                if (_0x28d15b[_0x4e4f('0x1e1')] === Node[_0x4e4f('0x21e')]) {
                    _0x28d15b = _0x28d15b[_0x4e4f('0x386')];
                }
                for (var _0xc18c4a = 0x0; _0xc18c4a < elementsLength; _0xc18c4a++) {
                    _0x28d15b['insertBefore'](elements[0x0], _0x35c3a8);
                }
                _0x28d15b[_0x4e4f('0x178')](_0x35c3a8);
            }
            function _0x47b632(_0x471eb3, elementId) {
                for (var _0x2e6ee0 = _0x471eb3['length'] - 0x1; _0x2e6ee0 >= 0x0; _0x2e6ee0--) {
                    var _0x5a4a70 = _0x471eb3[_0x2e6ee0][_0x4e4f('0x1e1')] === Node['TEXT_NODE'] ? [_0x471eb3[_0x2e6ee0]] : _0x471eb3[_0x2e6ee0][_0x4e4f('0x556')];
                    for (var _0x10deeb = _0x5a4a70['length'] - 0x1; _0x10deeb >= 0x0; _0x10deeb--) {
                        var _0x5cbbaa = _0x5a4a70[_0x10deeb];
                        if (_0x5cbbaa[_0x4e4f('0x1e1')] === Node['TEXT_NODE']) {
                            var _0x5b2772 = _0x5cbbaa[_0x4e4f('0x65f')];
                            var _0x26cdc5 = _0x5b2772['split'](/((?:[0-9]+[.,]*)+)/);
                            if (_0x26cdc5[_0x4e4f('0x3c5')] > 0x1) {
                                var _0x1e8a11 = _0x3e40c9(_0x26cdc5, elementId);
                                _0x414f55(_0x471eb3[_0x2e6ee0], _0x5cbbaa, _0x1e8a11);
                            }
                        } else {
                            _0x47b632(_0x5cbbaa[_0x4e4f('0x556')], elementId);
                        }
                    }
                }
            }
            var _0x5efeb4 = _['debounce'](function() {
                var _0x20b239 = _0x28f07e(_0x4e4f('0x27b'));
                if (_0x20b239['length'] > 0x0) {
                    for (var _0x4ea20b = 0x0; _0x4ea20b < _0x20b239[_0x4e4f('0x3c5')]; _0x4ea20b++) {
                        var _0x28cb7b = _0x20b239[_0x4ea20b][_0x4e4f('0x3fe')](_0x4e4f('0x4e3'));
                        var _0x18cff2 = _0x28cb7b['indexOf'](!_0x29d7c7 ? ',' : '.') > 0x0;
                        var _0x431bb1 = _0x28cb7b[_0x4e4f('0x146')](!_0x29d7c7 ? '.' : ',') > 0x0;
                        var _0x5ce14b = _0x431bb1 ? _0x28cb7b[_0x4e4f('0x665')](!_0x29d7c7 ? '.' : ',')[0x1][_0x4e4f('0x3c5')] : 0x0;
                        var _0x200cc5 = _0x5ce14b === 0x0 ? 0x1 : Math[_0x4e4f('0x281')](0xa, _0x5ce14b);
                        var _0x4db650 = !_0x29d7c7 ? parseFloat(_0x28cb7b['replace'](/,/g, '')) : parseFloat(_0x28cb7b['replace'](/\./g, '')[_0x4e4f('0x45a')](/,/g, '.'));
                        var _0x584118 = _0x20b239[_0x4ea20b][_0x4e4f('0x3fe')](_0x4e4f('0x32d'));
                        if (_0x4c6808[_0x584118] === undefined || _0x4c6808[_0x584118] === null) {
                            _0x28f07e(_0x20b239[_0x4ea20b])[_0x4e4f('0x2ee')]({
                                'number': !_0x29d7c7 ? parseInt((_0x4db650 * _0x200cc5)[_0x4e4f('0x24e')](0xa)) : _0x4db650 * _0x200cc5,
                                'numberStep': function(_0x28475f, _0x1a66ff) {
                                    var _0x51aea2 = _0x28f07e(_0x1a66ff['elem'])[_0x4e4f('0x5b3')](_0x4e4f('0x4e3'));
                                    _0x18cff2 = _0x51aea2['indexOf'](!_0x29d7c7 ? ',' : '.') > 0x0;
                                    _0x431bb1 = _0x51aea2[_0x4e4f('0x146')](!_0x29d7c7 ? '.' : ',') > 0x0;
                                    _0x5ce14b = _0x431bb1 ? _0x51aea2[_0x4e4f('0x665')](!_0x29d7c7 ? '.' : ',')[0x1][_0x4e4f('0x3c5')] : 0x0;
                                    _0x200cc5 = _0x5ce14b === 0x0 ? 0x1 : Math[_0x4e4f('0x281')](0xa, _0x5ce14b);
                                    var _0x283874 = Math['floor'](_0x28475f) / _0x200cc5,
                                        _0x583b7a = _0x28f07e(_0x1a66ff[_0x4e4f('0x37d')]);
                                    if (_0x5ce14b > 0x0) {
                                        _0x283874 = _0x283874[_0x4e4f('0x24e')](_0x5ce14b);
                                    }
                                    _0x583b7a[_0x4e4f('0x3f8')](_0x18cff2 || _0x29d7c7 ? _0x4753b2(_0x283874) : _0x283874);
                                }
                            }, _0x2646ef);
                        } else {
                            var _0x4d199e = _0x4c6808[_0x584118];
                            _0x28f07e(_0x20b239[_0x4ea20b])[_0x4e4f('0x7e')](_0x4e4f('0x504'), _0x4d199e * _0x200cc5)[_0x4e4f('0x2ee')]({
                                'number': !_0x29d7c7 ? parseInt((_0x4db650 * _0x200cc5)[_0x4e4f('0x24e')](0xa)) : _0x4db650 * _0x200cc5,
                                'numberStep': function(_0x3dd41c, _0x23303c) {
                                    var _0x43efd1 = _0x28f07e(_0x23303c['elem'])['attr'](_0x4e4f('0x4e3'));
                                    _0x18cff2 = _0x43efd1['indexOf'](!_0x29d7c7 ? ',' : '.') > 0x0;
                                    _0x431bb1 = _0x43efd1[_0x4e4f('0x146')](!_0x29d7c7 ? '.' : ',') > 0x0;
                                    _0x5ce14b = _0x431bb1 ? _0x43efd1['split'](!_0x29d7c7 ? '.' : ',')[0x1][_0x4e4f('0x3c5')] : 0x0;
                                    _0x200cc5 = _0x5ce14b === 0x0 ? 0x1 : Math[_0x4e4f('0x281')](0xa, _0x5ce14b);
                                    var _0x28dd41 = Math['floor'](_0x3dd41c) / _0x200cc5,
                                        _0x104ae0 = _0x28f07e(_0x23303c['elem']);
                                    if (_0x5ce14b > 0x0) {
                                        _0x28dd41 = _0x28dd41[_0x4e4f('0x24e')](_0x5ce14b);
                                    }
                                    _0x104ae0[_0x4e4f('0x3f8')](_0x18cff2 || _0x29d7c7 ? _0x4753b2(_0x28dd41) : _0x28dd41);
                                }
                            }, _0x2646ef);
                        }
                        _0x4c6808[_0x584118] = _0x4db650;
                    }
                }
            }, 0x1f4);
            return function(elementId, _0x2ac8ec, _0x460217) {
                _0x2646ef = _0x2ac8ec;
                _0x29d7c7 = _0x460217;
                var _0x796501 = _0x28f07e('#' + elementId)[0x0][_0x4e4f('0x556')];
                _0x3d67cb = 0x0;
                if (!_0x4c6808) {
                    _0x4c6808 = {};
                }
                _0x47b632(_0x796501, elementId);
                _0x5efeb4();
            };
        }[_0x4e4f('0x444')](_0x4371d1, _0x17a19a), _0x3a9929 !== undefined && (_0x5c05d3[_0x4e4f('0x85')] = _0x3a9929));
    }, , function(_0x5a5729, _0x1d6026, _0x1a5083) {
        'use strict';
        var _0x225845,
            _0xb77e83;
        !(_0x225845 = [], _0xb77e83 = function() {
            'use strict';
            return function(_0x115e50) {
                function _0x5e5f43(_0x3b68ec, _0x2ac420) {
                    if (!(_0x3b68ec instanceof _0x2ac420)) {
                        throw new TypeError(_0x4e4f('0x330'));
                    }
                }
                function _0x367561(_0x5c4b20, _0x1bdd95) {
                    if (!_0x5c4b20) {
                        throw new ReferenceError(_0x4e4f('0x344'));
                    }
                    return _0x1bdd95 && (typeof _0x1bdd95 === 'object' || typeof _0x1bdd95 === 'function') ? _0x1bdd95 : _0x5c4b20;
                }
                function _0x111945(_0xb442e7, _0x3a75f4) {
                    if (typeof _0x3a75f4 !== _0x4e4f('0x4c1') && _0x3a75f4 !== null) {
                        throw new TypeError('Super\x20expression\x20must\x20either\x20be\x20null\x20or\x20a\x20function,\x20not\x20' + typeof _0x3a75f4);
                    }
                    _0xb442e7[_0x4e4f('0x58e')] = Object[_0x4e4f('0x4fe')](_0x3a75f4 && _0x3a75f4['prototype'], {
                        'constructor': {
                            'value': _0xb442e7,
                            'enumerable': ![],
                            'writable': !![],
                            'configurable': !![]
                        }
                    });
                    if (_0x3a75f4)
                        Object[_0x4e4f('0x37f')] ? Object[_0x4e4f('0x37f')](_0xb442e7, _0x3a75f4) : _0xb442e7[_0x4e4f('0x508')] = _0x3a75f4;
                }
                var _0x14f0d2 = _0x115e50[_0x4e4f('0x289')]('blots/inline');
                var _0x1a8a56 = function(_0x3291ca) {
                    _0x111945(_0x5cf19b, _0x3291ca);
                    function _0x5cf19b() {
                        _0x5e5f43(this, _0x5cf19b);
                        return _0x367561(this, _0x3291ca[_0x4e4f('0x444')](this, arguments));
                    }
                    _0x5cf19b['create'] = function _0x123d50(_0x512325) {
                        var _0x36e006 = _0x3291ca[_0x4e4f('0x4fe')]['call'](this);
                        _0x36e006[_0x4e4f('0x2f9')] += _0x512325;
                        return _0x36e006;
                    };
                    _0x5cf19b[_0x4e4f('0x52b')] = function _0x38b42a(_0x5e6a98) {
                        return _0x5e6a98[_0x4e4f('0x2f9')];
                    };
                    return _0x5cf19b;
                }(_0x14f0d2);
                _0x1a8a56[_0x4e4f('0x5aa')] = 'icon';
                _0x1a8a56['tagName'] = 'i';
                _0x115e50[_0x4e4f('0x10e')](_0x1a8a56);
            };
        }[_0x4e4f('0x444')](_0x1d6026, _0x225845), _0xb77e83 !== undefined && (_0x5a5729['exports'] = _0xb77e83));
    }, function(_0x596348, _0x56713f, _0x3ca3dc) {
        'use strict';
        var _0x21139f,
            _0x55227e;
        !(_0x21139f = [], _0x55227e = function() {
            function _0x4e481d() {
                return [_0x4e4f('0x27e'), '#e60000', _0x4e4f('0x51f'), _0x4e4f('0x552'), _0x4e4f('0x4d5'), '#0066cc', _0x4e4f('0x67c'), _0x4e4f('0x599'), '#facccc', _0x4e4f('0x464'), _0x4e4f('0x56c'), _0x4e4f('0x2c8'), _0x4e4f('0x622'), _0x4e4f('0x68a'), _0x4e4f('0x366'), _0x4e4f('0x55a'), _0x4e4f('0x3f2'), _0x4e4f('0x544'), '#66b966', _0x4e4f('0x40a'), _0x4e4f('0x16'), _0x4e4f('0x2b9'), _0x4e4f('0x152'), _0x4e4f('0x558'), _0x4e4f('0x5da'), _0x4e4f('0x1d6'), _0x4e4f('0x2bf'), _0x4e4f('0x230'), _0x4e4f('0x24d'), '#5c0000', _0x4e4f('0x80'), _0x4e4f('0x468'), _0x4e4f('0x186'), _0x4e4f('0x93'), _0x4e4f('0x38a'), 'reset'];
            }
            return {
                'getToolbarColorPalette': _0x4e481d
            };
        }[_0x4e4f('0x444')](_0x56713f, _0x21139f), _0x55227e !== undefined && (_0x596348[_0x4e4f('0x85')] = _0x55227e));
    }, , , , function(_0x58cbd0, _0x1c7e95) {
        _0x58cbd0[_0x4e4f('0x85')] = '<div\x20class=lui-dialog-container\x20role=dialog\x20style=position:fixed>\x20<div\x20class=lui-modal-background></div>\x20<div\x20class=lui-dialog\x20style=width:400px>\x20<div\x20class=lui-dialog__header>\x20<div\x20class=lui-dialog__title>{{dialogTitle}}</div>\x20</div>\x20<div\x20class=lui-dialog__body>\x20<p\x20align=center>{{dialogContent}}</p>\x20<p\x20ng-if=showLink>&nbsp;</p>\x20<p\x20ng-if=showLink\x20align=center>\x20<a\x20href\x20class=download-link>{{linkText}}</a>\x20</p>\x20</div>\x20<div\x20class=lui-dialog__footer>\x20<button\x20ng-if=cancelButton\x20class=\x22lui-button\x20lui-dialog__button\x22>Cancel</button>\x20<button\x20ng-click=dialog.close()\x20class=\x22lui-button\x20lui-dialog__button\x20close-button\x22>OK</button>\x20</div>\x20</div>\x20</div>';
    }, function(_0x34a6d1, _0x458773, _0x5844e8) {
        'use strict';
        var _0xc108fc,
            _0x41508b;
        !(_0xc108fc = [], _0x41508b = function() {
            function _0x3e4bb2(_0x7690f2) {
                if (_0x7690f2 === _0x4e4f('0x581') || _0x7690f2 === _0x4e4f('0x149')) {
                    return _0x4e4f('0x495');
                } else if (_0x7690f2 === '\x22Lucida\x20Sans\x20Typewriter\x22,\x20\x22Lucida\x20Console\x22,\x20Monaco,\x20\x22Bitstream\x20Vera\x20Sans\x20Mono\x22,\x20monospace') {
                    return _0x4e4f('0x128');
                } else if (_0x7690f2 === _0x4e4f('0x374')) {
                    return _0x4e4f('0x3a8');
                } else if (_0x7690f2 === _0x4e4f('0x270')) {
                    return _0x4e4f('0x462');
                } else if (_0x7690f2 === '\x22Helvetica\x20Neue\x22,\x20Helvetica,\x20Arial,\x20sans-serif') {
                    return '\x22Helvetica\x20Neue\x22,\x20\x22Helvetica\x22,\x20\x22Arial\x22,\x20\x22sans-serif\x22';
                } else if (_0x7690f2 === _0x4e4f('0x247')) {
                    return '\x22Comic\x20Sans\x20MS\x22';
                } else if (_0x7690f2 === 'TimesNewRoman,\x20\x22Times\x20New\x20Roman\x22,\x20Times,\x20Baskerville,\x20Georgia,\x20serif') {
                    return _0x4e4f('0xab');
                } else if (_0x7690f2 === _0x4e4f('0x62a')) {
                    return _0x4e4f('0x513');
                } else {
                    return _0x7690f2;
                }
            }
            return {
                'fixFontStringValue': _0x3e4bb2
            };
        }[_0x4e4f('0x444')](_0x458773, _0xc108fc), _0x41508b !== undefined && (_0x34a6d1[_0x4e4f('0x85')] = _0x41508b));
    }, function(_0x4abe97, _0x3bf667, _0x188bee) {
        'use strict';
        var _0x4b1a3b,
            _0x2a09c5;
        !(_0x4b1a3b = [], _0x2a09c5 = function() {
            return new RegExp(_0x4e4f('0x83'))[_0x4e4f('0x5a6')](window['location'][_0x4e4f('0x4de')]);
        }[_0x4e4f('0x444')](_0x3bf667, _0x4b1a3b), _0x2a09c5 !== undefined && (_0x4abe97[_0x4e4f('0x85')] = _0x2a09c5));
    }, , , function(_0x31af38, _0x2f4d3f, _0x508c59) {
        'use strict';
        ;
        (function(_0x229088) {
            'use strict';
            var _0x4715d3 = function(element, _0x2d74cf) {
                this['$element'] = _0x229088(element);
                this[_0x4e4f('0x423')] = _0x229088['extend']({}, _0x4715d3[_0x4e4f('0x2de')], this[_0x4e4f('0x3d9')][_0x4e4f('0x1ab')]());
                this['options'] = _0x229088[_0x4e4f('0x525')]({}, this['options'], _0x2d74cf);
            };
            _0x4715d3[_0x4e4f('0xfd')] = {
                'iconClass': '',
                'iconClassFix': '',
                'icons': []
            };
            _0x4715d3[_0x4e4f('0x14d')] = {
                '_custom': null,
                'elusiveicon': _0x229088[_0x4e4f('0x58')] || _0x4715d3[_0x4e4f('0xfd')],
                'fontawesome': _0x229088[_0x4e4f('0x559')] || _0x4715d3[_0x4e4f('0xfd')],
                'ionicon': _0x229088['iconset_ionicon'] || _0x4715d3[_0x4e4f('0xfd')],
                'glyphicon': _0x229088[_0x4e4f('0x280')] || _0x4715d3['ICONSET_EMPTY'],
                'mapicon': _0x229088[_0x4e4f('0x34')] || _0x4715d3[_0x4e4f('0xfd')],
                'materialdesign': _0x229088[_0x4e4f('0x493')] || _0x4715d3['ICONSET_EMPTY'],
                'octicon': _0x229088[_0x4e4f('0x378')] || _0x4715d3[_0x4e4f('0xfd')],
                'typicon': _0x229088['iconset_typicon'] || _0x4715d3[_0x4e4f('0xfd')],
                'weathericon': _0x229088[_0x4e4f('0x29c')] || _0x4715d3[_0x4e4f('0xfd')]
            };
            _0x4715d3[_0x4e4f('0x2de')] = {
                'align': _0x4e4f('0x2e6'),
                'arrowClass': _0x4e4f('0x7a'),
                'arrowNextIconClass': _0x4e4f('0x257'),
                'arrowPrevIconClass': 'glyphicon\x20glyphicon-arrow-left',
                'cols': 0x4,
                'icon': '',
                'iconset': _0x4e4f('0x4e4'),
                'header': !![],
                'labelHeader': '{0}\x20/\x20{1}',
                'footer': !![],
                'labelFooter': '{0}\x20-\x20{1}\x20of\x20{2}',
                'placement': _0x4e4f('0x312'),
                'rows': 0x4,
                'search': !![],
                'searchText': 'Search\x20icon',
                'selectedClass': _0x4e4f('0x603'),
                'unselectedClass': _0x4e4f('0x600')
            };
            _0x4715d3[_0x4e4f('0x58e')]['bindEvents'] = function() {
                var _0x272d91 = this[_0x4e4f('0x423')];
                var _0x164c9f = this;
                _0x272d91[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x3c6'))[_0x4e4f('0x1e7')](_0x4e4f('0x4e2'))['on'](_0x4e4f('0x4e2'), function(_0xc1b057) {
                    _0xc1b057['preventDefault']();
                    var _0x292280 = parseInt(_0x229088(this)[_0x4e4f('0x5d3')](), 0xa);
                    _0x164c9f[_0x4e4f('0x411')](_0x272d91[_0x4e4f('0x573')] + _0x292280);
                });
                _0x272d91[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x506'))[_0x4e4f('0x1e7')](_0x4e4f('0x4e2'))['on']('click', function(_0x5bbd9d) {
                    _0x5bbd9d[_0x4e4f('0x1f0')]();
                    _0x164c9f[_0x4e4f('0x48e')](_0x229088(this)[_0x4e4f('0x5d3')]());
                    if (_0x272d91[_0x4e4f('0xa7')] === ![]) {
                        _0x164c9f['$element'][_0x4e4f('0x1c3')]('destroy');
                    } else {
                        _0x272d91[_0x4e4f('0x45b')][_0x4e4f('0x3b2')]('i.' + _0x229088(this)['val']())[_0x4e4f('0x147')]()[_0x4e4f('0x59')](_0x272d91[_0x4e4f('0xc0')]);
                    }
                });
                _0x272d91[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x1b0'))['off'](_0x4e4f('0x40b'))['on'](_0x4e4f('0x40b'), function() {
                    _0x164c9f[_0x4e4f('0x411')](0x1);
                });
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x411')] = function(_0xf98840) {
                this['filterIcons']();
                this[_0x4e4f('0x569')](_0xf98840);
                this[_0x4e4f('0xdd')](_0xf98840);
                this[_0x4e4f('0x423')]['page'] = _0xf98840;
                this[_0x4e4f('0x41d')]();
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x2c7')] = function() {
                var _0xe4ec7a = this[_0x4e4f('0x423')];
                var _0x4c681e = _0xe4ec7a[_0x4e4f('0x45b')][_0x4e4f('0x3b2')]('.search-control')['val']();
                if (_0x4c681e === '') {
                    _0xe4ec7a[_0x4e4f('0x5f4')] = _0x4715d3[_0x4e4f('0x14d')][_0xe4ec7a['iconset']][_0x4e4f('0x5f4')];
                } else {
                    var _0x2d332e = [];
                    _0x229088[_0x4e4f('0x1cb')](_0x4715d3['ICONSET'][_0xe4ec7a[_0x4e4f('0x18a')]][_0x4e4f('0x5f4')], function(_0x142476, _0x3b6a1a) {
                        if (_0x3b6a1a[_0x4e4f('0x146')](_0x4c681e) > -0x1) {
                            _0x2d332e[_0x4e4f('0x60')](_0x3b6a1a);
                        }
                    });
                    _0xe4ec7a[_0x4e4f('0x5f4')] = _0x2d332e;
                }
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x45f')] = function(_0x2da80a, _0x4ed938, _0x3ad399) {
                this[_0x4e4f('0x423')]['table'][_0x4e4f('0x3b2')](_0x2da80a)['removeClass'](_0x4ed938)[_0x4e4f('0x59')](_0x3ad399);
                return _0x3ad399;
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x5d5')] = function() {
                this['updatePicker']();
                this[_0x4e4f('0x411')](0x1);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x48e')] = function(_0x31f69b) {
                var _0x3ca9e6 = this[_0x4e4f('0x423')];
                var _0x24ea35 = this[_0x4e4f('0x3d9')];
                _0x3ca9e6['selected'] = _0x229088[_0x4e4f('0x295')](_0x31f69b[_0x4e4f('0x45a')](_0x3ca9e6[_0x4e4f('0x1e0')], ''), _0x3ca9e6[_0x4e4f('0x5f4')]);
                if (_0x3ca9e6[_0x4e4f('0x26b')] === -0x1) {
                    _0x3ca9e6[_0x4e4f('0x26b')] = 0x0;
                    _0x31f69b = _0x3ca9e6[_0x4e4f('0x1e0')] + _0x3ca9e6['icons'][_0x3ca9e6['selected']];
                }
                if (_0x31f69b !== '' && _0x3ca9e6[_0x4e4f('0x26b')] >= 0x0) {
                    _0x3ca9e6['icon'] = _0x31f69b;
                    if (_0x3ca9e6[_0x4e4f('0xa7')] === ![]) {
                        _0x24ea35[_0x4e4f('0x3b2')](_0x4e4f('0x6a'))['val'](_0x31f69b);
                        _0x24ea35['find']('i')['attr']('class', '')[_0x4e4f('0x59')](_0x3ca9e6['iconClass'])[_0x4e4f('0x59')](_0x31f69b);
                    }
                    if (_0x31f69b === _0x3ca9e6[_0x4e4f('0x1e0')]) {
                        _0x24ea35[_0x4e4f('0x2d3')]({
                            'type': _0x4e4f('0x543'),
                            'icon': _0x4e4f('0x61c')
                        });
                    } else {
                        _0x24ea35[_0x4e4f('0x2d3')]({
                            'type': _0x4e4f('0x543'),
                            'icon': _0x31f69b
                        });
                    }
                    _0x3ca9e6[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x532') + _0x3ca9e6[_0x4e4f('0xc0')])[_0x4e4f('0x304')](_0x3ca9e6[_0x4e4f('0xc0')]);
                }
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x5d1')] = function(_0x1356c7) {
                var _0x33e279 = this[_0x4e4f('0x423')];
                _0x33e279[_0x4e4f('0x26b')] = _0x229088[_0x4e4f('0x295')](_0x1356c7['replace'](_0x33e279[_0x4e4f('0x1e0')], ''), _0x33e279[_0x4e4f('0x5f4')]);
                if (_0x33e279['selected'] >= 0x0) {
                    var _0x16c787 = Math['ceil']((_0x33e279['selected'] + 0x1) / this['totalIconsPerPage']());
                    this[_0x4e4f('0x411')](_0x16c787);
                }
                if (_0x1356c7 === '') {
                    _0x33e279[_0x4e4f('0x45b')][_0x4e4f('0x3b2')]('i.' + _0x33e279['iconClassFix'])[_0x4e4f('0x147')]()[_0x4e4f('0x59')](_0x33e279[_0x4e4f('0xc0')]);
                } else {
                    _0x33e279[_0x4e4f('0x45b')][_0x4e4f('0x3b2')]('i.' + _0x1356c7)[_0x4e4f('0x147')]()[_0x4e4f('0x59')](_0x33e279['selectedClass']);
                }
            };
            _0x4715d3['prototype']['totalPages'] = function() {
                return Math[_0x4e4f('0x274')](this[_0x4e4f('0x340')]() / this[_0x4e4f('0x676')]());
            };
            _0x4715d3['prototype'][_0x4e4f('0x340')] = function() {
                return this[_0x4e4f('0x423')]['icons'][_0x4e4f('0x3c5')];
            };
            _0x4715d3[_0x4e4f('0x58e')]['totalIconsPerPage'] = function() {
                if (this[_0x4e4f('0x423')][_0x4e4f('0x252')] === 0x0) {
                    return this[_0x4e4f('0x423')][_0x4e4f('0x5f4')]['length'];
                } else {
                    return this[_0x4e4f('0x423')][_0x4e4f('0x391')] * this['options'][_0x4e4f('0x252')];
                }
            };
            _0x4715d3['prototype'][_0x4e4f('0x4ec')] = function(_0x29c617) {
                var _0xa3b27f = this[_0x4e4f('0x423')];
                var _0x4459e7 = this[_0x4e4f('0xc4')]();
                if (_0x29c617 === 0x1) {
                    _0xa3b27f[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x3aa'))['attr']('disabled', _0x4e4f('0x36c'));
                } else {
                    _0xa3b27f[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x3aa'))['removeAttr']('disabled');
                }
                if (_0x29c617 === _0x4459e7 || _0x4459e7 === 0x0) {
                    _0xa3b27f[_0x4e4f('0x45b')]['find'](_0x4e4f('0x145'))[_0x4e4f('0x5b3')](_0x4e4f('0x36c'), _0x4e4f('0x36c'));
                } else {
                    _0xa3b27f[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x145'))[_0x4e4f('0x51a')](_0x4e4f('0x36c'));
                }
            };
            _0x4715d3[_0x4e4f('0x58e')]['updateIcons'] = function(_0xa35102) {
                var _0x499fc6 = this[_0x4e4f('0x423')];
                var _0x34c7cf = _0x499fc6[_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x3ce'))[_0x4e4f('0x61c')]();
                var _0x28b641 = (_0xa35102 - 0x1) * this[_0x4e4f('0x676')]();
                var _0x2f83c7 = _0x499fc6[_0x4e4f('0x252')];
                if (_0x499fc6[_0x4e4f('0x252')] === 0x0) {
                    _0x2f83c7 = _0x499fc6['icons'][_0x4e4f('0x3c5')];
                }
                for (var _0x4eb2dd = 0x0; _0x4eb2dd < _0x2f83c7; _0x4eb2dd++) {
                    var _0x48292b = _0x229088('<tr></tr>');
                    for (var _0x521e46 = 0x0; _0x521e46 < _0x499fc6[_0x4e4f('0x391')]; _0x521e46++) {
                        var _0xd9b522 = _0x28b641 + _0x4eb2dd * _0x499fc6[_0x4e4f('0x391')] + _0x521e46;
                        var _0x484edf = _0x229088(_0x4e4f('0x4a4') + _0x499fc6[_0x4e4f('0x84')] + _0x4e4f('0x33c'))['hide']();
                        if (_0xd9b522 < _0x499fc6[_0x4e4f('0x5f4')]['length']) {
                            var _0x174529 = _0x499fc6[_0x4e4f('0x1e0')] + _0x499fc6['icons'][_0xd9b522];
                            _0x484edf['val'](_0x174529)['attr'](_0x4e4f('0x52'), _0x174529)[_0x4e4f('0xf')](_0x4e4f('0x5cf') + _0x499fc6[_0x4e4f('0x4a')] + '\x20' + _0x174529 + '\x22></i>')['show']();
                            if (_0x499fc6[_0x4e4f('0x350')] === _0x174529) {
                                _0x484edf[_0x4e4f('0x59')](_0x499fc6[_0x4e4f('0xc0')])[_0x4e4f('0x59')](_0x4e4f('0x668'));
                            }
                        }
                        _0x48292b[_0x4e4f('0xf')](_0x229088('<td></td>')[_0x4e4f('0xf')](_0x484edf));
                    }
                    _0x34c7cf[_0x4e4f('0xf')](_0x48292b);
                }
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x234')] = function() {
                var _0x4b1d05 = this['options'];
                if (_0x4b1d05[_0x4e4f('0x435')] === !![]) {
                    var _0x40fab0 = [_0x4e4f('0x1ff'), _0x4e4f('0x154') + _0x4b1d05[_0x4e4f('0x391')] + _0x4e4f('0xd5'), _0x4e4f('0xaf'), '\x20\x20\x20</td>', _0x4e4f('0x640')];
                    _0x4b1d05['table'][_0x4e4f('0x3b2')](_0x4e4f('0xfc'))[_0x4e4f('0x61c')]()['append'](_0x40fab0[_0x4e4f('0x561')](''));
                }
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x569')] = function(_0x2c00b0) {
                var _0x45563c = this[_0x4e4f('0x423')];
                var _0x22f22c = this['totalIcons']();
                var _0x44ffd1 = this['totalPages']();
                _0x45563c[_0x4e4f('0x45b')]['find'](_0x4e4f('0x141'))['html'](_0x45563c[_0x4e4f('0x3f3')][_0x4e4f('0x45a')](_0x4e4f('0x5a9'), _0x44ffd1 === 0x0 ? 0x0 : _0x2c00b0)[_0x4e4f('0x45a')](_0x4e4f('0x4a7'), _0x44ffd1));
                var _0x29bdca = (_0x2c00b0 - 0x1) * this[_0x4e4f('0x676')]();
                var _0x4f48c3 = _0x2c00b0 * this[_0x4e4f('0x676')]();
                _0x45563c[_0x4e4f('0x45b')]['find'](_0x4e4f('0x41b'))[_0x4e4f('0x6b')](_0x45563c[_0x4e4f('0x40d')][_0x4e4f('0x45a')](_0x4e4f('0x5a9'), _0x22f22c ? _0x29bdca + 0x1 : 0x0)['replace'](_0x4e4f('0x4a7'), _0x4f48c3 < _0x22f22c ? _0x4f48c3 : _0x22f22c)[_0x4e4f('0x45a')](_0x4e4f('0x2b7'), _0x22f22c));
                this[_0x4e4f('0x4ec')](_0x2c00b0);
            };
            _0x4715d3['prototype'][_0x4e4f('0x55c')] = function() {
                var _0x40d97c = this[_0x4e4f('0x423')];
                if (_0x40d97c[_0x4e4f('0x612')] === !![]) {
                    var _0x1d3af6 = _0x229088('<tr></tr>');
                    for (var _0x4c659a = 0x0; _0x4c659a < _0x40d97c[_0x4e4f('0x391')]; _0x4c659a++) {
                        var _0x140903 = _0x229088('<td\x20class=\x22text-center\x22></td>');
                        if (_0x4c659a === 0x0 || _0x4c659a === _0x40d97c[_0x4e4f('0x391')] - 0x1) {
                            var _0x1302a6 = [_0x4e4f('0x56a') + (_0x4c659a === 0x0 ? _0x4e4f('0x5bf') : 'btn-next') + '\x20' + _0x40d97c['arrowClass'] + _0x4e4f('0x365') + (_0x4c659a === 0x0 ? -0x1 : 0x1) + '\x22>', _0x4e4f('0x409') + (_0x4c659a === 0x0 ? _0x40d97c[_0x4e4f('0xe4')] : _0x40d97c[_0x4e4f('0x1c6')]) + _0x4e4f('0xeb'), _0x4e4f('0x73')];
                            _0x140903['append'](_0x1302a6[_0x4e4f('0x561')](''));
                            _0x1d3af6['append'](_0x140903);
                        } else if (_0x1d3af6['find'](_0x4e4f('0x141'))[_0x4e4f('0x3c5')] === 0x0) {
                            _0x140903['attr'](_0x4e4f('0x667'), _0x40d97c['cols'] - 0x2)['append']('<span\x20class=\x22page-count\x22\x20style=\x22text-align:center\x22></span>');
                            _0x1d3af6[_0x4e4f('0xf')](_0x140903);
                        }
                    }
                    _0x40d97c[_0x4e4f('0x45b')]['find'](_0x4e4f('0xfc'))[_0x4e4f('0xf')]()[_0x4e4f('0xf')](_0x1d3af6);
                }
            };
            _0x4715d3['prototype'][_0x4e4f('0x51b')] = function() {
                var _0x4fdd75 = this[_0x4e4f('0x423')];
                if (_0x4fdd75['cols'] < 0x4) {
                    throw _0x4e4f('0x4ce') + _0x4fdd75['cols'] + ']';
                } else if (_0x4fdd75[_0x4e4f('0x252')] < 0x0) {
                    throw _0x4e4f('0x1b4') + _0x4fdd75[_0x4e4f('0x252')] + ']';
                } else {
                    this['updateSearch']();
                    this[_0x4e4f('0x234')]();
                    this[_0x4e4f('0x55c')]();
                }
            };
            _0x4715d3[_0x4e4f('0x58e')]['updateSearch'] = function() {
                var _0x23851d = this['options'];
                var _0x4c246f = [_0x4e4f('0x1ff'), '\x20\x20\x20<td\x20colspan=\x22' + _0x23851d['cols'] + '\x22>', '\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22lui-input\x20search-control\x22\x20\x20placeholder=\x22' + _0x23851d[_0x4e4f('0x567')] + '\x22>', _0x4e4f('0x242'), _0x4e4f('0x640')];
                _0x4c246f = _0x229088(_0x4c246f[_0x4e4f('0x561')](''));
                if (_0x23851d[_0x4e4f('0x5e7')] === !![]) {
                    _0x4c246f[_0x4e4f('0x5b4')]();
                } else {
                    _0x4c246f['hide']();
                }
                _0x23851d[_0x4e4f('0x45b')]['find'](_0x4e4f('0x5c3'))['append'](_0x4c246f);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x2ec')] = function(_0x23bf1e) {
                this[_0x4e4f('0x3d9')][_0x4e4f('0x304')](this[_0x4e4f('0x423')][_0x4e4f('0x306')])['addClass'](_0x23bf1e);
                this['options']['align'] = _0x23bf1e;
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x3be')] = function(_0x28ce5b) {
                this[_0x4e4f('0x423')]['arrowClass'] = this[_0x4e4f('0x45f')](_0x4e4f('0x32'), this[_0x4e4f('0x423')][_0x4e4f('0x4ee')], _0x28ce5b);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0xc1')] = function(_0x50090c) {
                this[_0x4e4f('0x423')]['arrowNextIconClass'] = this[_0x4e4f('0x45f')]('.btn-next\x20>\x20span', this[_0x4e4f('0x423')][_0x4e4f('0x1c6')], _0x50090c);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x433')] = function(_0x532fe2) {
                this[_0x4e4f('0x423')][_0x4e4f('0xe4')] = this[_0x4e4f('0x45f')](_0x4e4f('0x2af'), this['options'][_0x4e4f('0xe4')], _0x532fe2);
            };
            _0x4715d3['prototype'][_0x4e4f('0x114')] = function(_0x418e48) {
                this[_0x4e4f('0x423')]['cols'] = _0x418e48;
                this[_0x4e4f('0x5d5')]();
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x66c')] = function(_0x18cf8d) {
                var _0x2ff221 = this[_0x4e4f('0x423')][_0x4e4f('0x45b')][_0x4e4f('0x3b2')]('tfoot');
                if (_0x18cf8d === !![]) {
                    _0x2ff221['show']();
                } else {
                    _0x2ff221[_0x4e4f('0x117')]();
                }
                this[_0x4e4f('0x423')][_0x4e4f('0x435')] = _0x18cf8d;
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x3a')] = function(_0x4ab22e) {
                var _0x4ee0cb = this[_0x4e4f('0x423')][_0x4e4f('0x45b')][_0x4e4f('0x3b2')](_0x4e4f('0x5c3'));
                if (_0x4ab22e === !![]) {
                    _0x4ee0cb[_0x4e4f('0x5b4')]();
                } else {
                    _0x4ee0cb[_0x4e4f('0x117')]();
                }
                this[_0x4e4f('0x423')][_0x4e4f('0x612')] = _0x4ab22e;
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x15e')] = function(_0x15b4f6) {
                this['select'](_0x15b4f6);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x1c8')] = function(_0x443a4b) {
                var _0x564f61 = this[_0x4e4f('0x423')];
                if (_0x229088[_0x4e4f('0x61d')](_0x443a4b)) {
                    _0x4715d3[_0x4e4f('0x14d')][_0x4e4f('0x570')] = _0x229088['extend'](_0x4715d3[_0x4e4f('0xfd')], _0x443a4b);
                    _0x564f61[_0x4e4f('0x18a')] = '_custom';
                } else if (!_0x4715d3[_0x4e4f('0x14d')][_0x4e4f('0x46f')](_0x443a4b)) {
                    _0x564f61[_0x4e4f('0x18a')] = _0x4715d3[_0x4e4f('0x2de')][_0x4e4f('0x18a')];
                } else {
                    _0x564f61[_0x4e4f('0x18a')] = _0x443a4b;
                }
                _0x564f61 = _0x229088[_0x4e4f('0x525')](_0x564f61, _0x4715d3['ICONSET'][_0x564f61[_0x4e4f('0x18a')]]);
                this[_0x4e4f('0x5d5')]();
                this[_0x4e4f('0x48e')](_0x564f61['icon']);
            };
            _0x4715d3[_0x4e4f('0x58e')]['setLabelHeader'] = function(_0x2ae25c) {
                this['options'][_0x4e4f('0x3f3')] = _0x2ae25c;
                this[_0x4e4f('0x569')](this['options'][_0x4e4f('0x573')]);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x1c1')] = function(_0x4c6683) {
                this['options'][_0x4e4f('0x40d')] = _0x4c6683;
                this[_0x4e4f('0x569')](this[_0x4e4f('0x423')][_0x4e4f('0x573')]);
            };
            _0x4715d3['prototype'][_0x4e4f('0x1e3')] = function(_0x4ece05) {
                this[_0x4e4f('0x423')][_0x4e4f('0x35d')] = _0x4ece05;
            };
            _0x4715d3[_0x4e4f('0x58e')]['setRows'] = function(_0x783578) {
                this[_0x4e4f('0x423')][_0x4e4f('0x252')] = _0x783578;
                this[_0x4e4f('0x5d5')]();
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x353')] = function(_0x39d926) {
                var _0x484fee = this[_0x4e4f('0x423')]['table'][_0x4e4f('0x3b2')](_0x4e4f('0x1b0'));
                if (_0x39d926 === !![]) {
                    _0x484fee[_0x4e4f('0x5b4')]();
                } else {
                    _0x484fee[_0x4e4f('0x117')]();
                }
                _0x484fee[_0x4e4f('0x5d3')]('');
                this[_0x4e4f('0x411')](0x1);
                this['options'][_0x4e4f('0x5e7')] = _0x39d926;
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x110')] = function(_0x1d9daf) {
                this[_0x4e4f('0x423')][_0x4e4f('0x45b')]['find'](_0x4e4f('0x1b0'))[_0x4e4f('0x5b3')](_0x4e4f('0x632'), _0x1d9daf);
                this[_0x4e4f('0x423')][_0x4e4f('0x567')] = _0x1d9daf;
            };
            _0x4715d3[_0x4e4f('0x58e')]['setSelectedClass'] = function(_0x4587f6) {
                this['options'][_0x4e4f('0xc0')] = this[_0x4e4f('0x45f')](_0x4e4f('0x68b'), this[_0x4e4f('0x423')]['selectedClass'], _0x4587f6);
            };
            _0x4715d3[_0x4e4f('0x58e')][_0x4e4f('0x4c3')] = function(_0x4961d3) {
                this[_0x4e4f('0x423')][_0x4e4f('0x84')] = this[_0x4e4f('0x45f')](_0x4e4f('0x506'), this[_0x4e4f('0x423')][_0x4e4f('0x84')], _0x4961d3);
            };
            var _0x32e4e4 = _0x229088['fn'][_0x4e4f('0x2ad')];
            _0x229088['fn'][_0x4e4f('0x2ad')] = function(_0x10a986, _0x56c9c5) {
                return this[_0x4e4f('0x1cb')](function() {
                    var $this = _0x229088(this);
                    var _0x1f25f8 = $this[_0x4e4f('0x1ab')](_0x4e4f('0x303'));
                    var _0x11ad6e = typeof _0x10a986 === 'object' && _0x10a986;
                    if (!_0x1f25f8) {
                        $this[_0x4e4f('0x1ab')](_0x4e4f('0x303'), _0x1f25f8 = new _0x4715d3(this, _0x11ad6e));
                    }
                    if (typeof _0x10a986 === _0x4e4f('0x5cd')) {
                        if (typeof _0x1f25f8[_0x10a986] === _0x4e4f('0xe9')) {
                            throw 'Iconpicker\x20=>\x20The\x20\x22' + _0x10a986 + _0x4e4f('0x8f');
                        } else {
                            _0x1f25f8[_0x10a986](_0x56c9c5);
                        }
                    } else {
                        var _0x3af911 = _0x1f25f8[_0x4e4f('0x423')];
                        _0x3af911 = _0x229088['extend'](_0x3af911, {
                            'inline': ![],
                            'page': 0x1,
                            'selected': -0x1,
                            'table': _0x229088('<table\x20class=\x22table-icons\x22><thead></thead><tbody></tbody><tfoot></tfoot></table>')
                        });
                        var _0x587feb = typeof $this[_0x4e4f('0x5b3')]('name') !== 'undefined' ? _0x4e4f('0x167') + $this[_0x4e4f('0x5b3')]('name') + '\x22' : '';
                        if ($this[_0x4e4f('0x7e')]('tagName') === 'BUTTON') {
                            $this[_0x4e4f('0x61c')]()['append'](_0x4e4f('0x3e5'))[_0x4e4f('0xf')](_0x4e4f('0x325') + _0x587feb + '></input>')[_0x4e4f('0xf')](_0x4e4f('0x3f9'))['addClass']('iconpicker');
                            _0x1f25f8[_0x4e4f('0x1c8')](_0x3af911[_0x4e4f('0x18a')]);
                            $this['on']('click', function(_0x5857c1) {
                                _0x5857c1[_0x4e4f('0x1f0')]();
                                $this['popover']({
                                    'animation': ![],
                                    'trigger': _0x4e4f('0x35'),
                                    'html': !![],
                                    'content': _0x3af911[_0x4e4f('0x45b')],
                                    'container': 'body',
                                    'placement': _0x3af911['placement']
                                })['on'](_0x4e4f('0x63d'), function() {
                                    _0x1f25f8[_0x4e4f('0x5d1')](_0x3af911[_0x4e4f('0x350')]);
                                    _0x1f25f8[_0x4e4f('0x41d')]();
                                });
                                $this[_0x4e4f('0x1ab')](_0x4e4f('0x5c1'))[_0x4e4f('0x72')]()[_0x4e4f('0x59')](_0x4e4f('0x106'));
                                $this[_0x4e4f('0x1c3')](_0x4e4f('0x5b4'));
                            });
                        } else {
                            _0x3af911['inline'] = !![];
                            _0x1f25f8[_0x4e4f('0x1c8')](_0x3af911['iconset']);
                            $this[_0x4e4f('0x61c')]()['append'](_0x4e4f('0x325') + _0x587feb + _0x4e4f('0xda'))[_0x4e4f('0xf')](_0x3af911['table'])[_0x4e4f('0x59')]('iconpicker')[_0x4e4f('0x59')](_0x3af911[_0x4e4f('0x306')]);
                            _0x1f25f8[_0x4e4f('0x5d1')](_0x3af911[_0x4e4f('0x350')]);
                            _0x1f25f8[_0x4e4f('0x41d')]();
                        }
                    }
                });
            };
            _0x229088['fn']['iconpicker'][_0x4e4f('0x203')] = _0x4715d3;
            _0x229088['fn'][_0x4e4f('0x2ad')][_0x4e4f('0x43c')] = function() {
                _0x229088['fn'][_0x4e4f('0x2ad')] = _0x32e4e4;
                return this;
            };
            _0x229088(document)['on'](_0x4e4f('0x4e2'), _0x4e4f('0xb5'), function(_0x96ce54) {
                _0x229088(_0x4e4f('0x348'))[_0x4e4f('0x1cb')](function() {});
            });
            _0x229088(_0x4e4f('0x188'))['iconpicker']();
        }(jQuery));
    }, function(_0x15acd5, _0x1f1423, _0xab48fc) {
        var _0x477100 = _0xab48fc(0x9);
        var _0x50ab49 = _0xab48fc(0x2a);
        _0x50ab49 = _0x50ab49[_0x4e4f('0x2a3')] ? _0x50ab49[_0x4e4f('0x4a6')] : _0x50ab49;
        if (typeof _0x50ab49 === _0x4e4f('0x5cd')) {
            _0x50ab49 = [[_0x15acd5['i'], _0x50ab49, '']];
        }
        var _0x20dcfc = {};
        _0x20dcfc['insert'] = _0x4e4f('0x3e1');
        _0x20dcfc[_0x4e4f('0x5a7')] = ![];
        var _0x60c330 = _0x477100(_0x50ab49, _0x20dcfc);
        _0x15acd5[_0x4e4f('0x85')] = _0x50ab49[_0x4e4f('0x29a')] || {};
    }, function(_0x2de7a3, _0x39ca31, _0x42cf2d) {
        var _0x411074 = _0x42cf2d(0x0);
        var _0x26cac0 = _0x42cf2d(0x2b);
        var _0x371b89 = _0x42cf2d(0x2e);
        var _0xd92106 = _0x42cf2d(0x34);
        var _0x4b381d = _0x42cf2d(0x35);
        var _0x3c993b = _0x42cf2d(0x36);
        var _0x6f0403 = _0x42cf2d(0x37);
        var _0x787b90 = _0x42cf2d(0x38);
        _0x39ca31 = _0x411074(![]);
        _0x39ca31['i'](_0x26cac0);
        _0x39ca31['i'](_0x371b89);
        _0x39ca31['i'](_0xd92106);
        _0x39ca31['i'](_0x4b381d);
        _0x39ca31['i'](_0x3c993b);
        _0x39ca31['i'](_0x6f0403);
        _0x39ca31['i'](_0x787b90);
        _0x39ca31[_0x4e4f('0x60')]([_0x2de7a3['i'], _0x4e4f('0x201'), '']);
        _0x2de7a3[_0x4e4f('0x85')] = _0x39ca31;
    }, , function(_0x6d9c6f, _0x4d53f5, _0x515442) {
        'use strict';
        _0x515442['r'](_0x4d53f5);
        _0x4d53f5[_0x4e4f('0x4a6')] = 'https://static.vizlib.com/vizlib-extensions' + _0x4e4f('0x4bc');
    }, function(_0x5cfb74, _0x338b78, _0x8f5fe1) {
        'use strict';
        _0x8f5fe1['r'](_0x338b78);
        _0x338b78['default'] = 'https://static.vizlib.com/vizlib-extensions' + '/VizlibAdvancedTextObject/v1.7.12/static/vzb-lui-icons-053fef.woff';
    }, , function(_0x290965, _0x169ed8, _0x3b267f) {
        'use strict';
        _0x3b267f['r'](_0x169ed8);
        _0x169ed8['default'] = 'https://static.vizlib.com/vizlib-extensions' + '/VizlibAdvancedTextObject/v1.7.12/static/fontawesome-webfont-25a324.eot';
    }, function(_0xeb8b7b, _0x2494ae, _0x450e7b) {
        'use strict';
        _0x450e7b['r'](_0x2494ae);
        _0x2494ae[_0x4e4f('0x4a6')] = 'https://static.vizlib.com/vizlib-extensions' + _0x4e4f('0x4bd');
    }, function(_0x4cf433, _0x13b15e, _0x5c2705) {
        'use strict';
        _0x5c2705['r'](_0x13b15e);
        _0x13b15e[_0x4e4f('0x4a6')] = 'https://static.vizlib.com/vizlib-extensions' + _0x4e4f('0x1d');
    }, function(_0x45f553, _0x13654a, _0x3d797a) {
        'use strict';
        _0x3d797a['r'](_0x13654a);
        _0x13654a[_0x4e4f('0x4a6')] = 'https://static.vizlib.com/vizlib-extensions' + _0x4e4f('0x192');
    }, function(_0xcdfb76, _0x4f6a33, _0x37aa5e) {
        'use strict';
        _0x37aa5e['r'](_0x4f6a33);
        _0x4f6a33[_0x4e4f('0x4a6')] = _0x37aa5e['p'] + _0x4e4f('0x586');
    }, , , function(_0x4433fe, _0x460d82, _0x24ed4a) {
        var _0x5bc124 = _0x24ed4a(0x0);
        _0x460d82 = _0x5bc124(![]);
        _0x460d82[_0x4e4f('0x60')]([_0x4433fe['i'], _0x4e4f('0xe7'), '']);
        _0x4433fe[_0x4e4f('0x85')] = _0x460d82;
    }, , function(_0x3a3fd7, _0x3bf71e, _0x4b26c1) {
        var _0x441df2 = _0x4b26c1(0x0);
        _0x3bf71e = _0x441df2(![]);
        _0x3bf71e['push']([_0x3a3fd7['i'], _0x4e4f('0x2a4'), '']);
        _0x3a3fd7['exports'] = _0x3bf71e;
    }]);
}));
