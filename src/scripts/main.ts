import "../styles/index.css"

const buttonEnterId = document.querySelector<HTMLButtonElement>('#btn-enter-id')
const inputIdentify = document.querySelector<HTMLInputElement>('[data-identify="user-id"]')

const handleRequestByID = () => {
    const inputValue = inputIdentify?.value
   
    console.log({
        inputValue
    })
}

const handleInputChange = (element: Event) => {
    const target = element.target as HTMLInputElement
    const inputValue = target.value
    const valueReplaced = inputValue.replace(/[A-Z]/gi, '')
    
    if (valueReplaced) {  
        target.value = valueReplaced
        buttonEnterId?.setAttribute('disabled', 'false')
    } else {
        buttonEnterId?.setAttribute('disabled', 'true')
    }
}

buttonEnterId?.addEventListener('click', handleRequestByID)
inputIdentify?.addEventListener('input', handleInputChange)