import LoyaltyCard from "./LoyaltyCard";
import History from "./History";

export default interface Client {
    "id": string,
    "name": string,
    "clientSince": string,
    "loyaltyCard": LoyaltyCard,
    "appointmentHistory": History[]
}
