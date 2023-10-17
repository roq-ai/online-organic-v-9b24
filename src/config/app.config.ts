interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Delivery Personnel', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Online Organic Vegetables',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Create orders',
    'Update personal information',
    'Track delivery status',
  ],
  ownerAbilities: ['Manage company', 'Manage product', 'Manage order', 'Manage delivery'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8393597b-c007-4310-91b3-d69a9a867675',
};
