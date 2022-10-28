// import React from 'react'
// import Select from 'react-select'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

//  export const FromTo = () => (
//   <Select options={options} styles={{width:"100%"}} />
// )
import React from 'react'
import Select from 'react-select'

function FromTo() {
    const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
  return (
    <div>
         <Select options={options} styles={{width:"100%"}} />
    </div>
  )
}

export default FromTo