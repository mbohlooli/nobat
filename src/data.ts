import {Doctor} from "./models/doctor";
import {Expertise} from "./models/expertise";
import {City} from "./models/city";
import {Neighbourhood} from "./models/neighbourhood";

const Doctors: Doctor[] = [
  {
    id: 1,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
          day: new Date(Date.parse("2024-12-26")),
          persianDate: "۶ دی ۱۴۰۳",
          times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
          day: new Date(Date.parse("2024-12-27")),
          persianDate: "۷ دی ۱۴۰۳",
          times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 2,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 3,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 4,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 5,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 6,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 7,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 8,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  },
  {
    id: 9,
    name: "دکتر دانیال فاضل پور",
    expertiseId: 1,
    neighbourhoodId: 1,
    cityId: 1,
    address: "تهران - اکباتان - خیابان نفیسی - نبش کوچه بابک - پلاک ۳۷",
    appointments: [
      {
        day: new Date(Date.parse("2024-12-26")),
        persianDate: "۶ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      },
      {
        day: new Date(Date.parse("2024-12-27")),
        persianDate: "۷ دی ۱۴۰۳",
        times: ["9:00", "10:00", "11:00", "14:00", "15:00"]
      }
    ]
  }
];

const Expertises: Expertise[] = [
  {
    id: 1,
    name: "دندان پزشکی"
  },
  {
    id: 2,
    name: "ارتوپت"
  },
  {
    id: 3,
    name: "داخلی"
  },
  {
    id: 4,
    name: "گوش و حلق"
  },
  {
    id: 5,
    name: "تغذیه"
  },
  {
    id: 6,
    name: "پوست و مو"
  },
  {
    id: 7,
    name: "غدد"
  },
  {
    id: 8,
    name: "کودکان"
  },
];

const Cities: City[] = [
  {
    id: 1,
    name: "تهران"
  },
  {
    id: 2,
    name: "مشهد"
  },
  {
    id: 3,
    name: "اصفهان"
  },
  {
    id: 4,
    name: "یزد"
  },
  {
    id: 5,
    name: "شیراز"
  },
  {
    id: 6,
    name: "تبریز"
  },
  {
    id: 7,
    name: "قزوین"
  },
];

const Neighbourhoods: Neighbourhood[] = [
  {
    id: 1,
    name: "اکباتان",
    cityId: 1
  },
  {
    id: 2,
    name: "سیدخندان",
    cityId: 1
  },
  {
    id: 3,
    name: "ستارخان",
    cityId: 1
  },
  {
    id: 4,
    name: "تهرانپارس",
    cityId: 1
  },
  {
    id: 5,
    name: "میرداماد",
    cityId: 1
  },
  {
    id: 6,
    name: "قاسم آباد",
    cityId: 2
  },
  {
    id: 7,
    name: "وکیل آباد",
    cityId: 2
  },
];

export {Doctors, Expertises, Cities, Neighbourhoods};
