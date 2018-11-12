import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Sidebar } from "../models/Sidebar";
import "rxjs/add/operator/map";

@Injectable()
export class SidebarService {
  constructor(private http: Http) {}

  getSidebar() {
    return this.http.get<Sidebar>("http://localhost:8000/sidebar/edit-sidebar");
  }

  postSidebar(value) {
    return this.http.post("http://localhost:8000/sidebar/edit-sidebar", value);
  }
}
