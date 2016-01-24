(function(wnd){
    var fontA = new FontFaceObserver('Five Minutes', {
        weight: 400
    });
    var fontB = new FontFaceObserver('Stalemate', {
        weight: 400
    });
    console.time('font-loaded');
    wnd.Promise.all([fontA.check(), fontB.check()]).then(function () {
        console.timeEnd('font-loaded');
        document.documentElement.classList.add('fonts-loaded');
        console.log('Font is available');
    }, function () {
        console.log('Font is not available');
    });
})(this);
