export const apiHost =
  import.meta.env.NODE_ENV === 'development'
    ? import.meta.env.VITE_URL_DEV
    : import.meta.env.VITE_URL_PRO
