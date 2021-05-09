// Streak graph picture
const commits: string[] = [
  /* columns
'      10>|      20>|      30>|      40>|      50>|  '   < exactly 52 characters */
  '                                                    ',  // Sun
  '                                                    ',  // Mon
  '                                                    ',  // Tue
  '                                                    ',  // Wed
  '                                                    ',  // Thu
  '                                                    ',  // Fri
  '                                                    ',  // Sat
]
//  *  for 10 commits in that day
//  #  for 20 commits in that day

// Repository origin
const repository: string = 'https://github.com/thatoranzhevyy/contribution-designer.git';

console.log("Draw graph for repository: " + repository)

if (!commits) {
  console.log("There should be exactly 7 lines of 52 characters each: 7 days in a week, 52 weeks in a year.")
  process.exit(1)
}
console.log('Commit graph:', commits);


// Count the days
const todayData = new Date();
const pastData = new Date(new Date().setFullYear(new Date().getFullYear() - 1));


console.log("Current datetime: ", todayData)
console.log("Datetime a year ago: ", pastData)
var lastSunday = new Date(pastData.setDate(pastData.getDate() - pastData.getDay())).toDateString();
// var lastYearSunday = new Date(pastData.setDate(pastData.getDate() - pastData.getDay())).toDateString();
console.log("Sunday of that week was: ", lastSunday)

console.log("Counting commits..")

const commitsRes = [];
const count = 7 * 52;


for (let day = 0, weekDay = 0; day < count; day++) {
  let week = day / 7;
}
//https://github.com/sijeko/gerda
