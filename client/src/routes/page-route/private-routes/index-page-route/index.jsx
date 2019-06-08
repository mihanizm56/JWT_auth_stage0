import React from "react";
import { Route } from "react-router-dom";
import { IndexPage } from "../../../../components";

export const IndexPageRoute = props => <Route render={() => <IndexPage {...props} />} />;
