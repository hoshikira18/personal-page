import MainLayout from "./components/layout/MainLayout";
import { inter } from "./layout";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainLayout children={children} />
            </body>
        </html>
    );
}
