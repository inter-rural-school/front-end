import React from 'react'
import styled from 'styled-components'
import { Select} from 'antd';


const { Option } = Select;

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 1rem;
background-color: #6FA0D0;
border-radius: 10px;

label{
  font-size: 1.25rem;
}

@media screen and (min-width: 1200px){
  min-width: 220px;
  width: 20%;
  max-width: 270px;
}

`;

export default function DashBoardMenu( props) {

  const handleChange = (value) => {

    props.setQuery(value);
  }
  return (
    <MenuContainer style={{padding: '1rem', textAlign:'left'}}>
      <label
        htmlFor='statusFilter'
        style={{paddingLeft: '1rem',display:'inline-block', marginBottom: '1rem' }} 
        >Sort By:</label> 
      <Select 
        id='statusfilter'
        name='status'
          defaultValue={ "All Issues" }  
        style={{ width: '100%', paddingLeft: '1rem' }} 
        onChange={ handleChange }>
          <Option value="">All Issues</Option>
          <Option value="Needs Attention">Needs Attention</Option>
          <Option value="In Progress">In Progress</Option>
          <Option value="Resolution In Progress">Resolution In Progress</Option>
          <Option value="Resolved">Resolved</Option>
          <Option value="Dismissed">Dismissed</Option>
      </Select>

    </MenuContainer>
      
  )
}
