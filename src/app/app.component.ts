import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("active");
    }, 3000);
  });
  servers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
  ];

  filteredStatus = "";

  onAddNewServer() {
    const newServer = {
      instanceType: "medium",
      name: "New server",
      status: "stable",
      started: new Date(15, 1, 2017),
    };
    this.servers.push(newServer);
  }

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
