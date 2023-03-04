// these are set in next.config.js
export const keycloakInitOptions = {
  realm: process.env.keycloakRealm || "test",
  url: process.env.keycloakUrl || "http://localhost:8080/",
  clientId: process.env.keycloakClientId || "test"
}
