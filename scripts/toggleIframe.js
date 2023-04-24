function toggleIframe(id) {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        if (iframe.id === id) {
            iframe.classList.add('expanded');
        } else {
            iframe.classList.remove('expanded');
        }
    }
}