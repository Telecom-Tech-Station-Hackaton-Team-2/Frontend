DB_MONGO = "mongodb+srv://Fede:Uyj3l0To5lyUczFi@cluster0.zyvdl.mongodb.net/Onboarding_Backend"

const db = fetch ("http://localhost:3000/api/users")
.then (res => res.json())
.then ((result) => { this.setState (
  {
    meta: result.meta,
    users: result.users
  }
  )})
.catch ( error => console.log (error))

export default db;