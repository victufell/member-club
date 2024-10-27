import handleView from "./view";

const BASE_URL = "http://localhost:3000"

import Client from "../types/Client";

const handleGetClients = async (): Promise<Client[]> => {
    const clientsResponse = await fetch(`${BASE_URL}/clients`)
    if (!clientsResponse.ok) {
        alert("Tivemos problemas internos! Consulte o atendimento.")
        throw new Error("Failed to fetch clients");
    }
    const clients: Client[] = await clientsResponse.json()

    return clients
}

const handleGetClientByID = (clientID: string, clients: Client[]): Client | null => {
    return clients.find(({ id }) => clientID === id) || null;
};

const identifyModule = () => {
   
    const buttonEnterId = document.querySelector<HTMLButtonElement>('#btn-enter-id')
    const inputIdentify = document.querySelector<HTMLInputElement>('[data-identify="user-id"]')

    const handleRequestByUserInput = async (): Promise<Client | null> => {
        const clientID: string = inputIdentify?.value ?? ""

        return new Promise(async (resolve, reject) => {
            const clients: Client[] = await handleGetClients()
            const client: Client | null = handleGetClientByID(clientID, clients)
            
            if (client) {
                resolve(client)
            } else {
                alert(`Ocorreu um erro ao tentar localizar o usuário com ID: ${clientID}`)
                reject(null)
            }
        })
        
    }

    const handleInputChange = (element: Event) => {
        const target = element.target as HTMLInputElement
        const inputValue = target.value
        const valueReplaced = inputValue.replace(/[A-Z]/gi, '')
        
        if (valueReplaced) {  
            target.value = valueReplaced
            buttonEnterId?.removeAttribute('disabled')
        } else {
            buttonEnterId?.setAttribute('disabled', 'true')
        }
    }

    buttonEnterId?.addEventListener('click', async () => {
        const client = await handleRequestByUserInput()
        handleView(client)
        
    })
    inputIdentify?.addEventListener('input', handleInputChange)
}

export default identifyModule