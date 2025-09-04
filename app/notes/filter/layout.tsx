import SidebarNotes from "./SidebarNotes";

import css from "./layout.module.css";

export default function LayoutNotes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <SidebarNotes />
      </div>
<div className={css.notesWrapper}>{children}</div>
     
    </div>
  );
}
