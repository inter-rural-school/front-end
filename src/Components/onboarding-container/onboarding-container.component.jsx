import React from 'react'
import { Row, Col, Button, Input, Icon, Typography } from 'antd';

import styles from './onboarding-container.module.css'

export default function OnboardingFormContainer( props ) {
  return (
    <Row type='flex' style={{ height: '70vh'}}>
      <Col xs={0} lg={12} >
        <img src="/images/rsz_school.jpg" alt=""/>
      </Col>
      <Col xs={24} lg={12}>
        <Row type='column-flex'>
          <h3>{props.title}</h3>
          { props.children }
          <Button>This is a Button</Button>
        </Row>
      </Col>

    </Row>       
  )
}
