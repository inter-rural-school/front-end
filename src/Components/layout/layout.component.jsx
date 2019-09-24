import React from 'react'
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom'

import styles from './layout.module.css'
import styled from 'styled-components'

const { Header, Footer, Sider, Content } = Layout;

export default function LayoutWrapper( props ) {
  return (
    <Layout className={ styles.layoutWrapper }>
      <Header className={ styles.layoutHeader }>
        <Link to='/'>Home</Link>
      </Header>
        <Content className={styles.layoutContent}>{ props.children }</Content>
    </Layout>
  )
}
