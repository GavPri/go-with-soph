import { useEffect, useState } from "react";

function App() {
  // * useEffect to handle theme changes
  useEffect(() => {
    // If the user has selected an theme, get that theme
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  const [selectedColorScheme, setselectedColorScheme] = useState("light");

  const handleColorSchemeChange = () => {
    const newTheme = selectedColorScheme === "light" ? "dark" : "light";

    document.body.classList.remove(selectedColorScheme);

    document.body.classList.add(newTheme);

    setselectedColorScheme(newTheme);
  };
  return (
    <div className="bg-body">
      <h1 className="text-text text-3xl font-bold font-mono">GoWithSoph!</h1>
      <button
        className="bg-accentPrimary h-10 w-24"
        onClick={handleColorSchemeChange}
      ></button>
    </div>
  );
}

export default App;
