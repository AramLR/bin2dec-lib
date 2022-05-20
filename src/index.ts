/**
 * Converts a binary text to decimal<br>
 * 
 * ! Note that with big binaries may not work due to javascript bigint limit
 * 
 * @param {string} byte Binary to convert as string
 * @returns {string} The byte converted to decimal
 * @author aramlr
 */
function byte2Dec(byte:string):string{

  const regex = /(0|1)*/

  if(!regex.test(byte)) throw new Error('Invalid binary number.')

  let c = byte.length-1
  let res = BigInt(0)

  for (const bit of byte) {
    res += BigInt(bit) * BigInt(Math.pow(2, c))
    c--      
  }

  return res.toString()
}

export default byte2Dec