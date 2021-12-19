import http from "./httpService";

export function addNewComment(data) {
   return http.post("/comments", data);
}