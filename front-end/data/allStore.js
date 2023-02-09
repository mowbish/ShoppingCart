import { configureStore } from "@reduxjs/toolkit"
import user from "./user"

const allStore = configureStore({
	reducer: { user },
	devTools: process.env.NODE_ENV !== "production",
})

export default allStore
