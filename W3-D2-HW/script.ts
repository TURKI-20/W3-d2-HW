interface User {
    [key: string]: any;
    age: number,
    user: string,
    occupation: string,
  }
  
  type userOrAdmin = User | Admin;
  
  let TypeOf: userOrAdmin[] = [
    {
      age: 27,
      user: "Turki",
      occupation: "Student",
    },
    {
        age: 36,
        name: "Haitham",
        specialty: "Admin",
      },

    {
        age: 30,
        name: "Lamia",
        specialty: "Admin",
      },
    {
      age: 31,
      user: "Ali",
      occupation: "Teacher",
    },
    {
      age: 18,
      user: "Nasser",
      occupation: "Student",
    },
    
    {
      age: 38,
      name: "Masha",
      specialty: "Admin",
    },
    
  ];
  
  function print() {
    for (let i = 0; i < TypeOf.length; i++) {
      if (TypeOf[i]["occupation"]) {
        console.log(
          `name is: ${TypeOf[i].user},occupation is ${TypeOf[i].occupation}`
        );
      } else if (TypeOf[i]["specialty"]) {
        console.log(
          `name is: ${TypeOf[i].name},occupation is ${TypeOf[i].specialty}`
        );
      }
    }
  }
  print();
  
  interface Admin {
    [key: string]: any;
    age: number,
    name: string,
    specialty: string,
  }
  
  function changeAge(name: string, age: number) {
    for (let i of TypeOf) {
      if(i.name === name)  i.age = age 
    }
    console.log(TypeOf);
    
  }
  (changeAge("Rashed", 26));
  
  export {};