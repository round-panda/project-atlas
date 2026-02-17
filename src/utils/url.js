// Prepends the Astro base path to any internal URL.
// Handles both trailing-slash and non-trailing-slash BASE_URL values safely.
//
// Usage:  url('/purpose')            →  '/project-atlas/purpose'
//         url('/assets/images/logo') →  '/project-atlas/assets/images/logo'
//         url('/')                   →  '/project-atlas/'

export function url(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip any trailing slash
  const clean = path.replace(/^\//, '');                    // strip leading slash from path
  return clean === '' ? `${base}/` : `${base}/${clean}`;
}
