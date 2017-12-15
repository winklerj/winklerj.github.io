import primaryNavToggle from '../_patterns/01-atoms/primarynavtoggle/primarynavtoggle.js';
import primaryNav       from '../_patterns/02-components/primarynav/primaryNav.js';
import searchbox        from '../_patterns/01-atoms/searchbox/searchbox.js';

export default function components(){
    function init(){
        primaryNavToggle();
        primaryNav();
        searchbox();
    }

    return init();
}
