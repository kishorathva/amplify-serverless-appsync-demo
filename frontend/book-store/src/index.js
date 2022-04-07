import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "us-west-1",
    userPoolId: "us-west-1_sfFvxlWl4",
    userPoolWebClientId: "31tk50aqa0v8rvug254v1li12n",
    mandatorySignIn: true,
  },
});

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    "https://efebg3b5hjey5kuueeroa5i2v4.appsync-api.us-west-1.amazonaws.com/graphql",
  aws_appsync_region: "us-west-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS", // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
};

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
