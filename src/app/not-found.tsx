import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <>
      <h2>Not fount</h2>
      <p> 404 error</p>
      <Link href="/">Return Home</Link>
    </>
  );
};

export default NotFound;
