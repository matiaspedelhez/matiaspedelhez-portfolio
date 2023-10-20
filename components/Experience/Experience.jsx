import styles from "./Experience.module.scss";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

function imageAndCompanyName(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <img
        src={props.src}
        alt={props.alt}
        layout="intrinsic"
        height={32}
        width={32}
      />
      <span style={{ fontSize: "large" }}>{props.alt}</span>
    </div>
  );
}

function position(props) {
  return <span style={{ display: "inline" }}>{props.children[0]}</span>;
}

export default function Experience() {
  return (
    <div className={styles.parent_experience}>
      <div className={styles.Experience}>
        <h1>Experiencia laboral</h1>
        <ReactMarkdown
          components={{
            img(props) {
              return imageAndCompanyName(props);
            },
            h2(props) {
              return position(props);
            },
          }}
        >
          {}
        </ReactMarkdown>
      </div>
    </div>
  );
}
