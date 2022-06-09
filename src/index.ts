/**
 * Converts a byte to decimal number
 * 
 * @param byte byte to convert
 * @returns the byte converted to decimal
 * @throws Error if the byte parameter does not match with /^(0|1)$/
 */
function byte2Dec(byte:string):bigint{

  const match = /^(0|1)*$/

  if(!match.test(byte)) throw new Error("Invalid byte")

  let length = byte.length - 1
  let res = BigInt(0)

  for (const bit of byte) {
    res += BigInt(bit) * BigInt(Math.pow(2, length))

    length--
  }

  return res
}

export default byte2Dec