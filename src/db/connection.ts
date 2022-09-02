import mongoose from 'mongoose'

const connectMongoose = async () => {
  try {
    const mangooseConnect = await mongoose.connect(process.env.MANGO_URL!, {
      dbName: 'db-debts'
    })
    console.log('Database connection successful')
    return mangooseConnect
  } catch (err) {
    if (err instanceof TypeError) {
      console.error(err.message)
    }
    // Exit process with failure
    process.exit(1)
  }
}

export default connectMongoose
