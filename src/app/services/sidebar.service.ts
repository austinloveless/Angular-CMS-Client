import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
@Injectable({
  providedIn: "root"
})
export class SidebarService {
  constructor(private http: Http) {}

  getSidebar() {
    return this.http
      .get("http://localhost:8000/sidebar/edit-sidebar")
      .map(res => res.json());
  }

  postSidebar(value) {
    return this.http
      .post("http://localhost:8000/sidebar/edit-sidebar", value)
      .map(res => res.json());
  }
}
