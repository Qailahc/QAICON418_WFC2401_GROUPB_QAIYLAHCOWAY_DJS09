// mport Statement
import { Review } from './interfaces'

// Class Declaration
export default class MainProperty {
    // Property Declarations
    src: string               
    title: string
    reviews: Review[]
    // Constructor
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}

// This code defines a MainProperty class that represents a main property with a source, a title, and a list of reviews. 
// The src and title properties are strings, and the reviews property is an array of Review objects. 
// The constructor initializes these properties with values provided when an instance of the MainProperty class is created.