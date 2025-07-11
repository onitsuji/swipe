type Navigation = {
  title: string;
  href: string;
  login?: boolean;
};

const navigation: Array<Navigation> = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Updates",
    href: "#",
  },
  {
    title: "App",
    href: "#",
  },
  {
    title: "Login",
    href: "/auth/login",
    login: true,
  },
];

export function Navbar() {
  return (
    <header>
      <nav>nav items</nav>
    </header>
  );
}
