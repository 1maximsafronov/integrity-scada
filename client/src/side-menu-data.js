export const sideMenuItems = {
  PRODUCTS: [
    {
      name: `Состав Integrity SCADA`,
      path: `/products/components`,
      submenu: [
        {
          name: `IntegrityServer`,
          path: `/products/components/integrity-server`
        },
        {
          name: `IntegrityHistoryServer`,
          path: `/products/components/integrity-history-server`
        },
        {
          name: `IntegrityReports`,
          path: `/products/components/integrity-reports`
        },
        {
          name: `IntegrityDataTransport`,
          path: `/products/components/integrity-data-transport`
        },
        {
          name: `IntegrityClientSecurity`,
          path: `/products/components/integrity-client-security`
        },
        {
          name: `IntegrityHMI`,
          path: `/products/components/integrity-hmi`
        },
        {
          name: `IntegrityTrends`,
          path: `/products/components/integrity-trends`
        },
        {
          name: `IntegrityAlarms`,
          path: `/products/components/integrity-alarms`
        },
      ]
    },
    {
      name: `Политика лицензирования`,
      path: `/products/licensing`
    },
    {
      name: `Аппаратные системные требования`,
      path: `/products/system`
    },
  ],
  SUPPORT: [
    {
      name: `Техническая поддержка`,
      path: `/support`,
    },
    {
      name: `Интеграторам`,
      path: `/support/integrator`
    },
    {
      name: `Запрос пробной версии`,
      path: `/support/demo`
    },
  ],
  USER: [
    {
      name: `Личные данные`,
      path: `/user`,
    },
    {
      name: `История заявок`,
      path: `/user/orders`
    },
    {
      name: `Документация`,
      path: `/user/documents`
    },
    {
      name: `Видеоуроки`,
      path: `/user/video`
    },
    {
      name: `Лицензионные ключи`,
      path: `/user/licens`
    },
  ],
  ADMIN: [
    {
      name: `Личные данные`,
      path: `/admin`,
    },
    {
      name: `Заявки пользователей`,
      path: `/admin/orders`
    },
    {
      name: `Документация`,
      path: `/admin/documents`
    },
    {
      name: `Видеоуроки`,
      path: `/admin/video`
    },
    {
      name: `Отправленные лицензии`,
      path: `/admin/licens`
    },
  ]
};
