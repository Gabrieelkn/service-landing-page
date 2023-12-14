import styles from "./prices.module.css";

export default function Prices() {
  return (
    <div className={styles.prices}>
      <h2>Prices</h2>
      <Table
        service="Brake system repair"
        data1={
          <tr className={styles.row}>
            <TableData data="Changing brake liquid" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
        data2={
          <tr className={styles.row}>
            <TableData data="Changing brake pads" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
        data3={
          <tr className={styles.row}>
            <TableData data="Changing brake discs" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
      />
      <Table
        service="Maintenance"
        data1={
          <tr className={styles.row}>
            <TableData data="Changing oil" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
        data2={
          <tr className={styles.row}>
            <TableData data="Changing oil filter" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
        data3={
          <tr className={styles.row}>
            <TableData data="Changing fuel filter" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
      />
      <Table
        service="Engine repair"
        data1={
          <tr className={styles.row}>
            <TableData data="Changing engine block" title="Service" />
            <TableData data="200$" title="Price" />
          </tr>
        }
        data2={
          <tr className={styles.row}>
            <TableData data="Changing piston" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
        data3={
          <tr className={styles.row}>
            <TableData data="Changing chamshaft" title="Service" />
            <TableData data="100$" title="Price" />
          </tr>
        }
      />
    </div>
  );
}

function Table({ service, data1, data2, data3 }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={`${styles.row} ${styles.header}`}>
          <th className={styles.cell}>{service}</th>
          <th className={styles.cell}>Price</th>
        </tr>
      </thead>
      <tbody>
        {data1}
        {data2}
        {data3}
      </tbody>
    </table>
  );
}

function TableData({ data, title }) {
  return (
    <td className={styles.cell} data-title={title}>
      {data}
    </td>
  );
}
