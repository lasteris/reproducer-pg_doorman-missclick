import http from "k6/http";

export const options = {
  stages: [
    { duration: "30s", target: 15 },
    { duration: "10m", target: 50 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  http.get("http://127.0.0.1:8181/api/test/a");
  http.get("http://127.0.0.1:8181/api/test/b");
  http.get("http://127.0.0.1:8181/api/test/c");
  http.get("http://127.0.0.1:8181/api/test/d");
  http.get("http://127.0.0.1:8181/api/test/e");
  http.get("http://127.0.0.1:8181/api/test/i");
  http.get("http://127.0.0.1:8181/api/test/j");
  http.get("http://127.0.0.1:8181/api/test/k");
  http.get("http://127.0.0.1:8181/api/test/l");
  http.get("http://127.0.0.1:8181/api/test/m");
  http.get("http://127.0.0.1:8181/api/test/n");
}