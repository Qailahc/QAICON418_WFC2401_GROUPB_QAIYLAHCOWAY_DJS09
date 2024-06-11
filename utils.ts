// DOM Element Selections and Imports
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser, Permissions } from './enums'
import  Review  from './interfaces'

// showReviewTotal Function
// This function updates the reviewTotalDisplay element with the total number of reviews, 
// the name of the last reviewer, and a star icon if the reviewer is a gold loyalty user
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay    
}

// populateUser Function - updates the returningUserDisplay and userNameDisplay elements based on whether the user is returning and their name
export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

// showDetails Function - function appends price details to an HTML element if the user has appropriate permissions
export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

// makeMultiple Function - This helper function returns 's' if the value is not 1, making the text plural if necessary
export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

// getTopTwoReviews Function - This function returns the top two reviews based on the number of stars
export function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}