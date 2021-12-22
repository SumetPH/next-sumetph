import "~/styles/globals.css";
import "~/styles/float.css";
import "~/styles/box.css";
import "~/styles/loading.css";

import type { AppProps } from "next/app";
import Nav from "~/components/layouts/Nav";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
