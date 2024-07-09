// async function fetchDB(){
//   try {
//     const response = await fetch(`${process.env.POCKETBASE_URL}api/collections/IP_Details/records`,{cache: "no-cache",headers:{
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${process.env.POCKETBASE_TOKEN}`
//     }});
//     const data = await response.json();

//     return data.items;
    
//   } catch (error) {
//     console.error(error);
//   }
// }

//  function Item({item}:{item:any}) {
//   return (
//     <tr>
//       <td>{item.ip}</td>
//       <td>{item.city}</td>
//       <td>{item.region}</td>
//       <td>{item.country}</td>
//       <td>{item.postal}</td>
//       <td>{item.latitude}</td>
//       <td>{item.longitude}</td>
//       <td>{item.timezone}</td>
//       <td>{item.org}</td>
//       <td>{item.visit_count}</td>
//     </tr>
//   );
// }
  
  export default async function Home() {
  
    // const db  = await fetchDB();
    // console.log(db);

    return (
      <div>
        <h1 className="">IP Analytics</h1>
        <p>View the IP details of the visitors</p>
        <table className="table">
          <thead>
            <tr>
              <th>IP</th>
              <th>City</th>
              <th>Region</th>
              <th>Country</th>
              <th>Postal</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Timezone</th>
              <th>Org</th>
              <th>Visit Count</th>
            </tr>
          </thead>
          <tbody>
            {/* {db?.length!==0?db?.map((item:any) => <Item key={item.id} item={item}/>): <tr><td colSpan={10}>No data</td></tr>} */}
          </tbody>
        </table>
      </div>
    );
  }
  