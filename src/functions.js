const functions = () => {

    function callApi(callback) {
        
        console.log('Call API');
    
        // CALL API
        // let request = new XMLHttpRequest();
        // request.open('POST', 'https://api.fricker.io/click', true);
        // request.setRequestHeader("Content-Type", 'application/json');
    
        // request.onload = () => {
        //     console.log(request);
        //     if (request.status === 200) {
        //         console.log(JSON.parse(request.response));
        //     } else {
        //         console.error(`error: ${request.status} ${request.statusText}`);
        //     }
        // };
    
        // request.onerror = () => {
        //     console.error('Request failed.');
        // }
    
        // let browserObject = { 'os': osName(), 'browser': browserName() };
        // request.send(JSON.stringify(browserObject));
    
        // console.log("[GET]: Operating System: " + browserObject.os + " | Browser: " + browserObject.browser);
    }
    
    function osName() {
        var name = "Unknown";
    
        if (window.navigator.userAgent.indexOf('Windows NT 10.0')!== -1) name='Windows 10';
        if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) name='Windows 8';
        if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) name='Windows 7';
        if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) name='Windows Vista';
        if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) name='Windows XP';
        if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) name='Windows 2000';
        if (window.navigator.userAgent.indexOf('Mac')            !== -1) name='Mac/iOS';
        if (window.navigator.userAgent.indexOf('X11')            !== -1) name='UNIX';
        if (window.navigator.userAgent.indexOf('Linux')          !== -1) name='Linux';
    
        return name;
    }
    
    function browserName() {
        
        var browser, 
            userAgent = navigator.userAgent;
    
        // The order matters here, and this may report false positives for unlisted browsers.
        if (userAgent.indexOf('Firefox') > -1) {
            browser = 'Mozilla Firefox';
            // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
            browser = 'Opera';
            // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        } else if (userAgent.indexOf('Trident') > -1) {
            browser = 'Microsoft Internet Explorer';
            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        } else if (userAgent.indexOf('Edge') > -1) {
            browser = 'Microsoft Edge';
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        } else if (userAgent.indexOf('Chrome') > -1) {
            browser = 'Google Chrome or Chromium';
            // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        } else if (userAgent.indexOf('Safari') > -1) {
            browser = 'Apple Safari';
            // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        } else {
            browser = 'Unknown';
        }
    
        return browser;
    }
}



export default functions;