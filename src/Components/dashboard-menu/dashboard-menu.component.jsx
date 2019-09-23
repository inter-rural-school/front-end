import React from 'react'
import styled from 'styled-components'
import { Formik , Form  } from 'formik';
import { Select } from 'antd';

const { Option } = Select;

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;

export default function DashBoardMenu( props) {
  return (
    <MenuContainer>
       <Formik
          initialValues={{ status: 'Needs Attention' }}
          onSubmit={(values, actions) => {
            props.setDash( {
              ...props.dashState,
              filterTerm: values.status ,
            })
          }}

          render={props => (
            <Form 
              style={{padding: '1rem'}}
            >
              <label htmlFor='statusFilter'>Sort By:</label>
              <Select 
                id='statusfilter'
                name='statusfilter'
                defaultValue={ props.values.status }  
                style={{ width: '150px', paddingLeft: '1rem' }} 
                onChange={ props.handleChange }>
                <Option value="needsAttention">Needs Attention</Option>
                <Option value="inProgress">In Progress</Option>
                <Option value="resolved">Resolved</Option>
                <Option value="dismissed">Dismissed</Option>
              </Select>
              <button 
                type="submit"
                style={{ display: 'block',
                margin: '1rem auto',
              }}
                >Apply</button>
            </Form>
          )}
        />

    </MenuContainer>
      
  )
}
