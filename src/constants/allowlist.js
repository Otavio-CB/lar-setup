// Lista de emails autorizados a acessar o app (checagem client-side, só para UX).
// A segurança real é aplicada em `firestore.rules` — as duas listas devem ficar em sincronia.
// SUBSTITUIR pelo email real, ver também firestore.rules
export const EMAILS_AUTORIZADOS = [
  'otaviocalderanadm@gmail.com',
  'duda.dcaliari@gmail.com',
];
