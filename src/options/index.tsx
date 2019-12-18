import * as React from 'react';
import { Nav } from '@alifd/next';
import { t } from 'src/core/utils';

export default () => {
  return (
    <Nav className="basic-nav" direction="hoz" type="primary" defaultSelectedKeys={['rules']}>
      <Nav.Item key="rules">{t('rule_list')}</Nav.Item>
      <Nav.Item key="options">{t('options')}</Nav.Item>
      <Nav.Item key="export_and_import">{t('export_and_import')}</Nav.Item>
    </Nav>
  );
};
