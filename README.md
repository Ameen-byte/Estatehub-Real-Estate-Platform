# EstateHub Real Estate Platform

EstateHub is an initial React and Vite frontend for a modern real-estate portfolio dashboard. It gives property managers a clear view of listing performance, saved homes, recent activity, and featured properties.

## Features Implemented

- Responsive header/navbar, sidebar navigation, dashboard home, property cards, activity feed, and footer
- Portfolio statistic cards rendered from reusable data-driven props
- Reusable `Button`, `StatCard`, `PropertyCard`, and `ActivityList` components
- Light/dark theme toggle (bonus feature)
- Responsive layout for desktop, tablet, and mobile screens
- External CSS, component stylesheet, inline style for dynamic property images, and CSS variables
- Accessible labels and keyboard focus styles
- Registration page with personal, education, skills, resume, password, gender, and terms fields
- Controlled inputs using a dedicated `useState()` value for every registration field
- Submit validation for required fields, email format, 10-digit mobile numbers, password rules, matching passwords, resume, and terms acceptance
- Reset button clears all controlled state; successful submission displays a confirmation and clears the form
- Password show/hide control, live password-strength indicator, and skills character counter

## React Concepts Used

- **Project creation and structure:** Vite provides the development server and build pipeline. Components are organized under `src/components`, while the page composition lives under `src/pages`.
- **`main.jsx`:** Imports global styles, finds the HTML element with `id="root"`, and mounts `<App />` with React's `createRoot`. `StrictMode` helps identify development-time problems.
- **JSX:** UI markup is written in JavaScript expressions. JSX keeps the component structure close to the data and makes conditional class names and mapped lists straightforward.
- **Functional components:** Every reusable UI piece is a function that returns JSX. `App` uses the `useState` hook for the theme toggle.
- **Props:** Props are read-only inputs. For example, `PropertyCard` receives `title`, `price`, `image`, and `tag`; it displays them without changing the original values.
- **Module exports:** `Navbar`, `Sidebar`, `PropertyCard`, and other components use default exports. `Button` also demonstrates a named export alongside its default export.
- **Component-based architecture:** `Home` composes smaller components, and arrays of data are rendered with `.map()` to avoid duplicated markup.

## Registration Module Concepts

- **State vs normal variables:** Form values are stored in React state because the interface must re-render as the user types. A normal variable would reset during rendering and would not update the UI reliably.
- **`useState()`:** `Register.jsx` stores every field independently, including checkbox and file-name state, plus validation errors, success status, and password visibility.
- **Event handling:** `onChange` receives the event object and updates the matching setter. Buttons use `onClick`; the form uses `onSubmit` and calls `event.preventDefault()` so the browser does not refresh the page.
- **Controlled components and two-way binding:** Every input receives its current state through `value` or `checked`, and its `onChange` handler sends user edits back into state. The password strength and character counter update immediately from those values.
- **Validation:** Submission builds an error object before allowing registration. The password must have at least 8 characters, uppercase, lowercase, number, and special character. The success state is shown only when all validation rules pass.

## Class Components vs Functional Components

Class components extend `React.Component`, define a `render()` method, and traditionally manage state with `this.state` and lifecycle methods such as `componentDidMount`. Functional components are plain JavaScript functions. With hooks such as `useState` and `useEffect`, they support state and side effects with less ceremony. EstateHub uses functional components because they are concise, composable, and the recommended approach for new React code. Both approaches can receive read-only props and return JSX.

## Styling Approach

Global reset and focus treatment are in `src/index.css`. The application layout and design tokens are in `src/App.css`. Reusable component styles are grouped in `src/components/components.css`. Inline JSX styling is used only for each property's dynamic image URL, while CSS variables provide the light/dark theme values.

## Screenshots

Run the application with `npm install` and `npm run dev`, then capture the dashboard in your browser. The initial UI is designed as a responsive dashboard and can be viewed at both desktop and mobile widths.

## Run Locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and check code quality with `npm run lint`.

## Submission

The project is ready to push to the public GitHub repository named `Estatehub-Real-Estate-Platform`. `node_modules/`, build output, and local environment files are excluded by `.gitignore`. To create a ZIP for submission, use your file explorer's compressed-folder action or run `Compress-Archive` from the project parent folder while excluding `node_modules` and `dist`.
