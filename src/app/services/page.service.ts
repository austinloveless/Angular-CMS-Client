import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class PageService {
  constructor(private http: Http) {}

  public pagesBS = new BehaviorSubject<string>(null);

  getPages() {
    return this.http.get("http://localhost:8000/pages").map(res => res.json());
  }

  getPage(slug) {
    return this.http
      .get("http://localhost:8000/pages/" + slug)
      .map(res => res.json());
  }

  postAddPage(value) {
    return this.http
      .post("http://localhost:8000/pages/add-page", value)
      .map(res => res.json());
  }

  getEditPage(id) {
    return this.http
      .get("http://localhost:8000/pages/edit-page/" + id)
      .map(res => res.json());
  }

  postEditPage(value) {
    return this.http
      .post("http://localhost:8000/pages/edit-page/" + value.id, value)
      .map(res => res.json());
  }

  getDeletePage(id) {
    return this.http
      .get("http://localhost:8000/pages/delete-page/" + id)
      .map(res => res.json());
  }
}
