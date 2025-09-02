import Link from "next/link";
import css from "./TagsMenu.module.css"

const TagsMenu = () => {
     const tags = ["Work", "Personal", "Meeting", "Shopping", "Todo"];

  return (<div className={css.menuContainer}>
  <button className={css.menuButton}>
    Notes ▾
  </button>
    <ul className={css.menuList}>
    {tags.map(tag => (
      <li  key={tag} className={css.menuItem}>
        <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
          {tag}
        </Link>
      </li>))}
    </ul>
</div>
   
  );
};

export default  TagsMenu;