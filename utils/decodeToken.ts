import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  id?: string
  su: string
  [key: string]: any
}

/**
 * Decodes a JWT token to extract the payload.
 * @param token - The JWT token to decode.
 * @returns The decoded payload, or null if decoding fails.
 */
export function decodeToken(token: string | null): DecodedToken | null {
  if (!token) {
    return null
  }

  try {
    const decoded: DecodedToken = jwtDecode(token)
    return decoded
  } catch (error) {
    console.error('Failed to decode token:', error)
    return null
  }
}
