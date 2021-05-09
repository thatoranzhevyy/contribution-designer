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

console.log("draw graph for repository: " + repository)

if (!commits) {
  console.log("There should be exactly 7 lines of 52 characters each: 7 days in a week, 52 weeks in a year.")
  return;
}
// console.log('Карта коммитов ок:', commits);


// Count the days
const todayData = new Date();
const pastData = new Date(new Date().setFullYear(new Date().getFullYear() - 1));


// console.log(todayData)
console.log(pastData)
var lastSunday = new Date(pastData.setDate(pastData.getDate() - pastData.getDay()));
console.log(lastSunday)
