(function(wnd){
    var fontA = new FontFaceObserver('Five Minutes', {
      weight: 400
    });
    var fontB = new FontFaceObserver('Stalemate', {
      weight: 400
    });

    wnd.Promise.all([fontA, fontB]).then(function () {
        document.documentElement.classList.add('fonts-loaded');
      console.log('Font is available');
    }, function () {
      console.log('Font is not available');
    });
})(this);
