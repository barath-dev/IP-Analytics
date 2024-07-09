import styles from "./style.module.css";


export default async  function Analytics() {

  
  return (
    <div>
      <h1 style={{textAlign:"center"}} className={styles.test}>Analytics</h1>
        <div className={styles.container}>
          <div>
            <h2>Country Analytics</h2>
            <p>View the analytics of the visitors by country</p>
            <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* {Object.keys(countryStats).map((key: any) => <tr key={key}>
              <td>{key}</td>
              <td>{countryStats[key]}</td>
              <td>{((countryStats[key] / data.length) * 100).toFixed(2)}%</td>
            </tr>)} */}
          </tbody>
        </table>
        </div>
        <div>
        <h2>Organisation Analytics</h2>
        <p>View the analytics of the visitors by country</p>
        <table>
          <thead>
            <tr>
              <th>Organisation</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* {Object.keys(orgStats).map((key: any) => <tr key={key}>
              <td>{key}</td>
              <td>{orgStats[key]}</td>
              <td>{((orgStats[key] / data.length) * 100).toFixed(2)}%</td>
            </tr>)} */}
          </tbody>
        </table>
        </div>
        <div>
        <h2>Os Analytics</h2>
        <p>View the analytics of the visitors by country</p>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* {db?.length===0?db?.map((item:any) => <Item key={item.id} item={item}/>): <tr><td colSpan={10}>No data</td></tr>} */}
          </tbody>
        </table>
        </div>
        <div>
        <h2>Country Analytics</h2>
        <p>View the analytics of the visitors by country</p>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* {db?.length===0?db?.map((item:any) => <Item key={item.id} item={item}/>): <tr><td colSpan={10}>No data</td></tr>} */}
          </tbody>
        </table>
        </div>
        <div>
        <h2>Country Analytics</h2>
        <p>View the analytics of the visitors by country</p>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* {db?.length===0?db?.map((item:any) => <Item key={item.id} item={item}/>): <tr><td colSpan={10}>No data</td></tr>} */}
          </tbody>
        </table>
        </div>
          <div>
          <h2>Country Analytics</h2>
          <p>View the analytics of the visitors by country</p>
          <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {/* {db?.length===0?db?.map((item:any) => <Item key={item.id} item={item}/>): <tr><td colSpan={10}>No data</td></tr>} */}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}