// type TCountry = {
//   readonly name: string;
//   readonly code: string;
// };

// type TAffiliations = {
//   readonly name: string;
//   readonly city: string;
//   readonly country: string;
// };

// type TPrize = {
//   readonly year: string;
//   readonly category: string;
//   readonly share: string;
//   readonly motivation: string;
//   readonly affiliations: readonly TAffiliations[];
// };

// type TLaureate = {
//   readonly id: string;
//   readonly firstname: string;
//   readonly surname: string;
//   readonly born: string;
//   readonly died: string;
//   readonly bornCountry: string;
//   readonly bornCountryCode: string;
//   readonly bornCity: string;
//   readonly diedCountry: string;
//   readonly diedCountryCode: string;
//   readonly diedCity: string;
//   readonly gender: string;
//   readonly prizes: readonly TPrize[];
// };

// const country: TCountry = { name: "Algeria", code: "DZ" };

// const affiliations: readonly TAffiliations[] = [
//   { name: "Harvard University", city: "Cambridge, MA", country: "USA" },
// ];

// const prizes: readonly TPrize[] = [
//   {
//     year: "1972",
//     category: "economics",
//     share: "2",
//     motivation:
//       '"for their pioneering contributions to general economic equilibrium theory and welfare theory"',
//     affiliations,
//   },
// ];

// const laureate: TLaureate = {
//   id: "682",
//   firstname: "Kenneth J.",
//   surname: "Arrow",
//   born: "1921-08-23",
//   died: "2017-02-21",
//   bornCountry: "USA",
//   bornCountryCode: "US",
//   bornCity: "New York, NY",
//   diedCountry: "USA",
//   diedCountryCode: "US",
//   diedCity: "Palo Alto, CA",
//   gender: "male",
//   prizes,
// };

// console.dir({ country, laureate });

export enum SortingDirection {
  ASC = "asc",
  DESC = "desc",
  none = "",
}

type TCountry = {
  readonly name: string;
  readonly code: string;
};

type TCountryWithLaureatesCount = TCountry & {
  count: number;
};

const sortCb = (
  countrySorting: SortingDirection,
  personCountSorting: SortingDirection
) => {
  if (countrySorting) {
    if (countrySorting === SortingDirection.ASC) {
      return (
        a: { name: string; code: string; count: TCountryWithLaureatesCount },
        b: { name: string; code: string; count: TCountryWithLaureatesCount }
      ) => a.name.localeCompare(b.name);
    } else {
      return (
        a: { name: string; code: string; count: TCountryWithLaureatesCount },
        b: { name: string; code: string; count: TCountryWithLaureatesCount }
      ) => b.name.localeCompare(a.name);
    }
  }

  if (personCountSorting) {
    if (personCountSorting === SortingDirection.DESC) {
      return (
        a: { name: string; code: string; count: TCountryWithLaureatesCount },
        b: { name: string; code: string; count: TCountryWithLaureatesCount }
      ) => (a.count < b.count ? 1 : a.count > b.count ? -1 : 0);
    } else {
      return (
        a: { name: string; code: string; count: TCountryWithLaureatesCount },
        b: { name: string; code: string; count: TCountryWithLaureatesCount }
      ) => (b.count > a.count ? -1 : b.count < a.count ? 1 : 0);
    }
  }
};

console.log(sortCb(SortingDirection.ASC, SortingDirection.none));
