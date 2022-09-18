import React, { useRef, FC, useReducer, Reducer } from "react";
 import {petStore, PetStore} from './storage/petstore'
 import {observer} from 'mobx-react-lite'

const PetStoreHeader = observer(() => {
  
  return <>
    <h1>Pet Store</h1>
    <h3>{petStore.stats}</h3>
  </>
})

export default PetStoreHeader;