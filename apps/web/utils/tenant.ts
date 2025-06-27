// packages/tenant/index.ts
type TenantConfig = {
  id: string;
  name: string;
};

const tenants: Record<string, TenantConfig> = {
  "client1": {
    id: "client1",
    name: "Client 1",

  },
  "client2": {
    id: "client2",
    name: "Client 2",
  },
  "default": {
    id: "client1",
    name: "Client 1",
  }
};

export function getTenantConfig(host: string) {
  return tenants[host] ?? tenants["default"];
}
