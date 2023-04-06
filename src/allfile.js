export const mydata = [
    {
      id:1,
      title: "Motivational Qoute",
      content:"life is about making an impact not making income",
      name: "~Daniel"
    },
    {
      id:2,
      title: "motivate",
      content:"this is my world, and you all mdf lives in it",
      name: "~Grace"
    },
    {
      id:3,
      title: "inspirational",
      content:"what goes around comes around",
      name: "~Tina"
    },
    {
      id:4,
      title: "inspirational",
      content:"in our breakdown God makes a breakthrough",
      name: "~Kcee"
    },
    {
      id:5,
      title: "bible",
      content:"the kind cane wey kill abel no be koboko",
      name: "~Dammy"
    },
    {
      id:6,
      title: "bible",
      content:"the lord is good and his mercies endurest forever",
      name: "~Mr Edwin"
    }
  ]

 export const checkData = (arr)=>{
    if(arr !== null && arr !== undefined && arr.length > 0){
        return false
    }
    return true
  }

  let userput = null

  checkData(userput)