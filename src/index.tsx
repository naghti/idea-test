import {createRoot} from "react-dom/client";
import {App} from "./pages/App";
import {StrictMode} from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
