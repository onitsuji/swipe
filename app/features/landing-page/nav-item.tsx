type Props = {
  title: string;
  href: string;
  login?: boolean;
};

export function NavItem({ title, href, login }: Props) {
  return (
    <div>
      <a href={href}>{title}</a>
      {login && <span>tooltip</span>}
    </div>
  );
}
