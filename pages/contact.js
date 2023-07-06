import dynamic from "next/dynamic";
import React from "react";
const FrontLayout = dynamic(() => import("@/components/Layout"));

const Contact = () => {
    return (
        <FrontLayout>
            <h1>Contact Page</h1>
        </FrontLayout>
    );
};

export default Contact;
