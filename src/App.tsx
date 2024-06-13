import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MDXEditor } from "@shubasish/mdx-editor";
import { ALL_PLUGINS } from "./utils";
import "@shubasish/mdx-editor/style.css";

function App() {
  return (
    <div className="flex grow">
      <div className="flex flex-col bg-lime-100 w-full">
        <div className="flex items-center justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className=" bg-white p-4 rounded-lg text-[#fb651e] grow">
          <MDXEditor
            markdown={"# Hello World"}
            plugins={ALL_PLUGINS}
            className="h-full"
          />
        </div>
        <div className=" h-10"></div>
      </div>
    </div>
  );
}

export default App;
