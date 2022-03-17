# Lesson 3 - React Mantine and Routing

## Introduction

The best thing about React components is that they are reusable. Once written, we can simply import them and use them. We can also import components written by other developers.

> The repo from the lesson.

## React UI Libraries

There are several React UI libraries of varying quality, with Material-UI, Ant Design and React Bootstrap being three of the most popular ones.

We are going to look at Mantine, it is easy to set up and use.

We’ll start with a new app:

`npx create-react-app react-with-mantine`

Then install the following

`npm install @mantine/hooks @mantine/core`

Now we can import mantine modules

```js
import { Button } from "@mantine/core";

export function MyApp() {
  return <Button>Hello world!</Button>;
}
```

## Routing

Routing is how our users navigate our SPA application. Each webpage can be described as a route. Routes can be nested in other routes. This is how we can build dynamic and flexible web experiences.

First we will create a home, about and contact page.

We have a link to an About page and a Contact page in our navigation, but no way to display that content.

We will create components to display content on each of those pages, but first let’s create a Heading component which will receive a title prop and return an h1 element.

Create src/components/layout/Heading.js and add the following:

```js
export default function Heading({ title }) {
  return <h1>{title}</h1>;
}
```

This time we’re exporting the component on the same line we create it.

Now let’s add three new components, Home, About and Contact.

Create the following files:

- src/routes/home/index.js
- src/routes/about/index.js
- src/routes/contact/index.js
  Import the Heading component in each and set a title value for the prop in each.

In src/routes/home/index.js:

```js
import Heading from "../layout/Heading";

export default function Home() {
  return <Heading title="Home" />;
}
```

In src/routes/about/index.js:

```js
import Heading from "../layout/Heading";

export default function About() {
  return (
    <>
      <Heading title="About" />

      <p>This is the about page</p>
    </>
  );
}
```

In src/routes/contact/index.js:

```js
import Heading from "../layout/Heading";

export default function Contact() {
  return <Heading title="Contact" />;
}
```

### React Router

Now we need something to navigate around the site. We are going to use React Router.

There are a few routing options avalible in the reac eco-system but the most popular is react-router.

We’ll use code very similar to that found in the quick start guide in the official docs, except we are using it with React Bootstrap components.

`npm i react-router-dom@6`

i is shorthand for install

Now we can write code to navigate between these components.

In Layout.js, we need to add more imports and edit what is returned:

```js
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "../routes/home";
import About from "../routes/about";
import Contact from "../routes/contact";

function Layout() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>React App</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" index component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Layout;
```

Apart from the new imports, we swapped out the Nav.Link Bootstrap components for NavLink components from React Router.

Each Route points to a component we created above.

The content that the Routes point to will be displayed inside the Container component. This means all the content will have a maximum width, as the Container component has a max width. If you wanted a full-width container you can add the fluid prop:

`<Container fluid>`

We wrapped the Navbar.Brand in a NavLink that also points to the home page. The / path is the home page. Finally, everything we return is contained in a Router component.

In the browser you will now be able to navigate between the Home, About and Contact components.

Note that navigating between “pages” doesn’t cause the browser to reload. React Router decides based on the URL what to render:

If the path is “/”, render the Home component.
If the path is “/about”, render the About component.
If the path is “/contact”, render the Contact component.
The exact prop
The exact prop in the first route is important.

`<Route path="/" exact component={Home} />`

Without it, all routes will return the Home component as the router will encounter “/” and think it has found a route requires a component to be returned.

exact makes sure that only the URL/route exactly matchin “/” returns the Home component.

Try remove the exact prop and you’ll see all routes render the Home component.

The exact prop in the first NavLink makes sure that only when the URL is exactly “/” should this link get an “active” class.

`<NavLink to="/" exact className="nav-link">`

Try remove the exact prop and you’ll see that even if the URL is “/about” or “/contact”, the Home link also gets an “active” class.

[Watch on Vimeo](https://vimeo.com/455457887/ad045422a5)

[Code from the video](https://github.com/NoroffFEU/react-router-dom)

Optional videos
These videos are from the CSS Frameworks that you can revisit if you want:
