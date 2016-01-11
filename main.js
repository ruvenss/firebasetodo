chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html',
    {width: 280, 
     height: 450, 
    minWidth: 280,
    minHeight: 450,
    maxWidth: 280,
    maxHeight: 450,
     frame: 'none',
    type: 'shell'});
});

