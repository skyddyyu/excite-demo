import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import StyledComponentsRegistry from "@/app/lib/AntdRegistry";
import {ConfigProvider} from "antd";
import theme from "@/app/lib/theme/themeConfig";
import zhCN from "antd/locale/zh_CN";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "学生信息体检上报系统",
    description: "学生信息体检上报系统",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StyledComponentsRegistry>
            <ConfigProvider theme={theme} locale={zhCN}>
                {children}
            </ConfigProvider>
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}
