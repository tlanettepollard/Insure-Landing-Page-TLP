# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Violet: hsl(256, 26%, 20%)
- Grayish Blue: hsl(216, 30%, 68%)

### Neutral

- Very Dark Violet: hsl(270, 9%, 17%)
- Dark Grayish Violet: hsl(273, 4%, 51%)
- Very Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px

### Headings

- Family: [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- Weights: 400

### Body

- Family: [Karla](https://fonts.google.com/specimen/Karla)
- Weights: 400, 700

## Icons

You can use either use the social icons provided or load in a font icon library. Some library suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)



How we work
  Blog
  Account
  View plans

  Humanizing your insurance.

  Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.

  View plans

  We’re different

  Snappy Process

  Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.

  Affordable Prices

  We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible.

  People First

  Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it.

  Find out more about how we work

  How we work

  Our company

  How we work
  Why Insure?
  View plans
  Reviews

  Help me

  FAQ
  Terms of use
  Privacy policy
  Cookies

  Contact

  Sales
  Support
  Live chat

  Others

  Careers
  Press
  Licenses





  .navbar {
    margin: auto;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.collapse {
    background: $very-dk-violet;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.navbar-nav {
    width: 100%;
    list-style-type: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.nav-item {
    color: #ffffff;
    padding: 1em;
    margin-bottom: 1em;
    overflow: hidden;
}

.nav-link {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.25rem;
    font-family: $body-font-family;
    font-weight: $body-font-weight;
    letter-spacing: 0.1em;
    color: #ffffff;
}

.nav-link:hover {
    border-bottom: 2px solid white;
}

.nav-btn {
    height: 50px;
    width: 80% !important;
    border: 2px solid white;
    color: white;
    margin: 2em 0;
    cursor: pointer;
    font-family: $body-font-weight;
    font-size: 1.25rem;
    font-weight: $body-font-weight;
    text-transform: uppercase;
}


.navbar-brand, .navbar-toggler {
    margin-bottom: 15px;
}

.navbar-toggler > .close {
    display: none;   
}

.navbar-toggler .collapsed> .open,
.navbar-toggler:not(.collapsed)> .close {
    display: inline;
}

.navbar-toggler .collapsed>.close,
.navbar-toggler:not(.collapsed)>.open {
    display: none;
}

.navbar-brand, .navbar-toggler {
    margin-bottom: 15px;
}

.nav-pattern {
    width: 100%;
    height: 50%;
    bottom: -15em;
}