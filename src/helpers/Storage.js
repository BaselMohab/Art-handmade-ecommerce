export default function loadStorage() {
  return sessionStorage.getItem("token") || localStorage.getItem("token");
}
