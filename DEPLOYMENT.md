# 🚀 Guía de Setup GitHub + Hostinger (Automático)

## Paso 1: Crear repositorio en GitHub

```bash
# Desde la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: React + Vite + Tailwind deployment ready"
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/<TU_REPO>.git
git push -u origin main
```

Luego crea rama `develop`:
```bash
git checkout -b develop
git push -u origin develop
```

## Paso 2: Configurar secrets en GitHub

En tu repositorio de GitHub:
1. Ve a **Settings > Secrets and variables > Actions**
2. Crea los siguientes secrets para **DESARROLLO**:

| Secret | Valor | Ejemplo |
|--------|-------|---------|
| `DEV_FTP_SERVER` | Servidor FTP | `ftp.tudominio.com` |
| `DEV_FTP_USERNAME` | Usuario FTP | `u123456789` |
| `DEV_FTP_PASSWORD` | Contraseña FTP | (de Hostinger) |
| `DEV_FTP_SERVER_DIR` | Ruta servidor | `/public_html/desarrollo/` |
| `DEV_FTP_PORT` | Puerto (opcional) | `21` |
| `DEV_VITE_BASE_PATH` | Base path (opcional) | `/desarrollo/` |

3. Para **PRODUCCIÓN** (cuando estés listo):

| Secret | Valor | Ejemplo |
|--------|-------|---------|
| `FTP_SERVER` | Servidor FTP | `ftp.tudominio.com` |
| `FTP_USERNAME` | Usuario FTP | `u123456789` |
| `FTP_PASSWORD` | Contraseña FTP | (de Hostinger) |
| `FTP_SERVER_DIR` | Ruta servidor | `/public_html/` |
| `FTP_PORT` | Puerto (opcional) | `21` |
| `VITE_BASE_PATH` | Base path (opcional) | `/` |

## Paso 3: Verificar datos en Hostinger

En tu panel de Hostinger:
1. Ve a **Gestor de archivos** o **FTP**
2. Confirma rutas:
   - Desarrollo: `/home/usuario/public_html/desarrollo/`
   - Producción: `/home/usuario/public_html/`
3. Crea carpeta de desarrollo si no existe

## Paso 4: Flujo de trabajo

### Desarrollo (automático)
```bash
# Trabajas en develop
git checkout develop
# ... haces cambios ...
git commit -m "feat: agregar nueva feature"
git push origin develop
# ✅ GitHub Actions despliega automáticamente en desarrollo
```

### Promoción a Producción (manual)
```bash
# Cuando todo está validado en desarrollo
git checkout main
git merge develop
git push origin main
# En GitHub Actions > Deploy to Hostinger (FTP)
# Clickea "Run workflow" y deploy en producción
```

## Paso 5: Validar despliegue

- **Desarrollo**: https://tudominio.com/desarrollo/
- **Producción**: https://tudominio.com/

Si tienes errores 404 en rutas (ej: `/producto/1`), revisa que `public/.htaccess` esté en servidor.

## ⚠️ Importante

- **Nunca** pushes directamente a `main` sin pasar por `develop` primero
- Los secrets NO aparecen en el código, GitHub los inyecta
- Si cambias FTP en Hostinger, actualiza los secrets en GitHub

## Troubleshooting

### Los archivos no se suben por FTP
- ✓ Revisa que los secrets estén correctos
- ✓ Confirma ruta exacta en Hostinger
- ✓ Prueba credenciales FTP locales antes

### Errores 404 después de desplegar
- ✓ Verifica `public/.htaccess` en servidor (reescritura SPA)
- ✓ Valida que `DEV_VITE_BASE_PATH` o `VITE_BASE_PATH` sean correctos

### Workflow no se ejecuta en push a develop
- ✓ Confirma que el archivo está en `.github/workflows/deploy-hostinger-dev.yml`
- ✓ Verifica que la rama se llama exactamente `develop`
- ✓ Revisa **Actions** tab en GitHub para ver logs de error

## Test en local antes de subir

```bash
npm run lint    # Comprobar calidad código
npm run test    # Ejecutar tests
npm run build   # Generar dist/ localmente
```

Cuando todo esté en verde, ¡a subir a GitHub! 🚀
