interface User {
  email:string;
  password: string;
  name?: string;
}

const users = [
    {
        email: 'ailton@example.com',
        password: '123',
        name: 'Ailton Sena'
    }
]

export async function signIn(user: User): Promise<any> {

    const userObj = users.find(u=>u.email === user.email)
    if(!userObj){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          console.log('erro');
          
          reject('User not exist')
        }, 2000);
      })
    }

    const response = userObj.password === user.password;
    if(!response){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          reject('Password Incorrect')
        }, 2000);
      })
    }
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve({
          token: '1234n324on345n3213rb1bfouqo34322oub3',
          user: {
            email: userObj.email,
            name: userObj.name
          }
        })
      }, 2000);
    })
 
  }