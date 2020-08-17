var TCT = function(index) {
    onhashchange = () => {
        TCT[index].apply(this);
    },
    TCT = {
        init: function(o) {
            index = o.index;
        },
        reg: function(url='home', callback=()=>{}) {
            TCT[url] = callback;
            return this;
        },
    };
    return TCT;
}();