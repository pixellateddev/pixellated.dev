import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="container">
      <h1>
        Welcome to <span>Pixellated.dev</span>
      </h1>
      <h2>Coming Soon...</h2>
    </div>
  );
}
