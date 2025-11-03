# Cliente API (Frontend)

Este documento explica cómo el frontend de CleenGo se comunica con el backend.

---

## 🔗 Configuración

- Archivo base: `src/services/api.ts`
- URL base: definida en `.env` → `VITE_API_URL`
- Librería utilizada: **Axios**

Axios se configura con **interceptores** para:

- Agregar automáticamente el token JWT a cada solicitud.
- Manejar errores `401` (sesión expirada) y `403` (acceso denegado).
- Mostrar mensajes de error o éxito con **SweetAlert2**.

---

## 🧠 Ejemplo de uso

```ts
import api from "../services/api";

async function getAppointments() {
  const res = await api.get("/appointments");
  return res.data;
}
```
