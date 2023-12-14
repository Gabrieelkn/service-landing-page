import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      ©MY BUSSINESS NAME
      <p>
        Logo by{" "}
        <a href="https://www.freepik.com/free-vector/gradient-car-service-logo-template_32378239.htm#query=car%20service%20logo&position=1&from_view=keyword&track=ais&uuid=7321e204-a4f2-43b6-9f01-9d5ca110fb15">
          Freepik
        </a>
      </p>
    </footer>
  );
}
