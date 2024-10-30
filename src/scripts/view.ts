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

    if (!fidelityItems) return

    fidelityItems.innerHTML = '';

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
        fidelityItems.append(li);
    })
}

const handleSetProgress = (loyaltyCard: LoyaltyCard) => {
    const elements = {
        amount: document.querySelector<HTMLSpanElement>('[data-progress="amount"]'),
        steps: document.querySelector<HTMLParagraphElement>('[data-progress="steps"]'),
        progressBar: document.querySelector<HTMLSpanElement>('[data-progress="progressBar"]')
    };

    const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard;

    if (elements.amount) {
        elements.amount.textContent = String(cutsRemaining);
    }

    if (elements.steps) {
        elements.steps.textContent = `${totalCuts} de ${cutsNeeded}`;
    }

    if (elements.progressBar) {
        const currentProgress = ((cutsNeeded - cutsRemaining) / cutsNeeded) * 100;
        elements.progressBar.style.width = `${currentProgress}%`;
    }

    if (cutsNeeded === 0 && elements.progressBar) {
        alert("Parabéns! Seu próximo corte é gratuito!");
    }
};

const handleSetResume = (histories: History[]) => {
    const resumeAmountElement = document.querySelector<HTMLParagraphElement>('[data-resume="amount"]');
    const itemsAmountElement = document.querySelector<HTMLUListElement>('[data-resume="items"]');

    const resumeAmount = histories.length;
    if (resumeAmountElement) {
        const complements = resumeAmount === 1 ? 'corte' : 'cortes';
        resumeAmountElement.textContent = `${resumeAmount} ${complements}`;
    }

    if (itemsAmountElement) {
        const items = histories.map(({ date, time }) => `
            <li class="mc-resume__items__item">
                <div>
                    <p class="ds__subtitle">${date}</p>
                    <p class="ds__description">${time}</p>
                </div>
                <div class="mc-resume__items__item-image-wrapper">
                    <img src="./assets/ic-check-without-bg.svg" />
                </div>
            </li>
        `);

        itemsAmountElement.innerHTML = items.join('');
    }
}

const handleShowView = (client: Client | null) => {
    const viewWrapperElement = document.querySelector<HTMLDivElement>('[data-mc="user-info"]')
    if (client) {
        viewWrapperElement?.classList?.add('member-club-app__data--active')
    } 
    else {
        viewWrapperElement?.classList?.remove('member-club-app__data--active')
    }
}

const handleView = (client: Client | null) => {
    console.log({client})
    if (!client || !client.id) {
        console.warn("Client data is invalid or ID is missing.");
        return;
    }

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
    handleShowView(client)
}

export default handleView