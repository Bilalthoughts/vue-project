import LayoutWrapper from "../layouts/Layout.vue";

export const transRoutes = [
  {
    path: "/InvoiceHistory",

    component: () => import("../pages/transaction/invoice/InvoiceHistory.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/InvoiceSaved",

    component: () => import("../pages/transaction/invoice/InvoiceSaved.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/InvoiceSent",

    component: () => import("../pages/transaction/invoice/InvoiceSent.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/PO-History",

    component: () =>
      import("../pages/transaction/purchase order/PO-History.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/PO-Inbox",

    component: () => import("../pages/transaction/purchase order/PO-Inbox.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/PO-InProgress",

    component: () =>
      import("../pages/transaction/purchase order/PO-InProgress.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/ShipmentHistory",

    component: () =>
      import("../pages/transaction/shipment/ShipmentHistory.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/ShipmentSaved",

    component: () => import("../pages/transaction/shipment/ShipmentSaved.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    path: "/ShipmentSent",

    component: () => import("../pages/transaction/shipment/ShipmentSent.vue"),
    meta: { layout: LayoutWrapper },
  },
];
