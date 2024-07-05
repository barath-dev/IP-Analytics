//get the ip of the user
async function getIP() {


  const response = await fetch('https://api.ipify.org?format=json',{cache: "no-store"});
  const data = await response.json();
  const response2 = await fetch(`https://ipapi.co/${data.ip}/json/`);
  const data2 = await response2.json();
  return data2;

}

async function fetchDB(){
  const response = await fetch(`${process.env.POCKETBASE_URL}/api/collections/IP_Details/records`,{cache: "no-cache",headers:{
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.POCKETBASE_TOKEN}`
  }});
  const data = await response.json();
  console.log(data);

  return data.items;
}

async function putIpDetails(data:any){
  const db  = fetchDB();
  const response = await fetch(`${process.env.POCKETBASE_URL}/api/collections/IP_Details/records`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.POCKETBASE_TOKEN}`
    },
    body: JSON.stringify(data)
  });
  const data2 = await response.json();
  console.log(data2);
}




async function storeIP() {
  
}



export default async function Home() {

  const ipDetails = await getIP();
  // getDeviceData();
  const db  = await fetchDB();
  const str = JSON.stringify(ipDetails, null, 2);
  return (
    <div>
      <h1>IP Analytics</h1>
      <p>Check your IP address and see your location</p>
      <table className="table">
        <tr>
          <th>IP Address</th>
          <th>City</th>
          <th>Region</th>
          <th>Country</th>
          <th>Postal</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Timezone</th>
          <th>Org</th>
        </tr>
        <tr>
          <td>{ipDetails.ip}</td>
          <td>{ipDetails.city}</td>
          <td>{ipDetails.region}</td>
          <td>{ipDetails.country_name}</td>
          <td>{ipDetails.postal}</td>
          <td>{ipDetails.latitude}</td>
          <td>{ipDetails.longitude}</td>
          <td>{ipDetails.timezone}</td>
          <td>{ipDetails.org}</td>
        </tr>
        {/* {db.map((item:any) => (
          <tr>
            <td>{item.ip}</td>
            <td>{item.city}</td>
            <td>{item.region}</td>
            <td>{item.country}</td>
            <td>{item.postal_code}</td>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
            <td>{item.timezone}</td>
            <td>{item.org}</td>
          </tr>
        ))} */}
      </table>
    </div>
  );
}
