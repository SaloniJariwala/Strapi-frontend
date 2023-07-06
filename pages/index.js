import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { lazy } from "react";

const FrontLayout = dynamic(() => import("@/components/Layout"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <FrontLayout>Hii</FrontLayout>
        </>
    );
}
