import plusMinusToggle  from '../_patterns/01-atoms/plusminustoggle/plusminustoggle.js';
import primaryNavToggle from '../_patterns/01-atoms/primarynavtoggle/primarynavtoggle.js';
import primaryNav       from '../_patterns/02-components/primarynav/primaryNav.js';
import searchbox        from '../_patterns/01-atoms/searchbox/searchbox.js';
import accordion        from '../_patterns/02-components/accordion/accordion.js';

export default function components(){
    function init(){
        plusMinusToggle();
        primaryNavToggle();
        primaryNav();
        searchbox();
        accordion();
    }

    return init();
}
