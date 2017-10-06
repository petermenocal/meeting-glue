const m = require('mithril')

var Concessions = {

}

module.exports = { 
  view: () => {
    return m(".pa4", [
      m('.overflow-auto.white', [
        m('.mw7.center', [

          m('.fl.w-100.tl', [
            m('.f2.fw4', 'Sleeping Rooms')
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'roomsTax'}, 'Rooms tax'),
            m('input.fl.w-100', {type: 'text', name: 'roomsTax'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'resortFee'}, 'Resort fee'),
            m('input.fl.w-100', {type: 'text', name: 'resortFee'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'cutOffDate'}, 'Cut-off date'),
            m('input.fl.w-100', {type: 'text', name: 'resortFee'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'wirelessInternet'}, 'Wireless internet'),
            m('input.fl.w-100', {type: 'text', name: 'wirelessInternet'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryRoom'}, 'Complimentary room'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryRoom'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryUpgrade'}, 'Complimentary upgrade'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryUpgrade'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'compRatio'}, 'Comp ratio'),
            m('input.fl.w-100', {type: 'text', name: 'compRatio'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'groupRateAvailablePre'}, 'Group rate available (pre)'),
            m('input.fl.w-100', {type: 'text', name: 'groupRateAvailablePre'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'groupRateAvailablePost'}, 'Group rate available (post)'),
            m('input.fl.w-100', {type: 'text', name: 'groupRateAvailablePost'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'groupRateAvailablePost'}, 'Group rate available (post)'),
            m('input.fl.w-100', {type: 'text', name: 'groupRateAvailablePost'}),
          ]),

          m('.fl.w-100.mt4.tl', [
            m('.f2.fw4', 'Meeting Space')
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'adequateMeetingSpaceBasedOnRFP'}, 'Adequate meeting space based on RFP?'),
            m('input.fl.w-100', {type: 'text', name: 'adequateMeetingSpaceBasedOnRFP'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryMeetingRoomRental'}, 'Complimentary meeting room rental'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryMeetingRoomRental'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryWifiInMeetingSpace'}, 'Complimentary Wi-Fi in meeting space'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryWifiInMeetingSpace'}),
          ]),

          m('.fl.w-100.tl.mt4', [
            m('.f2.fw4', 'Food and Beverage')
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'foodAndBeverageMinimum'}, 'Food and beverage minimum'),
            m('input.fl.w-100', {type: 'text', name: 'foodAndBeverageMinimum'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'foodAndBeverageTax'}, 'Food and beverage tax'),
            m('input.fl.w-100', {type: 'text', name: 'foodAndBeverageTax'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'banquetMenuDiscount'}, 'Banquet menu discount'),
            m('input.fl.w-100', {type: 'text', name: 'banquetMenuDiscount'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'abilityToCreateCustomMenu'}, 'Ability to create custom menu'),
            m('input.fl.w-100', {type: 'text', name: 'abilityToCreateCustomMenu'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryBreakfastIncludedInRate'}, 'Complimentary breakfast included in rate'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryBreakfastIncludedInRate'}),
          ]),

          m('.fl.w-100.tl.mt4', [
            m('.f2.fw4', 'General')
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'parkingCosts'}, 'Parking costs'),
            m('input.fl.w-100', {type: 'text', name: 'parkingCosts'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'numberOfFBonProperty'}, 'Number of F&B outlets on property'),
            m('input.fl.w-100', {type: 'text', name: 'numberOfFBonProperty'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'numberOfElevatorsNearMeetingSpace'}, 'Number of elevators near meeting space'),
            m('input.fl.w-100', {type: 'text', name: 'numberOfElevatorsNearMeetingSpace'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'hotelRating'}, 'Hotel Rating'),
            m('input.fl.w-100', {type: 'text', name: 'hotelRating'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'renovations'}, 'Renovations'),
            m('input.fl.w-100', {type: 'text', name: 'renovations'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'nearestTrainSubway'}, 'Nearest train/Subway station'),
            m('input.fl.w-100', {type: 'text', name: 'nearestTrainSubway'}),
          ]),

          m('.fl.w-100.tl.mt4', [
            m('.f2.fw4', 'Concessions')
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryParking'}, 'Complimentary parking'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryParking'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'discountedParking'}, 'Discounted parking'),
            m('input.fl.w-100', {type: 'text', name: 'discountedParking'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryBoxHandling'}, 'Complimentary box handling'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryBoxHandling'}),
          ]),

          m('.fl.w-100.tl.mt3', [
            m('label.fl.w-100', {name: 'complimentaryAmenity'}, 'Complimentary Amenity'),
            m('input.fl.w-100', {type: 'text', name: 'complimentaryAmenity'}),
          ]),



        ])
      ])
    ])
  }
}
