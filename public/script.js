
// const POCKETBASE_URL = "http://127.0.0.1:8090/"
// const POCKETBASE_TOKEN = "0xsnb9i4dfh44jo"



// async function getIP() {
//  try {
//    console.log("Getting IP");
//      const response = await fetch('https://api.ipify.org?format=json', { cache: "no-store" });
//      const data = await response.json();
//      const response2 = await fetch(`https://ipapi.co/${data.ip}/json/`);
//      const data2 = await response2.json();
   
//      if (typeof window !== "undefined") {
//        console.log("Browser");
//        const device = navigator.userAgent;
//        console.log(device);
//      }
//      const deviceDetails = await getDeviceDetails();
//       console.log(deviceDetails);
//      await putIpDetails(data2,deviceDetails);
//      return data2;
//   } catch (error) {
//       console.log(error);
//     }
//   }
  
//   async function checkIPExistsInDB(ip) {
//     const data = await fetchDB();
  
//     // Check if the IP exists in the database
//     for (let i = 0; i < data?.length; i++) {
//       if (data[i].ip === ip) {
//         return {
//           exists: true,
//           rid: data[i].id,
//           count: data[i].visit_count
//         };
//       }
//     }
  
//     return {
//       exists: false,
//       rid: null,
//       count: 0
//     };
//   }
  
//   async function getDeviceDetails() {

//     console.log(navigator.userAgentData);
    
//     const os =  navigator.platform;
    
//     const browser = navigator.userAgentData.brands[2].brand;

//     return [os,browser];

//   }
  
//   async function fetchDB() {
//     const response = await fetch(`${POCKETBASE_URL}api/collections/IP_Details/records`, {
//       cache: "no-cache",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${POCKETBASE_TOKEN}`
//       }
//     });
  
//     const data = await response.json();
//     return data.items;
//   }
  
//   async function putIpDetails(data,deviceDetails) {
//     const { exists, rid, count } = await checkIPExistsInDB(data.ip);
  
//     try {
//       if (exists) {
//         const response = await fetch(`${POCKETBASE_URL}api/collections/IP_Details/records/${rid}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${POCKETBASE_TOKEN}`
//           },
//           body: JSON.stringify({ visit_count: count + 1 })
//         });
  
//         console.log(response);
//         return;
//       }
  
//       if (data.ip === "undefined" || data.ip === null || data.ip === "") {
//         return;
//       }

//       console.log(deviceDetails);

//       //add device details with ip details
//         const response = await fetch(`${POCKETBASE_URL}api/collections/IP_Details/records`, {
//             method: "POST",
//             headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${POCKETBASE_TOKEN}`
//             },
//             body: JSON.stringify({
//             ip: data.ip,
//             city: data.city,
//             region: data.region,
//             country: data.country,
//             postal: data.postal,
//             latitude: data.latitude,
//             longitude: data.longitude,
//             visit_count: 1,
//             timezone: data.timezone,
//             org: data.org,
//             os: deviceDetails[0],
//             browser: deviceDetails[1]
//             })
//         });
  
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }



// getIP();


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




async function fetchData() {

  const data = getBrowserInfo();

  const response = await fetch("https://192.168.235.56:3000/", {
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

fetchData();

