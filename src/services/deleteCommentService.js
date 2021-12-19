// import instance from "../axiosInstance";

import http from "./httpService";

export function deleteComment (commentId) {
   return http.delete(`/comments/${commentId}`);

 // return instance.delete(`/comments/${commentId}`);

 // instance => we use instance when we have many API.
}