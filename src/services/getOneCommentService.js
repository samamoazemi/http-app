import http from "./httpService";

export function getOneComment (id) {
   return http.get(`/comments/${id}`);
}