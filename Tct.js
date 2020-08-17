var TCT = function() {
    onhashchange = () => {
        const hash = location.hash.slice(1)
        if(hash)
            TCT[hash].apply(this)
    },
    TCT = {
        reg: function(url='home', callback=()=>{}) {
            TCT[url] = callback
            return this
        },
    };
    return TCT;
}();