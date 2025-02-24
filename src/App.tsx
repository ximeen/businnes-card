import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/themes/theme-provider";

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="orenrefrigeracao-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | oren.refrigeracao" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

