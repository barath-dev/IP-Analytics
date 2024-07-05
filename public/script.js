document.addEventListener('DOMContentLoaded', function() {

    console.log("hello world");

    const platform = window.navigator.platform;
    const userAgent = window.navigator.userAgent;
    const language = window.navigator.language;
    const screenResolution = `${window.screen.width} x ${window.screen.height}`;


    document.getElementById('device').textContent = platform;
    document.getElementById('os').textContent = /Windows|Linux|MacOS|Android|iOS/.exec(userAgent) || 'Unknown';
    document.getElementById('browser').textContent = /Chrome|Firefox|Safari|Edge|Opera/.exec(userAgent) || 'Unknown';
    document.getElementById('language').textContent = language;
    document.getElementById('screenResolution').textContent = screenResolution;
});