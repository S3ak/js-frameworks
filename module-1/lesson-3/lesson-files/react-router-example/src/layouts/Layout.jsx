import { AppShell, Navbar, Header } from "@mantine/core";

export default function Layout() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}
