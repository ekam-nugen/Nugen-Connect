import FilterSearchHeader from '@/resuableComponents/filterSearchHeader'
import HeaderBox from '@/resuableComponents/headerBox/headerBox'
import React from 'react'
import { TiContacts } from 'react-icons/ti'

function FilterSearchComponent() {
  return (
    <div>
        <FilterSearchHeader/>
        <HeaderBox
        header={"Directory"}
        permission={"Permissions"}
        title={"PK"}
        button={"Option"}
        icon={<TiContacts />}/>
    </div>
  )
}

export default FilterSearchComponent