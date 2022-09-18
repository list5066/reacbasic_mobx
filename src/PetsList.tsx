import React, { useRef, FC, useReducer, Reducer } from "react";
 import {petStore, PetStore, IPet} from './storage/petstore'
 import {observer} from 'mobx-react-lite'

const PetsList = observer(() => {
  const enterPet = (id?: IPet['id']): IPet => ({
    id: id ?? Date.now(),
    name: prompt('enter name') ?? '',
    type: prompt('enter type') ?? '',
    breed: prompt('enter breed') ?? '',
    // ownerId: parseInt(prompt('enter ownerId')) ?? 0,
  })

  const addPet = () => petStore.createPet(enterPet())
  // const editOwner = 
  // const deleteOwner = 
  
  return <>
    <div>
      <h2>Owners list</h2>
      <table>
        <thead>
          <tr>
            <td>pet id</td>
            <td>pet Name</td>
            <td>pet Type</td>
            <td>pet Breed</td>
            <td>ownerId</td>
          </tr>
        </thead>
        <tbody>
          {petStore.pets.map((item: IPet) => {
            return <>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.breed}</td>
              <td>{item.ownerId}</td>
            </tr>
            </>
          })}
        </tbody>
      </table>
      <button onClick={addPet}>+ New owner</button>
    </div>
  </>
})
export default PetsList;