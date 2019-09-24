import React from 'react'
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom'

import styles from './layout.module.less'

const { Header, Content } = Layout;

export default function LayoutWrapper( props ) {
  return (
    <Layout className={ styles.layoutWrapper }>
      <Header className={ styles.layoutHeader }>
        <Link to='/'>
          <h1>International Rural School Manager</h1>
         </Link>
      </Header>
        <Content className={styles.layoutContent}>{ props.children }</Content>
    </Layout>
  )
}
