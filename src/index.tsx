import {createRoot} from "react-dom/client";
import {App} from "./pages/App";
import {StrictMode} from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  </StrictMode>,
)
