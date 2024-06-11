// Both enums are exported, allowing them to be used in other parts of the application. 
// Each enum member is assigned a string value, making it easy to use and compare these constants in the application

// Represents different levels of permissions (ADMIN and READ_ONLY)
export enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}

// Represents different levels of user loyalty (GOLD_USER, SILVER_USER, and BRONZE_USER)
export enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}