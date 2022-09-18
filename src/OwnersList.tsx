import React, { useRef, FC, useReducer, Reducer } from "react";
import {petStore, PetStore, IOwner} from './storage/petstore'
import {observer} from 'mobx-react-lite'

const OwnersList = observer(() => {
  const enterOwner = (id?: IOwner['id']): IOwner => ({
    id: id ?? Date.now(),
    firstName: prompt('enter firstName') ?? '',
    lastName: prompt('enter lastName') ?? '',
  })

  const addOwner = () => petStore.createOwner(enterOwner())
  // const editOwner = 
  // const deleteOwner = 

  return <>
    <div>
      <h2>Owners list</h2>
      <table>
        <thead>
          <tr>
            <td>firstName</td>
            <td>lastName</td>
            <td>ownerId</td>
          </tr>
        </thead>
        <tbody>
          {petStore.owners.map((item: IOwner) => {
            return <>
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.id}</td>
            </tr>
            </>
          })}
        </tbody>
      </table>
      <button onClick={addOwner}>+ New owner</button>
    </div>
  </>
})

export default OwnersList;