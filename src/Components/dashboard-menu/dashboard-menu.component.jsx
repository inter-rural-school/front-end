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
margin: 1rem;
background-color: #3cc93e;
@media screen and (min-width: 1200px){
  min-width: 220px;
  width: 20%;
  max-width: 270px;
}

`;

export default function DashBoardMenu( props) {
  return (
    <MenuContainer>
       <Formik
          initialValues={{ status: 'Needs Attention' }}
          onSubmit={(values, actions) => {
            console.log(values.status);
            props.setDash( {
              ...props.dashState,
              filterTerm: values.status,
            })
          }}

          render={props => (
            <Form 
              style={{
                padding: '1rem', 
                textAlign:'left',
                width: '100%',
                }}
            >
              <label
               htmlFor='statusFilter'
                style={{paddingLeft: '1rem',display:'inline-block', marginBottom: '1rem' }} 
               >Sort By:</label>
              <Select 
                id='statusfilter'
                name='statusfilter'
                // defaultValue={ props.values.status }  
                style={{ width: '100%', paddingLeft: '1rem' }} 
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
