
const BASEURL = "https://ip-analytics-backend.onrender.com"
async function fetchDb() {
    const response = await fetch(`${BASEURL}/records`,
    {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData = await response.json();

    return responseData;
}

function Item({ data }: { data: any }) {
  return (
    <tr>
      <td>{data.ip}</td>
      <td>{data.city}</td>
      <td>{data.region}</td>
      <td>{data.country}</td>
      <td>{data.postal}</td>
      <td>{data.latitude}</td>
      <td>{data.longitude}</td>
      <td>{data.timezone}</td>
      <td>{data.org}</td>
      <td>{data.visit_count}</td>
    </tr>
  );
}
  
export default async function Home() {

  const data = await fetchDb();

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
            {data.length === 0 ? ( <tr style={{textAlign:"center",fontSize:"32px"}}><td colSpan={10}>No data</td></tr>):
             data.map((item: any) => (
              <Item key={item.ip} data={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  