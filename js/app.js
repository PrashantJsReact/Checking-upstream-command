let data = [
  {
    name: 'Bill',
    job: 'CEO',
    city: 'Seattle',
    state: 'Washington',
  },
  {
    name: 'Pintu',
    job: 'Html developer',
    city: 'Chandra Layout',
    state: 'Bangalore',
  },
  {
    name: 'Nazmuss',
    job: 'Software Engineer',
    location: {
      city: 'Boston',
      state: 'Massachusetts',
    },
  },
  {
    name: 'Bobbbbb',
    job: 'Engineer',
    location: {
      addres: {
        state: 'New York',
        city: 'New York City',
        zip: '11323',
      },
    },
  },
  {
    name: 'Chris',
    job: 'Project Manager',
    address: {
      location: {
        quadrant: {
          block: 4,
          state: 'Texas',
          city: 'Australia',
        },
      },
    },
  },
];

const filterList = [
  {
    tittle: 'Name',
    subItems: [],
  },
  {
    tittle: 'City',
    subItems: [],
  },
  {
    tittle: 'State',
    subItems: [],
  },
  {
    tittle: 'Job',
    subItems: [],
  },
];

data.filter((item) => {
  iterateObject(item);
});

function iterateObject(obj) {
  for (prop in obj) {
    if (typeof obj[prop] == 'object') {
      iterateObject(obj[prop]);
      //   console.log('--------------------------------------');
    } else {
      if (
        prop === 'name' ||
        prop === 'city' ||
        prop === 'state' ||
        prop === 'job'
      ) {
        // console.log(prop.toUpperCase() + ': ', obj[prop]);
        filterList.forEach((list) => {
          if (list['tittle'].toLowerCase() === prop) {
            list.subItems.push(obj[prop]);
          }
        });
      }
    }
  }
}

console.log(filterList);
