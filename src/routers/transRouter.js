import LayoutWrapper from "../layouts/Layout.vue";
import { pageRoute } from "../constants/pages";

export const transRoutes = [
  {
    ...pageRoute.INVOICE_HISTORY,
    component: () => import("../pages/transaction/invoice/InvoiceHistory.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.INVOICE_SAVED,
    component: () => import("../pages/transaction/invoice/InvoiceSaved.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.INVOICE_SENT,
    component: () => import("../pages/transaction/invoice/InvoiceSent.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.PO_HISTORY,
    component: () =>
      import("../pages/transaction/purchase order/PO-History.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.PO_INBOX,
    component: () => import("../pages/transaction/purchase order/PO-Inbox.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.PO_PROGRESS,
    component: () =>
      import("../pages/transaction/purchase order/PO-InProgress.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.SHIPMENT_HISTORY,
    component: () =>
      import("../pages/transaction/shipment/ShipmentHistory.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.SHIPMENT_SAVED,
    component: () => import("../pages/transaction/shipment/ShipmentSaved.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.SHIPMENT_SENT,
    component: () => import("../pages/transaction/shipment/ShipmentSent.vue"),
    meta: { layout: LayoutWrapper },
  },
];
