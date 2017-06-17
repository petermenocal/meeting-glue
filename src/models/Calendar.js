const m = require('mithril')

let Calendar = {
  displayModal: false,
  events: [
    {
      convention: "CES 2018",
      venue: "Las Vegas Convention Center",
      startDate: "1/09/2018",
      endDate: "1/12/2018",
      attendees: 165000
    },
    {
      convention: "Automotive Aftermarket Industry Week (AAIW) 2017",
      venue: "Sands Expo & Convention Center,Las Vegas Convention Center",
      startDate: "10/31/2017",
      endDate: "11/03/2017",
      attendees: 160000
    },
    {
      convention: "National Association of Broadcasters 2018",
      venue: "Las Vegas Convention Center",
      startDate: "4/09/2017",
      endDate: "4/12/2017",
      attendees: 103000
    },
    {
      convention: "MAGIC Marketplace Fall Show 2017",
      venue: "Las Vegas Convention Center",
      startDate: "8/14/2017",
      endDate: "8/16/2017",
      attendees: 85000
    },
    {
      convention: "Shooting, Hunting & Outdoor Trade Show (SHOT Show) - 2018",
      venue: "Sands Expo & Convention Center",
      startDate: "1/23/2017",
      endDate: "1/26/2017",
      attendees: 64500
    },
    {
      convention: "World of Concrete 2018",
      venue: "Las Vegas Convention Center",
      startDate: "1/23/2017",
      endDate: "1/26/2017",
      attendees: 60000
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
      convention: "Las Vegas Market 0 Summer 2017",
      venue: "World Market Center",
      startDate: "6/21/2017",
      endDate: "6/23/2017",
      attendees: 50000
    },
    {
      convention: "Casino Chips & Gaming Token Collector's Club, Inc. - 2017 Annual Convention",
      venue: "South Point Hotel Casino & Spa",
      startDate: "6/22/2017",
      endDate: "6/24/2017",
      attendees: 2000
    },
    {
      convention: "ASD Las Vegas - March 2018",
      venue: "Las Vegas Convention Center",
      startDate: "6/22/2017",
      endDate: "6/23/2017",
      attendees: 46000
    },
    {
      convention: "2017 Pack Expo",
      venue: "Las Vegas Convention Center",
      startDate: "6/22/2017",
      endDate: "6/23/2017",
      attendees: 45000
    },
    {
      convention: "2017 Mr. Olympia",
      venue: "Las Vegas Convention Center",
      startDate: "6/22/2017",
      endDate: "6/23/2017",
      attendees: 45000
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
      convention: "Nightclub and Bar Show 2018",
      venue: "Las Vegas Convention Center",
      startDate: "6/19/2017",
      endDate: "6/21/2017",
      attendees: 39000
    },
    {
      convention: "International Communications Industries Association/ Infocomm 2018",
      venue: "Las Vegas Convention Center",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 38000
    },
    {
      convention: "Cosmoprof North America 2017",
      venue: "Mandalay Bay Resort and Casino",
      startDate: "6/20/2017",
      endDate: "6/22/2017",
      attendees: 30000
    },
  ],
  toggleModal: () => {
    Calendar.displayModal = !Calendar.displayModal
    m.redraw()
  }
}

module.exports = Calendar
