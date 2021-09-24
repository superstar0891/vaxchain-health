import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FallbackView } from "_start/partials";
import { LightDashboardWrapper } from "app/pages/dashboards/light-dashboard/LightDashboardWrapper";
import { StartDashboardWrapper } from "app/pages/dashboards/start-dashboard/StartDashboardWrapper";
import { DashboardWrapper } from "app/pages/dashboards/super-admin/DashboardWrapper";
import { OrganizationManagement } from "app/pages/organization-management/super-admin";
import { DetailPage } from "app/pages/organization-management/super-admin/DetailPage";
import { LocalGovernmentUnits } from "app/pages/local-government-units/super-admin";
import { VaccinationCenter } from "app/pages/local-government-units/super-admin/VaccinationCenter";
import { MenuTestPage } from "app/pages/MenuTestPage";

export function PrivateRoutes() {
  const ProfilePageWrapper = lazy(
    () => import("../modules/profile/ProfilePageWrapper")
  );
  const GeneralPageWrapper = lazy(
    () => import("../modules/general/GeneralPageWrapper")
  );
  const DocsPageWrapper = lazy(
    () => import("../modules/docs/DocsPageWrapper")
  );

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/dashboard" component={DashboardWrapper} />
        <Route path="/om" exact component={OrganizationManagement} />
        <Route path="/om/:id" exact component={DetailPage} />
        <Route path="/lgu" exact component={LocalGovernmentUnits} />
        <Route path="/lgu/:id" exact component={VaccinationCenter} />

        <Route path="/start" component={StartDashboardWrapper} />
        <Route path="/light" component={LightDashboardWrapper} />
        <Route path="/general" component={GeneralPageWrapper} />
        <Route path="/profile" component={ProfilePageWrapper} />
        <Route path="/menu-test" component={MenuTestPage} />
        <Route path="/docs" component={DocsPageWrapper} />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="dashboard" />
      </Switch>
    </Suspense>
  );
}
