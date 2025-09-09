import SidebarNotes from "./SidebarNotes";

import css from "./layout.module.css";

export default function LayoutNotes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
<div className={css.notesWrapper}>{children}</div>
     
    </section>
  );
}
