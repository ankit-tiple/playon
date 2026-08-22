import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div>This is Dashboard Layout</div>
      {children}
    </>
  );
}
