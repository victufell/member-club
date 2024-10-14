import "../styles/index.css"

const inputIdentify = document.querySelector<HTMLInputElement>('[data-identify="user-id"]')

const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const inputValue = target?.value

    console.log({inputValue})
}

inputIdentify?.addEventListener('change', handleInputChange)

console.log("inputIdentify", inputIdentify)