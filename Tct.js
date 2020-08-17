var TCT = function(index) {
    onhashchange = () => {
        const hash = location.hash.slice(1)
        if(hash)
            TCT[hash].apply(this)
    },
    TCT = {
        init: function(o) {
            // index = o.index
        },
        reg: function(url='home', callback=()=>{}) {
            TCT[url] = callback
            return this
        },
    };
    return TCT;
}();