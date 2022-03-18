import { AppShell, Navbar, Header, Group, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const navLinks = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Contact",
      to: "/contact",
    },
    {
      label: "Todos",
      to: "/todos",
    },
  ];

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section>
            <Group direction="column">
              {navLinks.map(({ label, to }) => (
                <NavLink variant="subtle" key={to} to={to}>
                  <Button>{label}</Button>
                </NavLink>
              ))}
            </Group>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          App heading
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
