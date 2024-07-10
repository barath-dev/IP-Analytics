import styles from "./style.module.css";


const BASEURL = "https://ip-analytics-backend.onrender.com"
async function getStats() {

  const response = await fetch(`${BASEURL}/stats`,
    {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);

   
    const responseData = await response.json();

    return responseData;
  }

  
  function Table({ data, title }: { data: Record<string, number>, title: string }) {

    //sort the data in descending order
    data = Object.keys(data).sort((a, b) => data[b] - data[a]).reduce((acc: any, key: any) => {
      acc[key] = data[key];
      return acc;
    }, {});

    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.columnTitle}>{title}</th>
            <th className={styles.columnCount}>Count</th>
            <th className={styles.columnPercentage}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(data).length === 0 && data.constructor === Object ? <tr><td colSpan={3}>No data available</td></tr>:
         Object.keys(data).map((key: any) => (
        <tr key={key}>
          <td className={styles.columnTitle}>{key}</td>
          <td className={styles.columnCount}>{data[key]}</td>
          <td className={styles.columnPercentage}>{((data[key] / Object.values(data).reduce((a: number, b: number) => a + b)) * 100).toFixed(2)}%</td>
        </tr>
      ))}
        </tbody>
      </table>
    );
  }

export default async  function Analytics() {

  const data = await getStats();

  console.log(data.osStats);

  
  return (
    <div style={{textAlign:"center",alignItems:"center"}}>
      <h1 style={{textAlign:"center"}} className={styles.test}>Analytics</h1>
        <div className={styles.container}>
            <h2>OverAll Analytics</h2>
            <p>View the analytics of the visitors by country</p>
        <div className={styles.div}>
          <table className={styles.table}> {/* Add the class name here */}
            <thead>
              <tr>
                <th>Overall Stats</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.overallStats).map((key: any) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{data.overallStats[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Country Analytics</h2>
          <p>View the analytics of the visitors by country</p>
          <div className={styles.div}>
          <Table data={data.countryStats} title="Country" />
          </div>
        </div>
        <div>
          <h2>Org Analytics</h2>
          <p>View the analytics of the visitors by organization</p>
          <div className={styles.div}>
          <Table data={data.orgStats} title="Organization"/>
          </div>
        </div>
        <div>
          <h2>Browser Analytics</h2>
          <p>View the analytics of the visitors by browser</p>
          <div className={styles.div}>
          <Table data={data.browserStats} title="Browser"/>
          </div>
          </div>
          <div>
          <h2>OS Analytics</h2>
          <p>View the analytics of the visitors by OS</p>
          <div className={styles.div}>
          <Table data={data.osStats} title="OS"/>
          </div>
          </div>
          <div>
          <h2>Device Analytics</h2>
          <p>View the analytics of the visitors by device</p>
          <div className={styles.div}>
          <Table data={data.deviceStats} title="Device"/>
          </div>
          </div>
          <div>
          </div>
      </div>
    </div>
  );
}