import React from "react";
import { Route } from "react-router-dom";
import { ProfilePage } from "../../../../components";

export const ProfilePageRoute = () => <Route render={() => <ProfilePage />} />;
