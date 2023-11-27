import LayoutWrapper from "../layouts/Layout.vue";
import { page } from "../constants/pages";

export const transRoutes = [
  {
    ...page.INVOICE_HISTORY,
    component: () => import("../pages/transaction/invoice/InvoiceHistory.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.INVOICE_SAVED,
    component: () => import("../pages/transaction/invoice/InvoiceSaved.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.INVOICE_SENT,
    component: () => import("../pages/transaction/invoice/InvoiceSent.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.PO_HISTORY,
    component: () =>
      import("../pages/transaction/purchase order/PO-History.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.PO_INBOX,
    component: () => import("../pages/transaction/purchase order/PO-Inbox.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.PO_PROGRESS,
    component: () =>
      import("../pages/transaction/purchase order/PO-InProgress.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.SHIPMENT_HISTORY,
    component: () =>
      import("../pages/transaction/shipment/ShipmentHistory.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.SHIPMENT_SAVED,
    component: () => import("../pages/transaction/shipment/ShipmentSaved.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.SHIPMENT_SENT,
    component: () => import("../pages/transaction/shipment/ShipmentSent.vue"),
    meta: { layout: LayoutWrapper },
  },
];
