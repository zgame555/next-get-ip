import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ ip }: any) {
  console.log("ip=====>", ip);

  return (
    <div>
      <h1>ip address: {ip}</h1>
      <a>About</a>
    </div>
  );
}

Home.getInitialProps = async ({ req }: any) => {
  return {
    ip:
      req.headers["x-forwarded-for"] ||
      req.headers["x-real-ip"] ||
      req.connection.remoteAddress,
  };
};
