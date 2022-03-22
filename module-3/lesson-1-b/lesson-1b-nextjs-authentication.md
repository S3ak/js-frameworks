# Lesson 1B - Authentication

Authentication verifies who a user is, while authorization controls what a user can access. Next.js supports multiple authentication patterns, each designed for different use cases. This page will go through each case so that you can choose based on your constraints.

## Authentication Patterns

The first step to identifying which authentication pattern you need is understanding the data-fetching strategy you want. We can then determine which authentication providers support this strategy. There are two main patterns:

- Use static generation to server-render a loading state, followed by fetching user data client-side.
- Fetch user data server-side to eliminate a flash of unauthenticated content.

## Authentication Providers

There are a number of authentication providers that you can use in any Javascript framework. These include;

- Passport
- 0Auth
- SuperTokens

But these providers need you to build your own backend implementation

## About NextAuth.js

[NextAuth.js](https://next-auth.js.org/getting-started/introduction) is a complete open-source authentication solution for Next.js applications.

It is designed from the ground up to support Next.js and Serverless.

Check out the example code to see how easy it is to use NextAuth.js for authentication.
