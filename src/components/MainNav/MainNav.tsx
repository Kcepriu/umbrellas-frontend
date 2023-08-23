import { FC } from "react";
import Link from "next/link";
import { pages } from "@/constants/pages.constants";

import styles from "./MainNav.module.css";

const MainNav: FC = () => {
  return (
    <div className={styles.wrapNav}>
      <ul className={styles.listNav}>
        {pages.map((page) => (
          <li key={page.name} className={styles.elementNav}>
            <Link href={page.url}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNav;
