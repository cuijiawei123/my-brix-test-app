import "./globals.css";
import AppContextProvider from '@/components/AppContext'
import {SidebarProvider} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"
import * as React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body >
        <AppContextProvider>
            <SidebarProvider>
                <AppSidebar/>
                {children}
            </SidebarProvider>
        </AppContextProvider>
        </body>
        </html>
    )
}
