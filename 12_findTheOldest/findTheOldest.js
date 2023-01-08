const findTheOldest = function (people) {
   let oldest_age = 0
   let oldest_name = []
   for (let i = 0; i < people.length; i++) {
      if (!people[i].yearOfDeath) {
         people[i].yearOfDeath = (new Date()).getFullYear();
      }
      if (people[i].yearOfDeath - people[i].yearOfBirth > oldest_age) {
         oldest_age = people[i].yearOfDeath - people[i].yearOfBirth
         oldest_name = people[i]
      }
   }
   console.log(oldest_name, oldest_age)
   return oldest_name
};

// Do not edit below this line
module.exports = findTheOldest;
