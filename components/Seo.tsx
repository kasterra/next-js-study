import Head from "next/head";
import { useRouter } from "next/router";

interface objType {
  [name: string]: string;
}

const pageName: objType = {
  "/": "Home",
  "/about": "About",
};

export default function Seo() {
  const router = useRouter();
  return (
    <Head>
      <title>{pageName[router.pathname]} | Next Movies</title>
    </Head>
  );
}
