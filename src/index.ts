/**
 * Converts a byte to decimal number
 * 
 * @param byte byte to convert
 * @returns the byte converted to decimal
 */
function byte2Dec(byte:string):bigint{
  let length = byte.length - 1
  let res = BigInt(0) 

  for (const bit of byte) {
    res += BigInt(bit) * BigInt(Math.pow(2, length))

    length--
  }

  return res
}

export default byte2Dec