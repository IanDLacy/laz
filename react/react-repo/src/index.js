import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider } from "@material-ui/styles";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext
} from "./context/ThemeContext";
import { CssBaseline } from "@material-ui/core";
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
axios.defaults.headers.common["Content-Type"] = "application/json";
/*
const socket = io.connect('localhost:8080');
// const testSockets = Array(4).fill(null).map(() => io.connect('localhost:8080'))
// testSockets.forEach((testSocket) => {
//   testSocket.on('connect', () => console.log("socket:", testSocket.id))
// })
socket.on('connect', () => console.log("socket:", socket.id));
// socket.emit("startGame", "testGame2", (success) => {
//   console.log(success)
// })
*/
ReactDOM.render(
      <LayoutProvider>
        <ThemeChangeProvider>
          <ThemeStateContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <CssBaseline />
                  <App />
              </ThemeProvider>
            )}
          </ThemeStateContext.Consumer>
        </ThemeChangeProvider>
      </LayoutProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();