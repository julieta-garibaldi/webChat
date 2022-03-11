import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import persistPlugin from "@rematch/persist";
import { init } from "@rematch/core";
import storage from "redux-persist/lib/storage";
import * as models from "../src/redux/userreducer";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import Routes from "./routes/routes";

const persistConfig = {
  key: "root",
  storage,
};

const store = init({
  models,
  plugins: [persistPlugin(persistConfig)],
});

const persistor = getPersistor();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
