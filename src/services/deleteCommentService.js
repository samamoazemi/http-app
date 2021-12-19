import http from "./httpService";

export function deleteComment (commentId) {
   return http.delete(`/comments/${commentId}`);
}