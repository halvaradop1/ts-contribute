import { merge } from "@halvaradop/tailwindcss-merge"
import { isArray } from "@halvaradop/ts-utility-types/validate"

const mergeClasses = await merge("text-center text-2xl text-3xl")
console.log(mergeClasses, isArray(mergeClasses))
