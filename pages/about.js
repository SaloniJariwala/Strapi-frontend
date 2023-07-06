import dynamic from "next/dynamic";
import React from "react";
const FrontLayout = dynamic(() => import("@/components/Layout"));

const About = () => {
    return (
        <FrontLayout>
            <h1>About Us Page</h1>
        </FrontLayout>
    );
};

export default About;
