import SidebarNotes from "./SidebarNotes";


export default function NotesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <h1>NotesLayot</h1>
        <SidebarNotes/>
        {children}
      </div>
    );
  }
  