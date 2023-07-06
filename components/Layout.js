import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
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
          }}
        >
          <AiOutlineShoppingCart
            style={{ height: 30, width: 30, cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
          <ul style={{ display: "flex", listStyle: "none", marginLeft: 30 }}>
            <li style={{ margin: "0 10px" }}>
              <Link href="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link href="/products" style={{ color: "white" }}>
                Products
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link href="/about" style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link href="/contact" style={{ color: "white" }}>
                Contact
              </Link>
            </li>
          </ul>
        </Header>
        <Content
          style={{
            padding: "20px 50px",
          }}
        >
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </>
  );
};

export default FrontLayout;
