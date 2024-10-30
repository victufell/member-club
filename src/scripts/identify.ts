const BASE_URL = "http://localhost:3000"

import handleView from "./view";

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

const handleRequestByUserInput = async (inputIdentify: HTMLInputElement): Promise<Client | null> => {
    const clientID: string = inputIdentify?.value.trim() ?? "";

    if (!clientID) {
        alert("Por favor, insira um ID válido.");
        return null;
    }

    try {
        const clients = await handleGetClients();
        const client = handleGetClientByID(clientID, clients);

        if (client) {
            return client;
        } else {
            alert(`Usuário com ID ${clientID} não encontrado.`);
            return null;
        }
    } catch (error) {
        alert("Erro ao processar a solicitação. Consulte o atendimento.");
        return null;
    }
};

const handleInputChange = (element: Event, buttonEnterId: HTMLButtonElement) => {
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

const handleInitIdentify = () => {
    const buttonEnterId = document.querySelector<HTMLButtonElement>('#btn-enter-id');
    const inputIdentify = document.querySelector<HTMLInputElement>('[data-identify="user-id"]');

    if (!buttonEnterId || !inputIdentify) {
        console.warn("Erro no carregamento da DOM...");
        return;
    }

    const handleButtonClick = async () => {
        buttonEnterId.setAttribute('disabled', 'true')

        try {
            const client = await handleRequestByUserInput(inputIdentify);
            
            if (client) {
                buttonEnterId.removeAttribute('disabled')
                handleView(client)
            }
 
         } catch (error) {
             console.error("Erro ao tentar exibir o cliente:", error);
             throw error;
         }
    };

    const handleKeyValidation = (e: KeyboardEvent) => {
        const key = e.key
        
        if (key?.trim()?.toLowerCase() === 'enter') {
            handleButtonClick()
        }
    }

    const handleInputChangeEvent = (e: Event) => {
        handleInputChange(e, buttonEnterId)
    };

    buttonEnterId.addEventListener('click', handleButtonClick);
    inputIdentify.addEventListener('input', handleInputChangeEvent);
    inputIdentify.addEventListener('keypress', handleKeyValidation);

};

export default handleInitIdentify