import React from 'react'
import { Layout } from 'antd';

import styles from './layout.module.less'

const {  Content } = Layout;

export default function LayoutWrapper( props ) {
  return (
    <Layout className={ styles.layoutWrapper }>
        <Content className={styles.layoutContent}>{ props.children }
        </Content>
    </Layout>
  )
}
