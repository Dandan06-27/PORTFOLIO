document.onkeydown = function(e) {
    if (event.keyCode == 123) { // F12 key code
        return false;
    }
    // You can also add other shortcuts like Ctrl+Shift+I (keyCode 73)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }
}
