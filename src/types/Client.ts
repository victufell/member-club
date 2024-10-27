import LoyaltyCard from "./LoyaltyCard";

export default interface Client {
    "id": string,
    "name": string,
    "clientSince": string,
    "loyaltyCard": LoyaltyCard
}
