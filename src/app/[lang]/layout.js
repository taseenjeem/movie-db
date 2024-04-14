import SideBar from "@/components/global/sidebar/SideBar";

export default function SidebarLayout({ children, params }) {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar language={params?.lang} />
        <div className="content">{children}</div>
      </div>
    </main>
  );
}
