


function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var browserName, osName, deviceName;

  // Detect Browser
  if (userAgent.indexOf("Brave") > -1) {
      browserName = "Brave";
  } else if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
  } else if (userAgent.indexOf("SamsungBrowser") > -1) {
      browserName = "Samsung Internet";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browserName = "Opera";
  } else if (userAgent.indexOf("Trident") > -1) {
      browserName = "Microsoft Internet Explorer";
  } else if (userAgent.indexOf("Edge") > -1) {
      browserName = "Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
      if (navigator.brave && navigator.brave.isBrave) {
          browserName = "Brave";
      } else {
          browserName = "Google Chrome";
      }
  } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Apple Safari";
  } else {
      browserName = "Unknown Browser";
  }

  // Detect OS
  if (userAgent.indexOf("Win") > -1) {
      osName = "Windows";
  } else if (userAgent.indexOf("Mac") > -1) {
      osName = "Macintosh";
  }else if (userAgent.indexOf("Android") > -1) {
    osName = "Android";
} else if (userAgent.indexOf("Linux") > -1) {
      osName = "Linux";
  }  else if (userAgent.indexOf("like Mac") > -1) {
      osName = "iOS";
  } else {
      osName = "Unknown OS";
  }

  // Detect Device (basic check for mobile devices)
  if (/Mobi|Android/i.test(userAgent)) {
      deviceName = "Mobile";
  } else {
      deviceName = "Desktop";
  }

  return {
      browser: browserName,
      os: osName,
      device: deviceName
  };

}



console.log("refferer : "+ document.referrer);


async function putData() {

  const data = getBrowserInfo();

  const response = await fetch("https://ip-analytics-backend.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      browser: data.browser,
      os: data.os,
      device: data.device
    }),
  });

  console.log(await response); // Assuming the response is JSON
}

putData();

