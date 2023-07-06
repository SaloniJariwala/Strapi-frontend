import React from "react";
import { Layout, theme } from "antd";
const { Header, Content } = Layout;
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const FrontLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const router = useRouter();

    return (
        <>
            <Layout className="layout">
                <Header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}>
                    <AiOutlineShoppingCart
                        style={{ height: 30, width: 30, cursor: "pointer" }}
                        onClick={() => router.push("/")}
                    />
                    <Link href="/" style={{ color: "white", margin: "0 10px" }}>
                        Home
                    </Link>
                    <Link href="/products" style={{ color: "white", margin: "0 10px" }}>
                        Products
                    </Link>
                    <Link href="/about" style={{ color: "white", margin: "0 10px" }}>
                        About
                    </Link>
                    <Link href="/contact" style={{ color: "white", margin: "0 10px" }}>
                        Contact
                    </Link>
                </Header>
                <Content
                    style={{
                        padding: "20px 50px",
                    }}>
                    <div
                        className="site-layout-content"
                        style={{
                            background: colorBgContainer,
                        }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </>
    );
};

export default FrontLayout;
