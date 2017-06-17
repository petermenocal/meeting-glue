const m = require('mithril')

let Calendar = {
  displayModal: false,
  events: [
    {
      convention: "The College Board - Western Regional Council 2017",
      venue: "Vdara Hotel & Spa",
      startDate: "6/15/2017",
      endDate: "6/16/2017",
      attendees: 35
    },
    {
      convention: "Falmouth Institute, Inc. - Assessing and Revising Personnel Policies and Procedures 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/19/2017",
      endDate: "6/21/2017",
      attendees: 40
    },
    {
      convention: "Falmouth Institute, Inc. - Tribal Secretaries Conference - 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/19/2017",
      endDate: "6/21/2017",
      attendees: 40
    },
    {
      convention: "Falmouth Institute, Inc. - Strategies for Working with Youth in Indian Country 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 40
    },
    {
      convention: "Falmouth Institute, Inc. - The Essential of Indian Law 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 40
    },
    {
      convention: "Women's Business Enterprise National Council (WBENC) - WBENC National Conference & Business Fair 2017",
      venue: "Mandalay Bay Resort & Casino",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 1662
    },
    {
      convention: "Cal Western Circulation Managers Association Annual Conference",
      venue: "Planet Hollywood Resort & Casino",
      startDate: "6/21/2017",
      endDate: "6/23/2017",
      attendees: 185
    },
    {
      convention: "Inpact Americas - 2017",
      venue: "Caesars Palace",
      startDate: "6/21/2017",
      endDate: "6/23/2017",
      attendees: 40
    },
    {
      convention: "Casino Chips & Gaming Token Collector's Club, Inc. - 2017 Annual Convention",
      venue: "South Point Hotel Casino & Spa",
      startDate: "6/22/2017",
      endDate: "6/24/2017",
      attendees: 2000
    },
    {
      convention: "Falmouth Institute, Inc. - Indirect Cost Basics for Tribal Organizations 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/22/2017",
      endDate: "6/23/2017",
      attendees: 30
    },
    {
      convention: "Falmouth Institute, Inc. - The Role of the Tribal Recording Secretary 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/22/2017",
      endDate: "6/23/2017",
      attendees: 30
    },
    {
      convention: "Falmouth Institute, Inc. - Leadership Skills for Native Women 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/22/2017",
      endDate: "6/23/2017",
      attendees: 30
    },
    {
      convention: "International Esthetics Cosmetics & Spa Conference (IECSC) International Beauty Show Las Vegas (IBS) 2017",
      venue: "Las Vegas Convention Center",
      startDate: "6/24/2017",
      endDate: "6/26/2017",
      attendees: 25000
    },
    {
      convention: "Institute of Food Technologists (IFT) 2017 Annual Meeting & Food Expo",
      venue: "Sands Expo & Convention Center",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 22000
    },
    {
      convention: "Women's Business Enterprise National Council (WBENC) - WBENC National Conference & Business Fair 2017",
      venue: "Mandalay Bay Resort & Casino",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 1662
    },
    {
      convention: "Women's Business Enterprise National Council (WBENC) - WBENC National Conference & Business Fair 2017",
      venue: "Mandalay Bay Resort & Casino",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 1662
    },
    {
      convention: "Women's Business Enterprise National Council (WBENC) - WBENC National Conference & Business Fair 2017",
      venue: "Mandalay Bay Resort & Casino",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 1662
    },
    {
      convention: "Falmouth Institute, Inc. - Tribal Secretaries Conference - 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/19/2017",
      endDate: "6/21/2017",
      attendees: 40
    },
    {
      convention: "Falmouth Institute, Inc. - Strategies for Working with Youth in Indian Country 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 40
    },
    {
      convention: "Falmouth Institute, Inc. - The Essential of Indian Law 2017",
      venue: "Hampton Inn Tropicana",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 40
    },
  ],
  toggleModal: () => {
    Calendar.displayModal = !Calendar.displayModal
    m.redraw()
  }
}

module.exports = Calendar
