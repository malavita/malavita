(function(wnd){
    var fontA = new FontFaceObserver('Five Minutes', {
        weight: 400
    });
    var fontB = new FontFaceObserver('Stalemate', {
        weight: 400
    });
    console.time('font-loaded');
    if (sessionStorage.fonts) {
        document.documentElement.classList.add('fonts-loaded');
    } else {
        wnd.Promise.all([fontA.check(), fontB.check()]).then(function () {
            console.timeEnd('font-loaded');
            document.documentElement.classList.add('fonts-loaded');
            sessionStorage.fonts = true;
            console.log('Font is available');
        }, function () {
            console.log('Font is not available');
        });
    }
})(this);
