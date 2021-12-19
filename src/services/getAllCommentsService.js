import http from "./httpService";

export function getAllComments () {
   return http.get("/comments");
}