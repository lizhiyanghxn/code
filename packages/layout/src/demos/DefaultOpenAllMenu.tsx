import React from 'react';

import ProLayout, { PageContainer } from '@dcp-fe/dcp-layout';
import complexMenu from './complexMenu';

export default () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      route={{
        routes: complexMenu,
      }}
      menu={{ defaultOpenAll: true }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);