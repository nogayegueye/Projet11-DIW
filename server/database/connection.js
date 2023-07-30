const mongoose = require('mongoose')
const databaseUrl =
"mongodb+srv://nogaye:yj7O8M0VwbXtgc93@cluster0.llhs6wr.mongodb.net/?retryWrites=true&w=majority"

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
