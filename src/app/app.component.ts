import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  servers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      started: new Date(2022, 4, 11),
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      started: new Date(2015, 1, 17),
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(2020, 2, 17),
    },
    {
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(2013, 11, 7),
    },
  ];
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical",
    };
  }
}
