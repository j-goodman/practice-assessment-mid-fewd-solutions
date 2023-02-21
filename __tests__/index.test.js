const {
  getAllRecordTitles,
  checkIfAnyRecordHasGenre,
  findByTitle,
  getAllRecordsLongerThanNumberOfSeconds,
  checkMinYear,
  getArtistAndTitleObjects,
} = require("..");

const records = require("../records");
const alternative = require("./fixtures/alternative-records");

describe("getAllRecordTitles()", () => {
  test("should use the `.map()` method", () => {
    const text = getAllRecordTitles.toString();
    expect(text).toMatch(/\.map\(.*\)/s);
  });
  test("should throw an error if there are no records", () => {
    const actual = () => getAllRecordTitles([]);
    expect(actual).toThrow();
  });
  test("should return all of the record titles in an array", () => {
    const actual = getAllRecordTitles(records);
    const expected = ['Music From Big Pink', 'Axis: Bold as Love', 'Lemonade', 'Pet Sounds', 'Horses', 'The Low End Theory', 'The Velvet Underground and Nico', 'To Pimp a Butterfly', 'Supa Dupa Fly', 'Purple Rain', 'OK Computer', 'Blond', 'Darkness on the Edge of Town', 'The Dark Side of the Moon', 'The Rise and Fall of Ziggy Stardust and the Spiders From Mars', 'There’s a Riot Goin’ On', 'Enter the Wu-Tang (36 Chambers)', 'What’s Going On', 'Random Access Memories', 'Jagged Little Pill', 'Rubber Soul'];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the records inputted", () => {
    const actual = getAllRecordTitles(alternative);
    const expected = ["Remain in Light", "Songs in the Key of Life"];
    expect(actual).toEqual(expected);
  });
});

describe("checkIfAnyRecordHasGenre()", () => {
  test("should use the `.some()` method", () => {
    const text = checkIfAnyRecordHasGenre.toString();
    expect(text).toMatch(/\.some\(.*\)/s);
  });
  test("should throw an error if there are no records", () => {
    const actual = () => checkIfAnyRecordHasGenre([]);
    expect(actual).toThrow();
  });
  test("should return `true` if any record in the list has the given genre", () => {
    const genre = "east coast hip hop";
    const actual = checkIfAnyRecordHasGenre(records, genre);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("should return `false` if no record in the list has the given genre", () => {
    const genre = "klezmer";
    const actual = checkIfAnyRecordHasGenre(records, genre);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the records inputted", () => {
    const genre = "progressive soul";
    const actual = checkIfAnyRecordHasGenre(alternative, genre);
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

describe("findByTitle()", () => {
  test("should use the `.find()` method", () => {
    const text = findByTitle.toString();
    expect(text).toMatch(/\.find\(.*\)/s);
  });
  test("should throw an error if there are no records", () => {
    const actual = () => findByTitle([]);
    expect(actual).toThrow();
  });
  test("should return the entire record based on the title", () => {
    const title = "Horses";
    const actual = findByTitle(records, title);
    expect(actual.artist).toEqual("Patti Smith");
    expect(actual.year).toEqual(1975);
  });
  test("should dynamically change depending on the title inputted", () => {
    const title = "Lemonade";
    const actual = findByTitle(records, title);
    expect(actual.artist).toEqual("Beyoncé");
    expect(actual.year).toEqual(2016);
  });
  test("should return `null` if the record cannot be found", () => {
    const title = "The B-52's";
    const actual = findByTitle(records, title);
    const expected = null;
    expect(actual).toEqual(expected);
  });
  test("should be case-insensitive", () => {
    const title = "MUSIC FROM BIG PINK";
    const actual = findByTitle(records, title);
    const expected = records[0]; // Music From Big Pink;
    expect(actual).toEqual(expected);
  });
});

describe("getAllRecordsLongerThanNumberOfSeconds()", () => {
  test("should use the `.filter()` method", () => {
    const text = getAllRecordsLongerThanNumberOfSeconds.toString();
    expect(text).toMatch(/\.filter\(.*\)/s);
  });
  test("should throw an error if there are no records", () => {
    const actual = () => getAllRecordsLongerThanNumberOfSeconds([]);
    expect(actual).toThrow();
  });
  test("should return all records that are longer than the given number of seconds", () => {
    const lengthInSeconds = 4200;
    const actual = getAllRecordsLongerThanNumberOfSeconds(records, lengthInSeconds);
    const expected = ["To Pimp a Butterfly", "Random Access Memories"];
    expect(actual.length).toEqual(expected.length);
  });
  test("should dynamically change depending on the time inputted", () => {
    const lengthInSeconds = 3600;
    const actual = getAllRecordsLongerThanNumberOfSeconds(records, lengthInSeconds);
    const expected = ["To Pimp a Butterfly", "Supa Dupa Fly", "Blond", "Random Access Memories"];
    expect(actual.length).toEqual(expected.length);
  });
});

describe("checkMinYear()", () => {
  test("should use the `.every()` method", () => {
    const text = checkMinYear.toString();
    expect(text).toMatch(/\.every\(.*\)/s);
  });
  test("should throw an error if there are no records", () => {
    const actual = () => filterByGenre([]);
    expect(actual).toThrow();
  });
  test("should return true if all records have a year of at least the given year", () => {
    const minYear = 1901;
    const actual = checkMinYear(records, minYear);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("should return false if not all records have a year of at least the given year", () => {
    const minYear = 1989;
    const actual = checkMinYear(records, minYear);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  test("the year parameter should have a default value of 1900", () => {
    const actual = checkMinYear(records);
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

describe("getArtistAndTitleObjects()", () => {
  test("should use the `.map()` method", () => {
    const text = getArtistAndTitleObjects.toString();
    expect(text).toMatch(/\.map\(.*\)/s);
  });
  test("should throw an error if there are no records", () => {
    const actual = () => getArtistAndTitleObjects([]);
    expect(actual).toThrow();
  });
  test("should return an array of objects, where the key is the artist's name and the value is record's title", () => {
    const actual = getArtistAndTitleObjects(records);
    const expected = [{"The Band":"Music From Big Pink"},{"The Jimi Hendrix Experience":"Axis: Bold as Love"},{"Beyoncé":"Lemonade"},{"The Beach Boys":"Pet Sounds"},{"Patti Smith":"Horses"},{"A Tribe Called Quest":"The Low End Theory"},{"The Velvet Underground":"The Velvet Underground and Nico"},{"Kendrick Lamar":"To Pimp a Butterfly"},{"Missy Elliott":"Supa Dupa Fly"},{"Prince and the Revolution":"Purple Rain"},{"Radiohead":"OK Computer"},{"Frank Ocean":"Blond"},{"Bruce Springsteen":"Darkness on the Edge of Town"},{"Pink Floyd":"The Dark Side of the Moon"},{"David Bowie":"The Rise and Fall of Ziggy Stardust and the Spiders From Mars"},{"Sly and the Family Stone":"There’s a Riot Goin’ On"},{"Wu-Tang Clan":"Enter the Wu-Tang (36 Chambers)"},{"Marvin Gaye":"What’s Going On"},{"Daft Punk":"Random Access Memories"},{"Alanis Morissette":"Jagged Little Pill"},{"The Beatles":"Rubber Soul"}];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the records inputted", () => {
    const actual = getArtistAndTitleObjects(alternative);
    const expected = [{"Talking Heads": "Remain in Light"}, {"Stevie Wonder": "Songs in the Key of Life"}];
    expect(actual).toEqual(expected);
  });
});
