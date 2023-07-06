import { Inter } from "next/font/google";

import FrontLayout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <FrontLayout>Hii</FrontLayout>
    </>
  );
}
