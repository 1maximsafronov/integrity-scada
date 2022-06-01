export const sideMenuItems = {
  PRODUCTS: [
    {
      name: `Состав Integrity SCADA`,
      path: `/products/components`,
      submenu: [
        {
          name: `IntegrityServer`,
          path: ``
        },
        {
          name: `IntegrityHistoryServer`,
          path: ``
        },
        {
          name: `IntegrityReports`,
          path: ``
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
