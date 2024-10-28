import Client from "../types/Client"
import LoyaltyCard from "../types/LoyaltyCard"
import History from "../types/History"

const handleSetProfile = (name: string, clientSince: string) => {
    const profileViews = document.querySelectorAll<HTMLElement>("[data-profile]")
    
    if (clientSince && name) {
        const profileMapper = {
            name,
            date: `Cliente desde ${clientSince}`
        }

        profileViews.forEach((item) => {
            const elementKey: string = item?.getAttribute('data-profile') || ""
            const elementValueToFill: string = profileMapper[elementKey as keyof typeof profileMapper] || ""

            if (elementValueToFill) {
                item.textContent = elementValueToFill
            }
        })
    }
}

const handleSetFidelity = (id: string) => {
    const clientViewIDElement = document.querySelector<HTMLElement>('[data-fidelity="ID"]')
    
    if (clientViewIDElement) {
        clientViewIDElement.textContent = `ID: ${id}`
    }
}

const handleSetFidelityItems = (totalCuts: number) => {
    const fidelityItems = document.querySelector<HTMLUListElement>('[data-fidelity="items"]')
    const MAX_TOTAL = 10
    
    if (fidelityItems) {
        new Array(MAX_TOTAL).fill(undefined).forEach((_, index) => {
            const isLastItem = (index + 1) === MAX_TOTAL
            const isItemWithCheck = (index + 1) <= totalCuts
            
            const li = document.createElement('li');
            li.classList.add('mc-fidelity__items-item');
            const img = document.createElement('img');

            if (isItemWithCheck) {
                img.src = isLastItem
                    ? './assets/ic-gift-active.svg'
                    : './assets/ic-check-with-bg.svg'
            }

            if (!isItemWithCheck && isLastItem) {
                img.src = './assets/ic-gift-disabled.svg'
            }

            const hasSrc = Boolean(img.src)
            hasSrc && li.appendChild(img);
            fidelityItems.appendChild(li);
        })
    }
}

const handleSetProgress = (loyaltyCard: LoyaltyCard) => {
    const progressAmountElement = document.querySelector<HTMLSpanElement>('[data-progress="amount"]')
    const progressStepsElement = document.querySelector<HTMLParagraphElement>('[data-progress="steps"]')
    const progressBarElement = document.querySelector<HTMLSpanElement>('[data-progress="progressBar"]')

    const {
        totalCuts,
        cutsNeeded,
        cutsRemaining
    } = loyaltyCard

    if (progressAmountElement) {
        progressAmountElement.textContent = String(totalCuts)
    }

    if (progressStepsElement) {
        progressStepsElement.textContent = `${totalCuts} de ${cutsNeeded}`
    }

    if (progressBarElement) {
        const currentProgress = (cutsNeeded - cutsRemaining) * 10
        progressBarElement.style.width = `${currentProgress}%`
    }
}

const handleSetResume = (histories: History[]) => {
    const resumeAmountElement = document.querySelector<HTMLParagraphElement>('[data-resume="amount"]')
    const itemsAmountElement = document.querySelector<HTMLUListElement>('[data-resume="items"]')

    const resumeAmount = histories.length
    if (resumeAmountElement) {
        const complements = resumeAmount === 1 
            ? 'corte'
            : 'cortes'

        resumeAmountElement.textContent = `${resumeAmount} ${complements}`
    }

    if (itemsAmountElement) {
        const template = `
             <li class="mc-resume__items__item">
                <div>
                    <p class="ds__subtitle"> {{date}} </p>
                    <p class="ds__description"> {{time}} </p>
                </div>
                <div class="mc-resume__items__item-image-wrapper">
                    <img src="./assets/ic-check-without-bg.svg" />
                </div>
            </li>
        `

        const items: string[] = []

        histories.forEach((history: History) => {
            const li = template
                .replace('{{date}}', history.date)
                .replace('{{time}}', history.time)

            items.push(li)
        })

        itemsAmountElement.innerHTML = items.join(' ')

    }
}

const handleView = (client: Client | null) => {
    if (client) {
        const {
            id,
            name,
            clientSince,
            loyaltyCard,
            appointmentHistory
        } = client
        
        handleSetProfile(name, clientSince)
        handleSetFidelity(id)
        handleSetFidelityItems(loyaltyCard.totalCuts)
        handleSetProgress(loyaltyCard)
        handleSetResume(appointmentHistory)
    }
}

export default handleView