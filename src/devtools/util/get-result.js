function handleError (error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`)
  } else {
    console.log(`JavaScript error: ${error.value}`)
  }
}

export function getResult (result) {
  if (Array.isArray(result)) {
    if (result[0] !== undefined) {
      return result[0]
    } else if (result[1]) {
      handleError(result[1])
    }
  } else {
    return result
  }
}
