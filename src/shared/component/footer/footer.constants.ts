import { ISocialMediaLink } from "./footer.interface"

export const SOCIALMEDIALINKS : ISocialMediaLink[] = [
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-facebook.95c9cce2.svg", alt:"facebook"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-twitter.dcd26979.svg", alt:"twitter"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-instagram.b03aa141.svg", alt:"instagram"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-linkedIn.5bb2057f.svg", alt:"linkedin"},
{src: "https://view.com.au/viewstatic/lancer/_next/static/media/social-pinterest.de53db23.svg", alt:"pinterest"},
]

export const CONTACTLINKS : string[] = [
    "Editorial Guidelines", "Agent Login", "About Us", "Contact", "FAQs"
]

export const MOBILELINKS: string[] = [
    "Location Profiles", 
    "Estimate", 
    "Real Estate News", 
    "Real Estate Advice", 
    "Auction Results", 
    "Agent Login", 
    "About Us",
    "Contact", 
    "FAQs", 
    "Terms & Conditions", 
    "Privacy Policy", 
    "Sitemap"
]

export const DESKTOPLINKS: string[] = [
    "Real Estate News",
    "Estimate",
    "Join view.com.au",
    "Real Estate Apps",
    "Make an Offer",
    "Location Profiles", //First 0-5
    "Agency Sign Up",
    "Find A Real Estate Agent",
    "Auction and Sales Results Victoria",
    "Auction and Sales Results by Suburb",
    "Real Estate Advice", //Second 6-10
    "Real Estate For Sale",
    "Rental Properties",
    "Recently Sold Properties",
    "New Developments",
    "View Insurance", //Third 11-15
    "Terms & Conditions",
    "Privacy Policy",
    "Sitemap" //Forth 16-18
]

const filterLinks  = (start : number,  end: number ) : string[]  => {
    const filteredArray : string[]= []
    for (let index = start; index <= end; index++) {
        const element = DESKTOPLINKS[index];  
        filteredArray.push(element)
    }
    return filteredArray
}

export const FIRSTDESKTOPLINKS : string[] = filterLinks(0, 5)
export const SECONDDESKOTOPLINKS : string[] = filterLinks(6, 10)
export const THIRDDESKTOPLINKS : string[] = filterLinks(11, 15)
export const FOURTHDESKTOPLINKS : string[] = filterLinks(16, 18)