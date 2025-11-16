import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <>
      <section className={`${styles["alert-section"]} top-50`}>
        <div className="container">
          <div className={styles["alert-title"]}>We're open for you.</div>
          <div className={styles["alert-text"]}>
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>

      <section className={styles["first-hightlight-wrapper"]}>
        <div className="container">
          <div className={styles["new-alert"]}>New</div>
          <div className={`${styles["title-wraper"]} ${styles["bold"]} black`}>
            iPad Pro
          </div>
          <div className={styles["links-wrapper"]}>
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
            </ul>
          </div>
          <div className={`${styles["ipod-caption"]} row`}>
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
