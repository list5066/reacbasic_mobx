import {
    makeObservable,
    action,
    computed,
    observable,
    autorun
} from 'mobx'

export interface IOwner {
    id: number,
    firstName: string,
    lastName: string
}

export interface IPet {
    id: number,
    name: string,
    type: string,
    breed: string,
    ownerId?: IOwner['id']
}

export class PetStore {
    readonly pets: IPet[] = []
    readonly owners: IOwner[] = []

    constructor() {
        makeObservable(this, {
            pets: observable,
            owners: observable,
            createPet: action,
            createOwner: action,
            updatePet: action,
            updateOwner: action,
            deletePet: action,
            deleteOwner: action,
            assignOwner: action,
            getPetsByOwner: action,
            stats: computed
        })
        autorun(() => console.log(this.stats, ' from autorun '))
    }

    createPet(pet: IPet) {
        this.pets.push(pet)
    }
    createOwner(owner: IOwner) {
        this.owners.push(owner)
    }

    updatePet(petId: IPet['id'], pet: IPet) {
        const petIndexAtId = this.pets.findIndex((pet) => pet.id === petId)
        if (petIndexAtId > -1)
            this.pets[petIndexAtId] = pet
    }
    updateOwner(ownerId: IOwner['id'], owner: IOwner) {
        const ownerIndexAtId = this.owners.findIndex((owner) => owner.id === ownerId)
        if (ownerIndexAtId > -1)
            this.owners[ownerIndexAtId] = owner
    }
    deletePet(petId: IPet['id']) {
        const petIndexAtId = this.pets.findIndex((pet) => pet.id === petId)
        if (petIndexAtId > -1)
            this.pets.splice(petIndexAtId, 1)
    }
    deleteOwner(ownerId: IOwner['id']) {
        const ownerIndexAtId = this.owners.findIndex((owner) => owner.id === ownerId)
        if (ownerIndexAtId > -1)
            this.owners.splice(ownerIndexAtId, 1)
    }
    assignOwner(ownerId: IOwner['id'], petId: IPet['id']) {
        const petIndexAtId = this.pets.findIndex((pet) => pet.id === petId)
        const ownerIndexAtId = this.owners.findIndex((owner) => owner.id === ownerId)
        if (petIndexAtId > -1 && ownerIndexAtId > -1)
            this.pets[petIndexAtId].ownerId = ownerId
    }
    getPetsByOwner(ownerId: IOwner['id']) {
        return this.pets.filter((pet) => {
            return pet.ownerId === ownerId
        })
    }

    get stats() {
        return `There is ${this.pets.length} pets and ${this.owners.length} owners.`
    }
}

export var petStore = new PetStore;

export default petStore;