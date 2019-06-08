import React from "react";
import { Route } from "react-router-dom";
import { ProfilePage } from "../../../../components";

export const ProfilePageRoute = props => <Route render={() => <ProfilePage {...props} />} />;
