let data = [
  {
    "id": 1,
    "first_name": "Curry",
    "last_name": "Gloves",
    "email": "cgloves0@cpanel.net",
    "gender": "Male",
    "ip_address": "65.104.115.116"
  },
  {
    "id": 2,
    "first_name": "Ruben",
    "last_name": "Adamou",
    "email": "radamou1@google.fr",
    "gender": "Male",
    "ip_address": "161.146.241.65"
  },
  {
    "id": 3,
    "first_name": "Andros",
    "last_name": "Chell",
    "email": "achell2@merriam-webster.com",
    "gender": "Male",
    "ip_address": "15.67.35.74"
  },
  {
    "id": 4,
    "first_name": "Carey",
    "last_name": "Guiet",
    "email": "cguiet3@stumbleupon.com",
    "gender": "Genderfluid",
    "ip_address": "66.228.82.179"
  },
  {
    "id": 5,
    "first_name": "Dedra",
    "last_name": "Benza",
    "email": "dbenza4@phoca.cz",
    "gender": "Non-binary",
    "ip_address": "176.38.29.39"
  },
  {
    "id": 6,
    "first_name": "Hersh",
    "last_name": "Galpin",
    "email": "hgalpin5@cbsnews.com",
    "gender": "Male",
    "ip_address": "114.104.208.194"
  },
  {
    "id": 7,
    "first_name": "Letisha",
    "last_name": "Glashby",
    "email": "lglashby6@example.com",
    "gender": "Female",
    "ip_address": "19.127.220.234"
  },
  {
    "id": 8,
    "first_name": "Corilla",
    "last_name": "Gipson",
    "email": "cgipson7@cloudflare.com",
    "gender": "Female",
    "ip_address": "77.195.247.215"
  },
  {
    "id": 9,
    "first_name": "Caren",
    "last_name": "Abele",
    "email": "cabele8@constantcontact.com",
    "gender": "Female",
    "ip_address": "37.171.1.36"
  },
  {
    "id": 10,
    "first_name": "Bronnie",
    "last_name": "Murfin",
    "email": "bmurfin9@spotify.com",
    "gender": "Male",
    "ip_address": "94.4.59.86"
  },
  {
    "id": 11,
    "first_name": "Dori",
    "last_name": "Culmer",
    "email": "dculmera@xing.com",
    "gender": "Female",
    "ip_address": "81.195.150.140"
  },]
  let male = 0
  let female = 0
  data.forEach(element => {
    if(element.gender==='Male')  male++
    else female++
  });
  // console.log(`There are ${male} no of males are present`)
  // console.log(`There are ${female} no of females are present`)
  // console.log(data.length)

  // using for of loop
  
  let male_user = []
  let female_user = []

  for(user of data){
    if(user.gender === 'Male') male_user.push(user.first_name)
      else female_user.push(user.first_name)
  }
  console.log(male_user)
  console.log(female_user)
  console.log(data[2])


  //print only even number

  let number = [10, 431, 44, 45, 57, 17, 18]
  let i = 0
  while(i<number.length){
    // if(number[i] % 2 === 0) console.log(number[i] +  " is a even number")
    //   else console.log(number[i] +  " is a odd number")
    i++
  }


 